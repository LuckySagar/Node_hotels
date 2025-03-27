const mongoose = require('mongoose') // we give this because we are making schema on mongoose and with the help of mongoose

const MenuItemsSchema = new mongoose.Schema({
    name :{type : String,
        required: true
    },
    price : {type : Number,
        required: true
    },
    taste:{type : String,
        enum: ['sweet' , 'sour' , 'spicy']
    },
    is_drink:{type: Boolean,
        default : false
    },
    ingrediants :{ type : [String], // this is a array type because we don't know what ingrediants the customer will tell to put it into his food.
      default : [] //empty array if the customer doesn't tell anything to add in his food
    },
    num_sales : {type : Number,
        default : 0,
    }
})

const MenuItems = mongoose.model('MenuItems' , MenuItemsSchema);
module.exports = MenuItems;


