import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div>
        <h1 className="text-3xl font-bold">Acerca de Nosotros</h1>
        <p>Esta es la página Acerca de Nosotros.</p>
        {/* Enlace a la página "Team" */}
        <Link to="/about/team" className="text-blue-600 hover:underline">
            Conocer al Equipo
        </Link>
        </div>
    );
};

export default About;
