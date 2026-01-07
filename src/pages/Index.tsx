import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { Building2, Hotel, Home, ClipboardCheck, Shield, Clock, Award, Users } from 'lucide-react';
import heroImage from '@/assets/hero-resort.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectResidential from '@/assets/project-residential.jpg';
import projectHotel from '@/assets/project-hotel.jpg';

const Index = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '12+', label: t('stats.years') },
    { value: '150+', label: t('stats.projects') },
    { value: '$500M+', label: t('stats.investment') },
    { value: '40+', label: t('stats.clients') },
  ];

  const services = [
    { icon: Hotel, title: t('services.resort.title'), desc: t('services.resort.desc'), image: projectHotel },
    { icon: Building2, title: t('services.commercial.title'), desc: t('services.commercial.desc'), image: projectCommercial },
    { icon: Home, title: t('services.residential.title'), desc: t('services.residential.desc'), image: projectResidential },
    { icon: ClipboardCheck, title: t('services.management.title'), desc: t('services.management.desc'), image: heroImage },
  ];

  const whyUs = [
    { icon: Award, title: t('why.experience.title'), desc: t('why.experience.desc') },
    { icon: Shield, title: t('why.compliance.title'), desc: t('why.compliance.desc') },
    { icon: Clock, title: t('why.delivery.title'), desc: t('why.delivery.desc') },
    { icon: Users, title: t('why.quality.title'), desc: t('why.quality.desc') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury resort development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay-dark" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              {t('hero.tagline')}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              {t('hero.headline')}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-serif mb-4 animate-fade-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              {t('hero.subheadline')}
            </p>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">{t('hero.cta.primary')}</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio">{t('hero.cta.secondary')}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-charcoal border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-serif text-gradient-gold mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">{t('services.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-serif">{service.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">{t('why.title')}</h2>
              <p className="text-muted-foreground mb-12">{t('why.subtitle')}</p>
              <div className="grid sm:grid-cols-2 gap-8">
                {whyUs.map((item, index) => (
                  <div key={index} className="group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src={projectResidential}
                  alt="Luxury development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-charcoal-deep p-8 rounded-lg luxury-border max-w-xs">
                <p className="text-4xl font-serif text-gradient-gold mb-2">12+</p>
                <p className="text-sm text-muted-foreground">{t('why.experience.title')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              {t('investors.title')}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">{t('investors.subtitle')}</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="p-8 rounded-lg luxury-border bg-charcoal/50">
                <h3 className="text-lg font-serif mb-3 text-primary">{t('investors.why.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t('investors.why.desc')}</p>
              </div>
              <div className="p-8 rounded-lg luxury-border bg-charcoal/50">
                <h3 className="text-lg font-serif mb-3 text-primary">{t('investors.risk.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t('investors.risk.desc')}</p>
              </div>
            </div>
            <Button variant="luxury" size="xl" className="mt-12" asChild>
              <Link to="/investors">{t('investors.cta')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">{t('contact.title')}</h2>
              <p className="text-muted-foreground mb-8">{t('contact.subtitle')}</p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={heroImage}
                  alt="AUREX Developments"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
