import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-resort.jpg';
import projectHotel from '@/assets/project-hotel.jpg';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About AUREX',
      subtitle: '12+ Years of Excellence in Colombia',
      intro: 'AUREX Developments has been at the forefront of luxury construction and resort development in Colombia for over a decade. We are the trusted execution partner for international investors, delivering world-class projects with precision, compliance, and uncompromising quality.',
      story: {
        title: 'Our Story',
        text: 'Founded with a vision to transform Colombia\'s development landscape, AUREX has grown from a specialized construction firm into a comprehensive development partner. Our deep understanding of local regulations, combined with international standards of excellence, has made us the preferred choice for discerning investors seeking to build in Colombia.',
      },
      values: [
        { icon: Target, title: 'Mission', desc: 'To deliver exceptional construction and development projects that exceed expectations while maintaining the highest standards of quality, compliance, and investor confidence.' },
        { icon: Eye, title: 'Vision', desc: 'To be the most trusted development partner in Latin America, known for transforming visions into landmark destinations that define luxury living.' },
        { icon: Heart, title: 'Values', desc: 'Excellence, Integrity, Transparency, Innovation, and unwavering commitment to our clients\' success drive everything we do.' },
      ],
      experience: {
        title: 'Colombian Expertise',
        text: 'Our 12+ years of continuous operation in Colombia have given us unparalleled expertise in navigating the country\'s regulatory landscape. From permits and approvals to construction standards and environmental compliance, we ensure every project meets and exceeds all requirements.',
      },
    },
    es: {
      title: 'Sobre AUREX',
      subtitle: '12+ Años de Excelencia en Colombia',
      intro: 'AUREX Developments ha estado a la vanguardia de la construcción de lujo y desarrollo de resorts en Colombia por más de una década. Somos el socio de ejecución de confianza para inversionistas internacionales, entregando proyectos de clase mundial con precisión, cumplimiento y calidad sin compromisos.',
      story: {
        title: 'Nuestra Historia',
        text: 'Fundada con la visión de transformar el panorama de desarrollo de Colombia, AUREX ha crecido de una firma de construcción especializada a un socio de desarrollo integral. Nuestro profundo entendimiento de las regulaciones locales, combinado con estándares internacionales de excelencia, nos ha convertido en la opción preferida para inversionistas exigentes.',
      },
      values: [
        { icon: Target, title: 'Misión', desc: 'Entregar proyectos excepcionales de construcción y desarrollo que superen las expectativas mientras mantenemos los más altos estándares de calidad, cumplimiento y confianza del inversionista.' },
        { icon: Eye, title: 'Visión', desc: 'Ser el socio de desarrollo más confiable en América Latina, conocidos por transformar visiones en destinos emblemáticos que definen el lujo.' },
        { icon: Heart, title: 'Valores', desc: 'Excelencia, Integridad, Transparencia, Innovación y compromiso inquebrantable con el éxito de nuestros clientes impulsan todo lo que hacemos.' },
      ],
      experience: {
        title: 'Experiencia Colombiana',
        text: 'Nuestros 12+ años de operación continua en Colombia nos han dado una experiencia incomparable navegando el panorama regulatorio del país. Desde permisos y aprobaciones hasta estándares de construcción y cumplimiento ambiental, aseguramos que cada proyecto cumpla y supere todos los requisitos.',
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="AUREX Developments" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">{t.subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">{t.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.intro}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{t.story.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.story.text}</p>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={projectHotel} alt="Our work" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {t.values.map((value, index) => (
              <div key={index} className="p-8 rounded-lg luxury-border bg-charcoal/30">
                <value.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colombian Expertise */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">{t.experience.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.experience.text}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
