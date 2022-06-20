const fs = require('fs').promises;

const getTalkers = async (_req, res) => {
    const talkers = await fs.readFile('./talker.json', 'utf8', (err, data) => {
      console.log(data);
    });
    const result = JSON.parse(talkers);
    return res.status(200).json(result);
};

module.exports = getTalkers;
