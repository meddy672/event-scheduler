
const events = [];

exports.createEvent = (req, res, next) => {
    console.log(req.body.name)
    res.send('Response received')
}

exports.updateEvent = (req, res, next) => {
    
}

exports.deleteEvent = (req, res, next) => {
    
}