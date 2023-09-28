export class PureDate {
    constructor(private date: string | undefined) {}

    toDateString(): string {
        if(!this.date) return '';
        
        return `${this.date.slice(8)}/${this.date.slice(5, 7)}/${this.date.slice(0, 4)}`;
    }
}