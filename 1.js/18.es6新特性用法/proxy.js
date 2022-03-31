const person = {
    name: 'zce',
    age: 20
}

const personProxy = new Proxy(person, {
    get(target, property) {
        console.log(target, property);
        return 100;
    },
    set() { }
})

console.log(personProxy.name)