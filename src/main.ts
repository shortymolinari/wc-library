import './styles/tailwind.css';
import './components/my-button/my-button';

// Función para cargar componentes en el DOM para pruebas
function loadComponents() {
	const app = document.querySelector<HTMLDivElement>('#app');
	if (!app) return;
	
	// Carga nuestro componente de ejemplo
	app.innerHTML = `
    <div class="component-demo bg-gray-300 rounded-lg shadow mb-4" style="padding: 1rem;">
      <h2 class="text-xl font-bold mb-2">Botón</h2>
      <div class="flex flex-wrap gap-2">
        <my-button variant="primary">Primario</my-button>
        <my-button variant="secondary">Secundario</my-button>
        <my-button variant="outline">Outline</my-button>
        <my-button size="small">Pequeño</my-button>
        <my-button size="large">Grande</my-button>
        <my-button disabled>Deshabilitado</my-button>
      </div>
    </div>
  `;
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', loadComponents);