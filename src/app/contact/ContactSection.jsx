import EmailIcon from '@mui/icons-material/Email';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let's Talk</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">We'd love to help</h4>
          <p className="text-neutral mt-8">
            Crafting innovative solutions to solve real-world problems
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <a
            href="mailto:shrestharaju010101@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
             <EmailIcon className="w-5 h-5 mr-2" />
             shrestharaju010101@gmail.com
          </a>
          <a
            href="tel:+977 9825821351"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
             <ContactPhoneIcon className="w-5 h-5 mr-2" />
             +977 9825821351
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection