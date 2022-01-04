function Person(name,age, dob, grade, bio){
    this.name = name;
    this.age = age;
    this.dob = dob;
    this.grade = grade;
    this.bio = bio;
}

let john = new Person("John", 25, "25 december 1990", 10, "Computer Programmer")
console.log(john)

