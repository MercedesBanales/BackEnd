import express from 'express';
import contactsRoutes from './routes/contactsRoutes';
import usersRoutes from './routes/usersRoutes';
import authenticationRoutes from './routes/authenticationRoutes';

const app = express();
const port = 3000;
const main = async () => {
    app.use(express.json());
    app.use("/api", contactsRoutes);
    app.use("/api", usersRoutes);
    app.use("/api", authenticationRoutes);

    // Default route handler
    app.get("/", (req, res) => {
        res.send('Main');
    });
    
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
};

main();