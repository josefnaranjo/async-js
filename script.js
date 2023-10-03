const fs = require('fs');
// Callbacks **************************

// setTimeout
// setTimeout(() => {
//     console.log("Waited 1 second");
// }, 1000);



// Nested setTimeouts
// setTimeout(() => {
//     console.log('3');
//     setTimeout(() => {
//         console.log('2');
//         setTimeout(() => {
//             console.log('1');
//         }, 1000)
//     }, 1000)
// }, 1000); // Callback hell... 



// Button event handler in browser JavaScript
// const btn;

// btn.addEventListener('click', () => {
//     // A callback that registers for an event handler
// })



// Error First Callback
// fs.readFile('./file.txt', {encoding: 'utf-8'}, (err, data) => {
//     if (err) {
//         console.error('Error...')
//         console.error(err);
//     } else {
//         console.error('Got data...')
//         console.log(data);
//     }
// });



// Promises ***************************

// Create a promise
// const myPromise = new Promise((resolve, reject) => {
//     // Random number: either zero or one
//     const rand = Math.floor(Math.random() * 2);
//     if (rand === 0) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// myPromise.then(() => console.log('Success!'))
//          . catch(() => console.error('Something went wrong...'));


// fs readFile with promises
// fs.promises
//             .readFile('./file.txt', {encoding: 'utf-8'})
//             .then(() => console.log('Success!'))
//             . catch(() => console.error('Something went wrong...'));



// Async/Await ********************************

// Load file with async/await (an updated and IMPROVED snipped of the readFile code above)
// const loadFile = async () => {
//     const data = await fs.promises.readFile('./file.txt', {
//         encoding: 'utf-8',
//     });
//     console.log(data);
// };
// loadFile();


// Code above using try-catch
const loadFile = async () => {
    try {
        const data = await fs.promises.readFile('./file.txt', {
            encoding: 'utf-8',
        });
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
loadFile();