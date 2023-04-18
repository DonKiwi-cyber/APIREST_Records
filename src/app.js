import express from "express"; // Biblioteca Express
import recordRoutes from "./routes/routes.js" // Ruta de las rutas (dah)

// Creación de la aplicación Express
const app = express();  

// Método para convertir peticiones en objetos JSON
app.use(express.json()); 

// Uso de las rutas (Endpoints)
app.use('/api',recordRoutes); 

//Exportación de la aplicación Express a Index.js
export default app;