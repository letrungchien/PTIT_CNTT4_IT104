var firstName = "john";
var lastName = "doe";
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
var fullName = "".concat(firstName, " ").concat(lastName);
console.log(fullName);
