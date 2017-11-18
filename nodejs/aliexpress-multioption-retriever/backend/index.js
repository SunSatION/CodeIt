
const rethinkdb = require('rethinkdb');

var counter = 0;

function keepPutting(con) {
    rethinkdb.table("tuples").insert({ "att": "wake me up when september ends " + counter, "timestamp" : new Date().toISOString() }).run(con, (err, result) => {
        if (err)
            console.log(err);
        console.log(result);
    });
    console.log(counter)
    counter++;
}

rethinkdb.connect({"host": "192.168.1.106", "db": "test"}).then((con) => {
    console.log(con);
    setInterval(keepPutting, 2000, con)

} )