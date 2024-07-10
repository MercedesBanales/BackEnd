import express from 'express';
import contactsRoute from './routes/contactsRoute';

const app = express();
const port = 3000;
const main = async () => {
    app.use(express.json());
    app.use("/api", contactsRoute);

    // Default route handler
    app.get("/", (req, res) => {
        res.send('Main');
    });
    
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
};

main();