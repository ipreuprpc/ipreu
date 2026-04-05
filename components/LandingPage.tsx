import React from 'react';
import { useAppContext } from '../App';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import { ClipboardListIcon } from './icons/ClipboardListIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { ClockIcon } from './icons/ClockIcon';
import { PaperClipIcon } from './icons/PaperClipIcon';
import { EXECUTIVE_MEMBERS, UNION_CONTACT_INFO } from '../constants';
import BrandingBadge from './BrandingBadge';
import { User } from '../types';

interface LandingPageProps {
    onLoginClick: (tab?: string) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/20 dark:to-orange-900/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-inner text-orange-600 dark:text-orange-400">
            {icon}
        </div>
        <h3 className="text-xl font-black text-orange-950 dark:text-gray-100 mb-3 uppercase tracking-tight">{title}</h3>
        <p className="text-gray-900 dark:text-gray-200 leading-relaxed font-medium">{description}</p>
    </div>
);

const LeadershipCard: React.FC<{ name: string; post: string }> = ({ name, post }) => (
    <div className="p-5 rounded-2xl border transition-all duration-300 bg-white border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 group">
        <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 group-hover:scale-110 shadow-sm border border-orange-100 transition-transform duration-300">
                {name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div>
                <p className="font-black text-xl text-[#15803d] tracking-tight leading-tight mb-0.5 transition-colors uppercase">{name}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-orange-700 font-black">{post}</p>
            </div>
        </div>
    </div>
);

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
    const { calendarEvents, announcements, users, grievances, stats } = useAppContext();
    
    const upcomingEvents = calendarEvents
        .filter(e => new Date(e.date) >= new Date(new Date().setHours(0,0,0,0)))
        .sort((a,b) => a.date.localeCompare(b.date))
        .slice(0, 3);

    const latestAnnouncements = announcements.slice(0, 3);

    const isBirthdayToday = (dob?: string) => {
        if (!dob) return false;
        const today = new Date();
        const birthDate = new Date(dob);
        return today.getDate() === birthDate.getDate() && 
               today.getMonth() === birthDate.getMonth();
    };

    const birthdayStars = users.filter(u => u.role === 'MEMBER' && isBirthdayToday(u.dob));

    return (
        <div className="min-h-[calc(100vh-80px)] flex flex-col justify-between -mt-4 md:-mt-8 -mx-4 md:-mx-8">
            
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-[#2D0606] text-white py-24 md:py-36 px-6 lg:px-12 flex items-center justify-center">
                <style>{`
                    .hero-gradient {
                        background: radial-gradient(circle at top right, #4c0505 0%, #1a0202 70%, #000000 100%);
                    }
                `}</style>
                <div className="absolute inset-0 hero-gradient opacity-90"></div>
                
                {/* Decorative Blobs - Moved slightly to avoid text overlay */}
                <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

                <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
                    <div className="inline-flex flex-col items-center gap-6">
                        <div className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-bold text-orange-200 shadow-2xl flex items-center gap-2">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            SECURE CENTRALIZED MEMBER HUB
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-orange-500 font-display transition-all hover:scale-105 duration-300 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                            {UNION_CONTACT_INFO.hindiName}
                        </h2>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] drop-shadow-2xl">
                        Strength Through <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 uppercase">Unity & Transparency</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-medium leading-relaxed drop-shadow-lg">
                        The official digital home for {UNION_CONTACT_INFO.englishName}. 
                        Affiliated with <span className="text-white font-bold underline decoration-orange-500 decoration-2 underline-offset-4">{UNION_CONTACT_INFO.affiliation}</span>.
                    </p>
                    
                    <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button 
                            onClick={onLoginClick}
                            className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-700 hover:to-red-800 text-white font-black rounded-2xl shadow-[0_20px_50px_rgba(185,28,28,0.3)] transition-all hover:-translate-y-1 active:scale-95 text-xl border border-white/20"
                        >
                            Access Member Portal &rarr;
                        </button>
                        <a 
                            href="#leadership"
                            className="w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl backdrop-blur-xl border border-white/10 transition-all hover:-translate-y-1 text-xl"
                        >
                            View Executive Body
                        </a>
                    </div>
                </div>
            </section>

            {/* LIVE ACTIVITY SECTION */}
            <section className="py-20 bg-[#fcfaf7] relative z-20 border-b border-orange-100">
                <div className="max-w-6xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        
                        {/* Upcoming Events */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                                    <CalendarIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-orange-950">Union Calendar</h3>
                            </div>
                            <div className="space-y-3">
                                {upcomingEvents.length > 0 ? upcomingEvents.map(event => (
                                    <div key={event.id} className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm flex items-center justify-between group hover:border-orange-300 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col items-center justify-center bg-orange-50 w-14 h-14 rounded-lg border border-orange-100">
                                                <span className="text-[10px] text-orange-800/50 uppercase font-bold">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                                                <span className="text-xl font-bold text-orange-700 leading-none">{new Date(event.date).getDate()}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-orange-950 group-hover:text-orange-600 transition-colors">{event.title}</h4>
                                                <div className="flex items-center gap-3 text-xs text-orange-900/70 mt-1">
                                                    <span className="flex items-center gap-1"><ClockIcon className="w-3 h-3" /> {event.startTime}</span>
                                                    {event.location && <span className="flex items-center gap-1">📍 {event.location}</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={onLoginClick} className="text-xs font-bold text-orange-700 hover:text-orange-600 uppercase tracking-widest px-3 py-1 bg-orange-50 rounded-full border border-orange-100">Details</button>
                                    </div>
                                )) : (
                                    <p className="text-orange-950/80 font-black uppercase tracking-[0.2em] italic py-8 text-center bg-white rounded-xl border border-dashed border-orange-200">No upcoming events listed for this month.</p>
                                )}
                                <p className="text-center">
                                    <button onClick={onLoginClick} className="text-sm font-semibold text-orange-700 hover:text-orange-800">View Full Calendar &rarr;</button>
                                </p>
                            </div>
                        </div>

                        {/* Announcements / Circulars */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
                                    <MegaphoneIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-orange-950">Latest Circulars</h3>
                            </div>
                            <div className="space-y-3">
                                {latestAnnouncements.length > 0 ? latestAnnouncements.map(ann => (
                                    <div key={ann.id} className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm transition-all hover:border-orange-300">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-orange-950 line-clamp-1">{ann.title}</h4>
                                            <span className="text-[10px] bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full font-bold">OFFICIAL</span>
                                        </div>
                                        <p className="text-sm text-orange-900/80 line-clamp-2 mb-3">{ann.content}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] text-orange-900/60 font-medium italic">{new Date(ann.createdAt).toLocaleDateString()}</span>
                                            {ann.attachment && (
                                                <button onClick={onLoginClick} className="flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700">
                                                    <PaperClipIcon className="w-3.5 h-3.5" />
                                                    View Attachment
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )) : (
                                    <p className="text-orange-950/80 font-black uppercase tracking-[0.2em] italic py-10 text-center bg-white rounded-2xl border-2 border-dashed border-orange-100/50 shadow-inner">No public notices available at this time.</p>
                                )}
                                <p className="text-center">
                                    <button onClick={onLoginClick} className="text-sm font-semibold text-orange-600 hover:text-orange-700">Read All Circulars &rarr;</button>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* LEADERSHIP SECTION */}
            <section id="leadership" className="py-24 px-6 lg:px-12 bg-[#fcfaf7] relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-orange-950 mb-6 font-display uppercase tracking-tight">Executive Body of <span className="text-orange-600">IPREU</span></h2>
                        <div className="w-32 h-2 bg-gradient-to-r from-orange-400 to-red-800 mx-auto rounded-full mb-8 opacity-80"></div>
                        <p className="text-base md:text-lg text-orange-950/80 max-w-3xl mx-auto leading-relaxed font-medium">Serving with dedication, integrity, and a commitment to member welfare and industrial harmony.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {EXECUTIVE_MEMBERS.map(member => (
                            <LeadershipCard key={member.id} name={member.name} post={member.post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* BIRTHDAY STARS - NEW SECTION */}
            {birthdayStars.length > 0 && (
                <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-orange-50 to-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 relative z-10">
                            <span className="text-orange-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Celebrations</span>
                            <h2 className="text-5xl md:text-7xl font-black text-[#013220] uppercase tracking-tighter mb-4">Birthday Stars 🎂</h2>
                            <p className="text-lg md:text-xl text-gray-700 font-bold max-w-2xl mx-auto">Wishing our dedicated union members a year of pride and prosperity!</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative z-10">
                            {birthdayStars.map(m => (
                                <div key={m.id} className="flex flex-col items-center group">
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-orange-500 rounded-full scale-110 blur-[10px] opacity-0 group-hover:opacity-30 transition-opacity"></div>
                                        <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-[6px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500">
                                            <img src={m.photoUrl} alt={m.employeeName} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform z-20">
                                            🎈
                                        </div>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-[#013220] uppercase tracking-tight group-hover:text-orange-600 transition-colors">{m.employeeName}</h3>
                                    <p className="text-[10px] font-black text-orange-950/70 uppercase tracking-[0.2em] mt-1">{m.employeeNumber} • {m.postingLocation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* QUICK STATS (ACTUAL) */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px]"></div>
                 <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div className="space-y-2 group">
                             <p className="text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300">
                                {users.filter(u => u.role === 'MEMBER').length}
                             </p>
                             <p className="text-sm font-black text-gray-500 uppercase tracking-widest">Registered Members</p>
                        </div>
                        <div className="space-y-2 group">
                             <p className="text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300">
                                {stats.announcementCount || announcements.length}
                             </p>
                             <p className="text-sm font-black text-gray-500 uppercase tracking-widest">Digital Circulars</p>
                        </div>
                        <div className="space-y-2 group">
                             <p className="text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300">
                                 {UNION_CONTACT_INFO.regdNo}
                             </p>
                             <p className="text-sm font-black text-gray-500 uppercase tracking-widest">Registration No.</p>
                        </div>
                        <div className="space-y-2 group">
                             <p className="text-4xl md:text-5xl font-extrabold text-orange-500 font-display transition-transform group-hover:scale-110 duration-300">
                                 Active
                             </p>
                             <p className="text-sm font-black text-gray-500 uppercase tracking-widest">Network Status</p>
                        </div>
                    </div>
                 </div>
            </section>

            {/* JOINING PATHWAY */}
            <section className="py-24 px-6 lg:px-12 bg-[#fcfaf7] relative z-20">
                <div className="max-w-6xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-orange-950 mb-8 font-display underline decoration-orange-500 decoration-4 underline-offset-12">How to Join IPREU</h2>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-100 hidden md:block -z-10"></div>
                    
                    <div className="bg-white p-8 rounded-2xl border border-orange-100 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all">
                        <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-600/20">1</div>
                        <h4 className="font-bold text-xl text-orange-950 uppercase tracking-tight">Digital Registration</h4>
                        <p className="text-base text-orange-950/70">Click Join and fill in your official employee details via our secure form.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-orange-200 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all">
                        <div className="w-12 h-12 bg-orange-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-900/20">2</div>
                        <h4 className="font-bold text-xl text-orange-950 uppercase tracking-tight">Admin Verification</h4>
                        <p className="text-base text-orange-950/70">Your details will be reviewed by the Executive Body for union credentials.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-orange-200 text-center space-y-4 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all">
                        <div className="w-12 h-12 bg-orange-800 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto shadow-lg shadow-orange-900/20">3</div>
                        <h4 className="font-bold text-xl text-orange-950 uppercase tracking-tight">Full Access</h4>
                        <p className="text-base text-orange-950/70">Receive your digital ID card and gain access to voting, circulars, and more.</p>
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <button onClick={onLoginClick} className="px-12 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all shadow-xl hover:-translate-y-1">Start Registration Now</button>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-orange-950 text-orange-100 py-16 px-6 border-t border-orange-900 relative z-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-2xl font-display font-bold text-white tracking-tight">{UNION_CONTACT_INFO.englishName}</h4>
                        <p className="text-lg text-orange-300 font-bold mb-4">{UNION_CONTACT_INFO.hindiName}</p>
                        <p className="text-sm leading-relaxed max-w-md text-orange-100/60">
                             {UNION_CONTACT_INFO.address}
                        </p>
                        <div className="pt-4 space-y-2 text-sm">
                            <p className="flex items-center gap-3"><span className="text-orange-400">📞</span> {UNION_CONTACT_INFO.phones.join(' / ')} (Ext: {UNION_CONTACT_INFO.intercom})</p>
                            <p className="flex items-center gap-3"><span className="text-orange-400">✉️</span> <a href={`mailto:${UNION_CONTACT_INFO.email}`} className="hover:text-orange-300 transition-colors">{UNION_CONTACT_INFO.email}</a></p>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-orange-300 font-bold mb-4 uppercase text-xs tracking-widest font-display">Compliance</h5>
                        <ul className="space-y-3 text-sm text-orange-100/60">
                            <li>Affiliation: {UNION_CONTACT_INFO.affiliation}</li>
                            <li>Regd No: {UNION_CONTACT_INFO.regdNo}</li>
                            <li><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-400"></span> Network Status: Active</span></li>
                        </ul>
                    </div>
                    <div>
                         <h5 className="text-orange-300 font-bold mb-4 uppercase text-xs tracking-widest font-display">Navigation</h5>
                        <ul className="space-y-2 text-sm text-orange-100/60">
                            <li><button onClick={() => onLoginClick('calendar')} className="hover:text-orange-300 transition-colors">Union Calendar</button></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-orange-900/60 flex flex-col items-center gap-6">
                    <BrandingBadge />
                    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-[10px] uppercase tracking-widest text-orange-100/40 font-medium">
                        <p>&copy; {new Date().getFullYear()} IPREU. All rights reserved. | Built for the Employees, by the Union.</p>
                        <p className="text-orange-400 font-bold px-3 py-1 bg-orange-400/10 rounded-full border border-orange-400/20">Secure Private Network</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;

