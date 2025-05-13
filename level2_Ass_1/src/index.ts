{

  // plm 1

   function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

console.log(formatString("Hello"));         
console.log(formatString("Hello", true));   
console.log(formatString("Hello", false));


 // plm 2


 function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}


const gadegtsList = [
  { title: "laptop", rating: 2.1 },
  { title: " mobile ", rating: 3.2 },
  { title: " I phone ", rating: 9.8 }
];

console.log(filterByRating(gadegtsList));


 // plm 3

 function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

 console.log(concatenateArrays(["abul", "cabul"], ["tabul"]));

 // plm 4

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `The make is ${this.make} and year is ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `The model is ${this.model}`;
  }
}

const yourCar = new Car("Honda", 2024, "DO4N");

console.log(yourCar.getInfo());   
console.log(yourCar.getModel());

// plm 5

function processValue (value: string | number) : number{
     if (typeof value === "string"){
         return value.length
     } else{
       return value * 2
     }
}

console.log(processValue("howAreYou"));
console.log(processValue(2));

// plm 6

interface product{
  name: string;
  price: number
}

function getMostExpensiveProduct (products: product[]): product | null{
  if(products.length === 0){
    return null
  }

  let mostExpensive = products[0]


  for (let i= 1; i < products.length; i ++){
      if(products[i].price > mostExpensive.price ){
          mostExpensive = products[i]
      }
  }

  return mostExpensive

}

const products: product[] = [
  { name: " Nosto laptop", price: 100 },
  { name: "book", price: 205 },
  { name: "phone", price: 20 }
];

console.log(getMostExpensiveProduct(products));

// plm 7

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day : Day): string{
   if( day === Day.Saturday || day === Day.Sunday ){
      return "Weekend"
   } else{
     return "Weekend"
   }
}

console.log(getDayType(Day.Saturday));  
console.log(getDayType(Day.Sunday));  

  
  // plm 8

  async function squareAsync(n:number): Promise<number>{
      if(n < 0){
          throw new Error(" Dear User Negative numbers are not allowed")
      }

      return new Promise((resolve)=>{
          setTimeout(()=>{
              resolve(n*n);
          }, 1000)
      })
  }

  squareAsync(4)
  .then(result => console.log(result) )
  .catch(Error => console.error(Error))
 


 
   

   



}







        

    

