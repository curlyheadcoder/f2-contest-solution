/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((employee) =>{
    if(employee.profession === "developer"){
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
    if(employee.profession === "developer"){
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {
    id : 4,
    name : "Mayank",
    age : "27",
    profession : "Java Developer",
  };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredArr = arr.filter((employee) => employee.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newEmployees = [
    {id : 5, name : "Keshav", age : "24", profession : "frontend developer"},
    {id : 6, name : "Harsh", age : "25", profession : "trainer"},
    {id : 7, name : "Mohd Ansari", age : "23", profession : "intern"},
  ];
  const res = arr.concat(newEmployees);
  console.log(res);
}
