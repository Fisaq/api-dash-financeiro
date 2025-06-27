import Email from '../shared/types/Email';

export default class User{
    public readonly userId: string;
    public name: string;
    public email: Email;
    public paswordHashed: string;

    constructor(userId: string, name: string, email: Email, passwordHashed: string){
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.paswordHashed = passwordHashed;
    }
}