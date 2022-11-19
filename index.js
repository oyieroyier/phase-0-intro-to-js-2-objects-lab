// Write your solution in this file!
const employee = {
  name: "Bob",
  address: "San Francisco",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}

// const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sammy");
// console.log(newEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

// updateEmployeeWithKeyAndValue(employee, "name", "Sam");
// console.log(employee);

function deleteFromEmployeeByKey(obj, key) {
  const deletedEmployee = { ...obj };
  delete deletedEmployee[key];
  return deletedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}
