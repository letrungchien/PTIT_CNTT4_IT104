let phoneBooks=[];
function addContact(){
   let name=prompt("nhap ten :");
   let numberPhone=prompt("nhap so dt: ");
  let email=prompt("nhap email :");
    let phoneBook={
        name:name,
        numberPhone:numberPhone,
        email:email
    }
    phoneBooks.push(phoneBook);
}
function displayContact(arr=[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Ten :${arr[i].name}  SDT :${arr[i].numberPhone} Email : ${arr[i].email}`);
  }
}
addContact();
displayContact(phoneBooks);