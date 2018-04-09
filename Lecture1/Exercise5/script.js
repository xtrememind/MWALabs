function Person(name) {
    this.name = name;
}

let TeacherA = new Person("Mohamed");
let TeacherB = new Person("Ahmed");
Person.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}
TeacherA.teach("MWA");
TeacherB.teach("WAA");