export const reverseString = (x) => {
    let reverse = ""
    for (let i = x.length-1;i >= 0;i--){
        reverse += x[i]
    }
    return reverse
}