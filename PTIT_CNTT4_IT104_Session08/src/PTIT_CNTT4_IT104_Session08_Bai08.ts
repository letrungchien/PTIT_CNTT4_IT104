function partialUpdate<T>(obj:T,updates:Partial<T>):T{
    return {...obj,...updates}
}
console.log(partialUpdate({id:1,name:"chien",age:19},{age:20}));
