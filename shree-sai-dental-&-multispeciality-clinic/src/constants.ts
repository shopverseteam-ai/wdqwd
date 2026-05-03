/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const CLINIC_INFO = {
  name: "Shree Sai Dental & Multispeciality Clinic",
  tagline: "Caring for Your Smile & Health",
  doctor: {
    name: "Dr. Rohan Kumar Singh",
    qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
    experience: "8+ Years",
    registration: "A-24567 (Bihar State Dental Council)",
    bio: "Dr. Rohan Kumar Singh is a skilled dental surgeon with over 8 years of experience in advanced dental procedures. He specializes in painless treatments and modern dental care using the latest technology."
  },
  contact: {
    address: "1st Floor, Gupta Market, Near SBI Bank, Kalambagh Road, Muzaffarpur, Bihar – 842001",
    phone: "+91 91234 56789",
    whatsapp: "+91 91234 56789",
    email: "shreesaiclinic@gmail.com",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114946.33120790369!2d85.34005697669527!3d26.117961234914197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed10e7b8b8b8b7%3A0x1b1b1b1b1b1b1b1b!2sMuzaffarpur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
  },
  timings: [
    { day: "Monday", time: "10:00 AM – 2:00 PM, 5:00 PM – 9:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 2:00 PM, 5:00 PM – 9:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 2:00 PM, 5:00 PM – 9:00 PM" },
    { day: "Thursday", time: "10:00 AM – 2:00 PM, 5:00 PM – 9:00 PM" },
    { day: "Friday", time: "10:00 AM – 2:00 PM, 5:00 PM – 9:00 PM" },
    { day: "Saturday", time: "10:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" }
  ],
  services: [
    { id: '1', title: "General Dentistry", description: "Comprehensive dental exams and routine check-ups for all ages.", price: "₹200 (Consultation)", icon: "Stethoscope" },
    { id: '2', title: "Tooth Extraction", description: "Precise and painless tooth removal including wisdom teeth.", price: "₹500 – ₹2000", icon: "Scissors" },
    { id: '3', title: "Root Canal Treatment (RCT)", description: "Advanced painless RCT to save your natural teeth.", price: "₹3000 – ₹6000", icon: "Zap" },
    { id: '4', title: "Teeth Whitening", description: "Professional whitening for a brighter, more confident smile.", price: "₹800 – ₹1500 (Cleaning)", icon: "Sparkles" },
    { id: '5', title: "Dental Implants", description: "Permanent, natural-looking tooth replacements.", price: "On Consultation", icon: "Anchor" },
    { id: '6', title: "Braces & Orthodontics", description: "Straighten your smile with modern orthodontic solutions.", price: "₹25,000 onwards", icon: "Hash" },
    { id: '7', title: "Kids Dentistry", description: "Specialized, gentle dental care for your little ones.", price: "On Consultation", icon: "Baby" },
    { id: '8', title: "Gum Treatment", description: "Healthy gums for a healthy body. We treat periodontitis and gingivitis.", price: "On Consultation", icon: "HeartPulse" },
    { id: '9', title: "Digital X-Ray", description: "Instant, low-radiation digital imaging for accurate diagnosis.", price: "Included", icon: "Camera" }
  ],
  trustPoints: [
    { id: 't1', title: "5000+ Happy Patients", description: "A legacy of trust and successful dental transformations.", icon: "Users" },
    { id: 't2', title: "8+ Years Experience", description: "Advanced clinical expertise in oral and maxillofacial surgery.", icon: "Award" },
    { id: 't3', title: "Advanced Equipment", description: "Using the latest technology for painless and precise treatments.", icon: "ShieldCheck" }
  ],
  reviews: [
    { id: 'r1', name: "Amit Kumar", text: "Doctor is very polite and explains everything clearly. Treatment was painless.", rating: 5 },
    { id: 'r2', name: "Neha Sharma", text: "Affordable prices and clean clinic. Highly recommended.", rating: 5 },
    { id: 'r3', name: "Rajesh Verma", text: "I got my RCT done here. Good experience and no pain.", rating: 5 }
  ]
};
