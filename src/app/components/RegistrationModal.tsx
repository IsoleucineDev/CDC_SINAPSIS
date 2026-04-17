import { X } from 'lucide-react';
import { useState } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [showNotAvailable, setShowNotAvailable] = useState(true);

  if (!isOpen) return null;

  const avenidas = [
    'Computación y Tecnologías de Información',
    'Ciencias Aplicadas',
    'Innovación y Transformación',
    'Bioingeniería y Procesos Químicos',
  ];

  const semestres = ['1°', '2°', '3°', '4°', '5°', '6°', '7°', '8°', '9°'];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Registration Form */}
      <div className="relative bg-[#0a0e2e] border border-white/20 rounded-xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-purple-500/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            textShadow: '0 0 20px rgba(255,255,255,0.3)',
          }}
        >
          INSCRIPCIÓN
        </h2>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-white/80 text-sm uppercase tracking-wide mb-2">
              Nombre del equipo
            </label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="Ingresa el nombre de tu equipo"
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm uppercase tracking-wide mb-2">
              Nombre del proyecto
            </label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="Ingresa el nombre de tu proyecto"
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm uppercase tracking-wide mb-2">
              Integrantes
            </label>
            <textarea
              rows={4}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
              placeholder="Nombres de los integrantes (uno por línea)"
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm uppercase tracking-wide mb-2">
              Avenida
            </label>
            <select className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors">
              <option value="" className="bg-[#0a0e2e]">
                Selecciona una avenida
              </option>
              {avenidas.map((avenida) => (
                <option key={avenida} value={avenida} className="bg-[#0a0e2e]">
                  {avenida}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white/80 text-sm uppercase tracking-wide mb-2">
              Semestre
            </label>
            <select className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors">
              <option value="" className="bg-[#0a0e2e]">
                Selecciona tu semestre
              </option>
              {semestres.map((sem) => (
                <option key={sem} value={sem} className="bg-[#0a0e2e]">
                  {sem}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-white/80 text-sm uppercase tracking-wide mb-2">
              Escuela / Institución
            </label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors"
              placeholder="Nombre de tu institución"
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm uppercase tracking-wide mb-2">
              ¿Necesitas extensiones o algo específico?
            </label>
            <textarea
              rows={3}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors resize-none"
              placeholder="Especifica tus necesidades (opcional)"
            />
          </div>

          <button
            type="button"
            onClick={() => setShowNotAvailable(true)}
            className="w-full border-2 border-white bg-transparent text-white py-4 rounded-lg uppercase tracking-widest font-semibold hover:bg-white hover:text-[#0a0e2e] transition-all duration-300"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Enviar Inscripción
          </button>
        </form>
      </div>

      {/* Not Available Overlay */}
      {showNotAvailable && (
        <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setShowNotAvailable(false)}
          />
          <div className="relative bg-gradient-to-br from-purple-900/90 to-blue-900/90 border-2 border-white/30 rounded-xl p-8 max-w-md w-full text-center shadow-2xl">
            <div className="text-6xl mb-4">🚧</div>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Inscripciones aún no disponibles
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              ¡Muy pronto abriremos el registro! Síguenos en Instagram para estar al tanto.
            </p>
            <button
              onClick={() => setShowNotAvailable(false)}
              className="border-2 border-white bg-transparent text-white px-8 py-3 rounded-lg uppercase tracking-wider font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
