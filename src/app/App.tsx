import { useState } from 'react';
import { Starfield } from './components/Starfield';
import { Navbar } from './components/Navbar';
import { Countdown } from './components/Countdown';
import { RegistrationModal } from './components/RegistrationModal';
import { ChevronDown } from 'lucide-react';

export default function App() {
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [expandedAvenida, setExpandedAvenida] = useState<number | null>(null);

  const scrollToNext = () => {
    const countdown = document.getElementById('countdown');
    if (countdown) {
      countdown.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const avenidas = [
    {
      title: 'Computación y Tecnologías de Información',
      careers: [
        'Ing. en Robótica y Sistemas Digitales',
        'Ing. en Tecnologías Computacionales',
        'Ing. en Transformación Digital de Negocios',
      ],
    },
    {
      title: 'Ciencias Aplicadas',
      careers: ['(Carreras pendientes de definir)'],
    },
    {
      title: 'Innovación y Transformación',
      careers: [
        'Ing. en Innovación y Desarrollo',
        'Ing. Biomédico',
        'Ing. Mecánico',
        'Ing. Civil',
        'Ing. en Mecatrónica',
        'Ing. en Electrónica',
        'Ing. Industrial y de Sistemas',
      ],
    },
    {
      title: 'Bioingeniería y Procesos Químicos',
      careers: [
        'Ing. en Biotecnología',
        'Ing. en Alimentos',
        'Ing. en Procesos Químicos Sustentables',
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Starfield />
      <Navbar onOpenRegistration={() => setRegistrationOpen(true)} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-white/70 text-sm sm:text-base uppercase tracking-widest mb-6 animate-fade-in">
            Intercambio, divulgación y comunidad científica. Únete.
          </p>

          <h1
            className="text-6xl sm:text-8xl md:text-9xl font-black text-white mb-4 animate-glow"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(160,168,255,0.4)',
              animation: 'pulse-glow 3s ease-in-out infinite',
            }}
          >
            CDC
          </h1>

          <p className="text-white/90 text-xl sm:text-2xl tracking-wide mb-8">
            Congreso de Ciencias
          </p>

          {/* Constellation lines decoration */}
          <div className="relative h-20 mb-8">
            <svg
              className="absolute inset-0 w-full h-full opacity-40"
              viewBox="0 0 200 80"
            >
              <circle cx="30" cy="20" r="2" fill="white" />
              <circle cx="80" cy="35" r="2" fill="white" />
              <circle cx="120" cy="15" r="2" fill="white" />
              <circle cx="170" cy="40" r="2" fill="white" />
              <circle cx="100" cy="60" r="2" fill="white" />
              <line
                x1="30"
                y1="20"
                x2="80"
                y2="35"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="80"
                y1="35"
                x2="120"
                y2="15"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="120"
                y1="15"
                x2="170"
                y2="40"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.3"
              />
              <line
                x1="80"
                y1="35"
                x2="100"
                y2="60"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </svg>
          </div>

          <h2
            className="text-4xl sm:text-6xl font-bold text-white tracking-[0.5em] mb-12"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 0 30px rgba(124,58,237,0.5)',
            }}
          >
            SINAPSIS
          </h2>


          <button
            onClick={scrollToNext}
            className="border-2 border-white bg-transparent text-white px-10 py-4 rounded-full uppercase tracking-widest font-semibold hover:bg-white hover:text-[#0a0e2e] transition-all duration-300 inline-flex items-center gap-2 group"
          >
            Conoce Más
            <ChevronDown
              size={20}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* Countdown Section */}
      <section id="countdown" className="relative">
        <Countdown />
      </section>

      {/* Sinapsis Section */}
      <section id="sinapsis" className="relative py-20 sm:py-32">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(160,168,255,0.3) 20px, rgba(160,168,255,0.3) 21px),
                             repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(160,168,255,0.3) 20px, rgba(160,168,255,0.3) 21px)`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2
            className="text-4xl sm:text-5xl font-bold text-white text-center mb-8"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 0 30px rgba(255,255,255,0.3)',
            }}
          >
            ¿Tienes un proyecto que te gustaría exponer?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12 text-white/80 leading-relaxed">
            <p>
              El Congreso de Ciencias CDC es un espacio dedicado al intercambio de
              conocimientos y la divulgación científica. Buscamos fomentar la comunidad
              científica estudiantil mediante la presentación de proyectos innovadores de
              todas las áreas del conocimiento.
            </p>
            <p>
              Sinapsis representa la conexión entre ideas, disciplinas y mentes brillantes.
              Es el punto de encuentro donde la ciencia, la tecnología y la innovación se
              unen para crear soluciones y compartir descubrimientos que transforman
              nuestro mundo.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="border-2 border-white bg-transparent text-white px-8 py-3 rounded-lg uppercase tracking-wider font-semibold hover:bg-white hover:text-[#0a0e2e] transition-all duration-300">
              Bases
            </button>
            <button className="border-2 border-white bg-transparent text-white px-8 py-3 rounded-lg uppercase tracking-wider font-semibold hover:bg-white hover:text-[#0a0e2e] transition-all duration-300">
              Ponentes
            </button>
            <button className="border-2 border-white bg-transparent text-white px-8 py-3 rounded-lg uppercase tracking-wider font-semibold hover:bg-white hover:text-[#0a0e2e] transition-all duration-300">
              Participantes
            </button>
          </div>
        </div>
      </section>

      {/* Avenidas Section */}
      <section id="avenidas" className="relative py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-4xl sm:text-6xl font-bold text-white text-center mb-4"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 0 30px rgba(255,255,255,0.3)',
            }}
          >
            AVENIDAS
          </h2>

          <p className="text-white/70 text-center text-sm sm:text-base uppercase tracking-widest mb-12 max-w-3xl mx-auto">
            Antes de inscribirte, revisa la avenida a la que pertenece tu carrera
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {avenidas.map((avenida, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setExpandedAvenida(expandedAvenida === index ? null : index)
                  }
                  className="w-full border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white px-6 py-6 rounded-lg hover:border-white/60 hover:bg-white/10 transition-all duration-300 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-wide">
                      {avenida.title}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`transition-transform ${
                        expandedAvenida === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {expandedAvenida === index && (
                  <div className="mt-4 bg-white/5 border border-white/20 rounded-lg p-6 backdrop-blur-sm animate-fade-in">
                    <ul className="space-y-2 text-white/80">
                      {avenida.careers.map((career, careerIndex) => (
                        <li key={careerIndex} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        const element = document.getElementById('avenidas');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="mt-4 text-white/60 hover:text-white text-sm uppercase tracking-wide transition-colors"
                    >
                      ← Volver a Avenidas
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  textShadow: '0 0 30px rgba(255,255,255,0.3)',
                }}
              >
                ¿Quiénes somos?
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Somos <strong className="text-white">SINAPSIS</strong>, un grupo
                  estudiantil del <strong className="text-white">ITESM Campus Toluca</strong> dedicado a promover la cultura científica y el intercambio de
                  conocimientos entre la comunidad estudiantil.
                </p>
                <p>
                  Nuestra misión es crear espacios donde estudiantes de todas las
                  disciplinas puedan compartir sus proyectos, investigaciones y
                  descubrimientos, fomentando así la colaboración interdisciplinaria y el
                  desarrollo de soluciones innovadoras.
                </p>
                <p>
                  Creemos en el poder de la conexión entre ideas y personas, tal como las
                  sinapsis neuronales conectan pensamientos para crear algo nuevo y
                  extraordinario.
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="aspect-square rounded-2xl border-2 border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center p-8"
                style={{
                  boxShadow: '0 0 60px rgba(124,58,237,0.3)',
                }}
              >
                <img
                  src="../imports/WhatsApp_Image_2026-04-09_at_2.20.55_AM.jpeg"
                  alt="SINAPSIS Logo"
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(160,168,255,0.5))',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-white/60 text-sm">
          <p>© 2026 CDC - Congreso de Ciencias · SINAPSIS</p>
          <p className="mt-2">
            Síguenos en{' '}
            <a
              href="https://www.instagram.com/sinapsis.ciencia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors underline"
            >
              Instagram
            </a>
          </p>
        </div>
      </footer>

      <RegistrationModal
        isOpen={registrationOpen}
        onClose={() => setRegistrationOpen(false)}
      />

      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            text-shadow: 0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(160,168,255,0.4);
          }
          50% {
            text-shadow: 0 0 60px rgba(255,255,255,0.8), 0 0 120px rgba(160,168,255,0.6);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
