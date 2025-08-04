const response={
    data:{
        id:1,
        title:"Destructuring in JavaScript",
        author:{
            name:"Dev",
            email:"Dev@gmail.com",
        },
    },
};

const {title,author} =response.data;
console.log(title);
console.log(author);
const {name:authorName,email:authorEmail}=author;
console.log(authorName);
console.log(authorEmail);

