import { createPool } from "mysql2/promise"; // Importación del objeto para la conexióna MySQL en base a parámetros definidos
import {
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
} from "../config.js" // Importación de los atributos de la BD

// Conexión y exportación a controllers.js de la BD por medio de sus parámetros
export const pool = createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD
})
