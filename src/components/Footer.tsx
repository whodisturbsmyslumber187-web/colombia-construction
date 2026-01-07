import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal-deep border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-serif font-semibold tracking-tight">
                <span className="text-gradient-gold">AUREX</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t('footer.tagline')}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Luxury Construction & Resort Development
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: t('nav.about') },
                { href: '/services', label: t('nav.services') },
                { href: '/portfolio', label: t('nav.portfolio') },
                { href: '/investors', label: t('nav.investors') },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              {t('nav.services')}
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">{t('services.resort.title')}</li>
              <li className="text-sm text-muted-foreground">{t('services.commercial.title')}</li>
              <li className="text-sm text-muted-foreground">{t('services.residential.title')}</li>
              <li className="text-sm text-muted-foreground">{t('services.management.title')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-4">
              {t('nav.contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Cartagena, Colombia<br />
                  South America
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a
                  href="mailto:invest@aurexdev.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  invest@aurexdev.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a
                  href="tel:+573001234567"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +57 300 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AUREX Developments. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <Link
              to="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
