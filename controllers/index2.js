function resolveAfterTwoSeconds() {
    return new Promise (resolve => {
        setTimeout(() => {
            console.log('Josefina no me hagas perder tiempo');
        }, 2000)
    });
}

function asyncCall() {
    console.log('espera unos meses mas');
    resolveAfterTwoSeconds();
}

asyncCall();