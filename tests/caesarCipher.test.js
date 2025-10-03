import { caesarCipher } from "../src/caesarCipher.js";

test("Shifts HeLLo 3 times to KhOOr", () => {
    expect(caesarCipher("HeLLo",3)).toBe("KhOOr")
})

test("Shifts 3HeLLo! 3 times to 3KhOOr!", () => {
    expect(caesarCipher("3HeLLo!",3)).toBe("3KhOOr!")
})
