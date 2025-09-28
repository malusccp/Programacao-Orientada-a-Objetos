"use strict";
// 10. Crie a classe uma classe chamada Autenticacao com:
// a. Atributos usuario e senha;
// b. Um método validar(): string que retorna verdadeiro se o usuario for "admin"
// senha for "1234".
Object.defineProperty(exports, "__esModule", { value: true });
class Authentication {
    user;
    password;
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
    validation() {
        if (this.user == "admin" && this.password == "1234")
            return "Verdadeiro";
        else
            return "Falso";
    }
}
let account1 = new Authentication("admin", "1234");
console.log(account1.validation());
let account2 = new Authentication("admin", "12347");
console.log(account2.validation());
