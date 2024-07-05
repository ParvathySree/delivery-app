import groceryModel from "../models/groceryModel.js"
const getGroceries = async (req,res) => {
    try {
        const groceries = await groceryModel.find();
        res.json({success:true,data:groceries});
    } catch (error) {
        console.error(error)
        res.json({success:false,message:"Error"})
    }
}

export {getGroceries}