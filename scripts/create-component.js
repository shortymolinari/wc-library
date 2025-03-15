import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual en entorno de módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Obtener el nombre del componente de los argumentos
const componentName = process.argv[2];

if (!componentName) {
	console.error('Por favor proporciona un nombre para el componente: npm run create-component my-component');
	process.exit(1);
}

// Convierte kebab-case a PascalCase
const toPascalCase = (str) => {
	return str
		.split('-')
		.map(part => part.charAt(0).toUpperCase() + part.slice(1))
		.join('');
};

const className = toPascalCase(componentName);

// Directorio donde se crearán los componentes
const componentsDir = path.resolve(__dirname, '../src/components');
const componentDir = path.join(componentsDir, componentName);

// Crear directorio del componente si no existe
if (!fs.existsSync(componentDir)) {
	fs.mkdirSync(componentDir, { recursive: true });
	console.log(`Creado directorio: ${componentDir}`);
}

// Crear archivo principal del componente
const componentContent = `import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './${componentName}.css.lit';

@customElement('${componentName}')
export class ${className} extends LitElement {
  static styles = styles;

  render() {
    return html\`
      <div class="component-container">
        <slot></slot>
      </div>
    \`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    '${componentName}': ${className};
  }
}
`;

// Crear archivo CSS
const cssContent = `/* ${componentName}.css */
.component-container {
  @apply flex flex-col p-4 bg-white rounded-md shadow;
}
`;

// Crear archivo de Storybook
const storyContent = `import { Meta, StoryObj } from '@storybook/web-components';
import './${componentName}';

const meta: Meta = {
  title: 'Components/${className}',
  component: '${componentName}',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Define tus argTypes aquí
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    // Define tus args aquí
  },
  render: (args) => \`
    <${componentName}>
      Content goes here
    </${componentName}>
  \`,
};
`;

// Escribir archivos
fs.writeFileSync(path.join(componentDir, `${componentName}.ts`), componentContent);
fs.writeFileSync(path.join(componentDir, `${componentName}.css`), cssContent);
fs.writeFileSync(path.join(componentDir, `${componentName}.stories.ts`), storyContent);

console.log(`Componente ${componentName} creado con éxito.`);
console.log('Archivos generados:');
console.log(`- ${componentName}.ts`);
console.log(`- ${componentName}.css`);
console.log(`- ${componentName}.stories.ts`);
console.log(`El archivo ${componentName}.css.lit.ts se generará automáticamente.`);