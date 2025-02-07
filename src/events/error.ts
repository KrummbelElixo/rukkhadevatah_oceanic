import type { Client } from "oceanic.js";

export async function onError(client: Client) {
    client.on('error', async(err) => {
        console.log('Algo deu errado...', err);
    });
}