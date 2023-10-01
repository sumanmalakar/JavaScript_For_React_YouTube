// function print (){
//     console.log("Hello")
// }
// print();

// const print = () =>{
//     console.log("Hello arrow function")

// }

// print();

// const sum = (a,b) => a+b;

// // const result = sum(10,20)

// console.log(sum(20,30))


// const name1 = 'suman';
// const name2 = 'aman';

// // console.log("my name is = '"+name1+"' my brother name is = '"+name2+"' ")
// // console.log('my name is = "'+name1+'" my brother name is = "'+name2+'" ')

// console.log(`my name is = "${name1}" and my brother name is = "${name2}"`)


// const age = 20;
// // if(age>=18) {
// //     console.log("You can drive");
// // }else{
// //     console.log("You can not drive")
// // }

// (age>=18) ? console.log("You can drive") : console.log("You can not drive");

// const person = {
//     Name: 'suman',
//     age: '23',
//     phoneNumber: '1234567890',
// }
// const person2 = {...person,Name:'ram', age:'50'}

// console.log("This is persons 2 object ",person2)



// const {Name, age, car} = person

// console.log(age)
// // console.log(person.Name, person.age, person.car)


// const number = [10,20,30];
// console.log("Array first = ",number)
// const number2 = [...number, 50, 60]
// console.log("Array second = ",number2);

// const number = [10,20,30];

// const result = number.map((n)=>{
//     return n+10;
// })

// console.log(result)

// const number = [10,20,30,40,50,60];

// const result = number.filter((n)=> n!=50 )

// console.log(result)

// const category = ['mobiles','laptops','smartWatch','headphones'];

// const result = category.filter((cat)=>cat !== 'mobiles')

// console.log(result)


// const mobiles = [
//     {mobileName:'samsung F2',price:'10000'},
//     {mobileName:'sony xperia',price:'80000'},
//     {mobileName:'oneplus',price:'35000'},
//     {mobileName:'iphone',price:'100000'},
//     {mobileName:'poco',price:'25000'},
//     {mobileName:'redmi',price:'15000'},
// ];

// const result = mobiles.filter((p)=>p.price !=25000)
// console.log(result);


// const number = [1,2,3,4,5];

// // num1 = -1 , num2 = 3 , result = -4
// const result = number.reduce((num1, num2)=>{
//     return num1 - num2
// })

// console.log(result)

// const fetchData = async () =>{
// const api = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await api.json()
// console.log(data);
// }

// fetchData()
export const sum = (a,b) => a+b;

 const person = "same";

 export default person;