const http = require('http');
const { MongoClient } = require('mongodb');
 
const uri = process.env.COSMOSDB_CONN_STRING || '<your-connection-string>';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
const server = http.createServer(async (req, res) => {
    try {
        await client.connect();
        const database = client.db('testdb');
        const collection = database.collection('testcollection');
        const doc = { message: 'Hello from Cosmos DB' };
        await collection.insertOne(doc);
 
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Data inserted into Cosmos DB\n');
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end('Error connecting to the database\n');
    } finally {
        await client.close();
    }
});
 
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
