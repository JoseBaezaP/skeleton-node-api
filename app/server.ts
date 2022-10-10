import app from "./app";
import { setupDB } from "./db";


async function main() {
    try {

        await setupDB();
        app.listen(3000)

        console.log("el server esta corriendasso")
    } catch (error) {
        console.log("esta onda no jalo")
    }
}


main();