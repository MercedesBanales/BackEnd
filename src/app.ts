import express from 'express';
import contactsRoutes from './routes/contactsRoutes';
import usersRoutes from './routes/usersRoutes';

const app = express();
const port = 3000;
const main = async () => {
    app.use(express.json());
    app.use("/api", contactsRoutes);
    app.use("/api", usersRoutes);

    // Default route handler
    app.get("/", (req, res) => {
        res.send('Main');
    });
    
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
};

main();