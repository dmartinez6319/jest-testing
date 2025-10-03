import { capitalize } from "../src/capitalize.js";

test("dog becomes Dog",() => {
    expect(capitalize("dog")).toBe("Dog")
})