const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //! Yo quiero mi dinero!!
        reject("Mi amigo se perdio");
    }, 2000); // 2 segundos
});

myPromise.then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
}).catch(reason => {
    console.warn(reason);
}).finally(() => { console.log("Perdi dinero"); });
