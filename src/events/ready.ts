import type { Client } from "oceanic.js";

export async function onReady(client: Client) {
    client.once('ready', async() => {
        console.log('Pronto e operacional!');
    });
}