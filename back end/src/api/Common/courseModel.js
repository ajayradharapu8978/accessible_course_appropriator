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
        type: String
    },
    duration: {
        type: String
    }
},
    {
        timestamps: true
    });
    
regSchema.plugin(mongoosePaginate);

const regModel = mongoose.model('courses', regSchema)

export default regModel;