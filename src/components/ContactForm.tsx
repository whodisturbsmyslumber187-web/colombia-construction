import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle } from 'lucide-react';

export function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-12 rounded-lg luxury-border bg-charcoal-deep text-center">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-serif mb-4">Thank You</h3>
        <p className="text-muted-foreground">{t('contact.success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 rounded-lg luxury-border bg-charcoal-deep space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80">{t('contact.form.name')}</label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-background/50 border-border focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80">{t('contact.form.email')}</label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-background/50 border-border focus:border-primary"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80">{t('contact.form.company')}</label>
          <Input
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="bg-background/50 border-border focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80">{t('contact.form.type')}</label>
          <Select
            value={formData.inquiryType}
            onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
          >
            <SelectTrigger className="bg-background/50 border-border focus:border-primary">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="investor">{t('contact.form.type.investor')}</SelectItem>
              <SelectItem value="developer">{t('contact.form.type.developer')}</SelectItem>
              <SelectItem value="hospitality">{t('contact.form.type.hospitality')}</SelectItem>
              <SelectItem value="other">{t('contact.form.type.other')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground/80">{t('contact.form.message')}</label>
        <Textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-background/50 border-border focus:border-primary resize-none"
        />
      </div>
      <Button type="submit" variant="luxury" size="lg" className="w-full">
        {t('contact.form.submit')}
      </Button>
    </form>
  );
}
