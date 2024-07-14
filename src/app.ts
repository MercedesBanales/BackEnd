import express from 'express';
import corsMiddleware from 'cors';
import contactsRoutes from './routes/contactsRoutes';
import usersRoutes from './routes/usersRoutes';
import authenticationRoutes from './routes/authenticationRoutes';
import { dbSync, sequelize } from "./config/database"
import { Contact } from './dataAccess/models/Contact';
import path from 'path';
import { User } from './dataAccess/models/User';

const app = express();
const port = 3000;
const imagePath = path.join(__dirname, 'BackEnd', 'contactImages');

const main = async () => {
    try {
		await dbSync();
        console.log('Database synced');
    } catch (error: any) {
        console.log(error)
    }

    app.use(corsMiddleware({
        origin: 'http://localhost:3001',
        methods: 'GET,POST,PUT,DELETE',
        credentials: true
    }));

    app.use('/contactImages', express.static(imagePath));
    app.use(express.json());
    app.use("/api", contactsRoutes);
    app.use("/api", usersRoutes);
    app.use("/api", authenticationRoutes);

    // await Contact.destroy({
    //     where: {}, // An empty 'where' object means no conditions, so all records will be deleted
    //     truncate: true // This option ensures the table is truncated, resetting any auto-increment counters
    //   });

    // Default route handler
    app.get("/", (req, res) => {
        res.send('Main');
    });
    
    app.listen(port, async () => {
        console.log(`Server running on http://localhost:${port}`)
        try {
			await sequelize.authenticate();
			console.log(
				"La conexión con la base de datos ha sido establecida correctamente.",
			);
		} catch (error) {
			console.error("No se pudo conectar a la base de datos:", error);
		}
    })
};

main();
