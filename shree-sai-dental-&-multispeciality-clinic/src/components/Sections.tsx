/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export const Pricing = () => {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Transparent Costs</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Treatment Pricing</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Quality care shouldn't be expensive. We maintain competitive rates 
            and transparent pricing for all our treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_INFO.services.filter(s => s.price).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-[24px] border border-slate-100 hover:border-primary-100 hover:shadow-xl hover:shadow-primary-600/5 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display font-bold text-slate-900">{service.title}</h3>
                <div className="text-primary-600 font-display font-bold text-lg">{service.price?.split(' ')[0]}</div>
              </div>
              <p className="text-xs text-slate-500 mb-6">{service.description}</p>
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Starting price</span>
                <span className="w-6 h-6 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 p-8 rounded-[32px] bg-primary-900 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">Need a custom quote?</h3>
              <p className="text-primary-200 text-sm">For complex procedures like Implants or Orthodontics, book a consultation for a detailed treatment plan.</p>
            </div>
            <div className="md:text-right">
              <a href="#appointment" className="inline-block px-8 py-4 bg-white text-primary-900 rounded-2xl font-bold hover:bg-primary-50 transition-all">
                Book Consultation
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Real Experiences</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Patient Stories</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CLINIC_INFO.reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col h-full relative"
            >
              <div className="absolute top-6 right-8 text-primary-100">
                <Quote className="w-12 h-12 rotate-180" />
              </div>
              
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-600 leading-relaxed italic mb-8 flex-grow">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1629909613654-28a3a7c4d459?auto=format&fit=crop&q=80&w=800", title: "Clinic Interior" },
    { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800", title: "Advanced Equipment" },
    { url: "https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&q=80&w=800", title: "Sterilization Unit" },
    { url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800", title: "Waiting Area" },
    { url: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=800", title: "Consultation Room" },
    { url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800", title: "Laboratory" },
  ];

  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Facility</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Clinic Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square rounded-[24px] md:rounded-[40px] overflow-hidden cursor-pointer"
            >
              <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-600 translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
