export  function formatData(today){
 let day=String(today.getDate()).padStart(2,'0');
 let month=String(today.getMonth()+1).padStart(2,'0');
 let year=today.getFullYear();
 return `${day}/${month}/${year}`;
}