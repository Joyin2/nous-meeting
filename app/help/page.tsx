'use client'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tilt3D from "../components/Tilt3D";
import Link from "next/link";
import { useState } from 'react';
import { ChevronDown, ChevronUp, Laptop, Smartphone, Bug, ArrowRight } from 'lucide-react';

const faqs = [
  { question: "How do I create an organization?", answer: "To create an organization, navigate to your dashboard sidebar, click 'Create Organization', and follow the setup prompts." },
  { question: "Can I integrate with Zoom?", answer: "Yes, you can connect Zoom in the Integrations settings to automatically sync recordings and transcripts." },
  { question: "Do I need Zoom for Nous Meeting to work?", answer: "No, you can also upload audio/video files directly or record in-person meetings via the browser." },
  { question: "Where can I find my meeting reports?", answer: "Meeting reports are located in the 'Reports' section of your dashboard, sorted by date." },
  { question: "How do I view transcripts and summaries?", answer: "Click on a meeting card in your dashboard to view its full transcript, summary, and analytics." },
  { question: "How do I reset my password?", answer: "Use the 'Forgot Password' link on the login page to receive a reset link via email." },
  { question: "How can I update my profile information?", answer: "Go to Settings > Profile to update your personal details and preferences." },
  { question: "What happens if my session expires?", answer: "Simply log in again. Your data is automatically saved and secure." },
  { question: "Is my data secure?", answer: "Yes, we use enterprise-grade encryption for all data storage and transmission." },
  { question: "What platforms does Nous Meeting support?", answer: "Nous Meeting works on all modern web browsers and offers dedicated apps for iOS and Android." },
];

const overviewItems = [
  "Create organizations workspaces.",
  "Schedule and manage meetings directly inside Nous Meeting.",
  "Connect with Zoom for transcription, recording, and meeting sync.",
  "View meeting summaries, action items, and speaker sentiment analytics.",
  "Use the calendar to track all events and generate reports.",
];

