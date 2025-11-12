import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_3c0dl12', 'template_p7rdl7h', form.current, {
          publicKey: 'h3TH1RS0ns8acNGeT',
        })
        .then(
          () => {
            alert("Your message has been sent ✅");
            form.current?.reset();
          },
          (error) => {
            alert("Failed to send message ❌");
            console.error(error.text);
          },
        );
    }
  };


  return (
    <section id='contact' className="relative flex flex-col items-center justify-center min-h-[50vh] px-6 py-12">
      <div className="relative z-10 text-center max-w-xl w-full">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 drop-shadow-lg mb-6">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-8">
          Interested in working together or just want to say hi? Fill out the form below and I’ll get back to you soon!
        </p>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 bg-gradient-to-br from-blue-900 via-blue-800 to-black p-8 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="px-4 py-3 rounded-lg bg-black bg-opacity-60 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
            className="px-4 py-3 rounded-lg bg-black bg-opacity-60 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows={4}
            required
            className="px-4 py-3 rounded-lg bg-black bg-opacity-60 text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-700 to-blue-900 text-white font-bold shadow-lg hover:opacity-80 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;