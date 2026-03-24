'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { BaseLayout } from './BaseLayout';

interface HomePageProps {
  frontmatter: {
    title: string;
    description?: string;
    images?: {
      logo?: string;
      logoMobile?: string;
      bgPattern?: string;
      philosophyImage?: string;
    };
  };
}

const offerings = [
  {
    title: 'Regelmäßige Meditation in Frankfurt-Bornheim',
    description: 'Regelmäßige Treffen, um die Praxis der Meditation zu vertiefen und innere Ruhe zu finden.',
    href: '/meditationstermine-in-frankfurt/',
  },
  {
    title: 'Resilienzworkshops für Unternehmen',
    description: 'Förderung des Wohlbefindens und der Produktivität der Mitarbeitenden durch maßgeschneiderte Achtsamkeitserfahrungen.',
    href: '/resilienz-training-fuer-unternehmen/',
  },
  {
    title: 'Achtsamkeitserlebnisse im Rhein-Main-Gebiet',
    description: 'Entdecke besondere Achtsamkeitsangebote, die dir helfen, im Alltag bewusster und gelassener zu sein.',
    href: '/meditationstermine-in-frankfurt/',
  },
  {
    title: 'Achtsamkeitsbasiertes Coaching',
    description: 'Professionelles Coaching, das klassische Coaching-Methoden mit Achtsamkeitstechniken kombiniert, um Klarheit zu schaffen und persönliche oder berufliche Ziele zu erreichen.',
    href: '/persoenlichkeits-coaching-in-frankfurt/',
  },
];

const philosophy = [
  {
    title: 'Konfessionslose Meditation',
    description: 'Mein Ziel ist es, dir zu helfen, im Moment anzukommen und die innere Stille in dir zu hören.',
  },
  {
    title: 'Vielfältige Einflüsse',
    description: 'Ich integriere verschiedene Meditationsansätze, die mir selbst geholfen haben, um eine abwechslungsreiche und ganzheitliche Praxis zu schaffen.',
  },
  {
    title: 'Achtsamkeit und Bewusstsein',
    description: 'Ich möchte dich darin unterstützen, durch Achtsamkeit mehr Bewusstsein für deine inneren Prozesse zu entwickeln und Handlungsfreiheit statt automatische Reaktionen zu erlangen.',
  },
  {
    title: 'Herzensverbindung',
    description: 'Besonders wichtig ist mir die Meditation, die dich mit deinem Herzen verbindet und deine eigene Herzensenergie stärkt.',
  },
];

const testimonials = [
  {
    quote: 'Ich hatte das Vergnügen, an einem Achtsamkeitstraining mit Holm im Business-Kontext teilzunehmen – und es war eine durchweg bereichernde Erfahrung. Die Inhalte waren praxisnah, gut strukturiert und gleichzeitig tiefgehend – ideal abgestimmt auf die Herausforderungen im Berufsalltag.',
    author: 'Maximilian B.',
    initials: 'MB',
  },
  {
    quote: 'Die Meditation mit Holm ist eines der Highlights meiner Woche.',
    author: 'Sonja B.',
    initials: 'SB',
  },
  {
    quote: "Holm's Meditationsabende sind für mich wohltuender Ruhepool im Alltagstrubel und wichtiger Ankertermine meiner Meditationsroutine.",
    author: 'Ulli B.',
    initials: 'UB',
  },
];

const articleCards = [
  {
    href: '/meditation-schluesssel-zur-gelassenheit/',
    image: '/images/meditation-wissenswertes.jpg',
    title: 'Der Schlüssel zu Gelassenheit: Was du über Meditation wissen solltest.',
  },
  {
    href: '/meditationstechniken-leitfaden-effektivste-meditationsmethoden/',
    image: '/images/meditationstechniken.jpg',
    title: 'Meditationstechniken: Ein Leitfaden zu den effektivsten Methoden',
  },
  {
    href: '/moegliche-gefahren-von-achtsamkeit-und-meditation/',
    image: '/images/related-gefahren.jpg',
    title: 'Mögliche Gefahren von Achtsamkeit und Meditation',
  },
  {
    href: '/faq-einsteigertipps-zur-meditation/',
    image: '/images/meditation-einsteigerfragen-faq.jpg',
    title: 'FAQ & Einsteigertipps zur Meditation',
  },
];

