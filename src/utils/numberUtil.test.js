import { currencyFormat } from "./numberUtil";

describe("when currencyFormat is called", () => {
  test("should format number in default currency format (USD)", () => {
    const number = 10;
    const value = currencyFormat(number);
    expect(value).toEqual(`$${number}.00`);
  });

  test("should format number in EUR format when EUR is used", () => {
    const number = 10;
    const value = currencyFormat(number, "en-GB", "EUR");
    expect(value).toEqual(`€${number}.00`);
  });
});
