const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { type: String, 
        required: [true, "Must have name for pet"],
        minlength: [3, "Name must have 3 characters or more"]
    },
    type: { type: String, 
        required: [true, "Must provide type of pet"],
        minlength: [3, "Type must have 3 characters or more"]
    },
    description: { type: String, 
        required: [true, "Must provide a pet description"],
        minlength: [3, "Description must have 3 characters or more"]
    },
    skillOne: { type: String, 
        required: [true, "Must provide one skill for pet"],
        minlength: [3, "Skill must have 3 characters or more"]
    },
    skillTwo: { type: String},
    skillThree: { type: String}
}, 

{ timestamps: true });
module.exports = mongoose.model('Pet', PetSchema);

