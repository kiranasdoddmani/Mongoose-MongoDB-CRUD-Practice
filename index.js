// getting-started.js
const mongoose = require('mongoose');

main().then((res)=>{
    console.log("SuccessFully Connected");
    })
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Schema

const Userschema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

// Model

const user=mongoose.model('college',Userschema);

//---------------------------------------------------------------------------------

// Insert-One Data
// const user1=new user({name:'kirana',email:"kiranasdoddamani@gmail.com",age:22});

// user1.save().then((res)=>{       // user1.save() -> It is an Asynchronous Function Which Return Aysnchronous Functions i.e promise
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// ------------------------------------------------------------------------------------

// Insert Multiple-Data

//   user.insertMany([
//     {name:"Robert",email:"rober@gmail.com",age:55},
//     {name:"Tony",email:"tony@gmail.com",age:35},
//     {name:"Bruce",email:"bruce@gmail.com",age:30}
//    ])
//    .then((res)=>{
//     console.log(res);
//    })
//    .catch((err)=>{
//     console.log(err);
//    });

// ----------------------------------------------------------------------------------------

//  Update In Mongoose

//   user.updateOne({name:"kirana",age:23})
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

// user.updateOne({name:"kirana",age:24});

//   user.updateOne({name:"kirana",age:25})
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });

// ------------------------------------------------------------------------------------

// Find-And-Update 
  
// user.findOneAndUpdate({name:"kirana"},{$set:{age:26}});

// user.findOneAndUpdate(
//   { name: "kirana" },
//   { age: 26 }
// )
// .then((res)=>{
//  console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// -------------------------------------------

  // Find 
  // FindById 

//   user.find({})
//    .then((res)=>{
//     console.log(res[0].name);     // res[0] print First-Object and res[0].name Print name of that Object
//    })
//    .catch((err)=>{
//     console.log(err);
//    })

// -------------------------------------------------------

//    user.deleteOne({name:"kirana"})
//    .then((res)=>{
//     console.log(res);
//    })
//    .catch((err)=>{
//     console.log(err);
//    })

//-------------------------------------------------------------------------------------------

//  Here we written
  //   .load index.js
  //     user1           

 // Here we Write college But in mongosh if we print Data we Use Plural i.e  ( colleges ) 

// Operation  Buffering :-
//         Operation Buffering Menas It Store Data temporarily in Mangoose util the database DB Connection Establish
//            if DBConnection Establish the it store Data in Permanent in DB   

// In MongoDb There are Multiple Queries 
//    For More-Information go-to Mongoseejs Website ...



//    Validators 
    /*
    
     Validators is a defined in the SchemaType
        
      Syntax:-
        required:true;
     
    */
  
        // Crt  way to Define the Schema is :-
  /*
         const UserSchema=new mongoose.Schema({
            name: {
                type: String,
                required: true    // if we use Required true then we must initlize a the value 
                },
            age:{
                type:Number
            }    
         })

       
      // Run-Validators
        
         Check schema validation during update. If the new value is invalid, return an error
          Example :-
          // Schema
            age: {
                    type: Number,
                    min: [18,"The age is Less than 18"]
                 }

            user.findOneAndUpdate(
                { name: "kirana" },
                { age: 15 },
                { new: true, runValidators: true }
                )
      * In Update age is 15 ,If we trying to update the age But age is 15 Then it throw an error i.e The age is Less than 18

          if we print the particular Error The we Use
           console.log(err.errors.age.properties.message);      
                
       
      // New
  
     *  By Using {new:true}  Which return the updated document In Console

        user.findOneAndUpdate(
        { name: "kirana" },
          { age: 26 },
           { new: true }
             )
            .then((res) => {
            console.log(res);
              })
            .catch((err) => {
            console.log(err);
              });

                     */