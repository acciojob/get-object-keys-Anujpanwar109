const student = {
  name: "John",
};


function getKeys(obj) {
  return Object.keys(obj);
}


console.log(getKeys(student)); 


const studentWithMoreProperties = {
  name: "John",
  age: 25,
  city: "New York",
};
console.log(getKeys(studentWithMoreProperties)); 


const emptyObject = {};
console.log(getKeys(emptyObject)); 
