import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-resort.jpg';
import projectHotel from '@/assets/project-hotel.jpg';

const About = () => {
  const { language } = useLanguage();

  const timeline = {
    en: [
      { year: '2012', title: 'Foundation', desc: 'European investors establish AUREX in Colombia, bringing international expertise to South American markets.' },
      { year: '2014', title: 'First Resort', desc: 'Completed our first luxury resort project on the Colombian Caribbean coast.' },
      { year: '2016', title: 'Expansion', desc: 'Expanded operations to commercial and mixed-use developments across major Colombian cities.' },
      { year: '2018', title: 'Partnership Growth', desc: 'Formed strategic alliances with leading hospitality brands and institutional investors.' },
      { year: '2020', title: 'Regional Presence', desc: 'Extended our footprint across South America with projects in multiple countries.' },
      { year: '2022', title: 'Portfolio Milestone', desc: 'Surpassed $500M in completed project value with 100% on-time delivery record.' },
      { year: '2024', title: 'Innovation Hub', desc: 'Launched sustainable development initiatives and smart building integration.' },
    ],
    es: [
      { year: '2012', title: 'Fundación', desc: 'Inversionistas europeos establecen AUREX en Colombia, trayendo experiencia internacional a los mercados sudamericanos.' },
      { year: '2014', title: 'Primer Resort', desc: 'Completamos nuestro primer proyecto de resort de lujo en la costa caribeña colombiana.' },
      { year: '2016', title: 'Expansión', desc: 'Expandimos operaciones a desarrollos comerciales y de uso mixto en las principales ciudades colombianas.' },
      { year: '2018', title: 'Crecimiento de Alianzas', desc: 'Formamos alianzas estratégicas con marcas de hospitalidad líderes e inversionistas institucionales.' },
      { year: '2020', title: 'Presencia Regional', desc: 'Extendimos nuestra huella por Sudamérica con proyectos en múltiples países.' },
      { year: '2022', title: 'Hito de Portafolio', desc: 'Superamos $500M en valor de proyectos completados con récord de entrega 100% a tiempo.' },
      { year: '2024', title: 'Centro de Innovación', desc: 'Lanzamos iniciativas de desarrollo sostenible e integración de edificios inteligentes.' },
    ],
  };

  const content = {
    en: {
      title: 'About AUREX',
      subtitle: '12+ Years of Excellence in Colombia',
      intro: 'AUREX Developments has been at the forefront of luxury construction and resort development in Colombia for over a decade. We are the trusted execution partner for international investors, delivering world-class projects with precision, compliance, and uncompromising quality.',
      whoWeAre: {
        title: 'Who We Are',
        text: 'We are European investors in South America, particularly in Colombia, who pool our capital together with trusted partners to build, acquire, develop, and renovate luxury properties across the region. Our collaborative investment model allows us to take on ambitious projects while sharing risk and maximizing returns for all stakeholders. With deep roots in European financial markets and hands-on experience in Colombian real estate, we bridge the gap between international capital and local opportunity.',
      },
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
      timelineTitle: 'Our Journey',
    },
    es: {
      title: 'Sobre AUREX',
      subtitle: '12+ Años de Excelencia en Colombia',
      intro: 'AUREX Developments ha estado a la vanguardia de la construcción de lujo y desarrollo de resorts en Colombia por más de una década. Somos el socio de ejecución de confianza para inversionistas internacionales, entregando proyectos de clase mundial con precisión, cumplimiento y calidad sin compromisos.',
      whoWeAre: {
        title: 'Quiénes Somos',
        text: 'Somos inversionistas europeos en Sudamérica, particularmente en Colombia, que unimos nuestro capital con socios de confianza para construir, adquirir, desarrollar y renovar propiedades de lujo en toda la región. Nuestro modelo de inversión colaborativo nos permite asumir proyectos ambiciosos mientras compartimos riesgos y maximizamos retornos para todos los participantes. Con raíces profundas en los mercados financieros europeos y experiencia práctica en bienes raíces colombianos, tendemos un puente entre el capital internacional y la oportunidad local.',
      },
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
      timelineTitle: 'Nuestro Recorrido',
    },
  };

  const t = content[language];
  const tl = timeline[language];

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

      {/* Who We Are */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">{t.whoWeAre.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.whoWeAre.text}</p>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img src={projectHotel} alt="Our work" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">{t.timelineTitle}</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/30 hidden md:block" />
            <div className="space-y-12">
              {tl.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="p-6 rounded-lg luxury-border bg-charcoal/30">
                      <p className="text-primary font-bold text-xl mb-2">{item.year}</p>
                      <h3 className="text-lg font-serif mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background flex-shrink-0 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">{t.story.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.story.text}</p>
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
