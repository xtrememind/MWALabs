const MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const express = require('express');
const app = express();

app.get('/secret', function (req, res) {
    MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client) {
        if (err) throw err;
        const db = client.db('homework7');
        var collection = db.collection('homework7');
        collection.find().each(function (err, doc) {
            if (err) throw err;
            if (doc == null) return client.close();
            const encrypted = doc.message;
            const decipher = crypto.createDecipher('aes256', 'asaadsaad');
            let decrypted = '';
            decipher.write(encrypted, 'hex');
            decipher.on('readable', () => {
                const data = decipher.read();
                if (data)
                    decrypted += data.toString('utf8');
            });
            decipher.on('end', () => {
                console.log(decrypted);
                res.end(decrypted);
            });
            decipher.end();
        });
    });
});
app.listen(8080, () => console.log('App is listening on port 8080!'));