import HeroSection from '../common/heroSection/HeroSection';
import ContactForm from './contactForm/ContactForm';

const Contact = () => (
  <main className='h-full'>
    <HeroSection subtitle='Si l’envie vous en dit !' title='Contactez-moi'>
      <ContactForm />
    </HeroSection>
  </main>
);

export default Contact;
