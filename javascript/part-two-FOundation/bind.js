// With the bind() method, an object can borrow a method from another object.
const person = {
    fullName: function () {
        return this.name + " " + this.lastName
    }
}

const memeber = {
    name:"afshin",
    lastName: "rahmati"
}

const fullName = person.fullName.bind(memeber);

console.log(fullName())