// Type Data Enum
enum Gender {Male, Female, Unkown}
let jenisKelamin: Gender = Gender.Male

console.log(jenisKelamin)

// Change Data Enum
enum changeGender {Male = 1, Female = 2, Unkown = -1}
let changeJenisKelamin: changeGender = changeGender.Male

console.log(changeJenisKelamin)

// Type Data String
enum stringGender {Male = 'Male', Female = 'Female', Unkown = 'Unkown'}
let stringJenisKelamin: stringGender = stringGender.Male

console.log(stringJenisKelamin)