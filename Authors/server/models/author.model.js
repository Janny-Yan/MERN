const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({

    authorName:{
        type:String,
        require:[true, "Must have a name entered!"],
        minlength:[3, "Author name must have at least 3 characters"]
    }
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
