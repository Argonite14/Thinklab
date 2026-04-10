import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { ArrowRight, Brain, Zap, Shield, Sparkles, MessageSquare, Code2, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Reasoning',
      description: 'State-of-the-art AI models designed for complex problem-solving and deep analytical thinking.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed without compromising on accuracy or depth of understanding.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data remains yours. Built with security and privacy at the foundation.',
    },
  ];

  const capabilities = [
    {
      icon: MessageSquare,
      title: 'Natural Conversation',
      description: 'Engage in fluid, context-aware dialogue that feels genuinely human.',
    },
    {
      icon: Code2,
      title: 'Code Generation',
      description: 'From snippets to full applications. Intelligent assistance for every programming task.',
    },
    {
      icon: Sparkles,
      title: 'Creative Writing',
      description: 'Collaborate on stories, essays, and creative projects with an AI that understands nuance.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center
                          bg-parchment overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-warm-sand/50
                          border border-border-warm rounded-tag px-4 py-2 mb-8
                          animate-fade-in">
            <Sparkles className="w-4 h-4 text-terracotta" />
            <span className="text-caption text-olive-gray">
              Research-driven AI for the future
            </span>
          </div>

          <h1 className="font-serif text-display md:text-7xl text-near-black mb-6
                         animate-fade-in delay-100">
            Thoughtful AI,
            <br />
            <span className="text-terracotta">Human Impact</span>
          </h1>

          <p className="text-body-lg text-olive-gray max-w-2xl mx-auto mb-10
                        leading-relaxed animate-fade-in delay-200">
            AI-THINKLABS builds intelligent systems that amplify human creativity
            and productivity. We combine cutting-edge research with thoughtful design
            to create AI that works with you, not just for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4
                          animate-fade-in delay-300">
            <Link
              href="/contact/"
              className="group inline-flex items-center gap-2 bg-terracotta text-ivory
                         px-8 py-4 rounded-input font-medium
                         shadow-ring-terracotta hover:shadow-whisper transition-all
                         hover:bg-coral"
            >
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about/"
              className="inline-flex items-center gap-2 bg-warm-sand text-charcoal-warm
                         px-8 py-4 rounded-button font-medium
                         shadow-ring-warm hover:bg-ivory transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-label text-terracotta uppercase tracking-wider">
              Core Features
            </span>
            <h2 className="font-serif text-section text-near-black mt-4 mb-6">
              Built for what matters
            </h2>
            <p className="text-body-lg text-olive-gray max-w-xl mx-auto">
              Every feature is designed with purpose — to make AI more helpful,
              more reliable, and more aligned with human values.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-parchment border border-border-cream rounded-card p-8
                           shadow-whisper hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-warm-sand rounded-button flex items-center
                                justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-terracotta" />
                </div>
                <h3 className="font-serif text-sub-sm text-near-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-body text-olive-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Capabilities Section */}
      <section className="py-24 bg-near-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-label text-coral uppercase tracking-wider">
              Capabilities
            </span>
            <h2 className="font-serif text-section text-ivory mt-4 mb-6">
              What you can do
            </h2>
            <p className="text-body-lg text-warm-silver max-w-xl mx-auto">
              From everyday tasks to complex creative projects, our AI adapts to
              your needs and elevates your work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="bg-dark-surface border border-border-dark rounded-card p-8
                           hover:border-coral/30 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-near-black rounded-button flex items-center
                                justify-center mb-6">
                  <capability.icon className="w-6 h-6 text-coral" />
                </div>
                <h3 className="font-serif text-sub-sm text-ivory mb-3">
                  {capability.title}
                </h3>
                <p className="text-body text-warm-silver leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-parchment">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-section md:text-5xl text-near-black mb-6">
            Ready to think differently?
          </h2>
          <p className="text-body-lg text-olive-gray mb-10 max-w-xl mx-auto">
            Join the growing community of innovators, researchers, and creators
            who are building the future with AI-THINKLABS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="group inline-flex items-center gap-2 bg-terracotta text-ivory
                         px-8 py-4 rounded-input font-medium
                         shadow-ring-terracotta hover:shadow-whisper transition-all
                         hover:bg-coral"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="mailto:hello@ai-thinklabs.com"
              className="inline-flex items-center gap-2 text-olive-gray
                         hover:text-terracotta transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello@ai-thinklabs.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
