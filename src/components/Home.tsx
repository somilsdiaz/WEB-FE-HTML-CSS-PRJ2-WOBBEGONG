import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Página de Inicio</h1>
      <p>Bienvenido a nuestra página principal.</p>
      {/* Enlace a la página "About" */}
      <Link to="/about" className="text-blue-600 hover:underline">
        Ir a Acerca de Nosotros
      </Link>
    </div>
  );
};

export default Home;
