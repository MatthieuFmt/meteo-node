const fs = require("fs");

function createData(req, res) {
  const { temperature, windSpeed, stationName } = req.body;

  const filePath = `./data/${stationName}.json`;

  let obj = { temperature, windSpeed, stationName };

  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
      const dataArray = [];

      dataArray.push(JSON.parse(data));

      dataArray.push(obj);

      const jsonData = JSON.stringify(dataArray);

      fs.writeFile(filePath, jsonData, (err) => {
        if (err) throw err;
        res.json({ message: "Le fichier a bien été modifié." });
      });
    });
  } else {
    const objStringify = JSON.stringify(obj);
    fs.writeFile(filePath, objStringify, "utf8", function (error) {
      if (error) {
        console.error(error);
      } else {
        res.json({ message: "Le fichier a bien été créé." });
      }
    });
  }
}

function getData(req, res) {
  const slug = req.params.station;

  const filePath = `./data/${slug}.json`;

  if (fs.existsSync(filePath)) {
    const data = require(`./data/${slug}.json`);
    res.json(data);
  } else {
    res.status(404).send({ message: "Le fichier n'exsite pas." });
  }
}

module.exports = { getData, createData };
