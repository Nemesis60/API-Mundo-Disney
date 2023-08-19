const fs = require("fs");
const epxress = require("express");
const router = epxress.Router();

//get the absolute path
const pathRouter = `${__dirname}`;
//this function allow to return just the name of the route and avoid .js
const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

//With this avoid to have a bunch of routes in index app because with this the routes are dinamic
fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file);
    const skip = ["index"].includes(fileWithOutExt);
    if (!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`));
        //routes --> auth, characters, movies_series
    }
})
//When a route is incorrect just return 404 response
router.get('*', (req, res) => {
    res.status(404);
    res.send({ error: 'Not found' });
})

module.exports = router;