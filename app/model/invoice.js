var mongoose = require('mongoose');


module.exports = mongoose.model('Invoice',{
    id: {type:Number,default:0},
    customer: {type:String, default:""},
    date    : {type:Date, default:Date.now},
    status  : {type:String, default:"Draft"},
    items   : [{
        itemId : {type: mongoose.Schema.Types.ObjectId},
        qty         :   {type:Number},
        unit        :   {type:String},
        name        :   {type:String},
        price       :   {type:Number},
        lineTotal   :   {type:Number}
    }],
    total   : {type:Number, default:0}
});