export function HomePage({ frontmatter }: HomePageProps) {
  const philosophyImage = frontmatter.images?.philosophyImage || '/images/home-philosophy.jpg';
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <BaseLayout>
      {/* Hero Section - Full width background with centered text overlay */}
      <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-end justify-center pb-12">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/mediation-fuer-firmen.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content - 4 Service Buttons in a row */}
        <div className="relative z-10 px-4 w-full max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/meine-coaching-philosophie/"
              className="flex items-center justify-center px-6 py-4 bg-[#E8913A] hover:bg-[#d4822f] text-white text-2xl font-semibold tracking-wide transition-colors duration-200"
            >
              Coaching
            </Link>
            <Link
              href="/resilienz-training-fuer-unternehmen/"
              className="flex items-center justify-center px-6 py-4 bg-[#E8913A] hover:bg-[#d4822f] text-white text-2xl font-semibold tracking-wide transition-colors duration-200"
            >
              Resilienz-Training
            </Link>
            <Link
              href="/achtsamkeitstraining-fuer-unternehmen/"
              className="flex items-center justify-center px-6 py-4 bg-[#E8913A] hover:bg-[#d4822f] text-white text-2xl font-semibold tracking-wide transition-colors duration-200"
            >
              Achtsamkeits-Training
            </Link>
            <Link
              href="/meditationstermine-in-frankfurt/"
              className="flex items-center justify-center px-6 py-4 bg-[#E8913A] hover:bg-[#d4822f] text-white text-2xl font-semibold tracking-wide transition-colors duration-200"
            >
              Meditations-Training
            </Link>
          </div>
        </div>
      </section>

      {/* Mein Angebot Section - Split layout: text left, image right */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            {/* Text content - left */}
            <div className="lg:w-1/2 text-left">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                Mein Angebot
              </h2>
              <ul className="space-y-4">
                {offerings.map((offering, index) => (
                  <li key={index}>
                    <Link href={offering.href} className="group block">
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-500 transition mb-1">
                        {offering.title}
                      </h3>
                      <p className="text-gray-500 text-[15px] leading-normal">
                        {offering.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image - right (head portrait) */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/20231012_164945-scaled.jpg"
                  alt="Holm Zickermann - Meditation und Achtsamkeit"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wissenswertes über Meditation - 4 article cards grid (title BELOW image) */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Wissenswertes über Meditation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articleCards.map((card, index) => (
              <Link key={index} href={card.href} className="group block">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Image on top */}
                  <div className="relative aspect-square">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Title below image */}
                  <div className="p-4">
                    <h3 className="text-base font-medium text-gray-900 group-hover:text-orange-500 transition leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meine Philosophie Section - image left, text right */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Image - left */}
            <div className="lg:w-2/5">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={philosophyImage}
                  alt="Holm Zickermann - Meine Philosophie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text content - right */}
            <div className="lg:w-3/5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
                Meine Philosophie
              </h2>
              <ul className="space-y-6">
                {philosophy.map((item, index) => (
                  <li key={index}>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carousel style like original */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Was sagen die Teilnehmer?
          </h2>

          {/* Testimonial Carousel */}
          <div className="relative bg-gray-100 rounded-lg py-12 px-8 md:px-16 lg:px-24">
            {/* Large quotation mark */}
            <div className="text-center mb-6">
              <span className="text-5xl md:text-6xl text-gray-400 font-serif">"</span>
            </div>

            {/* Quote text */}
            <blockquote className="text-center text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8 max-w-3xl mx-auto">
              {testimonials[currentTestimonial].quote}
            </blockquote>

            {/* Author with initials circle */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">
                  {testimonials[currentTestimonial].initials}
                </span>
              </div>
              <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">
                {testimonials[currentTestimonial].author}
              </span>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition"
              aria-label="Vorheriges Testimonial"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition"
              aria-label="Nächstes Testimonial"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Orange background like original */}
      <section className="py-16 md:py-20 bg-[#E8913A]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Anmeldung für den Newsletter
          </h2>
          <p className="text-gray-800 mb-8">
            Melde dich für den Newsletter an, um keinen Meditations- und Achtsamkeitskurs zu verpassen!
          </p>

          <form className="space-y-6">
            {/* 3 input fields in horizontal row */}
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="VORNAME"
                className="w-full px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <input
                type="text"
                placeholder="NACHNAME"
                className="w-full px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <input
                type="email"
                placeholder="E-MAIL-ADRESSE"
                className="w-full px-4 py-3 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>

            {/* Checkbox with uppercase consent text */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 w-4 h-4"
              />
              <label htmlFor="consent" className="text-sm text-gray-800 uppercase tracking-wide">
                Ich stimme zu, dass meine übermittelten Daten erfasst und gespeichert werden.
              </label>
            </div>

            {/* White button with dark text */}
            <div>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-gray-900 font-medium uppercase tracking-wider hover:bg-gray-100 transition"
              >
                Jetzt abonnieren
              </button>
            </div>
          </form>
        </div>
      </section>
    </BaseLayout>
  );
}
