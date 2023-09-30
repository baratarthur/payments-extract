export class PureDate {
    constructor(private date: string | undefined) {}

    toDateString(): string {
        if(!this.date) return '';
        
        return `${this.date.slice(8)}/${this.date.slice(5, 7)}/${this.date.slice(0, 4)}`;
    }
}

export class ISODate {
    constructor(private date: string | undefined) {}

    toDateString(): string {
        const dateObj = this.date ? new Date(this.date) : new Date();

        return `${
            dateObj.getDate()+1
        }/${
            dateObj.getMonth() + 1 > 9 ?
                dateObj.getMonth()+1 :
                `0${dateObj.getMonth()+1}`
        }/${
            dateObj.getFullYear()
        }`;
    }
}
