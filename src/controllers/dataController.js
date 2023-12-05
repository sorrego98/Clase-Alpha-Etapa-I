const path = require("path");
const fs = require("fs");

const dataController = {
    readFileFunction: (file) => {
        try {
            const doc = fs.readFileSync(path.resolve(__dirname, '../data/' + file), 'utf8');
            return doc;
        } catch (error) {
            console.error('Error con la lectura del archivo:', error);
            return null;
        }
    },
    dataMalipulationFunction: (file) => {
        const data = dataController.readFileFunction(file);
        const separatedData = data.split('\n');
        const newData = separatedData.map(dataByLine => {
            const [id, name, percentage, timesVoted] = dataByLine.split('#');
            return {
                id: Number(id),
                name: name.trim(),
                percentage: Number(percentage),
                timesVoted: Number(timesVoted)
            }
        })
        return newData;
    }
}

module.exports = { dataController };