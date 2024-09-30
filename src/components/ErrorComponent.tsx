type ErrorComponentProps = {
    message: string;
  };
  
  const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => (
    <div className="error">
      <h2>Error al cargar</h2>
      <p>{message}</p>
    </div>
  );
  
  export default ErrorComponent;
  