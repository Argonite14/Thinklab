'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../components/Layout';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send the contact form data to your backend or email service
      // Using EmailJS for demonstration - replace with your EmailJS credentials
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          template_id: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          user_id: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
          template_params: {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            company: data.company,
            message: data.message,
            reply_to: data.email,
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();

        // Send acknowledgment email
        await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: 'YOUR_SERVICE_ID',
            template_id: 'YOUR_ACKNOWLEDGMENT_TEMPLATE_ID', // Template for acknowledgment
            user_id: 'YOUR_PUBLIC_KEY',
            template_params: {
              to_name: data.name,
              to_email: data.email,
            },
          }),
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      // For demo purposes, simulate success
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@ai-thinklabs.com',
      href: 'mailto:hello@ai-thinklabs.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-parchment">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-label text-terracotta uppercase tracking-wider">
            Contact Us
          </span>
          <h1 className="font-serif text-section md:text-6xl text-near-black mt-4 mb-6">
            Let's start a conversation
          </h1>
          <p className="text-body-lg text-olive-gray max-w-2xl mx-auto leading-relaxed">
            Whether you're interested in our products, partnership opportunities,
            or just want to learn more, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info Sidebar */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-sub text-near-black mb-4">
                  Get in touch
                </h2>
                <p className="text-body text-olive-gray leading-relaxed">
                  Fill out the form and we'll get back to you within 24 hours.
                  For urgent inquiries, feel free to call us directly.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-warm-sand rounded-button flex items-center
                                    justify-center group-hover:bg-terracotta transition-colors"
                    >
                      <info.icon className="w-5 h-5 text-terracotta group-hover:text-ivory transition-colors" />
                    </div>
                    <div>
                      <p className="text-caption text-stone-gray">{info.label}</p>
                      <p className="text-body text-dark-warm group-hover:text-terracotta transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-parchment border border-border-cream rounded-card p-6">
                <h3 className="font-serif text-feature text-near-black mb-3">
                  Office Hours
                </h3>
                <ul className="space-y-2 text-body-sm text-olive-gray">
                  <li>Monday – Friday: 9AM – 6PM PST</li>
                  <li>Saturday: 10AM – 4PM PST</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-parchment border border-border-cream rounded-card p-8 shadow-whisper"
              >
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-caption text-olive-gray mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-ivory border border-border-cream
                                 rounded-input text-near-black placeholder-stone-gray
                                 focus:border-focus-blue focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-caption text-error-crimson">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-caption text-olive-gray mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-ivory border border-border-cream
                                 rounded-input text-near-black placeholder-stone-gray
                                 focus:border-focus-blue focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-caption text-error-crimson">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-caption text-olive-gray mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-ivory border border-border-cream
                                 rounded-input text-near-black placeholder-stone-gray
                                 focus:border-focus-blue focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Company Field */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-caption text-olive-gray mb-2"
                    >
                      Company / Organization
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 bg-ivory border border-border-cream
                                 rounded-input text-near-black placeholder-stone-gray
                                 focus:border-focus-blue focus:outline-none transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-caption text-olive-gray mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-ivory border border-border-cream
                                 rounded-input text-near-black placeholder-stone-gray
                                 focus:border-focus-blue focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-caption text-error-crimson">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2
                               bg-terracotta text-ivory px-8 py-4 rounded-input
                               font-medium shadow-ring-terracotta hover:shadow-whisper
                               transition-all hover:bg-coral disabled:opacity-50
                               disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-ivory/30 border-t-ivory
                                        rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-warm-sand/50
                                    border border-terracotta/20 rounded-button"
                    >
                      <CheckCircle className="w-5 h-5 text-terracotta flex-shrink-0" />
                      <div>
                        <p className="text-body-sm text-near-black font-medium">
                          Message sent successfully!
                        </p>
                        <p className="text-caption text-olive-gray">
                          We've received your message and sent a confirmation email.
                          We'll be in touch soon!
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-error-crimson/10
                                    border border-error-crimson/20 rounded-button"
                    >
                      <AlertCircle className="w-5 h-5 text-error-crimson flex-shrink-0" />
                      <div>
                        <p className="text-body-sm text-error-crimson font-medium">
                          Something went wrong
                        </p>
                        <p className="text-caption text-olive-gray">
                          Please try again or email us directly at hello@ai-thinklabs.com
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-24 bg-parchment">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-near-black rounded-card p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="font-serif text-sub text-ivory mb-4">
                Prefer to reach out directly?
              </h2>
              <p className="text-body text-warm-silver">
                Our team is always available to discuss your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:hello@ai-thinklabs.com"
                className="flex items-center justify-center gap-3 bg-dark-surface
                           border border-border-dark rounded-button px-6 py-4
                           text-ivory hover:border-coral transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@ai-thinklabs.com</span>
              </a>

              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-3 bg-dark-surface
                           border border-border-dark rounded-button px-6 py-4
                           text-ivory hover:border-coral transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
