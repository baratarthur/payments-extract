export class Summary {
    constructor(
        public totalQuantity: number,
        public totalAmount: number,
        public totalNetAmount: number,
        public totalAverageAmount: number,
        public initialDate: string,
        public finalDate: string
    ) {}
}