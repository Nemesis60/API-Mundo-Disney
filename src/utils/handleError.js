const handleError = (err, req, res, next) => {
    console.error(err.stack); // print the error in the console for depuration

    if (err.name === 'SequelizeValidationError') {
        // handle errors of sequelize validation
        const errors = err.errors.map(error => ({
            field: error.path,
            message: error.message
        }));
        return res.status(400).json({ errors });
    }

    if (err.name === 'NotFoundError') {
        // handle errors of not founded resources
        return res.status(404).json({ error: err.message });
    }

    // handle others internal errors
    const statusCode = err.statusCode || 500; // predeterminated code: 500
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ error: message });
};

module.exports = handleError;