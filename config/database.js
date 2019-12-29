var mongoose =  require ('mongoose');

mongoose.connect('mongodb://localhost/patients', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('connected',function(){
    console.log(`DB is connected to MongoDB at ${db.host}:${db.port}`)
})
