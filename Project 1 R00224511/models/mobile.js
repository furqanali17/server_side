const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


var mobileSchemaful = new Schema({
    name: {
        type: String,
        required: true,
    },
    daily_usage: {
        type: Number,
        required: true
    },
    educational_usage: {
        type: Number,
        required: true
    },
    shopping_usage: {
        type: Number,
        required: true
    },
    searching_usage: {
        type: Number,
        required: true
    },
    social_usage: {
        type: Number,
        required: true
    },
    date_created: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true
});
var mobiles = mongoose.model('Mobile', mobileSchemaful); 

module.exports = mobiles;