import path from 'path';
import url from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: /@pkg\/(.*)/,
				replacement: path.resolve(__dirname, '../packages/$1/src'),
			},
		],
	},
});
