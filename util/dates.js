const moment = require('moment');


/**
 * simple function to format dates
 */
exports.formatDate = (date) => {
    const format = "YYYY-MM-DD HH:mm:ss";
    const formattedDate  =  new Date(date);
    return moment(formattedDate).format(format);
}