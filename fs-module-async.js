const { error } = require('console');
const fs = require('fs');

//  fs.mkdir("bioData" , (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("the folder has been created")
//     }
//  })

//  fs.writeFile("bioData/Bio.txt", "my name is Abhijeet", (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("the file has been created successfully")
//     }
//  })

//  fs.writeFile("bioData/Bio.txt", " and my last name is Kanwar" , { flag: "a"} , (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("the file has been updated successfully") 
//     }
//  })

//  fs.appendFile("bioData/Bio.txt", " and my age is 100" , (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("age added successfully")
//     }
//  })

fs.readFile("bioData/myBio.txt", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

  

// fs.rename("bioData/myBio.txt", "bioData/myData.txt" , (error) => {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log("file renamed successfully")
//     }
// });

// fs.unlink( "bioData/myB" , (error) => {
//     if(error) {
//     console.log(error)
//     } else {
//         console.log("file unlink successfully")
//     }
// })
    
    // fs.rmdir( "bioData", (error) => {
    //     if(error) {
    //         console.log(error)
    //     } else {
    //         console.log("file rmdir successfully")
    //     }
    // })