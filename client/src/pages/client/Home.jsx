import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Users, TrendingUp, Shield, Zap, BarChart3, ShoppingCart, Smartphone, Clock, CheckCircle, ArrowRight, Play, Crosshair } from "lucide-react";

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % 3);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen text-black overflow-hidden">
            <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 invert bg-[url('/hero-bg.svg')] bg-cover bg-top-left animate-gradient-x"></div>
            <div className="backdrop-blur-lg drop-shadow-2xl">

                {/* Hero Section */}
                <section className="min-h-screen relative px-6 py-20 text-center ">

                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="mb-24">
                            <span className="inline-flex items-center px-4 py-2 bg-black border-3 border-primary rounded-full text-sm text-slate-100 mb-8">
                                <Crosshair className="w-4 h-4 mr-2 text-yellow-400" />
                                Aim for Success with MartPOS
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl text-slate-800 font-extrabold leading-tight mb-6">
                            The Future of
                            <br />
                            <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">Retail Management</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-900/70 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Simple and efficient POS software for small to medium retail businesses.
                        </p>
                        <div className="mt-18 mb-24 flex justify-center text-center">
                            <Button
                                className="rounded-full bg-slate-900 animate-bounce border border-cyan-400 hover:scale-105 transition-transform duration-300 text-lg px-8 py-6 shadow-sm shadow-pink-500/20"
                            >
                                <span>Check Plans</span>
                            </Button>
                        </div>


                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <StatCard number="99.9%" label="Uptime Guarantee" icon={Shield} />
                            <StatCard number="3x" label="Faster Checkout" icon={Zap} />
                            <StatCard number="10K+" label="Happy Merchants" icon={Users} />
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 px-6 relative ">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Powerful Features That
                                <span className="bg-gradient-to-r from-primary to-cyan-600 bg-clip-text text-transparent"> Drive Results</span>
                            </h2>
                            <p className="text-xl text-black/70 max-w-2xl mx-auto">
                                Everything you need to run a modern retail business, all in one intelligent platform
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={Zap}
                                title="Lightning Fast Billing"
                                desc="Process transactions in under 3 seconds with AI-powered barcode recognition and smart product suggestions."
                                gradient="from-yellow-500 to-orange-500"
                            />
                            <FeatureCard
                                icon={BarChart3}
                                title="Smart Inventory Control"
                                desc="Real-time stock tracking with predictive analytics to prevent stockouts and optimize your inventory."
                                gradient="from-green-500 to-emerald-500"
                            />
                            <FeatureCard
                                icon={TrendingUp}
                                title="Advanced Analytics"
                                desc="Get actionable insights with AI-powered reports, sales forecasting, and customer behavior analysis."
                                gradient="from-blue-500 to-purple-500"
                            />
                            <FeatureCard
                                icon={Smartphone}
                                title="Multi-Device Sync"
                                desc="Seamlessly switch between desktop, tablet, and mobile. Your data syncs instantly across all devices."
                                gradient="from-purple-500 to-pink-500"
                            />
                            <FeatureCard
                                icon={Shield}
                                title="Bank-Grade Security"
                                desc="Enterprise-level encryption, secure payment processing, and automated backups keep your data safe."
                                gradient="from-red-500 to-pink-500"
                            />
                            <FeatureCard
                                icon={Users}
                                title="Team Management"
                                desc="Role-based access control, staff performance tracking, and shift management made simple."
                                gradient="from-cyan-500 to-blue-500"
                            />
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section id="how-it-works" className="py-20 px-6  ">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
                            <p className="text-xl text-black/70">Get started in minutes, not hours</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-12">
                            <StepCard
                                step="1"
                                title="Quick Setup"
                                desc="Create your account and import your products in under 10 minutes with our smart onboarding wizard."
                            />
                            <StepCard
                                step="2"
                                title="Start Selling"
                                desc="Begin processing transactions immediately with our intuitive interface designed for speed and accuracy."
                            />
                            <StepCard
                                step="3"
                                title="Grow & Scale"
                                desc="Use powerful analytics and automation features to optimize operations and increase profits."
                            />
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                {/* <section id="testimonials" className=" min-h-180 py-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-xl text-black/70 mb-16">Join thousands of satisfied merchants</p>

                        <div className="relative">
                            <TestimonialCard
                                testimonials={[
                                    {
                                        text: "MartPOS transformed our grocery store. Sales increased by 40% and checkout times reduced by 60%. It's simply amazing!",
                                        author: "Rajesh Kumar",
                                        role: "Store Owner, Kumar Groceries",
                                        rating: 5
                                    },
                                    {
                                        text: "The inventory management is phenomenal. We never run out of stock anymore, and the analytics help us make better decisions.",
                                        author: "Priya Singh",
                                        role: "Manager, Singh Mart",
                                        rating: 5
                                    },
                                    {
                                        text: "Customer support is outstanding. The team helped us migrate from our old system seamlessly. Highly recommended!",
                                        author: "Mohammed Ali",
                                        role: "Owner, Ali Supermarket",
                                        rating: 5
                                    }
                                ]}
                                currentIndex={currentTestimonial}
                            />
                        </div>
                    </div>
                </section> */}

                {/* Pricing Section */}
                <section id="pricing" className=" py-20 px-6 ">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                Simple, Transparent Pricing
                            </h2>
                            <p className="text-xl text-black/70">Choose the perfect plan for your business</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 justify-center">
                            <PriceCard
                                title="Monthly Plan"
                                price="₹1,200"
                                period="per month"
                                features={[
                                    "Unlimited transactions",
                                    "Real-time inventory tracking",
                                    "Basic reports & analytics",
                                    "Email support",
                                    "1 user account"
                                ]}
                            />
                            <PriceCard
                                title="Yearly Plan"
                                price="₹10,000"
                                period="per year"
                                originalPrice="₹14,400"
                                highlight
                                badge="Most Popular"
                                features={[
                                    "Everything in Monthly plan",
                                    "Advanced analytics & forecasting",
                                    "Priority 24/7 support",
                                    "Unlimited user accounts",
                                    "Custom integrations",
                                    "Dedicated account manager"
                                ]}
                            />
                        </div>

                    </div>
                </section>

                {/* CTA Section */}
                <section className=" py-20 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready to Transform
                            <span className="bg-gradient-to-r from-primary to-cyan-800 bg-clip-text text-transparent"> Your Business?</span>
                        </h2>
                        <p className="text-xl text-black/70 mb-10 max-w-2xl mx-auto">
                            Join thousands of successful merchants who've already made the switch to smarter retail management.
                        </p>
                        <Button className="group bg-gradient-to-l from-primary to-cyan-500 text-xl text-black rounded-full !px-8 !py-8">
                            Get Started Now - It's Free
                            <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer id="contact" className="bg-black/20 backdrop-blur-sm py-12 text-center border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-center space-x-2 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-800 to-cyan-500 rounded-lg flex items-center justify-center">
                            <ShoppingCart className="w-5 h-5 text-black" />
                        </div>
                        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MartPOS</div>
                    </div>
                    <p className="text-black/60 mb-4">
                        Empowering retailers worldwide with intelligent POS solutions
                    </p>
                    <div className="flex justify-center space-x-8 mb-6 text-sm text-black/60">
                        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-black transition-colors">Support</a>
                    </div>
                    <p className="text-black/40 text-sm">
                        © {new Date().getFullYear()} MartPOS. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

