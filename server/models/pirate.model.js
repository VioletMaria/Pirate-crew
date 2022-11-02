const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "A name is required"],
        minlength: [3, "Name must have at least 3 characters"]
    },
    imgUrl: {
        type: String,
        required: [true, "An image is required"],
        minlength: [3, "Image url must have at least 3 characters"]
    },
    quote: { 
        type: String,
        required: [true, "A catch phrase is required"],
        minlength: [3, "Catch phrase must have at least 3 characters"]
    },
    positions: { 
        type: Array,
        required: [true, "A position is required"]
    },
    treasures: { 
        type: Number,
        required: [true, "An amount of treasures is required"],
        min: [1, "Must have at least 1 treasure"]
    },
    pegLeg: {
        type: Boolean
    },
    eyePatch: { 
        type: Boolean
    },
    hookHand: { 
        type: Boolean
    }
}, { timestamps: true });

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);