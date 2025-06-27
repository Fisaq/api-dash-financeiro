export default class Goal {
    public readonly id: string;
    public userId: string;
    public name: string;
    public targetAmount: number;
    public currentAmount: number;
    public deadline: Date;

    constructor(id: string, userId: string, name: string, targetAmount: number, currentAmount: number, deadline: Date) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.targetAmount = targetAmount;
        this.currentAmount = currentAmount;
        this.deadline = deadline;
    }
}