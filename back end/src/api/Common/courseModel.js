import mongoose from 'mongoose';
var mongoosePaginate = require("mongoose-paginate");

const regSchema = new mongoose.Schema({    
    university:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"universities"
    },
    courseName: {
        type: String
    },
    fee: {
        type: Number
    },
    duration: {
        type: Number
    }
},
    {
        timestamps: true
    });
    
regSchema.plugin(mongoosePaginate);

const regModel = mongoose.model('courses', regSchema)

export default regModel;