import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Project images imports
import cartagenaResort1 from '@/assets/projects/cartagena-resort-1.jpg';
import cartagenaResort2 from '@/assets/projects/cartagena-resort-2.jpg';
import cartagenaResort3 from '@/assets/projects/cartagena-resort-3.jpg';
import cartagenaResort4 from '@/assets/projects/cartagena-resort-4.jpg';

import buenosAiresTower1 from '@/assets/projects/buenos-aires-tower-1.jpg';
import buenosAiresTower2 from '@/assets/projects/buenos-aires-tower-2.jpg';
import buenosAiresTower3 from '@/assets/projects/buenos-aires-tower-3.jpg';
import buenosAiresTower4 from '@/assets/projects/buenos-aires-tower-4.jpg';

import puntaDelEste1 from '@/assets/projects/punta-del-este-1.jpg';
import puntaDelEste2 from '@/assets/projects/punta-del-este-2.jpg';
import puntaDelEste3 from '@/assets/projects/punta-del-este-3.jpg';
import puntaDelEste4 from '@/assets/projects/punta-del-este-4.jpg';

import medellinHotel1 from '@/assets/projects/medellin-hotel-1.jpg';
import medellinHotel2 from '@/assets/projects/medellin-hotel-2.jpg';
import medellinHotel3 from '@/assets/projects/medellin-hotel-3.jpg';
import medellinHotel4 from '@/assets/projects/medellin-hotel-4.jpg';

import limaTower1 from '@/assets/projects/lima-tower-1.jpg';
import limaTower2 from '@/assets/projects/lima-tower-2.jpg';
import limaTower3 from '@/assets/projects/lima-tower-3.jpg';
import limaTower4 from '@/assets/projects/lima-tower-4.jpg';

import amazonResort1 from '@/assets/projects/amazon-resort-1.jpg';
import amazonResort2 from '@/assets/projects/amazon-resort-2.jpg';
import amazonResort3 from '@/assets/projects/amazon-resort-3.jpg';
import amazonResort4 from '@/assets/projects/amazon-resort-4.jpg';

import santiagoCondor1 from '@/assets/projects/santiago-condo-1.jpg';
import santiagoCondor2 from '@/assets/projects/santiago-condo-2.jpg';
import santiagoCondor3 from '@/assets/projects/santiago-condo-3.jpg';
import santiagoCondor4 from '@/assets/projects/santiago-condo-4.jpg';

import venezuelaOil1 from '@/assets/projects/venezuela-oil-1.jpg';
import venezuelaOil2 from '@/assets/projects/venezuela-oil-2.jpg';
import venezuelaOil3 from '@/assets/projects/venezuela-oil-3.jpg';
import venezuelaOil4 from '@/assets/projects/venezuela-oil-4.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  sqm: string;
  images: string[];
  description: string;
}

