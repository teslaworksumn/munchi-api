var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RecipeSchema = new Schema({
    rid: int,
    stages: [Object],
    kww: int,
    tags: [Object],
    name: String,
    text: String,
    summary: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);
