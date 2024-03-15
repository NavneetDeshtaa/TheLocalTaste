import mongoose from "mongoose";
import validator from "validator";

const reservationSchema  = new mongoose.Schema({
    firstName: {
       type:String,
       require: true,
       minlength : [3 , "First name must contain atleast 3 characters"],
       maxlength : [30, "First name should not exceed 30 characters"],
    },
    lastName: {
        type:String,
        require: true,
        minlength : [3 , "Last name must contain atleast 3 characters"],
        maxlength : [30, "Last name should not exceed 30 characters"],
     },
     email:{
        type:String,
        require:true,
        validate:[validator.isEmail, "Provide a valid email address"]
     },
     phoneNumber:{
        type:Number,
        require:true,
        minlength : [10 , "Phone number must contain 10 digits"],
        maxlength : [10, "Phone number must contain 10 digits"],
     },
     time:{
        type:Number,
        require:true, 
     },
     date:{
        type:String,
        require:true,
     }
});

export const Reservation = mongoose.model("Reservation",reservationSchema)
