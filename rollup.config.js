import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Obtener el directorio actual en entorno de módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Obtener todos los archivos de componentes
const componentFiles = glob.sync('src/components/**/*.ts').filter(
	file => !file.endsWith('.stories.ts') && !file.endsWith('.css.lit.ts')
);

// Crear un archivo de entrada que exporte todos los componentes
const indexContent = componentFiles
	.map(file => {
		const relativePath = path.relative('src', file).replace(/\.ts$/, '');
		return `export * from './${relativePath}';`;
	})
	.join('\n');

// Escribir el archivo de índice
if (!fs.existsSync('src')) {
	fs.mkdirSync('src');
}
fs.writeFileSync('src/index.ts', indexContent);

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/bundle.js',
			format: 'es',
			sourcemap: true
		},
		{
			file: 'dist/bundle.umd.js',
			format: 'umd',
			name: 'WebComponents',
			globals: {
				lit: 'lit'
			},
			sourcemap: true
		}
	],
	external: ['lit'],
	plugins: [
		resolve(),
		typescript({
			tsconfig: './tsconfig.json',
			declaration: true,
			declarationDir: 'dist/types'
		}),
		postcss({
			minimize: true,
			inject: false
		})
	]
};