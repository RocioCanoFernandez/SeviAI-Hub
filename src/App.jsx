import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, Calendar, ArrowRight, Facebook, Star, MessageCircle, Download, ChevronDown, CheckCircle, Briefcase, Zap, Rocket, GraduationCap, BarChart } from 'lucide-react';

const AccordionItem = ({ title, icon: Icon, children, isOpen, onClick }) => (
  <div className={`border rounded-[20px] backdrop-blur-md overflow-hidden transition-all duration-300 mb-4 shadow-lg ${isOpen ? 'border-red-500/50 bg-slate-900/60' : 'border-white/10 bg-slate-800/40 hover:bg-slate-800/60'}`}>
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between p-5 text-left text-white transition-colors group"
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors ${isOpen ? 'bg-red-600/30 text-red-400 border-red-500/50' : 'bg-white/5 text-slate-300 border-white/10 group-hover:bg-white/10'}`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="font-bold text-lg">{title}</span>
      </div>
      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} />
    </button>
    <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 px-5 pt-0'} overflow-hidden`}>
      <div className="text-slate-300 pt-4 border-t border-white/10">
        {children}
      </div>
    </div>
  </div>
);

const SeviAIHub = () => {
  const [openAccordion, setOpenAccordion] = useState('estrella'); // 'estrella' opens by default

  const handleSaveContact = () => {
    // Para asegurar 100% de compatibilidad con Contactos de Windows (que es muy especialito con los acentos UTF-8)
    // la forma más segura y profesional es quitar las tildes internamente en el archivo.
    const vcard = `BEGIN:VCARD\r\nVERSION:3.0\r\nN:Cano;Rocio;;;\r\nFN:Rocio Cano\r\nORG:SeviAI\r\nTITLE:Consultora Estrategica en IA para PYMES\r\nTEL;TYPE=WORK,VOICE:+34640316034\r\nEMAIL:rocio@seviai.es\r\nURL:https://hub.seviai.es/\r\nEND:VCARD`;
    
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rocio_Cano.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-red-600 selection:text-white relative bg-slate-800">
      {/* BACKGROUND IMAGE OVERLAY */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/loop-copia.jpg')",
        }}
      >
        {/* Glass gradient overlay to make text readable (lightened from black to slate) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/60 to-slate-900/90 backdrop-blur-[2px]"></div>
      </div>

      {/* MAIN CONTAINER (Single Column) */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-12 md:py-16 flex flex-col items-center">
        
        {/* BRAND TAG */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-950/50 text-red-300 text-[10px] font-black mb-8 border border-red-900/50 shadow-sm uppercase tracking-[0.15em] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
          Consultoría Estratégica B2B
        </div>

        {/* HERO SECTION */}
        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] overflow-hidden mb-10 shadow-2xl relative">
          {/* Panoramic Photo */}
          <div className="w-full h-64 sm:h-72 bg-slate-800 relative overflow-hidden">
            <img 
              src="/hero.jpg" 
              alt="Rocío Cano Ponencia" 
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('bg-gradient-to-tr', 'from-red-900', 'to-slate-800');
              }}
            />
            {/* Gradient to blend image with content */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          </div>

          {/* Profile & Logo */}
          <div className="px-6 pb-8 pt-0 relative -mt-16 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl bg-slate-50 mb-4 z-10 relative">
              <img
                src="/rocio-headshot.JPG"
                alt="Rocío Cano"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://ui-avatars.com/api/?name=Roc%C3%ADo&background=C8202F&color=fff";
                }}
              />
              {/* Removed the green dot per user request */}
            </div>
            
            <img
              src="/SeviAI-asesoría y formación_horizontal_sin_fondo.png"
              alt="SeviAI Logo"
              className="h-16 sm:h-20 w-auto object-contain brightness-0 invert opacity-100 mb-5"
            />
            
            <h1 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
              La IA no va de acumular herramientas.
            </h1>
            <p className="text-red-200 font-medium text-sm sm:text-base max-w-md mx-auto">
              Va de ordenar tecnología, personas y decisiones.
            </p>
          </div>
        </div>

        {/* CALENDAR - PRIMARY ACTION */}
        <a href="https://cal.com/rocio-cano-seviai" className="w-full block bg-white rounded-[30px] p-6 shadow-2xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(200,32,47,0.5)] transition-all duration-500 group border-b-4 border-red-600 relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
            <Calendar className="w-32 h-32 text-red-900" />
          </div>
          <div className="flex items-center gap-5 relative">
            <div className="bg-red-50 text-[#C8202F] p-4 rounded-[20px] group-hover:rotate-12 transition-transform shadow-sm">
              <Calendar className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#C8202F] transition-colors leading-tight mb-1">Agenda tu llamada</h3>
              <p className="text-slate-500 text-sm font-medium">Reunión estratégica gratuita de 30 min.</p>
            </div>
          </div>
        </a>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>

        {/* SERVICES ACCORDIONS */}
        <div className="w-full flex flex-col mb-8">
          <h2 className="text-white font-black text-xl mb-6 text-center uppercase tracking-widest text-[11px] opacity-80 drop-shadow-md">
            Nuestros Servicios
          </h2>

          <AccordionItem 
            title="El Programa Estrella" 
            icon={Star} 
            isOpen={openAccordion === 'estrella'}
            onClick={() => toggleAccordion('estrella')}
          >
            <div className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed">
                <strong className="text-white">Método SeviAI 360º:</strong> Nuestra solución integral como directores de orquesta de la IA en tu empresa. Incluye auditoría profunda, formación de equipos, implementación técnica y blindaje legal/seguridad.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <a href="https://formaciones.seviai.es" className="flex items-center justify-center gap-2 bg-[#C8202F] hover:bg-[#A51A27] text-white p-3 rounded-xl font-bold text-sm transition-colors shadow-lg">
                  <BarChart className="w-4 h-4" />
                  Solicitar Diagnóstico
                </a>
                <a href="https://www.seviai.es/metodo-seviai-360/" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 p-3 rounded-xl font-bold text-sm transition-colors">
                  <Briefcase className="w-4 h-4" />
                  Ver Método Completo
                </a>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Soluciones 'Llave en Mano'" 
            icon={Zap} 
            isOpen={openAccordion === 'llave'}
            onClick={() => toggleAccordion('llave')}
          >
            <div className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed mb-2 text-slate-300">
                Productos empaquetados y listos para funcionar con impacto y beneficio inmediato en tu facturación o gestión:
              </p>
              
              <a href="https://soluciones.seviai.es/" className="block bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-4 border border-white/5">
                <h4 className="text-white font-bold mb-1 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400"/> Sistema de Reservas</h4>
                <p className="text-xs text-slate-400">Asistente IA para alojamientos turísticos que gestiona clientes 24/7.</p>
              </a>

              <a href="https://tu-hub-facil.lovable.app" className="block bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-4 border border-white/5">
                <h4 className="text-white font-bold mb-1 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400"/> Automatización de Facturas</h4>
                <p className="text-xs text-slate-400">La IA extrae y clasifica tus facturas olvidándote del papeleo.</p>
              </a>

              <a href="https://tu-hub-facil.lovable.app" className="block bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-4 border border-white/5">
                <h4 className="text-white font-bold mb-1 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400"/> Tu Hub Corporativo (NFC)</h4>
                <p className="text-xs text-slate-400">Tu ecosistema digital para compartir tu contacto con solo acercar el móvil.</p>
              </a>
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Servicios 'A la Carta'" 
            icon={Rocket} 
            isOpen={openAccordion === 'carta'}
            onClick={() => toggleAccordion('carta')}
          >
            <div className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed mb-2 text-slate-300">
                Para negocios que buscan una solución concreta o puntual para resolver cuellos de botella específicos:
              </p>
              
              <a href="https://cal.com/rocio-cano-seviai/60min" className="group flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/5 transition-colors">
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Consultoría Estratégica</h4>
                  <p className="text-xs text-slate-400">Sesiones 1 a 1 por horas.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors" />
              </a>

              <a href="https://www.seviai.es/formacion-ia/" className="group flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/5 transition-colors">
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Formación In-Company</h4>
                  <p className="text-xs text-slate-400">Cursos cerrados y bonificables.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors" />
              </a>

              <a href="https://www.seviai.es/servicios/" className="group flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/5 transition-colors">
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Desarrollo a Medida</h4>
                  <p className="text-xs text-slate-400">Soluciones entrenadas con tus datos.</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors" />
              </a>
            </div>
          </AccordionItem>

        </div>

        {/* CONTACT & SOCIALS */}
        <div className="w-full bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 mt-4 flex flex-col gap-8 shadow-2xl">
          <div className="text-center flex flex-col gap-2">
            <span className="text-red-300 font-black text-[10px] uppercase tracking-[0.35em] block">CONOCIMIENTO & CONTACTO</span>
            <p className="text-white text-sm font-medium opacity-80">Sígueme y contáctame para aplicar IA a tu negocio.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a href="https://wa.me/message/HUZQ5TAK3ROOE1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl transition-all font-bold text-sm">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a href="mailto:rocio@seviai.es" className="flex items-center justify-center gap-2 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl transition-all font-bold text-sm">
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://linkedin.com/company/ia-sevilla" className="w-14 h-14 bg-white/10 hover:bg-white hover:text-[#0A66C2] text-white transition-all rounded-full flex items-center justify-center border border-white/10 shadow-lg">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/rociocano.ia/" className="w-14 h-14 bg-white/10 hover:bg-white hover:text-[#E4405F] text-white transition-all rounded-full flex items-center justify-center border border-white/10 shadow-lg">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/asesoriaia" className="w-14 h-14 bg-white/10 hover:bg-white hover:text-[#1877F2] text-white transition-all rounded-full flex items-center justify-center border border-white/10 shadow-lg">
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          <a href="https://search.google.com/local/writereview?placeid=ChIJ-fSgQlCXyIcROqGvv0X8eyI&source=g.page.m._&laa=merchant-review-solicitation" className="flex items-center justify-center gap-3 py-5 bg-white text-slate-900 hover:bg-red-50 rounded-[20px] transition-all font-black uppercase text-[10px] tracking-[0.15em] shadow-xl border-b-4 border-slate-200 active:translate-y-1">
            <Star className="w-5 h-5 text-yellow-500 fill-current" />
            Escribir reseña en Google
          </a>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col items-center justify-center gap-3 mt-12 mb-20 opacity-60 hover:opacity-100 transition-opacity">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white drop-shadow-md">
            © 2026 Rocío Cano
          </p>
          <div className="w-10 h-px bg-white/20 my-1"></div>
          <a href="https://seviai.es/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.2em] font-black text-white flex items-center gap-2 drop-shadow-md hover:text-red-300 transition-colors">
            SeviAI Ecosystem
            <img src="/logo_sin_fondo.png" alt="SeviAI" className="h-5 w-auto brightness-0 invert opacity-90" />
          </a>
        </div>

      </div>

      {/* Floating Save Contact Button */}
      <button
        onClick={handleSaveContact}
        className="fixed top-6 left-6 lg:top-6 lg:right-6 lg:left-auto lg:bottom-auto w-14 h-14 bg-white text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 group border-2 border-red-100 cursor-pointer"
        title="Descargar Contacto"
        aria-label="Descargar Contacto"
      >
        <Download className="w-6 h-6 group-hover:text-[#C8202F] transition-colors" />
      </button>

    </div>
  );
};

export default SeviAIHub;