const Portfolio = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const content = {
    en: {
      title: 'Our Portfolio',
      subtitle: 'A showcase of excellence in luxury construction and development across South America',
      filters: ['All', 'Resort', 'Commercial', 'Residential', 'Energy'],
      projects: [
        { 
          id: 1, 
          title: 'Costa Esmeralda Resort & Spa', 
          category: 'resort', 
          location: 'Cartagena, Colombia', 
          year: '2023', 
          sqm: '45,000',
          images: [cartagenaResort1, cartagenaResort2, cartagenaResort3, cartagenaResort4],
          description: 'A world-class beachfront resort featuring colonial-modern fusion architecture, infinity pools overlooking the Caribbean Sea, 120 luxury suites, and an award-winning rooftop restaurant.'
        },
        { 
          id: 2, 
          title: 'Torre Puerto Madero', 
          category: 'commercial', 
          location: 'Buenos Aires, Argentina', 
          year: '2022', 
          sqm: '68,000',
          images: [buenosAiresTower1, buenosAiresTower2, buenosAiresTower3, buenosAiresTower4],
          description: 'A 42-story Class A office tower in the prestigious Puerto Madero district, featuring floor-to-ceiling windows, a double-height marble lobby, and panoramic rooftop terrace.'
        },
        { 
          id: 3, 
          title: 'Residencias La Barra', 
          category: 'residential', 
          location: 'Punta del Este, Uruguay', 
          year: '2023', 
          sqm: '28,000',
          images: [puntaDelEste1, puntaDelEste2, puntaDelEste3, puntaDelEste4],
          description: 'An exclusive beachfront villa complex with 12 ultra-luxury residences, private beach club, infinity pool, and minimalist white architecture with Atlantic Ocean views.'
        },
        { 
          id: 4, 
          title: 'Hotel Botánico El Poblado', 
          category: 'resort', 
          location: 'Medellín, Colombia', 
          year: '2024', 
          sqm: '18,000',
          images: [medellinHotel1, medellinHotel2, medellinHotel3, medellinHotel4],
          description: 'A 65-room boutique hotel with vertical gardens, rooftop infinity pool with Andes views, contemporary Colombian design, and sustainable architecture practices.'
        },
        { 
          id: 5, 
          title: 'Torres Miraflores', 
          category: 'residential', 
          location: 'Lima, Peru', 
          year: '2023', 
          sqm: '52,000',
          images: [limaTower1, limaTower2, limaTower3, limaTower4],
          description: 'A 35-story luxury residential tower on the Pacific cliffs of Miraflores, featuring panoramic ocean views, Italian marble finishes, and world-class amenities.'
        },
        { 
          id: 6, 
          title: 'Anavilhanas Eco-Lodge', 
          category: 'resort', 
          location: 'Manaus, Brazil', 
          year: '2024', 
          sqm: '8,500',
          images: [amazonResort1, amazonResort2, amazonResort3, amazonResort4],
          description: 'A sustainable luxury eco-resort with 24 overwater bungalows, treehouse suites, infinity pool overlooking the Amazon River, and award-winning environmental practices.'
        },
        { 
          id: 7, 
          title: 'Edificio Costanera', 
          category: 'residential', 
          location: 'Santiago, Chile', 
          year: '2022', 
          sqm: '42,000',
          images: [santiagoCondor1, santiagoCondor2, santiagoCondor3, santiagoCondor4],
          description: 'A 28-story luxury condominium in Las Condes with spectacular Andes mountain views, marble penthouse finishes, rooftop hot tubs, and premium amenities.'
        },
        { 
          id: 8, 
          title: 'Orinoco Energy Complex', 
          category: 'energy', 
          location: 'Puerto La Cruz, Venezuela', 
          year: '2025', 
          sqm: '120,000',
          images: [venezuelaOil1, venezuelaOil2, venezuelaOil3, venezuelaOil4],
          description: 'A state-of-the-art oil refinery and petrochemical complex featuring modern processing facilities, executive headquarters, and deep-water port terminal for international exports.'
        },
      ],
      viewProject: 'View Gallery',
      projectDetails: 'Project Details',
    },
    es: {
      title: 'Nuestro Portafolio',
      subtitle: 'Una muestra de excelencia en construcción y desarrollo de lujo en toda Sudamérica',
      filters: ['Todos', 'Resort', 'Comercial', 'Residencial', 'Energía'],
      projects: [
        { 
          id: 1, 
          title: 'Costa Esmeralda Resort & Spa', 
          category: 'resort', 
          location: 'Cartagena, Colombia', 
          year: '2023', 
          sqm: '45,000',
          images: [cartagenaResort1, cartagenaResort2, cartagenaResort3, cartagenaResort4],
          description: 'Un resort de playa de clase mundial con arquitectura fusión colonial-moderna, piscinas infinitas con vista al Mar Caribe, 120 suites de lujo y un galardonado restaurante en la azotea.'
        },
        { 
          id: 2, 
          title: 'Torre Puerto Madero', 
          category: 'commercial', 
          location: 'Buenos Aires, Argentina', 
          year: '2022', 
          sqm: '68,000',
          images: [buenosAiresTower1, buenosAiresTower2, buenosAiresTower3, buenosAiresTower4],
          description: 'Una torre de oficinas Clase A de 42 pisos en el prestigioso distrito de Puerto Madero, con ventanas de piso a techo, vestíbulo de mármol de doble altura y terraza panorámica en la azotea.'
        },
        { 
          id: 3, 
          title: 'Residencias La Barra', 
          category: 'residential', 
          location: 'Punta del Este, Uruguay', 
          year: '2023', 
          sqm: '28,000',
          images: [puntaDelEste1, puntaDelEste2, puntaDelEste3, puntaDelEste4],
          description: 'Un exclusivo complejo de villas frente al mar con 12 residencias ultra-lujo, club de playa privado, piscina infinita y arquitectura blanca minimalista con vistas al Océano Atlántico.'
        },
        { 
          id: 4, 
          title: 'Hotel Botánico El Poblado', 
          category: 'resort', 
          location: 'Medellín, Colombia', 
          year: '2024', 
          sqm: '18,000',
          images: [medellinHotel1, medellinHotel2, medellinHotel3, medellinHotel4],
          description: 'Un hotel boutique de 65 habitaciones con jardines verticales, piscina infinita en la azotea con vistas a los Andes, diseño colombiano contemporáneo y prácticas de arquitectura sostenible.'
        },
        { 
          id: 5, 
          title: 'Torres Miraflores', 
          category: 'residential', 
          location: 'Lima, Perú', 
          year: '2023', 
          sqm: '52,000',
          images: [limaTower1, limaTower2, limaTower3, limaTower4],
          description: 'Una torre residencial de lujo de 35 pisos en los acantilados del Pacífico en Miraflores, con vistas panorámicas al océano, acabados en mármol italiano y amenidades de clase mundial.'
        },
        { 
          id: 6, 
          title: 'Anavilhanas Eco-Lodge', 
          category: 'resort', 
          location: 'Manaus, Brasil', 
          year: '2024', 
          sqm: '8,500',
          images: [amazonResort1, amazonResort2, amazonResort3, amazonResort4],
          description: 'Un eco-resort de lujo sostenible con 24 bungalows sobre el agua, suites en casas del árbol, piscina infinita con vista al Río Amazonas y prácticas ambientales galardonadas.'
        },
        { 
          id: 7, 
          title: 'Edificio Costanera', 
          category: 'residential', 
          location: 'Santiago, Chile', 
          year: '2022', 
          sqm: '42,000',
          images: [santiagoCondor1, santiagoCondor2, santiagoCondor3, santiagoCondor4],
          description: 'Un condominio de lujo de 28 pisos en Las Condes con espectaculares vistas a la Cordillera de los Andes, acabados de mármol en penthouses, jacuzzis en la azotea y amenidades premium.'
        },
        { 
          id: 8, 
          title: 'Complejo Energético Orinoco', 
          category: 'energy', 
          location: 'Puerto La Cruz, Venezuela', 
          year: '2025', 
          sqm: '120,000',
          images: [venezuelaOil1, venezuelaOil2, venezuelaOil3, venezuelaOil4],
          description: 'Un complejo petroquímico y refinería de última generación con instalaciones de procesamiento modernas, sede ejecutiva y terminal portuaria de aguas profundas para exportaciones internacionales.'
        },
      ],
      viewProject: 'Ver Galería',
      projectDetails: 'Detalles del Proyecto',
    },
  };

  const t = content[language];
  const filterKeys = ['all', 'resort', 'commercial', 'residential', 'energy'];
  
  const filteredProjects = activeFilter === 'all' 
    ? t.projects 
    : t.projects.filter(p => p.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

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
              <div 
                key={project.id} 
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium tracking-wide">
                      {t.viewProject}
                    </span>
                  </div>
                  {/* Image count indicator */}
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {project.images.length} photos
                  </div>
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

      {/* Project Gallery Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-6xl w-full p-0 bg-charcoal-deep border-border">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="font-serif text-2xl">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="p-6">
              {/* Main Image */}
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-full">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {selectedProject.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`shrink-0 w-20 h-14 rounded overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent hover:border-muted'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              
              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Location</span>
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Year</span>
                    <span>{selectedProject.year}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Size</span>
                    <span>{selectedProject.sqm} m²</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Category</span>
                    <span className="capitalize">{selectedProject.category}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Portfolio;
