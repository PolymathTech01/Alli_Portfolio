import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import './contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useToast } from '../../componentsShadcn/ui/use-toast';
const Contact = () => {
  const form = useRef();
  const { toast } = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            description: 'Your mail had been sent successfully',
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: error.text,
          });
        }
      );
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>polymathalli@gmail.com</h5>
            <a href='mailto:polymathalli@gmail.com' target='__blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Olarinde Alli</h5>
            <a
              href='https://www.linkedin.com/in/olarinde-alli-892747178'
              target='__blank'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whats App</h4>
            <h5>+2347033802307</h5>
            <a
              href='https://api.whatsapp.com/send?phone+2347033802307&text=Hello there my name is____,'
              target='__blank'
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            reqired
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
// stopped at 41:30

export default Contact;
