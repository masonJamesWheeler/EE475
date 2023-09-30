import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import dotenv from 'dotenv';

dotenv.config();  // This loads the .env file

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // You don't need the `env` configuration here, just delete it.
    // Vite will automatically expose any environment variable starting with "VITE_" to your frontend code.
  },
  preprocess: preprocess()
};

export default config;
