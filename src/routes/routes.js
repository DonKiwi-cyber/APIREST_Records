import { Router } from "express"; // Biblioteca para la creación de rutas
import { 
    getRecords, 
    postRecords
    } 
from "../controllers/controllers.js"; // Ruta de los controladores

//Iniciación del router
const router = Router(); 

//Endpoints para app cliente
router.get('/records', getRecords); //Método GET (Obtener datos)
router.post('/records', postRecords); //Método POST (Crear un dato)

// Exportación del Router a app.js
export default router;