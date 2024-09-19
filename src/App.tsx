// App.tsx
import React from 'react';
import PLP from './components/plp'; // Asegúrate de que esta ruta sea correcta

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Tienda</h1>
      </header>

      {/* Aquí renderizamos el componente PLP */}
      <PLP />

    </div>
  );
}

export default App;
