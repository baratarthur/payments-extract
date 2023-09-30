import { describe, expect, it } from "vitest";
import { ISODate, PureDate } from "./date";

describe("Date util", () => {
    it("should init", () => {
        const date = '2023-09-27';
        const pureDate = new PureDate(date);
        const isoDate = new ISODate(date);

        expect(pureDate).toBeDefined();
        expect(isoDate).toBeDefined();
    })

    it("should format date", () => {
        const date = '2023-09-27';
        const pureDate = new PureDate(date);

        expect(pureDate.toDateString()).toBe('27/09/2023');
    })

    it("should format iso date", () => {
        const date = '2023-09-27T00:17:40.431Z';
        const isoDate = new ISODate(date);

        expect(isoDate.toDateString()).toBe('27/09/2023');
    })
})
