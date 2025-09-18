import type { Actions } from './$types';

export const actions = {
	get: async ({request}) => {
		// TODO get formdata to build API endpoint 
	},
	search: async ({request}) => {
		// TODO fetch API
	},
    save: async ({request}) => {
		// TODO if the result is OK, the user click a button to save the card data (image, quantity...) into the SQLite DB
	}
} satisfies Actions;