// console.log('Hello world !')


const makePromise = (text, delay, isResolve) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isResolve){
                resolve(text)
            }
            reject(text)
        }, delay);
    });
};

const promise = makePromise("Hello", 4000, true)
const promise2 = makePromise("World", 2000, true)
const promise3 = makePromise("!!!!", 1000, true)

Promise.all([promise, promise2, promise3]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log('Error', error)
})

const customPromiseAll = (promises) => {
    return new Promise((resolve, reject) => {

        let endedPromises = 0;
        const promisesValues = [];

        promises.forEach(async (promise, index) => {
            try {
                const data = await Promise.resolve(promise)
                endedPromises += 1;
                promisesValues[index] = data

                if (endedPromises === promises.length){
                    resolve(promisesValues)
                }
            }catch (e) {
                reject(e)
            }
        })
    })
}

customPromiseAll([promise, promise2, promise3]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log('Error', error)
})


// Promise.race([promise, promise2, promise3]).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log('Error', error)
// })


const customPromiseRace = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(data => {
                resolve(data)
            }).catch(error => reject(error))
        })
    })
}

// customPromiseRace([promise, promise2, promise3]).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log('Error', error)
// })


// Promise.any([promise, promise2, promise3]).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log('Error', error)
// })


const customPromiseAny = (promises) => {
    return new Promise((resolve, reject) => {
        let endedPromises = 0;
        promises.forEach(promise => {
            promise.then((data) => {
                endedPromises += 1;
                resolve(data)
            }).catch(error => {
                endedPromises += 1;
                if (endedPromises === promises.length){
                    reject(new AggregateError([], "All promises were rejected"))
                }
            })
        })
    })
}

// customPromiseAny([promise, promise2, promise3]).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log('Error', error)
// })
