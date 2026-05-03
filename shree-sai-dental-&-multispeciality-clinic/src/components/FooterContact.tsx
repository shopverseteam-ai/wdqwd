/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  MessageCircle, 
  Send,
  CheckCircle2
} from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export const AppointmentForm = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="appointment">
      {/* Decorative Blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-600/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-800/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">Book Your Visit</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Ready to restore your perfect smile?
            </h2>
            <div className="space-y-6">
              {[
                { title: "Choose Your Time", desc: "Select a date and time that works best for you.", icon: Clock },
                { title: "Expert Consultation", desc: "Get a detailed dental checkup and custom treatment plan.", icon: CheckCircle2 },
                { title: "Follow-up Care", desc: "We provide comprehensive post-treatment support.", icon: Send },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-lg">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 scale-90 origin-left">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-slate-900 bg-primary-600 flex items-center justify-center text-white font-bold text-xs">
                  +2k
                </div>
              </div>
              <p className="text-white text-sm font-medium mt-3">Joined by 2000+ patients last month</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all font-medium text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all font-medium text-slate-900"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Mental Health/Problem</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all font-medium text-slate-900 appearance-none">
                  <option>Select a Service</option>
                  {CLINIC_INFO.services.map(s => <option key={s.id}>{s.title}</option>)}
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Preferred Time</label>
                <input 
                    type="datetime-local" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all font-medium text-slate-900"
                  />
              </div>

              <button className="w-full py-5 bg-primary-600 text-white rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20 mt-4 text-lg">
                Confirm Booking
              </button>
              
              <p className="text-center text-xs text-slate-400 font-medium">
                By booking, you agree to our terms and data privacy policies.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">Get In Touch</p>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-8 leading-tight">Visit our clinic</h2>
            
            <div className="space-y-8">
              {[
                { title: "Location", value: CLINIC_INFO.contact.address, icon: MapPin },
                { title: "Contact", value: `${CLINIC_INFO.contact.phone} / ${CLINIC_INFO.contact.whatsapp}`, icon: Phone },
                { title: "Email", value: CLINIC_INFO.contact.email, icon: Mail },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-[32px] bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-primary-600" />
                <h4 className="font-display font-bold text-slate-900">Clinic Timings</h4>
              </div>
              <div className="space-y-3">
                {CLINIC_INFO.timings.map((t, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="font-medium text-slate-600">{t.day}</span>
                    <span className={`font-bold ${t.time === 'Closed' ? 'text-red-500' : 'text-slate-900'}`}>{t.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-[500px] lg:h-auto min-h-[400px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
             <iframe 
                src={CLINIC_INFO.contact.mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-display font-bold text-lg">
                S
              </div>
              <h1 className="font-display font-bold text-xl leading-tight">Shree Sai</h1>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Leading dental care in Muzaffarpur with high-end technology and a patient-first approach.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: MessageCircle, href: "#" },
                { icon: Phone, href: `tel:${CLINIC_INFO.contact.phone}` },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:border-primary-600 transition-all">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              {CLINIC_INFO.services.slice(0, 5).map(s => (
                <li key={s.id}>
                  <a href="#services" className="text-slate-500 text-sm hover:text-primary-600 transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Doc', 'Services', 'Gallery', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-500 text-sm hover:text-primary-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Visit Us</h4>
            <div className="bg-primary-900 p-6 rounded-3xl text-white">
              <p className="text-xs text-primary-300 font-bold uppercase tracking-widest mb-2">Book Your Slot</p>
              <h3 className="text-2xl font-display font-bold mb-4">{CLINIC_INFO.contact.phone}</h3>
              <a href="#appointment" className="block text-center py-3 bg-white text-primary-900 rounded-xl font-bold hover:bg-primary-50 transition-all text-sm">
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Shree Sai Dental Clinic. All rights reserved. 
            <span className="block md:inline md:ml-2">Registration No: {CLINIC_INFO.doctor.registration}</span>
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 text-xs hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 text-xs hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
