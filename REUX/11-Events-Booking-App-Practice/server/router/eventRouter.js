const express = require('express');
const router = express.Router();
const Event = require('../models/Event'); // import

/*
    Usage : Get all Free Events
    URL : http://127.0.0.1:5000/events/free-events
    Method : GET
    Fields : no-fields
    ACCESS : PUBLIC
 */
router.get('/free-events', async (request , response) => {
      // Free Events Logic Start Here
    try {
        let events = await Event.find({type : 'FREE'});  // type of Event
        response.status(200).json(events);   // success responce code
    }
    catch (error) {
        response.status(500).json(error);
    }
});

/*
    Usage : Get all Pro Events
    URL : http://127.0.0.1:5000/events/pro-events
    Method : GET
    Fields : no-fields
    ACCESS : PRIVATE
 */
router.get('/pro-events', async (request , response) => {
     // Pro Events Logic Start Here
    try {
        let events = await Event.find({type : 'PRO'});  // type of Event
        response.status(200).json(events);
    }
    catch (error) {
        response.status(500).json(error);
    }
});


/*
    Usage : Upload Events
    URL : http://127.0.0.1:5000/events/upload
    Method : POST
    Fields : name , image , date , price , info , type
    ACCESS : PRIVATE
 */
router.post('/upload', async (request , response) => {
     // Upload Events Logic Start Here
    try {
        let {name , image , date , price , info , type} = request.body;
        let event = new Event({name , image , date , price , info , type});
        event = await event.save();  // for save 
        response.status(200).json(event);  // success responce code
    }
    catch (error) {
        response.status(500).json(error);   // error responce code
    }
});

module.exports = router;
