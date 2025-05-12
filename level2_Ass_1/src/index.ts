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


  









        

    }

