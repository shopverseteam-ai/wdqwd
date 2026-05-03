/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services, AboutSection } from './components/Services';
import { Pricing, Testimonials, Gallery } from './components/Sections';
import { AppointmentForm, Contact, Footer } from './components/FooterContact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <AboutSection />
        <Services />
        <Pricing />
        <Gallery />
        <Testimonials />
        <AppointmentForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
