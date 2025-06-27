export default class Expense {
    public readonly id: string;
    public userId: string;
    public amount: number;
    public description: string;
    public date: Date;
    public category: string;
    public fixed: boolean;

    constructor(id: string, userId: string, amount: number, description: string, date: Date, category: string, fixed: boolean) {
        this.id = id;
        this.userId = userId;
        this.amount = amount;
        this.description = description;
        this.date = date;
        this.category = category;
        this.fixed = fixed
    }
}