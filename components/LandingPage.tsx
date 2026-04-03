import React from 'react';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import { ClipboardListIcon } from './icons/ClipboardListIcon';

interface LandingPageProps {
    onLoginClick: () => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white/80 backdrop-blur-md border border-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-inner text-orange-600">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
    return (
        <div className="min-h-[calc(100vh-80px)] flex flex-col justify-between -mt-4 md:-mt-8 -mx-4 md:-mx-8">
            
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-32 px-6 lg:px-12 flex items-center justify-center">
                
                {/* Decorative Blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-orange-200 mb-4 shadow-xl">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        Official Union Portal • Now Live
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                        Empowering Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Unified Voice</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        The fully digital hub for Indian Oil Panipat Refinery Employees Union. Stay informed, vote securely, and connect instantly with your executive union members.
                    </p>
                    
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button 
                            onClick={onLoginClick}
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 text-lg"
                        >
                            Member Portal Access &rarr;
                        </button>
                        <a 
                            href="#features"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full backdrop-blur-md border border-white/10 transition-all text-lg"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="py-12 bg-white relative z-20 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                        <div className="animate-slide-up">
                            <p className="text-4xl font-display font-extrabold text-orange-600 mb-2">1,100+</p>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Active Members</p>
                        </div>
                        <div className="animate-slide-up animation-delay-200">
                            <p className="text-4xl font-display font-extrabold text-orange-600 mb-2">100%</p>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Secure Voting</p>
                        </div>
                        <div className="animate-slide-up animation-delay-400">
                            <p className="text-4xl font-display font-extrabold text-orange-600 mb-2">24/7</p>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Digital Access</p>
                        </div>
                        <div className="animate-slide-up animation-delay-600">
                            <p className="text-4xl font-display font-extrabold text-orange-600 mb-2">Private</p>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Closed Network</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section id="features" className="py-24 px-6 lg:px-12 bg-white relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Modern Workspace for Every Member</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">We rebuilt our infrastructure from the ground up to ensure complete transparency, deep security, and real-time connectivity between you and the union.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <FeatureCard 
                            icon={<MegaphoneIcon className="w-8 h-8" />}
                            title="Instant Circulars"
                            description="Never miss an official document. Get instant access to union circulars, notifications, and vital updates securely from any device."
                        />
                        <FeatureCard 
                            icon={<ClipboardListIcon className="w-8 h-8" />}
                            title="Secure Voting"
                            description="Participate in union decisions through cryptographic-level secure polls and surveys that ensure zero tampering."
                        />
                        <FeatureCard 
                            icon={<UserGroupIcon className="w-8 h-8" />}
                            title="Private Network"
                            description="A 100% closed digital network. Your data is strictly guarded, ensuring internal union affairs remain confidential and exclusive to approved members."
                        />
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-400 py-16 px-6 border-t border-gray-800">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                    <div className="md:col-span-2">
                        <h4 className="text-2xl font-display font-bold text-white mb-2">Union Connect</h4>
                        <p className="text-sm leading-relaxed mb-6 max-w-sm">
                            The official digital platform for Indian Oil Panipat Refinery Employees Union (IPREU). Dedicated to transparent, secure, and unified member communication.
                        </p>
                    </div>
                    <div>
                        <h5 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Quick Links</h5>
                        <ul className="space-y-2 text-sm">
                            <li><button onClick={onLoginClick} className="hover:text-orange-500 transition-colors">Member Login</button></li>
                            <li><a href="#features" className="hover:text-orange-500 transition-colors">Features</a></li>
                            <li><button onClick={onLoginClick} className="hover:text-orange-500 transition-colors">Register</button></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">Network</h5>
                        <ul className="space-y-2 text-sm">
                            <li><span className="flex items-center gap-2 justify-center md:justify-start"><span className="w-2 h-2 rounded-full bg-green-500"></span> All systems operational</span></li>
                            <li>End-to-End Encrypted</li>
                            <li>Private Access Only</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} IPREU. All rights reserved.</p>
                    <p className="text-gray-500">Built for the Members, by the Union.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