export default function HelpCenter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  }

  return (
    <div className="font-sans min-h-screen text-zinc-800 dark:text-white selection:bg-nous-blue selection:text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(1200px_1200px_at_50%_20%,rgba(66,47,155,0.25),transparent)]"></div>
            <div className="absolute inset-0 -z-30 animate-slow-pan bg-[conic-gradient(from_180deg_at_50%_50%,#422F9B_0%,#BA37C3_25%,#422F9B_50%,#BA37C3_75%,#422F9B_100%)] opacity-20"></div>
            
            <Tilt3D className="mx-auto max-w-4xl px-6 text-center">
                <div className="inline-flex items-center rounded-full border border-nous-blue/30 bg-nous-blue/10 px-3 py-1 text-sm font-medium text-nous-blue dark:text-nous-pink backdrop-blur-md mb-8">
                Help & Support Center
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-zinc-800 dark:text-white sm:text-7xl animate-rise text-glow">
                Help & <span className="bg-gradient-to-r from-nous-blue to-nous-pink bg-clip-text text-transparent">Support</span>
                </h1>
                <p className="mt-8 text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto animate-fade leading-8">
                Find guidance, explore FAQs, and get the support you need to make the most of Nous Meeting
                </p>
                <div className="mt-10 flex justify-center gap-4 animate-fade">
                <Link href="#contact" className="group rounded-full bg-gradient-to-r from-nous-blue to-nous-pink px-8 py-3 text-base font-medium text-white shadow-lg transition hover:shadow-xl hover:opacity-90">
                    <span className="inline-block transition group-hover:-translate-y-0.5">Get Help Now</span>
                </Link>
                </div>
            </Tilt3D>
        </section>

        {/* Documentation / User Manual */}
        <section id="manual" className="py-24 relative">
             <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16">
                    <div className="text-nous-blue dark:text-nous-pink font-semibold mb-2">Documentation</div>
                    <h2 className="text-4xl font-bold text-zinc-800 dark:text-white">User Manual</h2>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                        Everything you need to know to get started with Nous Meeting
                    </p>
                </div>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-center">Quick Overview</h3>
                    <p className="text-center text-zinc-600 dark:text-zinc-400 mb-10">Here's a quick overview of what you can do with Nous Meeting:</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {overviewItems.map((item, i) => (
                            <Tilt3D key={i} className="h-full">
                                <div className="h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors shadow-sm">
                                    <div className="w-8 h-8 rounded-full bg-nous-blue/10 flex items-center justify-center text-nous-blue mb-4">
                                        <span className="font-bold">{i + 1}</span>
                                    </div>
                                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{item}</p>
                                </div>
                            </Tilt3D>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    <Tilt3D>
                        <button className="flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-nous-blue dark:hover:border-nous-pink transition-all group">
                            <Laptop className="w-6 h-6 text-nous-blue dark:text-nous-pink" />
                            <span className="font-medium text-lg">Desktop User Manual (PDF)</span>
                        </button>
                    </Tilt3D>
                    <Tilt3D>
                        <button className="flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-nous-blue dark:hover:border-nous-pink transition-all group">
                            <Smartphone className="w-6 h-6 text-nous-blue dark:text-nous-pink" />
                            <span className="font-medium text-lg">Mobile User Manual (PDF)</span>
                        </button>
                    </Tilt3D>
                </div>
             </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
             <div className="mx-auto max-w-4xl px-6">
                <div className="text-center mb-16">
                    <div className="text-nous-blue dark:text-nous-pink font-semibold mb-2">Frequently Asked Questions</div>
                    <h2 className="text-4xl font-bold text-zinc-800 dark:text-white">Common Questions</h2>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-300">
                        Find quick answers to the most frequently asked questions
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black overflow-hidden transition-all">
                            <button 
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
                            >
                                <span className="font-semibold text-lg text-zinc-800 dark:text-zinc-100 pr-8">{faq.question}</span>
                                {openFaq === index ? <ChevronUp className="w-5 h-5 text-nous-blue" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
                            </button>
                            {openFaq === index && (
                                <div className="px-6 pb-6 pt-0 text-zinc-600 dark:text-zinc-400 leading-relaxed animate-fade">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-24 relative">
             <div className="mx-auto max-w-7xl px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <div className="text-nous-blue dark:text-nous-pink font-semibold mb-2">Get in Touch</div>
                        <h2 className="text-4xl font-bold text-zinc-800 dark:text-white mb-6">Still have questions?</h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10 leading-relaxed">
                            Contact our support team and we'll get back to you as soon as possible
                        </p>
                        
                        <div className="space-y-8">
                             {/* Bug Report CTA */}
                             <Tilt3D>
                                <div className="p-8 rounded-2xl bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black border border-zinc-200 dark:border-zinc-800 shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-red-500/10 text-red-500">
                                            <Bug className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">Report Issues</h3>
                                            <p className="text-zinc-600 dark:text-zinc-400 mb-4">Found a Bug? Help us improve by reporting any issues you encounter</p>
                                            <button className="text-sm font-semibold text-red-500 hover:text-red-400 flex items-center gap-1 group">
                                                Report a Bug <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                             </Tilt3D>
                        </div>
                    </div>

                    <div className="relative">
                         <Tilt3D className="h-full">
                            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                                        <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-nous-blue/50 transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                                        <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-nous-blue/50 transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Subject</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-nous-blue/50 transition-all">
                                            <option>What's this about?</option>
                                            <option>General Inquiry</option>
                                            <option>Technical Support</option>
                                            <option>Billing</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                                        <textarea rows={4} placeholder="Tell us more about your question..." className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-nous-blue/50 transition-all resize-none"></textarea>
                                    </div>
                                    <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-nous-blue to-nous-pink text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                         </Tilt3D>
                    </div>
                </div>
             </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
