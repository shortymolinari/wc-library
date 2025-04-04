import chokidar from 'chokidar';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import discardComments from 'postcss-discard-comments';

// Obtener el directorio actual en entorno de módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directorio a vigilar
const componentsDir = path.resolve(__dirname, '../src/components');

// Configuración de PostCSS
const postcssProcessor = postcss([
	tailwindcss(), // Ahora usando el plugin estándar
	discardComments(),
  ]);

// Función para transformar CSS a Lit CSS
function transformCssToLitCss(css, outputPath) {
	const litCssContent = `import { css } from 'lit';

export const styles = css\`${css}\`;
`;
	
	fs.writeFileSync(outputPath, litCssContent);
	console.log(`Generated: ${outputPath}`);
}

// Función para procesar archivos CSS
async function processCssFile(filePath) {
	try {
		// Verificar que es un archivo CSS pero no un archivo lit.ts
		if (path.extname(filePath) === '.css' && !filePath.endsWith('.lit.ts')) {
			const fileContent = fs.readFileSync(filePath, 'utf-8');
			const result = await postcssProcessor.process(fileContent, { from: filePath });
			
			// Crear el archivo de salida .css.lit.ts
			const outputPath = `${filePath}.lit.ts`;
			transformCssToLitCss(result.css, outputPath);
		}
	} catch (error) {
		console.error(`Error processing ${filePath}:`, error);
	}
}

// Procesar todos los archivos CSS existentes al inicio
const processAllCssFiles = () => {
	if (fs.existsSync(componentsDir)) {
		const walk = (dir) => {
			fs.readdirSync(dir).forEach(file => {
				const filePath = path.join(dir, file);
				const stat = fs.statSync(filePath);
				if (stat.isDirectory()) {
					walk(filePath);
				} else if (path.extname(filePath) === '.css' && !filePath.endsWith('.lit.ts')) {
					processCssFile(filePath);
				}
			});
		};
		walk(componentsDir);
	}
};

// Iniciar el observador
const startWatcher = () => {
	console.log(`Watching for CSS changes in: ${componentsDir}`);
	
	const watcher = chokidar.watch(['**/*.css', '!**/*.lit.ts'], {
		cwd: componentsDir,
		ignoreInitial: true
	});
	
	watcher
		.on('add', file => processCssFile(path.join(componentsDir, file)))
		.on('change', file => processCssFile(path.join(componentsDir, file)));
};

// Crear directorio de componentes si no existe
if (!fs.existsSync(componentsDir)) {
	fs.mkdirSync(componentsDir, { recursive: true });
	console.log(`Created components directory: ${componentsDir}`);
}

// Verificar si se está ejecutando en modo de construcción
const isBuildMode = process.argv.includes('--build');

// Ejecutar procesamiento inicial
processAllCssFiles();

// Iniciar el observador si no está en modo de construcción
if (!isBuildMode) {
	startWatcher();
}