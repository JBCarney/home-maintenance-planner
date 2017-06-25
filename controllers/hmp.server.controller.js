var Hmp = require('../models/hmp.server.model.js');

exports.list = function (req, res) {
    var query = Hmp.find();

    query.sort({ createdOn: 'desc' })
        .limit(12)
        .exec(function (err, results) {
            res.render('index', { title: 'Home Maintenance Task List', notes: results });
        });
};

exports.filterByStaff = function (req, res) {
    var query = Hmp.find();
    var filter = req.body.staffMemberName;

    query.sort({ createdOn: 'desc' });

    if (filter.length > 0) {
        query.where({ staffMemberName: filter })
    }

    query.exec(function (err, results) {
        res.render('index', { title: 'Home Maintenance Task List', notes: results });
    });
};

exports.create = function (req, res) {
    var entry = new Hmp({
        staffMemberName: req.body.staffMemberName,
        taskNotes: req.body.taskNotes,
        taskCompleted: req.body.taskCompleted
    });

    entry.save(function (err) {
        if (err) {
            var errMsg = 'Sorry, there was an error saving the task. ' + err;
            res.render('newtask', { title: 'New Task (error)', message: errMsg });
        }
        else {
            console.log('New Home Maintenance Task was saved!');
            // Redirect to the home page to display list of notes...
            res.redirect(301, '/');
        }
    });
};

exports.getNote = function (req, res) {
    res.render('newtask', { title: 'Home Maintenance - New Task' });
}