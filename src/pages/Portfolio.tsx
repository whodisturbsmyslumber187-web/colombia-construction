import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectResidential from '@/assets/project-residential.jpg';
import projectHotel from '@/assets/project-hotel.jpg';
import heroImage from '@/assets/hero-resort.jpg';

const Portfolio = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const content = {
    en: {
      title: 'Our Portfolio',
      subtitle: 'A showcase of excellence in luxury construction and development',
      filters: ['All', 'Resort', 'Commercial', 'Residential'],
      projects: [
        { id: 1, title: 'Costa Esmeralda Resort', category: 'resort', location: 'Cartagena, Colombia', year: '2023', sqm: '45,000', image: heroImage },
        { id: 2, title: 'Torre Pacífico', category: 'commercial', location: 'Bogotá, Colombia', year: '2022', sqm: '32,000', image: projectCommercial },
        { id: 3, title: 'Residencias del Mar', category: 'residential', location: 'Santa Marta, Colombia', year: '2023', sqm: '28,000', image: projectResidential },
        { id: 4, title: 'Hotel Boutique Amara', category: 'resort', location: 'Medellín, Colombia', year: '2021', sqm: '12,000', image: projectHotel },
        { id: 5, title: 'Centro Empresarial Norte', category: 'commercial', location: 'Barranquilla, Colombia', year: '2022', sqm: '55,000', image: projectCommercial },
        { id: 6, title: 'Villas del Caribe', category: 'residential', location: 'San Andrés, Colombia', year: '2023', sqm: '18,000', image: projectResidential },
      ],
      viewProject: 'View Details',
    },
    es: {
      title: 'Nuestro Portafolio',
      subtitle: 'Una muestra de excelencia en construcción y desarrollo de lujo',
      filters: ['Todos', 'Resort', 'Comercial', 'Residencial'],
      projects: [
        { id: 1, title: 'Costa Esmeralda Resort', category: 'resort', location: 'Cartagena, Colombia', year: '2023', sqm: '45,000', image: heroImage },
        { id: 2, title: 'Torre Pacífico', category: 'commercial', location: 'Bogotá, Colombia', year: '2022', sqm: '32,000', image: projectCommercial },
        { id: 3, title: 'Residencias del Mar', category: 'residential', location: 'Santa Marta, Colombia', year: '2023', sqm: '28,000', image: projectResidential },
        { id: 4, title: 'Hotel Boutique Amara', category: 'resort', location: 'Medellín, Colombia', year: '2021', sqm: '12,000', image: projectHotel },
        { id: 5, title: 'Centro Empresarial Norte', category: 'commercial', location: 'Barranquilla, Colombia', year: '2022', sqm: '55,000', image: projectCommercial },
        { id: 6, title: 'Villas del Caribe', category: 'residential', location: 'San Andrés, Colombia', year: '2023', sqm: '18,000', image: projectResidential },
      ],
      viewProject: 'Ver Detalles',
    },
  };

  const t = content[language];
  const filterKeys = ['all', 'resort', 'commercial', 'residential'];
  
  const filteredProjects = activeFilter === 'all' 
    ? t.projects 
    : t.projects.filter(p => p.category === activeFilter);

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

      {/* Filters */}
      <section className="py-8 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {t.filters.map((filter, index) => (
              <Button
                key={filter}
                variant={activeFilter === filterKeys[index] ? 'luxury' : 'luxuryOutline'}
                size="sm"
                onClick={() => setActiveFilter(filterKeys[index])}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-primary uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-xl font-serif group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.sqm} m²</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
