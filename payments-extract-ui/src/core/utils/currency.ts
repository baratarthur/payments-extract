
const DECIMAL_HOUSES = 2;
const groupsOfThreeRegex = /.{1,3}/g;

export class Currency {
    constructor(private value: number | undefined) {}

    private getDoted(value: string | undefined): string {
        if(!value) return '';

        const [integerPart, dottedPart] = this.getIntegerAndBrokePart(value);

        // because we read from left to right and the regex must be applyed from right to left
        const invertedIntegerPart = this.reverseString(integerPart);
        const numberGroups = invertedIntegerPart.match(groupsOfThreeRegex) ?? [];
        const reversedBackNumbers = numberGroups.map(this.reverseString).reverse();
        const transformedString = reversedBackNumbers.join('.');

        if(!transformedString) return '';
        return `${transformedString},${dottedPart}`;
    }

    private getIntegerAndBrokePart(value: string): [string, string] {
        return [value.split('.')[0], value.split('.')[1]];
    }

    private reverseString(value: string): string {
        return value.split('').reverse().join('');
    }

    getBRL(): string {
        return `R$ ${this.getDoted(this.value?.toFixed(DECIMAL_HOUSES).toString())}`
    }

    getBRLWithoutSymbol(): string {
        if(this.value === undefined) return '';
        const module = this.value >= 0 ? this.value :  -1 * this.value;
        const displayValue = this.getDoted(module.toFixed(DECIMAL_HOUSES).toString());
        
        return this.value >= 0 ? displayValue : `-${displayValue}`;
    }
}
