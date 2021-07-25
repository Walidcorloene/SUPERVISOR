const Storage = require("./Storage");

class IngenieurStorage extends Storage {
    constructor() {
        super();
    }

    create(name: string, surname: string, email: string, login: string, password: string) {
        return this.query(
            `INSERT
                INTO ingenieur (name, surname, email, login, password)
                SELECT $1, $2, $3, $4
                WHERE NOT EXISTS(
                    SELECT *
                        FROM users
                        WHERE login = $5 OR email = $6
                    )
                RETURNING id;`,
            name,
            surname,
            email,
            login,
            password,
            email
        ).then(result => result.rowCount ? result.rows[0].id : null);
    }

    getById(id) {
        return this.query(
            `SELECT *
                FROM users
                WHERE id = $1;`,
            id
        ).then(result => result.rows[0] || null);
    }

    getByUsername(username) {
        return this.query(
            `SELECT *
                FROM users
                WHERE username = $1
                LIMIT 1;`,
            username
        ).then(result => result.rows[0] || null);
    }

    getByEmail(email) {
        return this.query(
            `SELECT *
                FROM users
                WHERE email = $1
                LIMIT 1;`,
            email
        ).then(result => result.rows[0] || null);
    }

    confirmEmail(id) {
        return this.query(
            `UPDATE users
                SET is_email_confirmed = true
                WHERE (id = $1);`,
            id
        ).then(result => !!result.rowCount);
    }

    updatePassword(id, new_password) {
        return this.query(
            `UPDATE users
                SET password = $2
                WHERE (id = $1);`,
            id,
            new_password
        ).then(result => !!result.rowCount);
    }

    delete(id) {
        return this.query(
            `DELETE
                FROM users
                WHERE (id = $1);`,
            id
        ).then(result => !!result.rowCount);
    }
}

module.exports = new UserStorage();
