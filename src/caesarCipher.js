// const lowercaseMap = {}
// for (let i = 0; i < 26; i++) {
//   lowercaseMap[String.fromCharCode(97 + i)] = i + 1
// }

// const uppercaseMap = {}
// for (let i = 0; i < 26; i++){
//     uppercaseMap[String.fromCharCode(65 + i)] = i + 1
// }
// console.log(lowercaseMap);

const isAlphabetical = (char) => {
    const code = char.charCodeAt(0)
    return ( (code >= 65 && code <= 90) || (code >= 97 && code <= 122) )
}

export const caesarCipher = (x,step) => {

    let cipher = ""
    
    for (let i = 0; i < x.length; i++){
        let char = x[i]
        if (!isAlphabetical(char)){
            cipher += char
            continue
        }
        if (char >= "a" && "z" >= char){
            let shiftedCode = ((char.charCodeAt(0) - 97 + step) % 26 ) + 97
            cipher += String.fromCharCode(shiftedCode)
        }

        if (char >= "A" && "Z" >= char){
            let shiftedCode = ((char.charCodeAt(0) - 65 + step) % 26 ) + 65
            cipher += String.fromCharCode(shiftedCode)
        }
    }

    return cipher
}

