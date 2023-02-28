//module wrapper function
//(function (exports, require, module, __filename, __dirname){});
//node js ทำ  module wrapper function ให้เราอัตโนมัติ
//deconstructing
// const { sayHello, calculateVat} = require('./utils');
// sayHello();
// const vat7 = calculateVat(100, 7);
// console.log(vat7);

//console.log(__filename, __dirname);
// filename บอก path
// dirname บอกว่าอยู่ folder ไหน 


//importing modules
// const utils = require('./utils')
// utils.sayHello();
// const vat7 = utils.calculateVat(100,7);
// console.log(vat7)



//console.log('Hello World');
//const num = 10 +5;
//console.log(num);

//non-blocking/io

// built in module  
// File system  (fs)
// Path (path)
// Operating system (os)
// Events (events)บอกโปรแกรมว่า จะรันโค้ดอะไร
// HTTP (http)


 //Path
 const path = require('path')

// console.log(path.basename(__filename));
// //return ชื่อไฟล์
// console.log(path.dirname(__filename));
// //return โฟลเดอร์
// console.log(path.extname(__filename));
// //return นามสกุล
// console.log(path.parse(__filename));

// console.log(path.join(__dirname, 'util.js'));

// ได้ object ข้างในมี root dir base ext name
// {
//     root: 'C:\\',
//     dir: 'C:\\Users\\User\\Desktop\\เปล่าๆ',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }

//file system
const fs = require('fs');
//fs.writeFileSync(path.join(__dirname, 'data.txt'), 'Hello'); //สำหรับไฟล์เล็กๆ
// fs.writeFile(path.join(__dirname, 'data.txt'), 'Hello',() => {
//     console.log('Finished writing file');
// });
console.log(fs.readFileSync(path.join(__dirname, 'data.txt'),'utf8'));

//OS
const os = require('os');
console.log(os.cpus());
console.log(os.homedir());
console.log(os.uptime());

//Events 
const events = require('events');
const EventEmitter = events.EventEmitter;
const connect = new EventEmitter();

connect.on('online', () =>{
    console.log('A new user has connected');
});

connect.emit('online');
connect.emit('online');
connect.emit('online');
connect.emit('online');