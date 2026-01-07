import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Hotel, Building2, Home, ClipboardCheck, Wrench, Shield } from 'lucide-react';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectResidential from '@/assets/project-residential.jpg';
import projectHotel from '@/assets/project-hotel.jpg';
import heroImage from '@/assets/hero-resort.jpg';

const Services = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive development solutions tailored for discerning investors',
      services: [
        {
          icon: Hotel,
          title: 'Resort & Hospitality Construction',
          desc: 'From boutique hotels to large-scale resorts, we deliver hospitality projects that meet the highest international standards. Our expertise spans from initial concept to final delivery, ensuring every detail reflects luxury and functionality.',
          features: ['Luxury resort development', 'Boutique hotel construction', 'Spa & wellness facilities', 'Restaurant & amenity spaces'],
          image: projectHotel,
        },
        {
          icon: Building2,
          title: 'Commercial & Mixed-Use Developments',
          desc: 'We create commercial spaces that drive value and returns. Our mixed-use developments combine retail, office, and residential components into cohesive, profitable projects.',
          features: ['Office buildings', 'Retail complexes', 'Mixed-use developments', 'Corporate headquarters'],
          image: projectCommercial,
        },
        {
          icon: Home,
          title: 'Luxury Residential Projects',
          desc: 'Exclusive residential developments featuring world-class architecture, premium materials, and meticulous attention to detail. We create homes that define luxury living.',
          features: ['Luxury condominiums', 'Exclusive villas', 'Gated communities', 'Penthouse residences'],
          image: projectResidential,
        },
        {
          icon: ClipboardCheck,
          title: 'Design-Build & Project Management',
          desc: 'End-to-end project oversight with transparent reporting and investor-aligned execution. We manage every phase from concept to completion.',
          features: ['Full design-build services', 'Construction management', 'Quality assurance', 'Timeline & budget control'],
          image: heroImage,
        },
      ],
      approach: {
        title: 'Our Approach',
        items: [
          { icon: Wrench, title: 'Precision Execution', desc: 'Every project is executed with meticulous attention to detail and adherence to the highest construction standards.' },
          { icon: Shield, title: 'Risk Mitigation', desc: 'Comprehensive risk management ensures predictable outcomes and protected investments at every stage.' },
        ],
      },
      cta: 'Discuss Your Project',
    },
    es: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones integrales de desarrollo diseñadas para inversionistas exigentes',
      services: [
        {
          icon: Hotel,
          title: 'Construcción de Resorts y Hospitalidad',
          desc: 'Desde hoteles boutique hasta resorts de gran escala, entregamos proyectos de hospitalidad que cumplen con los más altos estándares internacionales. Nuestra experiencia abarca desde el concepto inicial hasta la entrega final.',
          features: ['Desarrollo de resorts de lujo', 'Construcción de hoteles boutique', 'Instalaciones de spa y bienestar', 'Restaurantes y amenidades'],
          image: projectHotel,
        },
        {
          icon: Building2,
          title: 'Desarrollos Comerciales y de Uso Mixto',
          desc: 'Creamos espacios comerciales que impulsan valor y retornos. Nuestros desarrollos de uso mixto combinan componentes de retail, oficinas y residencial en proyectos cohesivos y rentables.',
          features: ['Edificios de oficinas', 'Complejos comerciales', 'Desarrollos de uso mixto', 'Sedes corporativas'],
          image: projectCommercial,
        },
        {
          icon: Home,
          title: 'Proyectos Residenciales de Lujo',
          desc: 'Desarrollos residenciales exclusivos con arquitectura de clase mundial, materiales premium y atención meticulosa al detalle. Creamos hogares que definen el lujo.',
          features: ['Condominios de lujo', 'Villas exclusivas', 'Comunidades cerradas', 'Residencias penthouse'],
          image: projectResidential,
        },
        {
          icon: ClipboardCheck,
          title: 'Diseño-Construcción y Gestión de Proyectos',
          desc: 'Supervisión integral de proyectos con reportes transparentes y ejecución alineada con inversionistas. Gestionamos cada fase desde el concepto hasta la finalización.',
          features: ['Servicios completos de diseño-construcción', 'Gestión de construcción', 'Aseguramiento de calidad', 'Control de cronograma y presupuesto'],
          image: heroImage,
        },
      ],
      approach: {
        title: 'Nuestro Enfoque',
        items: [
          { icon: Wrench, title: 'Ejecución de Precisión', desc: 'Cada proyecto se ejecuta con atención meticulosa al detalle y adherencia a los más altos estándares de construcción.' },
          { icon: Shield, title: 'Mitigación de Riesgos', desc: 'Gestión integral de riesgos asegura resultados predecibles e inversiones protegidas en cada etapa.' },
        ],
      },
      cta: 'Discutir Su Proyecto',
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">{t.title}</h1>
            <p className="text-lg text-muted-foreground">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-6 space-y-24">
          {t.services.map((service, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-serif">{service.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">{service.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`aspect-[4/3] rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">{t.approach.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.approach.items.map((item, index) => (
              <div key={index} className="p-8 rounded-lg luxury-border bg-charcoal-deep">
                <item.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-serif mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/contact">{t.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
