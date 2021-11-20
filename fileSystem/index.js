var fs = require('fs')
var chalk = require('chalk')
const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants')
//function async - bất đồng bộ 
// fs.readFile('bai1/data.txt', 'utf-8', function(err, data) {
//     if(err)
//         console.log(chalk.red('lỗi đọc file'));
//     else
//         console.log(data)
// })    

// Xóa nội dung file và sửa lại
// fs.writeFile('bai1/data.txt', 'Hello', 'utf-8', function(err) {
//     if(err)
//         console.log(err)
// })
// for(let i=0; i<100; i++)
//     fs.appendFile('bai1/data.txt', `hello ${i} \n`, function(err){
//         console.log(err)
//     })

// Thêm nội dung file
// fs.appendFile('bai1/data.txt', '\nHello', 'utf-8', function(err) {
//     if(err)
//         console.log(err)
// })

// Tạo file
// fs.writeFile('fileSystem/test.txt', 'ok', function(err) {
//     if(err)
//         console.log(err)
// })

// Xóa file
// fs.unlink('fileSystem/test.txt', function(err) {
//     console.log(err)
// })

// Tạo folder
// fs.mkdir('test.js/test', function(err) {
//     console.log(err)
// })

// Xóa folder
// fs.rmdir('test.js', {recursive: true}, function(err) {
//     console.log(err)
// })

// CreateReadStream
// var readSteam = fs.createReadStream('bai1/data.txt', {
//     encoding: 'utf-8',
// })

// readSteam.on('open', function() {
//     console.log('stream đc mở')
// })

// readSteam.on('data', function(chunk) {
//     console.log(chunk)
// })

// readSteam.on('error', function(err) {
//     console.log('Có lỗi')
// })

// readSteam.close()

// createWriteStream
// var writeStream = fs.createWriteStream('bai1/data.txt', {
//     encoding: 'utf-8',
//     highWaterMark: 100,
// })

// for(let i=0; i<100; ++i)
//     writeStream.write(`hihi ${i}\n`)

// writeStream.on('end', function() {
//     writeStream.close()
// })

// tạo pipe để nối readSteam và writeSteam
var readStream = fs.createReadStream('bai1/data.txt', {
    encoding: 'utf-8',
    highWaterMark: 100,
})

var writeStream = fs.createWriteStream('fileSystem/dataclonebai1.txt', {
    encoding: 'utf-8',
})

readStream.on('open', function() {
    console.log(chalk.green('Bắt dầu chuyền file'))
})

readStream.pipe(writeStream)

readStream.on('end', function() {
    console.log('Đã truyền xong')
})


