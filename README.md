What are some differences between interfaces and types in TypeScript?
Ans: Interface
  *  Used to define object shapes
  * Supported – multiple interfaces with the same name are merged

   Type
   *	Can define objects, unions, primitives, and more
   *    Not supported

   What is the use of the keyof keyword in TypeScript? Provide an example.
   ans: In TypeScript, the keyof keyword is used to get a union type of all property names keys of a given object type.

   Explain the difference between any, unknown, and never types in TypeScript.
   ans: any
    	No type checking; do anything
        unknown
        	Like any but safer with required type checks
            never
            	Represents values that never occur


 What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

  TypeScript is used to define a set of named constants.
It makes code more readable, organized, and type-safe when working with a fixed set of related values like days, statuses, directions,

exple

enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Pending = "PENDING"
}

let currentStatus: Status = Status.Success;
console.log(currentStatus);


What is type inference in TypeScript? Why is it helpful?
ans:
Type Inference is a feature in TypeScript where the compiler automatically infers detects the type of a variable based on its value, without needing you to explicitly declare the type


Provide an example of using union and intersection types in TypeScript.
Union Type
function printId(id: string | number) {
  console.log("ID:", id);
}

Intersection Type

type User = {
  name: string;
};

type Admin = {
  role: string;
};

type AdminUser = User & Admin;

const user1: AdminUser = {
  name: "Jahid",
  role: "Super Admin"
};

