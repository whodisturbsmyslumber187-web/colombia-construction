import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, FileCheck, Users, Globe, Building, Fuel, Lock, Crown, Briefcase } from 'lucide-react';
import heroImage from '@/assets/hero-resort.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';
import venezuelaOil1 from '@/assets/projects/venezuela-oil-1.jpg';
import venezuelaOil2 from '@/assets/projects/venezuela-oil-2.jpg';

const Investors = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'For Investors',
      subtitle: 'Partner with confidence in South America\'s premier development firm',
      intro: 'AUREX Developments offers international investors a trusted pathway to South America\'s booming real estate, hospitality, and energy markets. With 12+ years of proven execution, regulatory expertise, and a commitment to transparency, we deliver predictable outcomes and protected investments.',
      whyColombia: {
        title: 'Why South America',
        items: [
          { icon: Globe, title: 'Strategic Location', desc: 'Gateway to Latin America with direct access to North and South American markets, plus emerging Asian trade routes.' },
          { icon: TrendingUp, title: 'Growing Markets', desc: 'Record-breaking tourism growth, urbanization, and energy demand driving unprecedented investment opportunities.' },
          { icon: Building, title: 'Market Opportunity', desc: 'Undersupplied luxury markets with strong demand from domestic, international, and institutional buyers.' },
        ],
      },
      whyAurex: {
        title: 'Why AUREX',
        items: [
          { icon: Shield, title: 'Risk Mitigation', desc: 'Comprehensive due diligence, regulatory compliance, and transparent governance at every stage of your investment.' },
          { icon: FileCheck, title: 'Regulatory Mastery', desc: 'Deep expertise in South American construction laws, permits, environmental compliance, and foreign investment regulations.' },
          { icon: Users, title: 'Investor-Aligned', desc: 'Our success is measured by your returns. We structure projects with transparent reporting and aligned incentives.' },
        ],
      },
      process: {
        title: 'Investment Process',
        steps: [
          { num: '01', title: 'Initial Consultation', desc: 'Discuss your investment goals, risk tolerance, and preferred project types.' },
          { num: '02', title: 'Due Diligence', desc: 'Comprehensive project analysis, market research, and regulatory review.' },
          { num: '03', title: 'Investment Structure', desc: 'Tailored investment structure with clear terms, milestones, and reporting.' },
          { num: '04', title: 'Execution & Delivery', desc: 'Rigorous project management with regular updates and transparent reporting.' },
        ],
      },
      venezuela: {
        badge: 'EXCLUSIVE OPPORTUNITY',
        title: 'Venezuela Energy Initiative',
        subtitle: 'Invite-Only Investment Program',
        intro: 'AUREX is expanding into Venezuela\'s energy sector, leveraging unprecedented market access and strategic partnerships to develop world-class oil infrastructure. This exclusive, invite-only opportunity is available to qualified institutional and high-net-worth investors.',
        features: [
          { icon: Fuel, title: 'Largest Oil Reserves', desc: 'Venezuela holds the world\'s largest proven oil reserves—over 300 billion barrels—presenting generational investment potential.' },
          { icon: Lock, title: 'Exclusive Access', desc: 'Through strategic partnerships and government relations, AUREX has secured rare development rights unavailable to public markets.' },
          { icon: Crown, title: 'Invite Only', desc: 'This opportunity is strictly limited to pre-qualified investors meeting minimum capital requirements and due diligence standards.' },
          { icon: Briefcase, title: 'Infrastructure Focus', desc: 'Investments target refinery modernization, port facilities, and petrochemical processing—tangible assets with long-term value.' },
        ],
        disclaimer: 'Minimum investment: $2.5M USD. Invitation and qualification required.',
        cta: 'Request Private Briefing',
      },
      cta: 'Request Investor Deck',
      ctaSecondary: 'Schedule Consultation',
    },
    es: {
      title: 'Para Inversionistas',
      subtitle: 'Asóciese con confianza con la firma de desarrollo premier de Sudamérica',
      intro: 'AUREX Developments ofrece a inversionistas internacionales un camino confiable hacia los mercados inmobiliarios, de hospitalidad y energía en auge de Sudamérica. Con 12+ años de ejecución probada, experiencia regulatoria y compromiso con la transparencia, entregamos resultados predecibles e inversiones protegidas.',
      whyColombia: {
        title: 'Por Qué Sudamérica',
        items: [
          { icon: Globe, title: 'Ubicación Estratégica', desc: 'Puerta de entrada a América Latina con acceso directo a mercados norteamericanos y sudamericanos, más rutas comerciales asiáticas emergentes.' },
          { icon: TrendingUp, title: 'Mercados en Crecimiento', desc: 'Crecimiento turístico récord, urbanización y demanda energética impulsando oportunidades de inversión sin precedentes.' },
          { icon: Building, title: 'Oportunidad de Mercado', desc: 'Mercados de lujo subabastecidos con fuerte demanda de compradores nacionales, internacionales e institucionales.' },
        ],
      },
      whyAurex: {
        title: 'Por Qué AUREX',
        items: [
          { icon: Shield, title: 'Mitigación de Riesgos', desc: 'Due diligence integral, cumplimiento regulatorio y gobernanza transparente en cada etapa de su inversión.' },
          { icon: FileCheck, title: 'Dominio Regulatorio', desc: 'Profunda experiencia en leyes de construcción sudamericanas, permisos, cumplimiento ambiental y regulaciones de inversión extranjera.' },
          { icon: Users, title: 'Alineados con el Inversionista', desc: 'Nuestro éxito se mide por sus retornos. Estructuramos proyectos con reportes transparentes e incentivos alineados.' },
        ],
      },
      process: {
        title: 'Proceso de Inversión',
        steps: [
          { num: '01', title: 'Consulta Inicial', desc: 'Discutir sus objetivos de inversión, tolerancia al riesgo y tipos de proyecto preferidos.' },
          { num: '02', title: 'Due Diligence', desc: 'Análisis integral del proyecto, investigación de mercado y revisión regulatoria.' },
          { num: '03', title: 'Estructura de Inversión', desc: 'Estructura de inversión a medida con términos claros, hitos y reportes.' },
          { num: '04', title: 'Ejecución y Entrega', desc: 'Gestión rigurosa del proyecto con actualizaciones regulares y reportes transparentes.' },
        ],
      },
      venezuela: {
        badge: 'OPORTUNIDAD EXCLUSIVA',
        title: 'Iniciativa Energética Venezuela',
        subtitle: 'Programa de Inversión Solo por Invitación',
        intro: 'AUREX está expandiéndose al sector energético de Venezuela, aprovechando acceso de mercado sin precedentes y alianzas estratégicas para desarrollar infraestructura petrolera de clase mundial. Esta oportunidad exclusiva, solo por invitación, está disponible para inversionistas institucionales y de alto patrimonio calificados.',
        features: [
          { icon: Fuel, title: 'Mayores Reservas de Petróleo', desc: 'Venezuela posee las mayores reservas probadas de petróleo del mundo—más de 300 mil millones de barriles—presentando potencial de inversión generacional.' },
          { icon: Lock, title: 'Acceso Exclusivo', desc: 'A través de alianzas estratégicas y relaciones gubernamentales, AUREX ha asegurado derechos de desarrollo únicos no disponibles en mercados públicos.' },
          { icon: Crown, title: 'Solo por Invitación', desc: 'Esta oportunidad está estrictamente limitada a inversionistas precalificados que cumplan requisitos mínimos de capital y estándares de due diligence.' },
          { icon: Briefcase, title: 'Enfoque en Infraestructura', desc: 'Las inversiones se dirigen a modernización de refinerías, instalaciones portuarias y procesamiento petroquímico—activos tangibles con valor a largo plazo.' },
        ],
        disclaimer: 'Inversión mínima: $2.5M USD. Se requiere invitación y calificación.',
        cta: 'Solicitar Reunión Privada',
      },
      cta: 'Solicitar Deck de Inversión',
      ctaSecondary: 'Agendar Consulta',
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Investment opportunity" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Investor Relations</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">{t.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{t.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed">{t.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="luxury" size="xl" asChild>
                <Link to="/contact">{t.cta}</Link>
              </Button>
              <Button variant="luxuryOutline" size="xl" asChild>
                <Link to="/contact">{t.ctaSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Venezuela Energy Initiative - Featured */}
      <section className="py-24 bg-gradient-to-b from-charcoal-deep to-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={venezuelaOil1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-xs font-bold tracking-widest rounded-full mb-6 border border-primary/30">
              {t.venezuela.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">{t.venezuela.title}</h2>
            <p className="text-xl text-primary font-medium mb-6">{t.venezuela.subtitle}</p>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">{t.venezuela.intro}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {t.venezuela.features.map((feature, index) => (
              <div key={index} className="bg-charcoal/60 backdrop-blur-sm border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-lg overflow-hidden">
              <img src={venezuelaOil1} alt="Venezuela oil refinery" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={venezuelaOil2} alt="Venezuela energy boardroom" className="w-full h-64 object-cover" />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-primary/80 mb-6 font-medium">{t.venezuela.disclaimer}</p>
            <Button variant="luxury" size="xl" asChild>
              <Link to="/contact">{t.venezuela.cta}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why South America */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">{t.whyColombia.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.whyColombia.items.map((item, index) => (
              <div key={index} className="text-center p-8">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AUREX */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-12">{t.whyAurex.title}</h2>
              <div className="space-y-8">
                {t.whyAurex.items.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img src={projectCommercial} alt="AUREX project" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">{t.process.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <p className="text-5xl font-serif text-gradient-gold mb-4">{step.num}</p>
                <h3 className="text-lg font-serif mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {index < t.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">{t.subtitle}</h2>
          <Button variant="luxury" size="xl" asChild>
            <Link to="/contact">{t.cta}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investors;
