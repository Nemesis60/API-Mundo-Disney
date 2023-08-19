const multer = require("multer")
const { extname,  } = require("path")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const storagePath = path.join(__dirname, '../uploads'); // Ruta absoluta
        console.log(storagePath)
        cb(null, storagePath);
    },
    filename: function (req, file, cb) {
        const fileExtension = extname(file.originalname);
        const fileName = file.originalname.split(fileExtension)[0];

        cb(null, `${fileName}-${Date.now()}${fileExtension}`);
    },
    limits: {
        fieldSize: 10000000,
    },
})

const upload = multer({ storage: storage });

exports.uploadFile = upload.single("image");
