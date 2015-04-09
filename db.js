var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
  
var Project = new Schema({
    name        : String,
    bugzilla_id : String,
    description : String,
    created_at  : Date,
    FLR         : Date,
    FL          : Date,
    FC          : Date,
    CC          : Date,
    updated_at  : Date, 
    creator     : String,
    owner       : String
});

var Task = new Schema({
    summary     : String,
    bugzilla_id : String,
    project_id  : String,
    type        : String,
    description : String,
    created_at  : Date,
    updated_at  : Date,
    creator     : String,
    owner       : String,
    timespect   : String,
});

mongoose.model( 'Project', Project );
mongoose.model( 'Task', Task );
mongoose.connect( 'mongodb://localhost/fxospm' );