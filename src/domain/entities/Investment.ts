export default class Investiment{
    public id: string;
    public userId: string;
    public name: string;
    public initialAmount: number;
    public monthlyAmount: number;
    public monthsInvesting: number;
    public startDate: Date;

    constructor(id: string, userId: string, name: string, initialAmount: number, monthlyAmount: number, monthsInvesting: number, startDate: Date){
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.initialAmount = initialAmount;
        this.monthlyAmount = monthlyAmount;
        this.monthsInvesting = monthsInvesting;
        this.startDate = startDate;
    }
}