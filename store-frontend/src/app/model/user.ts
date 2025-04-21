import { first } from "rxjs";

export class User {
    id: number = 0;
    userName: string = '';
    email: string = '';
    password: string = '';
   role: string = '';
    
    constructor(
        userId: number,
        userName: string,
        userEmail: string,
        userPassword: string,
        userRole: string,
       
        ) {
        this.id = userId;
        this.userName = userName;
        this.email = userEmail;
        this.password = userPassword;
        this.role = userRole;
       
    }

}