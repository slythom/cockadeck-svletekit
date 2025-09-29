import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { card } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';
// TODO: typage / validation

export const actions = {
    search: async ({ request, fetch }) => {
        // TODO get formdata to build API endpoint 
        const data = await request.formData();
        const quantity = data.get('quantity');
        const setcode = data.get('setcode');
        const collectornumber = data.get('collectornumber');

        const api_url = `https://api.scryfall.com/cards/${setcode}/${collectornumber}`
        const res = await fetch(api_url)
        console.log("données récupérées de l'API :", res)

        if (!res.ok) {
            return { success: false, status: res.status };
        }

        const card = await res.json();
        if (!card) {
            return { success: false, context: 'search', error: 'Scryfall 404' }
        }
        return { success: true, card, quantity, setcode };
    },

    save: async ({ request }) => {
        const data = await request.formData();

        const name = String(data.get('name') ?? '');
        const setcode = String(data.get('setcode') ?? '');
        const collectornumber = String(data.get('collectornumber') ?? '');
        const image_uri = String(data.get('image_uri') ?? '');
        const quantity = Number(data.get('quantity') ?? '');

        const saved = await db.insert(card).values({
            name,
            setcode,
            collectornumber,
            image_uri,
            quantity
        });

        if (!saved) {
            return { success: false, context: 'save', error: "Fail to save" };
        }

        return { success: true, context: 'save' };
    },

    export: async ({ request }) => {
        const savedcards = await db.select({
            name: card.name,
            quantity: card.quantity,
        }).from(card).execute();
        console.log(savedcards)

        if (!savedcards) {
            return { success: false, context: 'export', error: "Fail to fetch cards" };
        }

        return { success: true, context: 'export' };
    }
    // TODO: add js to xml conversion and export file


}
export const load: PageServerLoad = async ({ params }) => {
    const rows = await db.select().from(card);
    return { rows };
};