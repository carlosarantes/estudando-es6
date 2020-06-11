const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve('OK');
    }, 5000);
});

async function executaPromisse() {

    const response = await minhaPromisse();

    console.log('response ** ', response)
}

executaPromisse();