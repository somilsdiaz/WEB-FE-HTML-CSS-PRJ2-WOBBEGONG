import React from 'react';

interface PdpspecsProps {
  specTitle?: string[];
  specValue?: string[];
}

const Pdpspecs: React.FC<PdpspecsProps> = ({ specTitle, specValue }) => {
  // Si no hay especificaciones, no renderizar el componente
  if (!specTitle?.length || !specValue?.length) {
    return null;
  }

  return (
    <section className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden">
      <details className="w-full">
        <summary className="bg-[#4c37c0] text-white p-4 cursor-pointer hover:bg-[#6c52cb] transition-colors">
          <span className="font-bold">Especificaciones / Ficha Técnica</span>
        </summary>
        <div className="p-4">
          <table className="w-full border-collapse">
            <tbody>
              {specTitle.map((title, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="p-3 bg-[#8f7dd2] text-white w-1/3">{title}</td>
                  <td className="p-3 bg-[#9a8ad3] text-white w-2/3">
                    {specValue[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </section>
  );
};

export default Pdpspecs;