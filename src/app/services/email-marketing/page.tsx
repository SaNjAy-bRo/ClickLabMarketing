import { Metadata } from 'next';
import { ArrowRight, MailOpen, Activity, LayoutTemplate, ShieldCheck, Coins, Database, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Email Marketing & Automation Services | ClickLab Marketing',
  description: 'Automate your revenue and maximize customer lifetime value with advanced email lifecycle flows, newsletters, and conversion-optimized campaigns.',
};

export default function EmailMarketingPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Service Hero Section */}
      <section className="relative pt-[160px] pb-24 overflow-hidden bg-[#fafcff]">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[80px]"></div>
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-100/50 blur-[80px]"></div>
          <div className="absolute inset-0 bg-[url('/bg-grid.svg')] opacity-[0.03]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Floating Logo Badge */}
            <div className="relative inline-flex items-center justify-center mb-8">
               <div className="absolute inset-0 bg-blue-400/30 blur-2xl rounded-full"></div>
               <div className="w-24 h-24 relative bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] flex items-center justify-center p-5 border border-white/60 backdrop-blur-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                 <img src="/logos/email.svg" alt="Email Marketing Logo" className="w-full h-full object-contain drop-shadow-sm" />
               </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
              Automate Revenue with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Email Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              Stop leaving money on the table. We build automated email flows and engaging newsletter campaigns that nurture leads, recover abandoned carts, and maximize your customer lifetime value (LTV).
            </p>
            <div className="flex justify-center gap-4">
               <Link href="/contact">
                 <Button variant="premium" className="px-8 py-6 text-lg shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all">
                   Boost Your LTV <ArrowRight className="w-5 h-5 ml-2" />
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">You Own Your List</h2>
            <p className="text-gray-600 text-lg">Social media algorithms constantly change, but your email list is proprietary gold.</p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lifecycle Automation</h3>
              <p className="text-gray-600 leading-relaxed">We build the core money-makers: welcome series, abandoned checkout recoveries, post-purchase nurturing, and win-back flows that act as a 24/7 sales representative.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <LayoutTemplate className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Campaign Management</h3>
              <p className="text-gray-600 leading-relaxed">We design and send beautiful, value-packed newsletters and time-sensitive promotional blasts specifically configured to maintain list health and drive immediate sales spikes.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <MailOpen className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A/B Testing & Analysis</h3>
              <p className="text-gray-600 leading-relaxed">We constantly optimize subject lines, preview text, delivery times, and layout structures to guarantee industry-leading open rates and click-through rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Why Choose ClickLab for Email Marketing?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Most businesses only capture emails to send an occasional newsletter. We treat email marketing as a core revenue channel designed to consistently generate 20-30% of your total business revenue.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Coins className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Conversion-Copy Specialists</h4>
                    <p className="text-gray-600 text-sm mt-1">We don’t just write pretty emails. We write direct-response copy that utilizes psychological triggers to compel the user to click the "Buy Now" button.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Deliverability Protection</h4>
                    <p className="text-gray-600 text-sm mt-1">We strictly monitor domain reputation and maintain healthy lists so your emails actually land in the Primary inbox, not the dreaded Promotions tab or Spam folder.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Database className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Advanced Segmentation</h4>
                    <p className="text-gray-600 text-sm mt-1">We don't "batch and blast". We segment your audience based on 0-party data, purchase history, and engagement levels to ensure hyper-relevant messaging.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-600 rounded-3xl opacity-10 absolute -inset-4 transform -rotate-3"></div>
              <div className="bg-white p-8 rounded-3xl shadow-xl relative border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center border-b pb-4">Our Proven Process</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Platform Audit & Migration</h4>
                      <p className="text-sm text-gray-600 mt-1">We assess your current ESP (Klaviyo, Mailchimp, etc) to identify missed flows and immediate revenue opportunities.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Lead Capture Optimization</h4>
                      <p className="text-sm text-gray-600 mt-1">We deploy high-converting pop-ups and forms to rapidly grow your subscriber list.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Core Flows Implementation</h4>
                      <p className="text-sm text-gray-600 mt-1">We build out the essential automation sequences (Welcome, Abandoned Cart, Browse Abandonment).</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Campaign Calendars</h4>
                      <p className="text-sm text-gray-600 mt-1">We plan and execute a 30-day rolling calendar of manual campaign blasts and newsletters.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <Rocket className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-4xl md:text-5xl font-black mb-6">Unlock Hidden Revenue from Your List.</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
            Stop relying solely on paid acquisition. We'll help you extract maximum value from the leads you've already paid for.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-50 px-10 py-6 text-lg font-bold">
              Discuss Your Email Strategy
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
