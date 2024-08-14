import express from 'express';
import { Worker, isMainThread } from 'node:worker_threads';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(express.json());
app.get('/api', (req, res) => {
    if (isMainThread) {
        const worker = new Worker('./worker.js');  // Point to the worker file
        worker.on('message', message => {
            console.log('Worker message:', message);
        });
    }
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log('Server started on port ', PORT);
});
