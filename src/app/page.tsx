import Link from 'next/link'
import { ArrowRight, Globe, Users, Target, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white group cursor-pointer">
                <span className="inline-block transition-all duration-500 hover:scale-110">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                    Amhurst
                  </span>
                  <span className="ml-2 text-white font-light tracking-wider">
                    Global
                  </span>
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-300 transition-colors">
                Home
              </Link>
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Global Talent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Connecting exceptional talent with world-class opportunities across the UK, Middle East, and USA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center group">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Amhurst Global?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in connecting top-tier talent with leading companies across three major markets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Reach</h3>
              <p className="text-gray-300 leading-relaxed">
                Strategic presence in the UK, Middle East, and USA, giving you access to diverse talent pools and opportunities worldwide.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Network</h3>
              <p className="text-gray-300 leading-relaxed">
                Our experienced team understands local markets and cultural nuances, ensuring perfect matches between talent and opportunities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Precision Matching</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced screening processes and deep industry knowledge ensure we connect the right talent with the right opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Markets
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic operations across three dynamic regions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform">
                UK
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">United Kingdom</h3>
              <p className="text-gray-300">
                Access to London&apos;s financial district and the UK&apos;s thriving tech ecosystem.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform">
                ME
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Middle East</h3>
              <p className="text-gray-300">
                Opportunities in Dubai, Qatar, and other rapidly growing regional markets.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform">
                USA
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">United States</h3>
              <p className="text-gray-300">
                Connect with Silicon Valley innovation and Fortune 500 companies nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Leading Companies
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We work with industry leaders across various sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {/* Benelli Global */}
            <div className="group flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/BenelliGlobalPMS485Logo.NoTag.svg/200px-BenelliGlobalPMS485Logo.NoTag.svg.png"
                alt="Benelli Global"
                className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
            </div>

            {/* Boomi */}
            <div className="group flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/70/Boomi-logo.svg"
                alt="Boomi"
                className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
            </div>

            {/* Boston Consulting Group */}
            <div className="group flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/40/Boston_Consulting_Group_logo.svg"
                alt="Boston Consulting Group"
                className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
            </div>

            {/* Bose Institute */}
            <div className="group flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/40/Bose_Institute_Emblem_%28Vectorized%29.svg"
                alt="Bose Institute"
                className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
            </div>

            {/* Bonefish Grill */}
            <div className="group flex items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 col-span-2 md:col-span-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/40/Bonefish_Grill_Logo.svg"
                alt="Bonefish Grill"
                className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              * Representative partner companies across our global network
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Find Your Next Opportunity?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of professionals who have found their dream roles through Amhurst Global
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-xl font-semibold text-xl transition-all transform hover:scale-105 inline-flex items-center group">
            Upload Your CV Today
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Amhurst
                </span>
                <span className="ml-2 font-light tracking-wider">
                  Global
                </span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Connecting exceptional talent with world-class opportunities across the UK, Middle East, and USA.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>hr@amhurst-global.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Amhurst Global. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
