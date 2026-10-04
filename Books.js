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
 const BookSchema=new mongoose.Schema({
   titel: {
        type:String,
        require:true,
      },
  author:{
       type:String,
       require:true,
      maxlength:[10 ,"The Name is too Long"]    //  if name is too long menas more than 10 while inserting it show an message i.e Name is too Long 
     } ,
  price :{
       type:Number,
       default:300                        // if we don't set Price By Default the Price of an Book Is 300
     },
   gender :{
     type:String,
     enum:["Male","Female","Other"]         // -> enum
     },
    genre:[String]                          // -> genre
 });

 // Model
const Book=mongoose.model("Book",BookSchema);


// Insert-Multiple-Data

Book.insertMany([
  {
    Book_name: "The Alchemist",
    Book_author: "Paulo Coelho",
    Book_Price: 350,
    gender:"male",
    genre:["IronMan","BatMan"]
  },
  {
    Book_name: "Atomic Habits",    
    Book_author: "James Clear",
    Book_Price: 450,
    gender:"male",
    genre:["Comics","SuperHero"]
  },
  {
    Book_name: "Rich Dad Poor Dad",
    Book_author: "Robert Kiyosaki",
    Book_Price: 400,
    gender:"male"
  },
  {
    Book_name: "The Psychology of Money",
    Book_author: "Morgan Housel",
    Book_Price: 500,
    gender:"male"
  },
  {
    Book_name: "Ikigai",
    Book_author: "Hector Garcia",
    gender:"male"
   // Book_Price: // default value will be placed Here i.e 300
  }
])
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});


Book.findByIdAndUpdate(
  "YOUR_DOCUMENT_ID",
  { author: "RobertTonyStarkBruceCaptianAmerica" },    //--> More than 10 Charcater so it return error i.e Name is too Long
  { new: true, runValidators: true }
)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});


// Enum 
  /*

   enum menas Only these values are allowed for Using
    Ex:-
      gender :{
       type:String,
       enum:[male,female,other]
      }
    
   enum :{
   
   }
   
   */
// Genre
/*
   // Schema
        {
          genre:[String]
        }


       // Insert
       genre:["Comics","Superman","Ironman"]
 */
