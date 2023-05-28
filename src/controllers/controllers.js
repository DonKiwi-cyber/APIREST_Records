import {pool} from "../database/connection.js"; // Ruta de la conexión a la BD

// Petición para mostrar los 10 mejores records según el tiempo y la cantidad de movimientos
const getRecords = async (req, res) => 
    {
        try{
            const [rows] = await pool.query("SELECT Tiempo, No_movimientos FROM tiempos order by Tiempo, No_movimientos asc limit 10"); //Query MySQL
            res.send(rows); // Envío de records JSON
        } catch(error) {
            console.log(error);
            return res.status(500).json({ message: "algo salió mal" }); // Mensaje de error
        }
    };

// Inserción de datos a la BD
const postRecords = async (req, res) => 
    {
        try{
            const {tiempo, movimientos} = req.body; // Rescata 3 objetos del cuerpo de los valores JSON introducidos
            const [rows] =  await pool.query(
                'INSERT INTO tiempos(Tiempo, No_movimientos) VALUES (?, ?)', [tiempo, movimientos]); //Query MySQL
            res.send({
                id: rows.insertId, // Envío del atributo insertID dentro de rows
                tiempo,
                movimientos,
            }); // Mensaje enviado a la app
        } catch (error){
            console.log(error)
            return res.status(500).json({ message: "algo salió mal" }); // Mensaje de error
        }
    };

// Exportando métodos a Routes.js
export {
    getRecords,
    postRecords,
};