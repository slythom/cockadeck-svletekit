import type { Actions } from './$types';
// TODO: typage / validation

export const actions = {
    search: async ({ request, fetch }) => {
        // TODO get formdata to build API endpoint 
        const data = await request.formData();
        const quantity = data.get('quantity');
        const setcode = data.get('setcode');
        const collectornumber = data.get('collectornumber');
        const name = data.get('name');
        const image_uri = data.get('image_uri');

        const api_url = `https://api.scryfall.com/cards/${setcode}/${collectornumber}`
        const res = await fetch(api_url)
        console.log("données récupérées de l'API :", res)

        if (!res.ok) {
            return { success: false, status: res.status };
        }

        const card = await res.json();
        return { success: true, card, quantity, setcode };
    },

    save: async ({ request }) => {
        // TODO if the result is OK, the user click a button to save the card data (image, quantity...) into the SQLite DB
    }
} satisfies Actions;