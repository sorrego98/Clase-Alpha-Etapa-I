const {dataController} = require('./dataController');

const mainController = {
    home: (req, res) => {
        const data = dataController.dataMalipulationFunction('dummyData.txt');
        res.render('./home', {data})
    }
}

module.exports = { mainController };