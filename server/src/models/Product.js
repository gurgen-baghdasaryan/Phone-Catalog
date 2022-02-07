const { Schema, model } = require('mongoose');

const productSchema = new Schema({


    id: Number,
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number,

   
},

{
    timestamps: true, 
})

module.exports = model('Product', productSchema);