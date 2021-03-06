var DataStore = require('nedb');

var db = new DataStore({ filename: './data_stores/logs.db' });

db.loadDatabase();

function addDocument() {
    alert('');
    var doc = {
        hello: 'world',
        n: 5,
        today: new Date(),
        nedbIsAwesome: true,
        notthere: null,
        notToBeSaved: undefined // Will not be saved
            ,
        fruits: ['apple', 'orange', 'pear'],
        infos: { name: 'nedb' }
    };

    db.insert(doc, function(err, newDoc) { // Callback is optional
        // newDoc is the newly inserted document, including its _id
        // newDoc has no key called notToBeSaved since its value was undefined
    });
}