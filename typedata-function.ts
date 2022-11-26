// Type Data Function
type Sum = (val1: number, val2: number) => number

const Add: Sum = (val1: number, val2: number): number => {
    return val1 + val2
}

console.log(Add(10, 2))

// Function Parameter
const fullName = (first: string, last: string = 'Dani') => {
    return `${first} ${last}`
}

console.log(fullName('Dani'))

// Optional Parameter
const getAge = (val1: string, val2?: string): string => {
    return `${val1} ${val2}`
}

console.log(getAge('Dani', 'Nugraha'))