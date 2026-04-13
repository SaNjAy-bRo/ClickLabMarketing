import { ArrowRight, MapPin, Phone, Mail, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-gray-900" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-b border-gray-800 pb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center">
                  <MousePointer2 className="w-7 h-7 text-cyan-400 fill-cyan-400 transition-transform" />
                </div>
              </div>
              <span className="font-extrabold text-3xl tracking-tight text-white">
                ClickLab
              </span>
            </div>
            <p className="text-lg leading-relaxed mb-8 text-gray-400 font-medium">
              We are a premium digital growth partner. We build, scale, and optimize revenue engines for the world's most ambitious brands.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 text-white hover:scale-110 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 text-white hover:scale-110 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 text-white hover:scale-110 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide uppercase">Core Focus</h4>
            <ul className="space-y-4 text-base font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> SEO Architecture</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> Paid Acquisition</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> Conversion UX</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-500"/> Content Strategy</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide uppercase">Company</h4>
            <ul className="space-y-4 text-base font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">The Lab Process</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers (We're Hiring)</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Partner Program</a></li>
            </ul>
          </div>

          {/* Elaborate Contact Card */}
          <div className="lg:col-span-4 bg-gray-800/50 p-8 rounded-3xl border border-gray-700">
            <h4 className="text-white font-bold text-xl mb-6">Let's talk scale.</h4>
            <ul className="space-y-6 text-base font-medium">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-400 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-gray-500 text-sm mb-1 uppercase tracking-wider">Direct Call</span>
                  <a href="tel:+15551234567" className="text-white hover:text-cyan-400 transition-colors text-lg font-semibold">+1 (555) 123-4567</a>
                </div>
              </li>
            </ul>
            <Button className="w-full mt-8 bg-white text-gray-900 hover:bg-gray-100 font-bold h-14 rounded-xl">
              Schedule Consultation
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 font-medium">
          <p className="text-base">&copy; {new Date().getFullYear()} Click Lab Marketing. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
