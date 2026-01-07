import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ContactFormProps {
  sourcePage?: string;
}

export function ContactForm({ sourcePage = 'contact' }: ContactFormProps) {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from('leads').insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        inquiry_type: formData.inquiryType || null,
        message: formData.message.trim(),
        source_page: sourcePage,
      });

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground/80">{t('contact.form.type')}</label>
          <Select
            value={formData.inquiryType}
            onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
            disabled={isLoading}
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
          disabled={isLoading}
        />
      </div>
      <Button type="submit" variant="luxury" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          t('contact.form.submit')
        )}
      </Button>
    </form>
  );
}
