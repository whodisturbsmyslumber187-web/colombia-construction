import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.investors': 'Investors',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.tagline': 'Luxury Construction & Resort Development',
    'hero.headline': 'Building Destinations. Delivering Certainty.',
    'hero.subheadline': '12+ Years of Excellence in Colombia',
    'hero.description': 'We are the trusted execution partner for international investors, delivering luxury resorts, hotels, and premium developments with precision, compliance, and uncompromising quality.',
    'hero.cta.primary': 'Request Investment Brief',
    'hero.cta.secondary': 'Explore Our Work',
    
    // Stats
    'stats.years': 'Years of Excellence',
    'stats.projects': 'Projects Delivered',
    'stats.investment': 'Investment Managed',
    'stats.clients': 'International Clients',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive development solutions for discerning investors',
    'services.resort.title': 'Resort & Hospitality',
    'services.resort.desc': 'Luxury resorts and boutique hotels built to international standards with meticulous attention to detail.',
    'services.commercial.title': 'Commercial & Mixed-Use',
    'services.commercial.desc': 'Premium commercial developments designed for maximum returns and long-term value appreciation.',
    'services.residential.title': 'Luxury Residential',
    'services.residential.desc': 'Exclusive residential projects featuring world-class architecture and premium finishes.',
    'services.management.title': 'Project Management',
    'services.management.desc': 'End-to-end project oversight with transparent reporting and investor-aligned execution.',
    
    // Why Choose Us
    'why.title': 'Why AUREX',
    'why.subtitle': 'Your trusted partner for development excellence in Colombia',
    'why.experience.title': '12+ Years of Execution',
    'why.experience.desc': 'Over a decade of proven success navigating Colombia\'s regulatory landscape and delivering exceptional projects.',
    'why.compliance.title': 'Regulatory Mastery',
    'why.compliance.desc': 'Deep expertise in Colombian construction laws, permits, and compliance requirements.',
    'why.delivery.title': 'On-Time Delivery',
    'why.delivery.desc': 'Predictable timelines with rigorous project management and milestone tracking.',
    'why.quality.title': 'Uncompromising Quality',
    'why.quality.desc': 'Elite craftsmanship meeting international luxury standards on every project.',
    
    // Investors
    'investors.title': 'For Investors',
    'investors.subtitle': 'Partner with confidence in Colombia\'s premier development firm',
    'investors.cta': 'Request Investor Deck',
    'investors.why.title': 'Why Colombia',
    'investors.why.desc': 'Strategic location, growing tourism sector, favorable investment climate, and untapped luxury market potential.',
    'investors.risk.title': 'Risk Mitigation',
    'investors.risk.desc': 'Comprehensive due diligence, regulatory compliance, and transparent governance at every stage.',
    
    // Contact
    'contact.title': 'Start Your Project',
    'contact.subtitle': 'Let\'s discuss how we can bring your vision to life',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company / Organization',
    'contact.form.type': 'Inquiry Type',
    'contact.form.type.investor': 'Investor Inquiry',
    'contact.form.type.developer': 'Developer Partnership',
    'contact.form.type.hospitality': 'Hospitality Group',
    'contact.form.type.other': 'Other',
    'contact.form.message': 'Tell us about your project',
    'contact.form.submit': 'Send Inquiry',
    'contact.success': 'Thank you for your inquiry. Our team will contact you within 24 hours.',
    
    // Footer
    'footer.tagline': 'Where Vision Meets Precision',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.investors': 'Inversionistas',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.tagline': 'Construcción de Lujo y Desarrollo de Resorts',
    'hero.headline': 'Construyendo Destinos. Entregando Certeza.',
    'hero.subheadline': '12+ Años de Excelencia en Colombia',
    'hero.description': 'Somos el socio de ejecución de confianza para inversionistas internacionales, entregando resorts de lujo, hoteles y desarrollos premium con precisión, cumplimiento y calidad sin compromisos.',
    'hero.cta.primary': 'Solicitar Información de Inversión',
    'hero.cta.secondary': 'Explorar Nuestro Trabajo',
    
    // Stats
    'stats.years': 'Años de Excelencia',
    'stats.projects': 'Proyectos Entregados',
    'stats.investment': 'Inversión Gestionada',
    'stats.clients': 'Clientes Internacionales',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones integrales de desarrollo para inversionistas exigentes',
    'services.resort.title': 'Resort y Hospitalidad',
    'services.resort.desc': 'Resorts de lujo y hoteles boutique construidos con estándares internacionales y atención meticulosa al detalle.',
    'services.commercial.title': 'Comercial y Uso Mixto',
    'services.commercial.desc': 'Desarrollos comerciales premium diseñados para máximos retornos y apreciación de valor a largo plazo.',
    'services.residential.title': 'Residencial de Lujo',
    'services.residential.desc': 'Proyectos residenciales exclusivos con arquitectura de clase mundial y acabados premium.',
    'services.management.title': 'Gestión de Proyectos',
    'services.management.desc': 'Supervisión integral con reportes transparentes y ejecución alineada con inversionistas.',
    
    // Why Choose Us
    'why.title': 'Por Qué AUREX',
    'why.subtitle': 'Su socio de confianza para la excelencia en desarrollo en Colombia',
    'why.experience.title': '12+ Años de Ejecución',
    'why.experience.desc': 'Más de una década de éxito comprobado navegando el panorama regulatorio de Colombia.',
    'why.compliance.title': 'Dominio Regulatorio',
    'why.compliance.desc': 'Profunda experiencia en leyes de construcción, permisos y requisitos de cumplimiento colombianos.',
    'why.delivery.title': 'Entrega a Tiempo',
    'why.delivery.desc': 'Cronogramas predecibles con gestión rigurosa y seguimiento de hitos.',
    'why.quality.title': 'Calidad Sin Compromisos',
    'why.quality.desc': 'Artesanía de élite cumpliendo estándares internacionales de lujo en cada proyecto.',
    
    // Investors
    'investors.title': 'Para Inversionistas',
    'investors.subtitle': 'Asóciese con confianza con la firma de desarrollo premier de Colombia',
    'investors.cta': 'Solicitar Deck de Inversión',
    'investors.why.title': 'Por Qué Colombia',
    'investors.why.desc': 'Ubicación estratégica, sector turístico en crecimiento, clima de inversión favorable y potencial de mercado de lujo sin explotar.',
    'investors.risk.title': 'Mitigación de Riesgos',
    'investors.risk.desc': 'Due diligence integral, cumplimiento regulatorio y gobernanza transparente en cada etapa.',
    
    // Contact
    'contact.title': 'Inicie Su Proyecto',
    'contact.subtitle': 'Conversemos sobre cómo dar vida a su visión',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.company': 'Empresa / Organización',
    'contact.form.type': 'Tipo de Consulta',
    'contact.form.type.investor': 'Consulta de Inversionista',
    'contact.form.type.developer': 'Asociación de Desarrollador',
    'contact.form.type.hospitality': 'Grupo de Hospitalidad',
    'contact.form.type.other': 'Otro',
    'contact.form.message': 'Cuéntenos sobre su proyecto',
    'contact.form.submit': 'Enviar Consulta',
    'contact.success': 'Gracias por su consulta. Nuestro equipo lo contactará en 24 horas.',
    
    // Footer
    'footer.tagline': 'Donde la Visión se Encuentra con la Precisión',
    'footer.rights': 'Todos los derechos reservados',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