/* Sub Components */
function FeatureCard({ icon: Icon, title, desc, gradient }) {
    return (
        <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-black/10 shadow-sm hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10">
            <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
            <p className="text-black/70 leading-relaxed">{desc}</p>
        </div>
    );
}

function StepCard({ step, title, desc }) {
    return (
        <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mb-6 mx-auto">
                {step}
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-black/70 leading-relaxed">{desc}</p>
        </div>
    );
}

function TestimonialCard({ testimonials, currentIndex }) {
    const current = testimonials[currentIndex];

    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-lg border border-black/10 p-12 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
            </div>
            <p className="text-2xl text-black/90 italic mb-8 leading-relaxed">
                "{current.text}"
            </p>
            <div>
                <p className="text-xl font-semibold text-black">{current.author}</p>
                <p className="text-black/60">{current.role}</p>
            </div>
        </div>
    );
}

function PriceCard({ title, price, period, originalPrice, highlight, badge, features }) {
    return (
        <div className={`relative p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${highlight? "border bg-blue-500/10 border-primary": "border border-white/50"
            }`}>
            {badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        {badge}
                    </span>
                </div>
            )}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
                <div className="mb-2">
                    {originalPrice && (
                        <span className="text-lg text-black/50 line-through mr-2">{originalPrice}</span>
                    )}
                    <span className="text-5xl font-black bg-gradient-to-r from-cyan-800 to-primary bg-clip-text text-transparent">
                        {price}
                    </span>
                </div>
                <p className="text-black/60">{period}</p>
            </div>

            <div className="space-y-4 mb-8">
                {features.map((feature, i) => (
                    <div key={i} className="flex items-center text-black/80">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            <Button className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${highlight
                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-black  shadow-lg hover:shadow-xl duration-100"
                : "bg-black/10 backdrop-blur-sm text-black hover:bg-black/20 border border-black/20"
                }`}>
                Choose Plan
            </Button>
        </div>
    );
}

function StatCard({ number, label, icon: Icon }) {
    return (
        <div className="text-center">
            <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-4xl font-black bg-gradient-to-r from-primary to-cyan-800 bg-clip-text text-transparent mb-2">
                {number}
            </div>
            <p className="text-black font-semibold">{label}</p>
        </div>
    );
}