const { Pirate } = require('../models/pirate.model');

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createPirate = (request, response) => {
    const { name, quote, imgUrl, positions, treasures, pegLeg, eyePatch, hookHand } = request.body;
    Pirate.create({
        name,
        quote,
        imgUrl,
        positions,
        treasures,
        pegLeg,
        eyePatch,
        hookHand
    })
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json({ message: "Something went wrong", error: err}));
}

module.exports.getAllPirates = (request, response) => {
    Pirate.find({})
        .then(pirates => response.json(pirates))
        .catch(err => response.json(err));
}

module.exports.getPirate = (request, response) => {
    Pirate.findOne({_id:request.params._id})
        .then(pirate => response.json(pirate))
        .catch(err => response.json(err));
}

module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params._id}, request.body, {runValidators: true, new:true})
        .then(updatedPirate => response.json(updatedPirate))
        .catch(err => response.status(400).json({ message: "Something went wrong", error: err}));
}

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params._id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err));
}