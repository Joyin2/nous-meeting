'use client'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tilt3D from "../components/Tilt3D";
import Link from "next/link";
import { Mail, MapPin, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
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
                Get in Touch
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-zinc-800 dark:text-white sm:text-7xl animate-rise text-glow">
                Contact <span className="bg-gradient-to-r from-nous-blue to-nous-pink bg-clip-text text-transparent">Our Team</span>
                </h1>
                <p className="mt-8 text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto animate-fade leading-8">
                Have a question or feedback? We&apos;d love to hear from you. Our team is here to help and respond quickly.
                </p>
                <div className="mt-10 flex justify-center gap-4 animate-fade">
                <Link href="#contact-form" className="group rounded-full bg-gradient-to-r from-nous-blue to-nous-pink px-8 py-3 text-base font-medium text-white shadow-lg transition hover:shadow-xl hover:opacity-90">
                    <span className="inline-flex items-center gap-2 transition group-hover:-translate-y-0.5">
                      Start Conversation <ArrowRight className="w-4 h-4" />
                    </span>
                </Link>
                </div>
            </Tilt3D>
        </section>

        {/* Contact Content Section */}
        <section id="contact-form" className="py-24 relative">
             <div className="mx-auto max-w-7xl px-6">
                
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column: Contact Info */}
                    <div>
                        <div className="mb-12">
                            <div className="text-nous-blue dark:text-nous-pink font-semibold mb-2">Contact Information</div>
                            <h2 className="text-4xl font-bold text-zinc-800 dark:text-white mb-6">Let&apos;s start a conversation</h2>
                            <p className="text-lg text-zinc-600 dark:text-zinc-300">
                                Choose your preferred way to reach out to us. We&apos;re here to help and respond quickly.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <Tilt3D className="w-full">
                                <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all shadow-sm group">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-full bg-nous-blue/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <Mail className="w-6 h-6 text-nous-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-2">Email Us</h3>
                                            <a href="mailto:support@nousmeeting.com" className="text-nous-blue dark:text-nous-pink text-lg font-medium hover:underline block mb-2">
                                                support@nousmeeting.com
                                            </a>
                                            <p className="text-zinc-500 dark:text-zinc-400">Send us an email anytime</p>
                                        </div>
                                    </div>
                                </div>
                            </Tilt3D>

                            <Tilt3D className="w-full">
                                <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all shadow-sm group">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-full bg-nous-pink/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <MapPin className="w-6 h-6 text-nous-pink" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-2">Visit Us</h3>
                                            <p className="text-zinc-700 dark:text-zinc-300 text-lg font-medium mb-2">
                                                17-101st Avenue Brooklyn
                                            </p>
                                            <p className="text-zinc-500 dark:text-zinc-400">New York 11208 USA</p>
                                        </div>
                                    </div>
                                </div>
                            </Tilt3D>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div>
                        <Tilt3D className="h-full">
                            <div className="h-full p-8 md:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-2xl relative overflow-hidden">
                                {/* Decorative gradient blob */}
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-nous-blue/20 blur-3xl -z-10"></div>
                                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-nous-pink/20 blur-3xl -z-10"></div>

                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-2">Send us a message</h3>
                                    <p className="text-zinc-600 dark:text-zinc-400">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                                </div>

                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Full Name</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-nous-blue/50 transition-all placeholder:text-zinc-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email Address</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            placeholder="Enter your email address"
                                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-nous-blue/50 transition-all placeholder:text-zinc-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Subject</label>
                                        <input 
                                            type="text" 
                                            id="subject" 
                                            placeholder="What's this about?"
                                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-nous-blue/50 transition-all placeholder:text-zinc-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                                        <textarea 
                                            id="message" 
                                            rows={4}
                                            placeholder="Tell us more about your inquiry..."
                                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-nous-blue/50 transition-all placeholder:text-zinc-400 resize-none"
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-nous-blue to-nous-pink text-white font-bold text-lg shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                                    >
                                        Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </Tilt3D>
                    </div>
                </div>
            </div>
        </section>

        {/* Custom Final CTA */}
        <section className="relative py-24 overflow-hidden">
             <div className="absolute inset-0 -z-20 bg-[radial-gradient(800px_400px_at_50%_100%,rgba(186,55,195,0.15),transparent)]"></div>
             <div className="mx-auto max-w-4xl px-6 text-center">
                <h2 className="text-4xl font-bold text-zinc-800 dark:text-white mb-6">Ready to get started?</h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-10 max-w-2xl mx-auto">
                    Join thousands of teams already using Nous Meeting to make their meetings more productive
                </p>
                <div className="flex justify-center">
                    <Link href="/#signup" className="rounded-full bg-white dark:bg-white text-zinc-800 px-10 py-4 text-lg font-bold shadow-xl hover:bg-zinc-100 transition-colors">
                        Get Started
                    </Link>
                </div>
             </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}