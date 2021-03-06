const moment = require('moment');
const { validationResult } = require('express-validator');

/**
 * helper function to format dates
 */
exports.formatDate = (date) => {
    const format = "M/D/YYYY hh:mm a";
    const formattedDate = new Date(date);
    return moment(formattedDate).format(format);
}


/**
 * helper function to check if request contains errors
 */

exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error(errors);
        const error = new Error('Validation failed, entered data is incorrect.');
        error.statusCode = 422;
        throw error;
    }
    next();
}