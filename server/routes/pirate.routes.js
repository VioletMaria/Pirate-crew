const PirateController = require('../controllers/pirate.controller');

module.exports = function(app){
    app.get('/api', PirateController.index);
    app.get('/api/pirate', PirateController.getAllPirates);
    app.post('/api/pirate/new', PirateController.createPirate);
    app.get('/api/pirate/:_id', PirateController.getPirate);
    app.put('/api/pirate/:_id', PirateController.updatePirate);
    app.delete('/api/pirate/:_id', PirateController.deletePirate);
}