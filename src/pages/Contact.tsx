import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-resort.jpg';

const Contact = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Start Your Project',
      subtitle: 'Let\'s discuss how we can bring your vision to life',
      info: {
        title: 'Get in Touch',
        desc: 'Our team is ready to discuss your investment or development project. We respond to all inquiries within 24 hours.',
        address: 'Cartagena, Colombia',
        email: 'invest@aurexdev.com',
        phone: '+57 300 123 4567',
        hours: 'Monday - Friday: 9:00 AM - 6:00 PM (COT)',
      },
    },
    es: {
      title: 'Inicie Su Proyecto',
      subtitle: 'Conversemos sobre cómo dar vida a su visión',
      info: {
        title: 'Contáctenos',
        desc: 'Nuestro equipo está listo para discutir su proyecto de inversión o desarrollo. Respondemos a todas las consultas en 24 horas.',
        address: 'Cartagena, Colombia',
        email: 'invest@aurexdev.com',
        phone: '+57 300 123 4567',
        hours: 'Lunes - Viernes: 9:00 AM - 6:00 PM (COT)',
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Contact AUREX" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">{t.title}</h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-serif mb-4">{t.info.title}</h2>
              <p className="text-muted-foreground mb-12">{t.info.desc}</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-muted-foreground">{t.info.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href={`mailto:${t.info.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {t.info.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a href={`tel:${t.info.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {t.info.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">{t.info.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
