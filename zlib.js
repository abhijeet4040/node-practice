const zlib = require('zlib');

// const input = Buffer.from("Data to be compressed");
// zlib.deflate(input, (err, buffer) => {
//     if(!err) {
//         console.log("compressed data: ", buffer.toString('base64'));
//     }
// })

const compressedData = Buffer.from('eJzT1UEKAAEE1wEB', 'base64');
zlib.inflate(compressedData, (err, buffer)=> {
    if(!err) {
        console.log("decompressed data: ", buffer.toString());
    }
} )