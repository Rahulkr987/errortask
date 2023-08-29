
//1st
function convetToNumber(abc){
try{
    const num = Number(abc);
    if(Number.isNaN(num)){
        throw new error ("invalid number")
    }
    return num

}
catch(error){
    return error.message;
}
}
console.log(convetToNumber("123"))
console.log(convetToNumber("def"))

//==========================================================================================

//2nd
function getPerson(person){
    try{
        if(typeof person !== "object" || !person.name || !person.age )
        {
            throw new Error("Invalid parameter type");
          }
          return `Name: ${person.name}, Age: ${person.age}`;
        } catch (error) {
          return error.message;
        }
      }

      console.log(getPerson({name:"ravi", age:20}));
      console.log(getPerson({name:"ravi"}));
      console.log(getPerson({"name":"ravi"}));
      

      //==============================================================================

      //3rd
      class car{
        constructor(company , model , year){
        this.company = company;
        this.model = model;
        this.year = year;
        
      }
      getdescription(){
        return `This is a ${this.year} ${this.company } ${this.model}.`;
      }
    }
    const mycar = new car("breeza" , "top" , 2021);
    console.log(mycar.getdescription());
    

    //==================================================================================

    //4th
    class Employee{
         constructor(name , position , salary ){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getsalary(){
        return this.salary;
    }
}

const answer = new Employee("yuji", "software Developer", 10000)
console.log(answer.getsalary());


//==========================================================================================

//5th
class Person{
    constructor(name , age){
    this.name = name;
    this.age = age;
}
getdetails(){
    return `Name: ${this.name}, Age: ${this.age}`
}
}
const p1 = new Person("ravi", 20);
console.log(p1.getdetails());

//==========================================================================================


//6th
class calculator{
    static add(num1, num2){
    return num1+ num2
}
}
const result = calculator.add(5,10)
console.log(result)

//==========================================================================================


//7th