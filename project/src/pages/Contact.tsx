import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');

    emailjs
      .send('service_rr84otp', 'template_saxmo6m', formData, 'Zoq8U4M9QkXTRYj6u')
      .then(() => {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setSuccessMessage('Failed to send message. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Information
              </h3>
              <dl className="mt-8 space-y-6">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <MapPin
                      className="h-6 w-5 text-blue-600"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-600">
                    College of Engineering Chengannur
                    <br />
                    Chengannur P.O
                    <br />
                    Alapuzha District, Kerala
                    <br />
                    PIN 689121
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <Phone className="h-6 w-5 text-blue-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-600">
                  +91 95444 28325 (Dr. Sabeena k)<br />+91 94959 16686 (Geetha S)<br />
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <Mail className="h-6 w-5 text-blue-600" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-600">
                    <a href="mailto:principal@ceconline.edu" className="text-blue-600 hover:underline">
                      sabeenak@ceconline.edu
                      <br />
                      geetha@ceconline.edu
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {successMessage && (
              <p className="mt-4 text-green-600 transition-opacity duration-500">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
