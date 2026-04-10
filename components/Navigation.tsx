'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, ChevronDown, Brain, Code, MessageSquare, FileText, Video, HelpCircle, Zap, BookOpen } from 'lucide-react';

interface DropdownItem {
  icon: React.ElementType;
  label: string;
  description: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Products',
      dropdown: [
        {
          icon: Brain,
          label: 'Think Engine',
          description: 'Our flagship AI reasoning engine for complex problem-solving',
          href: '#',
        },
        {
          icon: Code,
          label: 'Code Assistant',
          description: 'Intelligent coding companion for developers',
          href: '#',
        },
        {
          icon: MessageSquare,
          label: 'Chat Platform',
          description: 'Conversational AI for customer support and engagement',
          href: '#',
        },
        {
          icon: Zap,
          label: 'API Access',
          description: 'Integrate our models directly into your applications',
          href: '#',
        },
      ],
    },
    {
      label: 'Resources',
      dropdown: [
        {
          icon: BookOpen,
          label: 'Documentation',
          description: 'Comprehensive guides and API references',
          href: '#',
        },
        {
          icon: FileText,
          label: 'Blog',
          description: 'Latest insights from our research team',
          href: '#',
        },
        {
          icon: Video,
          label: 'Tutorials',
          description: 'Video guides and interactive learning',
          href: '#',
        },
        {
          icon: HelpCircle,
          label: 'Help Center',
          description: 'FAQs and community support',
          href: '#',
        },
      ],
    },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-parchment/95 backdrop-blur-sm border-b border-border-dark'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-near-black hover:text-terracotta transition-colors"
          >
            <Sparkles className="w-6 h-6" />
            <span className="font-serif text-xl font-medium tracking-tight">
              AI-THINKLABS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-olive-gray hover:text-near-black transition-colors text-body rounded-button hover:bg-warm-sand/50"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`px-4 py-2 flex items-center gap-1 text-body transition-colors rounded-button hover:bg-warm-sand/50 ${
                      activeDropdown === item.label
                        ? 'text-near-black bg-warm-sand/50'
                        : 'text-olive-gray hover:text-near-black'
                    }`}
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-2 w-80 bg-ivory border border-border-cream rounded-card shadow-whisper overflow-hidden animate-fade-in"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="flex items-start gap-4 px-4 py-3 mx-2 rounded-button hover:bg-warm-sand/50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-warm-sand rounded-button flex items-center justify-center shrink-0 group-hover:bg-terracotta transition-colors">
                            <dropdownItem.icon className="w-5 h-5 text-olive-gray group-hover:text-ivory transition-colors" />
                          </div>
                          <div>
                            <p className="text-body font-medium text-near-black group-hover:text-terracotta transition-colors">
                              {dropdownItem.label}
                            </p>
                            <p className="text-caption text-stone-gray leading-relaxed">
                              {dropdownItem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 py-3 bg-parchment border-t border-border-cream">
                      <Link
                        href="/contact/"
                        className="text-caption text-terracotta hover:text-coral transition-colors font-medium"
                      >
                        View all {item.label.toLowerCase()} →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact/"
              className="ml-4 bg-terracotta text-ivory px-5 py-2.5 rounded-button font-medium
                         shadow-ring-terracotta hover:shadow-whisper transition-all
                         hover:bg-coral"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-near-black hover:text-terracotta transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-parchment border-t border-border-warm animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-olive-gray hover:text-near-black hover:bg-warm-sand/50 rounded-button transition-colors text-body"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-olive-gray hover:text-near-black hover:bg-warm-sand/50 rounded-button transition-colors text-body"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && item.dropdown && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-olive-gray hover:text-near-black hover:bg-warm-sand/50 rounded-button transition-colors"
                          >
                            <dropdownItem.icon className="w-4 h-4 text-terracotta" />
                            <span className="text-body-sm">{dropdownItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact/"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-terracotta text-ivory px-5 py-3
                         rounded-button font-medium shadow-ring-terracotta mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
