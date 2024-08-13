class MyClass {
  private name: string
  private age: number

  public static test1: string = "test1"
  protected test2: string = "test2"
  private pp = "private property"

  get pp2() {
    return this.pp
  }

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public static myLength: string = "length"

  sayPP() {
    console.log(this.pp)
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }

  sayGoodbye() {
    console.log(`Goodbye, ${this.name}.`)
  }
}

class MySubClass extends MyClass {
  constructor(name: string, age: number) {
    super(name, age)
  }

  sayMyName() {
    console.log(`My name ${this.test2}`)
  }

  saySubPP() {
    // console.log(this.pp)
    console.log(MySubClass.myLength)
  }
}

interface MyInterface {
  name: string
  age: number

  sayHello(str: string, num: number): boolean
}

class MySubSubClass implements MyInterface {
  public name: string
  public age: number
  sayHello(str: string, num: number): boolean {
    console.log(`Hello, ${str} and ${num}`)
    return true
  }
}

// const myObj = new MyClass("John", 30)
const mySubObj = new MySubClass("Jane", 25)
// myObj.sayHello()
// myObj.sayGoodbye()
// myObj.sayPP()
// console.log(MyClass.test1) // "test1"
// MyClass.test1 = "test11xxx"
// console.log(MyClass.test1) // "test11xxx"
// console.log(myObj["pp"]) // "pp"
mySubObj.sayMyName()
// mySubObj.sayHello()
// mySubObj.sayGoodbye()
// mySubObj.saySubPP()
// console.log(MyClass.myLength) // "bind"
