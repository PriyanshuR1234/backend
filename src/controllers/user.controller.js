import {asyncHandler} from '../middlewares/asyncHandler.js';

const regiserUser = asyncHandler(async (req,res,next)=>{
    res.status(200).json({
        message:"ok"
    })  
})


export {regiserUser}