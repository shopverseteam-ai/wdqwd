/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export const Services = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Specialized Dental Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto"
          >
            We offer a wide range of dental treatments using the latest technology 
            to ensure comfort and results for every patient.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_INFO.services.map((service, index) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Stethoscope;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-[32px] bg-slate-50 border border-transparent hover:bg-white hover:border-primary-100 hover:shadow-2xl hover:shadow-primary-600/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {service.price ? "Starting at " + service.price.split(' ')[0] : "Premium"}
                  </span>
                  <button className="text-primary-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <LucideIcons.ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const AboutSection = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1000" 
                alt="Dr. Rohan Kumar Singh"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-600/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-400/10 rounded-full blur-3xl -z-10" />
            
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-[32px] max-w-[280px]">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center text-white">
                  <LucideIcons.ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900 leading-tight">Certified Surgeon</p>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Bihar State Council</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">The Expert Behind Your Smile</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Meet {CLINIC_INFO.doctor.name}
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed mb-10">
              <p className="text-lg font-medium text-slate-900">
                {CLINIC_INFO.doctor.qualification}
              </p>
              <p>{CLINIC_INFO.doctor.bio}</p>
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-200">
                <div>
                  <p className="text-3xl font-display font-bold text-primary-600 mb-1">8+</p>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Years Practice</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary-600 mb-1">5k+</p>
                  <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Happy Patients</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                <LucideIcons.Award className="w-5 h-5 text-primary-600" />
              </div>
              <p className="text-sm text-slate-500 italic leading-relaxed">
                "Our mission is to provide world-class dental care that is both accessible and painless, and to treat every patient with the same care and precision as family."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
