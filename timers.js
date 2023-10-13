// const myInt = setInterval( () => {
//     console.log("hello world")
// }, 3000)

// setImmediate( () => {
//     console.log("hello world")
// })

const timeout = setTimeout(() => {
    console.log('This code will never run.');
  }, 1000);
  
  clearTimeout(timeout);

