const express = require("express");
const router = express.Router();

const uploadController = require("../controller/uploadControlller");

router.post('/', uploadController.uploadFile, (req, res) => {
    // El archivo cargado está disponible en req.file
    // Procesa el archivo cargado y envía una respuesta
    res.json({ message: 'Archivo cargado exitosamente' });
  });

module.exports = router;