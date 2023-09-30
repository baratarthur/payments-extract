import { describe, expect, it } from "vitest";
import { Currency } from "./currency";

describe("Currency util", () => {
    it("should init", () => {
        const money = 20;
        const currency = new Currency(money);

        expect(currency).toBeDefined();
    })

    it("should format currency in BRL", () => {
        const money = 20;
        const currency = new Currency(money);

        expect(currency.getBRL()).toBe('R$ 20,00');
    })

    it("should format big numbers in BRL", () => {
        const money = 2000;
        const currency = new Currency(money);

        expect(currency.getBRL()).toBe('R$ 2.000,00');
    })

    it("should format cents in BRL", () => {
        const money = 0.12;
        const currency = new Currency(money);

        expect(currency.getBRL()).toBe('R$ 0,12');
    })

    it("should format currency without currency token", () => {
        const money = 20;
        const currency = new Currency(money);

        expect(currency.getBRLWithoutSymbol()).toBe('20,00');
    })
})
