// // const { people, age} = require('./people')
// const fs = require('fs')


// // console.log(people, age)
// // // os.platform()

// fs.readFile('./dummydocs/dummytext.txt', (err, data) => {
//     if (err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// fs.writeFile('./dummydocs/dumytext.txt', 'hello world', ()=> console.log('file is written'))

// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)=> {
//         if (err){
//             console.log(err)
//         }
//         console.log('folder created')
//     })
// } else {
//     fs.rmdir('./assets', (err)=>{
//         if (err){
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

// if(fs.existsSync('./dummydocs/deleteme.txt')){
//     fs.unlink('./dummydocs/deleteme.txt', (err) => {
//         if (err){
//             throw err
//         }
//         console.log('file deleted')
//     })
// }


// // Data streams
 

// // Second parameter is isntead of toString()
// const readStream = fs.createReadStream('./dummydocs/streamtext.txt', {encoding: 'utf8'});

// readStream.on('data', (chunk) => {
//     console.log('+++++++++++++++++++++++++')
//     console.log(chunk);
// });