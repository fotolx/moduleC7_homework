import { revertString } from "../index.js";

describe("test reverse of string", () => {
  it("string with numbers", () => {
    const result = revertString('123');
    expect(result).toBe('321');
  }),
  it("string with latin characters", () => {
    const result = revertString('abc');
    expect(result).toBe('cba');
  }),
  it("string with non-latin characters", () => {
    const result = revertString('упер дед репу');
    expect(result).toBe('упер дед репу');
  })
    ;
});
