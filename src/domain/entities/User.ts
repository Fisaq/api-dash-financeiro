import Email from '../shared/types/Email';
import Password from '../shared/types/Password';

export default class User{
    public readonly userId: string;
    public name: string;
    public email: Email;
    public paswordHashed: Password;

    constructor(userId: string, name: string, email: Email, passwordHashed: Password){
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.paswordHashed = passwordHashed;
    }
}