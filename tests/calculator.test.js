import { calculator } from "../src/calculator.js";

test("adds 1 + 2 = 3", ()=> {
    expect(calculator.add(1,2)).toBe(3)
})

test("subtract 1 - 2 = -1", ()=> {
    expect(calculator.subtract(1,2)).toBe(-1)
})

test("multiply 1 *2 = 2", ()=> {
    expect(calculator.multiply(1,2)).toBe(2)
})

test("divide 1 / 2 = 0.5", ()=> {
    expect(calculator.divide(1,2)).toBe(0.5)
})