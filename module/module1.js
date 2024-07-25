function module1(a, b) {
    return a + b;
}

const person = {
    name: "Aniket",
    age: 28
};

// Exporting an object that contains both the function and the person object
module.exports = {
    module1,
    person
};
