import { PORT } from "./config.js"; // Importación del puerto JS
import app from "./app.js"; // Importación de la aplicación Express

//Activación de la API
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`); //Mensaje a la terminal
});
