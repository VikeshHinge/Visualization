const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb+srv://vikesh:sector4e90@cluster0.tiwvvgy.mongodb.net/VisualizationDb?retryWrites=true&w=majority')

module.exports= {connection}