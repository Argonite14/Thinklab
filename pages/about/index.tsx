import React from 'react';
import Layout from '../../components/Layout';
import { Lightbulb, Users, Target, Heart, Quote } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of what AI can do, constantly exploring new frontiers in machine learning and human-AI interaction.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'The best work happens together. We believe in the synergy between human creativity and machine intelligence.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Accuracy matters. We obsess over the details to deliver AI systems that are reliable, consistent, and trustworthy.',
    },
    {
      icon: Heart,
      title: 'Humanity',
      description: 'Technology should serve people. We design with empathy, ensuring our AI enhances rather than replaces human potential.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Research Officer',
      bio: 'Former Google Brain researcher with 15+ years in deep learning and neural architecture.',
    },
    {
      name: 'Marcus Williams',
      role: 'CEO & Co-Founder',
      bio: 'Product visionary with experience at Notion, Linear, and early OpenAI product teams.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Design',
      bio: 'Led design teams at Apple and Figma. Passionate about creating interfaces that feel magical.',
    },
    {
      name: 'James Park',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Meta engineering lead. Built infrastructure serving billions of users daily.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-parchment">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-label text-terracotta uppercase tracking-wider">
            About Us
          </span>
          <h1 className="font-serif text-section md:text-6xl text-near-black mt-4 mb-6">
            Building AI that understands
          </h1>
          <p className="text-body-lg text-olive-gray max-w-2xl mx-auto leading-relaxed">
            AI-THINKLABS was founded on a simple belief: that artificial intelligence
            should augment human capability, not replace it. We're a team of researchers,
            engineers, and designers working to make that vision a reality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-label text-terracotta uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-serif text-sub-lg text-near-black mt-4 mb-6">
                From a research lab to your workspace
              </h2>
              <div className="space-y-4 text-body text-olive-gray leading-relaxed">
                <p>
                  What started as a small research project in 2022 has grown into a
                  team of 50+ dedicated professionals pushing the frontiers of AI.
                  We began with a question: What if AI systems were designed first
                  and foremost to be helpful collaborators?
                </p>
                <p>
                  Today, our technology powers thousands of workflows across
                  industries — from creative writing to code generation, from
                  research analysis to customer support. But our mission remains
                  the same: build AI that thinks with you, not just for you.
                </p>
                <p>
                  We're headquartered in San Francisco, with team members distributed
                  across the globe. Our diverse perspectives drive the innovation
                  that sets us apart.
                </p>
              </div>
            </div>

            <div className="bg-parchment border border-border-cream rounded-media p-8 shadow-whisper">
              <div className="flex gap-1 mb-6">
                <div className="w-3 h-3 rounded-full bg-error-crimson" />
                <div className="w-3 h-3 rounded-full bg-focus-blue" />
                <div className="w-3 h-3 rounded-full bg-terracotta" />
              </div>
              <div className="space-y-4 font-mono text-caption text-olive-gray">
                <p className="flex gap-4">
                  <span className="text-stone-gray">2022</span>
                  <span>Founded with 3 researchers in a garage</span>
                </p>
                <p className="flex gap-4">
                  <span className="text-stone-gray">2023</span>
                  <span>First public model release</span>
                </p>
                <p className="flex gap-4">
                  <span className="text-stone-gray">2024</span>
                  <span>Series A funding, 50+ team members</span>
                </p>
                <p className="flex gap-4">
                  <span className="text-stone-gray">2025</span>
                  <span>1M+ users worldwide</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-label text-terracotta uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-serif text-section text-near-black mt-4 mb-6">
              What we believe
            </h2>
            <p className="text-body-lg text-olive-gray max-w-xl mx-auto">
              Our values aren't just words on a wall — they guide every decision
              we make as we build the future of AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-ivory border border-border-cream rounded-card p-8 flex gap-6"
              >
                <div className="w-12 h-12 bg-warm-sand rounded-button flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <h3 className="font-serif text-feature text-near-black mb-2">
                    {value.title}
                  </h3>
                  <p className="text-body text-olive-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-24 bg-near-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-12 h-12 text-terracotta mx-auto mb-8" />
          <blockquote className="font-serif text-sub-lg md:text-3xl text-ivory leading-relaxed mb-8">
            "We believe that the most powerful technology is that which disappears
            into the background, amplifying human potential without demanding attention."
          </blockquote>
          <p className="text-warm-silver text-body">
            — Marcus Williams, CEO & Co-Founder
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-label text-terracotta uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="font-serif text-section text-near-black mt-4 mb-6">
              Meet the team
            </h2>
            <p className="text-body-lg text-olive-gray max-w-xl mx-auto">
              World-class researchers, engineers, and designers united by a shared
              vision for the future of AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-parchment border border-border-cream rounded-card p-6
                           hover:shadow-whisper transition-shadow"
              >
                <div className="w-16 h-16 bg-warm-sand rounded-full mb-4 flex items-center justify-center">
                  <span className="font-serif text-2xl text-terracotta">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-serif text-feature text-near-black mb-1">
                  {member.name}
                </h3>
                <p className="text-caption text-terracotta mb-3">{member.role}</p>
                <p className="text-body-sm text-olive-gray leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Team Members' },
              { number: '1M+', label: 'Active Users' },
              { number: '100+', label: 'Countries' },
              { number: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-sub-lg md:text-4xl text-near-black mb-2">
                  {stat.number}
                </div>
                <div className="text-caption text-olive-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
