import React from "react";
import Header from "../../components/landing/Header";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import Testimonials from "../../components/landing/Testimonials";
import Faqs from "../../components/landing/Faqs";
import Footer from "../../components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-700">
      <Header />

      {/* New landing layout: Hero + Spotlight + Features + Testimonials + FAQ + CTA + Footer */}
      <main>
        <Hero />

        {/* Spotlight: short three-column benefits */}
        <section className="bg-slate-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Save time</h4>
                <p className="text-sm text-gray-600">Generate invoices from plain text in seconds and automate follow-ups.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Get paid faster</h4>
                <p className="text-sm text-gray-600">Built-in reminders and polished templates increase payment rates.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Control & insights</h4>
                <p className="text-sm text-gray-600">Monitor cash flow and client behaviour with clear dashboards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features section (keeps existing Features component but in a contained width) */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Features />
          </div>
        </div>

        {/* Testimonials placed as a highlighted strip */}
        <section id="social-proof" className="py-12 bg-gradient-to-r from-white to-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <Testimonials />
            </div>
          </div>
        </section>

        {/* FAQ + CTA */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Faqs />
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-sm flex flex-col justify-center">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Ready to get started?</h3>
              <p className="text-gray-600 mb-6">Create your first invoice in seconds. No credit card required.</p>
              <div className="flex space-x-4">
                <a href="/signup" className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-950 to-blue-800 text-white font-semibold">Create an account</a>
                <a href="#features" className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-800">Explore features</a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
