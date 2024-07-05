import mongoose from "mongoose";

const grocerySchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required:true,
        },
        description: {
            type:String,
            required:true,
        },
        price: {
            type:String,
            required:true,
        },
        image: {
            type:String,
            required:true,
        },
        minQuantity : {
            type:String,
            required:true,
        },
        totalQuantity: {
            type:String,
            required:true,
        }
    }
)

const groceryModel = mongoose.models.grocery ||  mongoose.model("grocery",grocerySchema);

export default groceryModel;