export class calculator {

    static add(n,m){
        return n + m
    }

    static subtract(n,m){
        return n - m
    }

    static multiply(n,m){
        return n * m
    }

    static divide(n,m){
        if (m === 0) return NaN
        return n / m
    }
}