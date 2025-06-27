import { EIncomeType } from "../shared/enums/EIncomeType";

export default class Income {
    public id: string;
    public userId: string;
    public amount: number;
    public date: Date;
    public type: EIncomeType;

    constructor(id: string, userId: string, amount: number, date: Date, type: EIncomeType) {
        this.id = id;
        this.userId = userId;
        this.amount = amount;
        this.date = date;
        this.type = type;
    }
}