var mongoose = require('mongoose');

module.exports = mongoose.model('Item',{
    name:{type:String},
    dimension:{type:String},
    modal:{type:String},
    ketmodal:{type:String},
    ketjual:{type:String},
    status : {type:String},
    prices : [
        {
            unit:{type:String},
            nominal:{type:Number}
        }
    ],
    capitals:[
        {_delivery :{ type: mongoose.Schema.Types.ObjectId, ref: 'Delivery'}}
    ],
    location: ""
});