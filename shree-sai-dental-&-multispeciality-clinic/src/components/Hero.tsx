/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, CheckCircle2, Star } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-slate-50" id="home">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50 rounded-l-[100px] -z-10 hidden lg:block" />
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6">
              <span className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Trusted by 5000+ Patients</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight mb-6">
              {CLINIC_INFO.tagline.split('&').map((part, i) => (
                <span key={i} className="block">
                  {i === 1 && <span className="text-primary-600">&</span>}
                  {part}
                </span>
              ))}
            </h1>

            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Experience world-class dental care with <span className="font-semibold text-slate-900">{CLINIC_INFO.doctor.name}</span>. 
              Advanced technology, painless procedures, and a commitment to your perfect smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20 group"
                id="hero-book-btn"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:${CLINIC_INFO.contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all"
                id="hero-call-btn"
              >
                <Phone className="w-5 h-5" />
                Emergency Call
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "Painless Treatment",
                "Advanced Lab",
                "Expert Surgeons"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28a3a7c4d459?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Dental Clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Doctor Card Overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 left-6 right-6 glass-card p-5 rounded-3xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-100">
                    <img 
                      src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200" 
                      alt={CLINIC_INFO.doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 leading-tight">{CLINIC_INFO.doctor.name}</h3>
                    <p className="text-xs text-primary-600 font-medium">{CLINIC_INFO.doctor.qualification}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 hidden md:block">
              <p className="text-4xl font-display font-bold text-primary-600">8+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years of<br/>Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
