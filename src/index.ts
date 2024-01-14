let x: number = 10
x = 16;
console.log(x)

//inferência x annotation

let y = 12
let z: number = 12

//tipos básicos

let fistName : string = "matheus"
let age : Number = 30
const isAdmin: boolean = true

// String != string

console.log(typeof fistName)

//object

const myNumbers: number[] = [1,2,3]

console.log(myNumbers)
console.log(myNumbers.length)
console.log(myNumbers.toUpperCase())
myNumbers.push(5)
console.log(myNumbers)

//tuplas

let myTuple: [number, string, string[]]

myTuple = [5, "teste", ["a", "b"]]
//myTuple = [true, false, true]



//object literals -> {prop: value}


const user: {name: string, age: number} = {
  name: 'Pionne',
  age: 19
}
console.log(user)
//user.job = "programador"




//any


let a:any = 0

a = "teste"
a = true
a = []


// union type
let id: string | number = "10"
id = 200
id = true
id = []



//type alias

type myIdType = number | string
const userId : myIdType = 10
const productId :myIdType ="00001"
const shirId: myIdType = 123



// enum

enum Size{
  P = 'pequeno',
  M = "médio",
  G = "grande"
}

const camisa ={
  name : "camisa gola v",
  size :Size.G,
}

console.log(camisa)



//literals types 
let teste: "algum" | null
//teste = "outro"



//funções

function soma(a:number,b:number){
  return a + b
}

console.log(sum(12,12))

function sayhelloto(name: string): string {
  return `hello ${name}`
}

console.log(sayhelloto('matheus'))

function loger(msg: string): void {
  console.log(msg)
}
logger("tester")

function greeting(name: string,greet?: string): void {
  if (greet) {
    console.log(`ola ${greet} ${name}`)
  }else{
    console.log(`ola ${name}`)
  }
}
greeting('jose')




//interfaces

interface MathFunctionParams {
  n1: number,
  n2: number
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2
}

sumNumbers(sumNumbers({n1: 1, n2: 2}))

function multPlyNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2
}

const someNumbers:MathFunctionParams = {
  n1: 5,
  n2: 10
}
console.log(multPlyNumbers(someNumbers))





//narrowing
//checagem tipos



function doSomething(info: number | boolean) {
  if(typeof info === "Number"){
    console.log(`O número é ${info}`)
    return
  }
  console.log("n foi um número")
}

doSomething(5)
doSomething(true)




//generics

function showArraysitens<T>(arr: t[]) {
  arr.forEach((item) =>{
    console.log(`item: ${item}`)
  })
}

const a1 = [1,2,3]
const a2 = ["a", "b", "c"]

showArraysitens(a1)
showArraysitens(a2)



//classes

class User{
  name
  role
  isApproved
  constructor( name: string, role: string , isApproved: boolean){
    this.name = name
    this.role = role
    this.isApproved = isApproved
  }
  
  showUserName(){
    console.log(`O nome do usuário é ${this.name}`)
  }
  
  showUserRole(canShow: boolean): void{
    if (canShow) {
      console.log(`O nome do usuário é ${this.role}`)
      return
    }
    console.log("informação restrita")
  }
}

const zeca = new User("Zeca" , "Admin" , true)

console.log(zeca)
zeca.showUserName()
zeca.showUserRole(false)




//interfaces em classes

interface Ivehicle{
  brand: strinh
  showBrand(): void
}

class Car implements Ivehicle{
  brand
  wheels
  
  constructor(brand: string , wheels: number) {
    this.brand = brand
    this.wheels = wheels
  }
  
  showBrand(): void{
    console.log(`a matca do carro é ${this.brand}`)
  }
}


const fusca = new car('W' , 4)
fusca.showBrand()




//herança

class SuperCar extends car {
  engine
  
  constructor(brand: string, wheels: number, engine: number){
    super(brand, wheels)
    this.engine = engine
  }
}

const a4 = new SuperCar("audi", 4 , 2.0)
console.log(a4)

a4.showBrand()






//decorators
function BaseParamters() {
  return function <T extends {new (...args:any[]): {}}>(constructor: T){
    return class extends constructor{
      id = Math.random()
      createAt = new Date()
    }
  }
}

@BaseParamters()


class Person{
  name
  
  constructor(name: string){
    this.name = name
  }
}


const sam = new Person("sam")

console.log(sam)