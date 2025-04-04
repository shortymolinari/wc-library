import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
	plugins: [
		tailwindcss(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			name: 'WebComponents',
			fileName: (format) => `web-components.${format}.js`
		},
		rollupOptions: {
			external: ['lit'],
			output: {
				globals: {
					lit: 'lit'
				}
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	}
})