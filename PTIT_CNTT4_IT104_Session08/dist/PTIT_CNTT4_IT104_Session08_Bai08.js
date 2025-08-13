function partialUpdate(obj, updates) {
    return Object.assign(Object.assign({}, obj), updates);
}
console.log(partialUpdate({ id: 1, name: "chien", age: 19 }, { age: 20 }));
