function createUser(name,age=18,role="user") {
    return console.log( `name:${name}, age:${age} ,role: ${role}   `);
}
createUser("dev");
createUser("Nguyen Van A",20,"Admin");