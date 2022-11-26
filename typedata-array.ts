// Array String
let names: string[] = ['Dani', 'April', 'Yanto']

console.log(names)

// Array Number
let numbers: Array<number> = [1, 2, 3, 4, 5]

console.log(numbers)

// Data Tuple
let student: [string, string, number] = ['Sanya', 'Nana', 100]

console.log(student)

// Access Array & Tuple
console.log(student[0])
console.log(student[2])

// Change Data Array
student[1] = 'Nanda'
console.log(student[1])

student[2] = 5000
console.log(student[2])

// Add Data Array
let namesArray: Array<String> = ['Nano']
namesArray.push('Dani')
namesArray.push('April')

console.log(namesArray)

// Delete Data Array
delete namesArray[1]
console.log(namesArray)