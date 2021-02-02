import mongoose from 'mongoose';
var mongoosePaginate = require("mongoose-paginate");

const regSchema = new mongoose.Schema({
    universityName: {
        type: String,
        unique:true
    },
    country: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    Website: {
        type: String
    }
},
    {
        timestamps: true
    });
    
regSchema.plugin(mongoosePaginate);

const regModel = mongoose.model('universities', regSchema)

export default regModel;