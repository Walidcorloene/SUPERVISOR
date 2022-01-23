import { Request, Response } from "express";
//import { Responsable, ResponsableInterface } from "../models/responsable.model";
import { User, UserInterface } from "../models/user.model";
import bcrypt from "bcrypt"
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
const process = require('process');
dotenv.config();

export default class Signin {


    static checkPassword(password: string, originalPass: string) {

        const matched = bcrypt.compareSync(password, originalPass);

        return matched;
    }

    static checkFields(email: any, password: any) {
        if (!(email) || !(password)) // si l'utilisateur n'a pas entré d'email et password > erre
            return false;

        return true;
    }

    static async checkUser(email: any, User: any) {
        const _param = {
            where: {
                email: email,
            },
            limit: 1,
        };

        let _user = await User.findOne(_param);

        return _user;
    }

    public async signinUser(req: Request, res: Response) {
        let _body: UserInterface = req.body;
        console.log(_body)
        if (!(Signin.checkFields(_body.email, _body.password)))
            return res.status(404).json("Sign in Error: Missing Data")

        const _user = await Signin.checkUser(_body.email, User);
        if (!_user)
            return res.status(500).json("Error User: No _user found");

        if (!(Signin.checkPassword(_body.password, _user.password)))
            return res.status(500).json("Error User: Wrong password");
        const accessToken = jwt.sign(
            {
                id_user: _user.id_user
            }
            , process.env.TOKEN_SECRET,
            {
                algorithm: "HS256",
                expiresIn: "1h"
            });


        return res.status(200).json({ id_user: _user.id_user, message: 'loggedIn', accessToken })
    }

    public async resetPasswordTokenUser(req: Request, res: Response) {
        let _body: UserInterface = req.body;

        const _user = await Signin.checkUser(_body.email, User)

        if (!_user)//si le _user n'existe pas dans la bd
            res.status(500).json("Reset Password user error: the _user doesn't exist")

        const _payload = {
            id: _user.id_user,
            email: _user.email,
            role: _user.role
        };

        const token = jwt.sign(
            _payload,
            process.env.TOKEN_PASS_MAIL,
            { expiresIn: "1h" }
        );

        if (!Signin.createPasswordToken(_user.id_user, token, User))

            return res.status(500).json("Reset Password user error: failed to update database");

        if (!Signin.sendermail(_body, token))

            return res.status(500).json("Reset Password user error: error when sending an email")

        return res.status(200).json("User Token set and email sent")
    }

    private static async sendermail(user: any, token: any) {
        var smtpTransport = nodemailer.createTransport({
            service: 'Hotmail',
            auth: {
                user: 'responsableenna@hotmail.com',
                pass: 'enna123456@'
            }
        });

        if (!smtpTransport)
            return false;

        var mailoption = {
            to: user.email,
            from: 'responsableenna@hotmail.com',
            subject: "Password reset",
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://192.168.104.111:3000/user-changePassword/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        };

        if (!smtpTransport.sendMail(mailoption))
            return false;

        return true;


    }

    private static async createPasswordToken(id_user: any, token: any, User: any) {

        const updated = await User.update(
            {
                resetPasswordToken: token
            },
            { where: { id_user: id_user } }
        );
        if (!updated)
            return false;
        return true;
    }

    public async getPasswordToken(req: Request, res: Response) {
        const params = req.params
        const param = {
            where: {
                resetPasswordToken: params.token
            }
        }
        const _user = await User.findOne(param)

        if (!_user) {
            return res.status(500).json("link expired or wrong token")
        }

        console.log(_user)
        return res.render('checkPassword', { _user: req.body })
    }

    public async updateUserPassword(req: Request, resp: Response) {
        const param = req.params;
        const _body = req.body;
        console.log(_body)
        const updated = await User.update(
            {
                password: await bcrypt.hash(_body.password, 10),
                resetPasswordToken: null
            },
            { where: { resetPasswordToken: param.token } }
        );

        if (!updated)
            return resp.status(500).json("something went wrong when updating")
        return resp.redirect('/success')
    }
}