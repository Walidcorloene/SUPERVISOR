export default class Ingenieur {

    id_ingenieur: any;
    email: any;
    name: any;
    surname: any;
    login: any;
    password: any;


    constructor(data: { id_ingenieur: any; email: any; name: any; surname: any; login: any; password: any; }) {
        this.id_ingenieur = data.id_ingenieur;
        this.email = data.email;
        this.name = data.name;
        this.surname = data.surname;
        this.login = data.login;
        this.password = data.password;
    }
    serialize() {
        return {
        id_ingenieur: this.id_ingenieur,
        email: this.email,
        name: this.name,
        surname: this.surname,
        login: this.login,
        password: this.password
        }
    }

    static async create(name, surname, email, password) {

        if (!id)
            
        return new User({
            id,
            username,
            email,
            password: hash,
            otp_key: null,
            is_email_confirmed,
            date_created: Date.now()
        });
    }
}