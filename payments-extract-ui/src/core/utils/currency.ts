
const DECIMAL_HOUSES = 2;
const groupsOfThreeRegex = /.{1,3}/g;

export class Currency {
    constructor(private value: number | undefined) {}

    private getDoted(value: string | undefined): string {
        if(!value) return '';

        const numberGroups = value.match(groupsOfThreeRegex) ?? [];
        const transformedString = numberGroups.slice(0, -1).join('.');

        if(!transformedString) return '';
        return transformedString + numberGroups.splice(-1).toString().replace('.', ',');
    }

    getBRL(): string {
        return `R$ ${this.getDoted(this.value?.toFixed(DECIMAL_HOUSES).toString())}`
    }
}
