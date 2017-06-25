var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var staffMemberNameValidator = [
    function (val) {
        return (val.length > 0 && val.toLocaleLowerCase() != 'none')
    },
    // Custom error text...
    'Select a valid staff member name.' ];

var requiredStringValidator = [
    function (val) {
        var testVal = val.trim();
        return (testVal.length > 0)
    },
    // Custom error text...
    '{PATH} cannot be empty' ];

var hmpSchema = new Schema({
    staffMemberName: {
        type: String,
        required: true,
        validate: staffMemberNameValidator },
    taskNotes: {
        type: String,
        required: true,
        validate: requiredStringValidator },
    taskCompleted: {
        type: Boolean,
        default: false},
    createdOn: { type: Date, default: Date.now }
});

// Export model...
module.exports = mongoose.model( 'Hmp', hmpSchema );