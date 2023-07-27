// const request = fetch('https://api.thedogapi.com/v1/breeds')
// .then((response) => console.log(response.json()))

// console.log(request);

const promise = new Promise((resolve, reject) => {
    if (23 === 23) {
        resolve('Ecelente')
    } else {
        reject('eres estupido y casi quedas afuera')
    }
});

console.log(promise);