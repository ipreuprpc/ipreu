import React, { useState } from 'react';
import { useAppContext } from '../App';
import MembershipCard from './MembershipCard';
import { User, Survey, CalendarEvent, Grievance } from '../types';
import { ClipboardListIcon } from './icons/ClipboardListIcon';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import { PaperClipIcon } from './icons/PaperClipIcon';
import { ClockIcon } from './icons/ClockIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';


// Helper: Survey Card for Voting
const SurveyCard: React.FC<{ survey: Survey; onSubmit: (surveyId: string, optionId: string) => void; }> = ({ survey, onSubmit }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedOption) {
            onSubmit(survey.id, selectedOption);
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 transition-all hover:shadow-xl hover:border-orange-200 group">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="text-xl font-black text-orange-950 mb-6 flex items-center gap-3 uppercase tracking-tight">
                        <span className="w-1.5 h-8 bg-orange-600 rounded-full"></span>
                        {survey.question}
                    </legend>
                    <div className="space-y-3">
                        {survey.options.map(option => (
                            <label key={option.id} className={`flex items-center p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                selectedOption === option.id 
                                ? 'border-orange-500 bg-orange-50' 
                                : 'border-gray-100 hover:border-orange-200'
                            }`}>
                                <input
                                    type="radio"
                                    name={`survey-${survey.id}`}
                                    value={option.id}
                                    checked={selectedOption === option.id}
                                    onChange={() => setSelectedOption(option.id)}
                                    className="h-5 w-5 text-orange-600 border-orange-300 focus:ring-orange-500 bg-white"
                                />
                                <span className={`ml-4 text-sm font-black ${selectedOption === option.id ? 'text-orange-950' : 'text-orange-900/40'}`}>
                                    {option.text}
                                </span>
                            </label>
                        ))}
                    </div>
                </fieldset>
                <button
                    type="submit"
                    disabled={!selectedOption}
                    className="mt-8 w-full py-4 px-6 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-orange-600/20 disabled:bg-orange-200 disabled:shadow-none active:scale-95"
                >
                    SUBMIT SECURE VOTE
                </button>
            </form>
        </div>
    );
};

// Helper: Voted Survey Result Card
const VotedSurveyCard: React.FC<{ survey: Survey; userVoteOptionId: string; onReVote?: (id: string) => void; }> = ({ survey, userVoteOptionId, onReVote }) => {
    const allVotes = Object.values(survey.votes);
    const totalVotes = allVotes.length;
    
    const userVotedOption = survey.options.find(opt => opt.id === userVoteOptionId);

    const getVoteCountForOption = (optionId: string) => {
        return allVotes.filter(vote => vote === optionId).length;
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-orange-600 border border-orange-100 group">
            <h3 className="font-black text-orange-950 text-lg mb-2">{survey.question}</h3>
             {userVotedOption && (
                 <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
                     <div className="inline-flex items-center gap-2 text-[10px] font-black text-orange-700 bg-orange-100 px-3 py-1 rounded-full uppercase tracking-widest border border-orange-200">
                        <CheckCircleIcon className="w-3 h-3" />
                        Selection Logged: {userVotedOption.text}
                    </div>
                    {onReVote && (
                        <button 
                            onClick={() => onReVote(survey.id)}
                            className="text-[10px] font-black text-orange-600 hover:text-orange-700 uppercase tracking-widest transition-colors flex items-center gap-1.5"
                        >
                            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                            Change My Choice
                        </button>
                    )}
                </div>
            )}
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">{totalVotes} verified votes</p>
            <div className="space-y-4">
                {survey.options.map(option => {
                    const voteCount = getVoteCountForOption(option.id);
                    const percentage = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;
                    const isUserVote = option.id === userVoteOptionId;
                    return (
                        <div key={option.id} className="relative">
                            <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-tight mb-1.5">
                                <span className={isUserVote ? 'text-orange-600' : 'text-orange-900/40'}>
                                    {option.text} {isUserVote && ' (SELECTED)'}
                                </span>
                                <span className="text-orange-900/20">{percentage.toFixed(0)}%</span>
                            </div>
                            <div className="w-full bg-orange-100 rounded-full h-2.5 overflow-hidden">
                                <div 
                                    className={`h-full rounded-full transition-all duration-1000 ${isUserVote ? 'bg-orange-600' : 'bg-orange-200'}`} 
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// ─── Grievance Form ─────────────────────────────────────────────────────────
const GrievanceForm: React.FC<{ onSubmit: (subject: string, desc: string, cat: string) => Promise<void> }> = ({ onSubmit }) => {
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('GENERAL');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMsg('');
        setErrorMsg('');
        try {
            await onSubmit(subject, description, category);
            setSubject(''); setDescription(''); setCategory('GENERAL');
            setSuccessMsg('✅ Grievance submitted successfully. The union admin will review it shortly.');
        } catch (err: any) {
            setErrorMsg(err.message || 'Failed to submit grievance. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 space-y-6">
            <h3 className="text-xl font-black text-orange-950 flex items-center gap-4 uppercase tracking-tight">
                <div className="p-3 bg-orange-600 rounded-xl text-white shadow-lg shadow-orange-600/20">
                    <MegaphoneIcon className="w-6 h-6" />
                </div>
                Register Grievance
            </h3>

            {successMsg && (
                <div className="bg-green-50 border border-green-300 text-green-900 rounded-xl px-5 py-4 text-sm font-bold animate-fade-in">
                    {successMsg}
                </div>
            )}
            {errorMsg && (
                <div className="bg-red-50 border border-red-300 text-red-800 rounded-xl px-5 py-4 text-sm font-bold">
                    {errorMsg}
                </div>
            )}

            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-[10px] font-black text-orange-950/60 uppercase tracking-widest mb-1.5">Subject / Case Title</label>
                    <input type="text" value={subject} onChange={e => setSubject(e.target.value)} required placeholder="e.g., Salary discrepancy" className="mt-1 block w-full px-4 py-3 bg-white border border-orange-200 focus:border-orange-600 rounded-xl text-sm text-orange-950 outline-none transition-all font-bold shadow-sm" />
                </div>
                <div>
                    <label className="block text-[10px] font-black text-orange-950/60 uppercase tracking-widest mb-1.5">Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} className="mt-1 block w-full px-4 py-3 bg-white border border-orange-200 focus:border-orange-600 rounded-xl text-sm text-orange-950 outline-none transition-all font-bold shadow-sm">
                        <option value="GENERAL">General Support</option>
                        <option value="SALARY">Salary / Benefits</option>
                        <option value="WORK_CONDITION">Work Conditions</option>
                        <option value="HARASSMENT">Harassment / Safety</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="block text-[10px] font-black text-orange-950/60 uppercase tracking-widest mb-1.5">Detailed Description (Private)</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} required rows={4} placeholder="Please provide all relevant details here..." className="mt-1 block w-full px-4 py-3 bg-white border border-orange-200 focus:border-orange-600 rounded-xl text-sm text-orange-950 outline-none transition-all font-bold shadow-sm" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-orange-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-95 disabled:bg-orange-200">
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT GRIEVANCE'}
            </button>
        </form>
    );
};


// Main Member Dashboard Component
interface MemberDashboardProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const MemberDashboard: React.FC<MemberDashboardProps> = ({ activeTab, setActiveTab }) => {
    const { surveys, currentUser, submitVote, announcements, calendarEvents, grievances, submitGrievance } = useAppContext();
    const [reVotingIds, setReVotingIds] = useState<Set<string>>(new Set());

    if (!currentUser) return null;

    const availableSurveys = surveys.filter(s => !s.votes[currentUser.id] || reVotingIds.has(s.id));
    const votedSurveys = surveys.filter(s => !!s.votes[currentUser.id] && !reVotingIds.has(s.id));

    const handleReVote = (id: string) => {
        setReVotingIds(prev => new Set(prev).add(id));
    };

    const handleVoteSubmit = async (surveyId: string, optionId: string) => {
        await submitVote(surveyId, optionId);
        setReVotingIds(prev => {
            const next = new Set(prev);
            next.delete(surveyId);
            return next;
        });
    };

    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening';

    const isNew = (createdAt?: string) => {
        if (!createdAt) return false;
        const oneDay = 24 * 60 * 60 * 1000;
        return (new Date().getTime() - new Date(createdAt).getTime()) < oneDay;
    };

    return (
        <div className="space-y-12 animate-fade-in pb-20">
            {/* Home Dashboard: Greeting, ID Card, and Announcements */}
            {(activeTab === 'dashboard' || activeTab === 'overview') && (
                <>
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-stretch">
                    {/* Left: Greeting - REDESIGNED PREMIUM ORANGE */}
                    <div className="xl:col-span-3 bg-gradient-to-br from-orange-950 via-orange-900 to-[#2d0f05] rounded-[3rem] p-10 md:p-14 text-white shadow-2xl flex flex-col justify-center relative overflow-hidden group border border-orange-900/50">
                        {/* Dynamic Background Elements */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-[100px] group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/40 rounded-full -ml-32 -mb-32 blur-[80px]" />
                        
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-orange-600/20 backdrop-blur-xl px-5 py-2 rounded-full border border-orange-500/20 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-inner">
                                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_#f97316]"></span>
                                <span className="opacity-80">Authenticated Member Session</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.9] uppercase">
                                {greeting}, <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-500">
                                    {currentUser.employeeName.split(' ')[0]} 
                                </span>! <span className="inline-block hover:animate-bounce transition-transform duration-300">⚡</span>
                            </h1>
                            <p className="text-orange-100/60 text-lg md:text-xl max-w-xl leading-relaxed font-bold italic border-l-4 border-orange-500/30 pl-6">
                                "Welcome back to the IPREU digital nexus. Your identity remains protected and your voice strategic."
                            </p>
                        </div>
                        
                        <div className="mt-14 flex flex-wrap items-center gap-4 relative z-10">
                            <div className="bg-white/5 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/10 text-xs font-black shadow-2xl flex items-center gap-3">
                                <span className="text-orange-500 opacity-60 uppercase tracking-widest text-[9px]">Authority</span> 
                                <span className="text-white">IPREU Member</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/10 text-xs font-black shadow-2xl flex items-center gap-3">
                                <span className="text-orange-500 opacity-60 uppercase tracking-widest text-[9px]">Dossier Code</span>
                                <span className="text-white font-mono tracking-widest">#{currentUser.id.substring(0,8).toUpperCase()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Digital ID Card Preview */}
                    <div className="xl:col-span-2 flex flex-col items-center justify-center bg-white rounded-[2.5rem] p-8 border border-orange-100 shadow-xl group hover:border-orange-600/20 transition-all duration-500">
                        <div className="inline-flex items-center gap-2 mb-8 bg-[#fcfaf7] px-4 py-1.5 rounded-full">
                            <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em]">Identity Verification</p>
                        </div>
                        <div className="w-full transform group-hover:scale-[1.02] transition-transform duration-500">
                            <MembershipCard user={currentUser} logoUrl="/logo.png" />
                        </div>
                        <div className="mt-8 flex items-center gap-3 text-orange-900/20">
                            <div className="h-[2px] w-8 bg-orange-100" />
                            <p className="text-[9px] font-black uppercase tracking-widest text-center italic">
                                SECURE SMART ID BY IPREU
                            </p>
                            <div className="h-[2px] w-8 bg-orange-100" />
                        </div>
                    </div>
                </div>

                {/* Latest Announcements */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-orange-100 rounded-2xl text-orange-600 shadow-sm">
                                <MegaphoneIcon className="w-7 h-7"/>
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-orange-950 tracking-tight leading-none uppercase">Latest Circulars</h2>
                                <p className="text-[10px] font-bold text-orange-900/40 uppercase tracking-widest mt-1.5">Official Union Updates & News</p>
                            </div>
                        </div>
                        <div className="w-full max-w-[100px] h-1 bg-gradient-to-r from-orange-600 to-transparent rounded-full hidden md:block"></div>
                    </div>
                    
                    {announcements.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {announcements.map(ann => (
                                <div key={ann.id} className="relative bg-white p-8 rounded-[2rem] shadow-sm border border-orange-100 hover:shadow-xl hover:border-orange-200 transition-all group overflow-hidden flex flex-col justify-between">
                                    <div className="relative">
                                        {isNew(ann.createdAt) && (
                                            <div className="absolute top-0 right-0 bg-orange-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-orange-600/20 translate-x-2 -translate-y-2 z-10">
                                                NEW
                                            </div>
                                        )}
                                        <h3 className="font-black text-xl text-orange-950 pr-10 mb-3 group-hover:text-orange-600 transition-colors leading-tight uppercase tracking-tight">{ann.title}</h3>
                                        <p className="text-sm text-orange-900/60 mb-6 whitespace-pre-wrap leading-relaxed line-clamp-3 font-medium italic">"{ann.content}"</p>
                                    </div>
                                    
                                    {ann.attachment && (
                                        <div className="mt-4 pt-6 border-t border-orange-50 flex flex-wrap gap-2">
                                            <a href={ann.attachment.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[10px] font-black text-orange-700 hover:text-white bg-orange-100 hover:bg-orange-600 px-5 py-2.5 rounded-xl transition-all uppercase tracking-widest shadow-sm">
                                                <PaperClipIcon className="w-4 h-4" />
                                                <span>{ann.attachment.name}</span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-[#fcfaf7] text-center py-24 px-8 rounded-[3rem] border-2 border-dashed border-orange-100">
                            <div className="mx-auto w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-200 shadow-inner">
                                <MegaphoneIcon className="w-10 h-10" />
                            </div>
                            <p className="text-sm font-black text-orange-900/20 uppercase tracking-[0.3em]">No incoming intelligence recorded</p>
                        </div>
                    )}
                </div>
                </>
            )}

            {/* Calendar Section */}
            {activeTab === 'calendar' && (
                <div className="space-y-8 animate-slide-up">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-orange-100 rounded-2xl text-orange-600 shadow-sm">
                            <ClockIcon className="w-7 h-7"/>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-[#002316] tracking-tight leading-none uppercase">Union Intelligence Hub</h2>
                            <p className="text-[10px] font-bold text-[#002316]/40 uppercase tracking-widest mt-1.5">Official Circulars & Strategic Bulletins</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {calendarEvents.length > 0 ? (
                            calendarEvents.sort((a,b) => a.date.localeCompare(b.date)).map(event => (
                                <div key={event.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-orange-100 hover:border-orange-600/30 transition-all hover:shadow-xl group">
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0 w-20 h-24 bg-gradient-to-b from-white to-orange-50 rounded-2xl flex flex-col items-center justify-center text-orange-700 border border-orange-100 shadow-lg group-hover:scale-105 transition-transform">
                                            <span className="text-[10px] font-black uppercase tracking-widest mb-1">{new Date(event.date).toLocaleDateString(undefined, { month: 'short' })}</span>
                                            <span className="text-4xl font-black leading-none tracking-tighter">{new Date(event.date).getDate()}</span>
                                            <span className="text-[8px] font-black uppercase mt-1.5 opacity-40">{new Date(event.date).getFullYear()}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-black text-[#002316] text-xl mb-3 pr-2 leading-tight uppercase group-hover:text-orange-600 transition-colors truncate">{event.title}</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3 text-[#002316]/40">
                                                    <ClockIcon className="w-4 h-4 text-orange-600 opacity-60" /> 
                                                    <span className="text-[11px] font-bold uppercase">{event.startTime}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-[#002316]/40">
                                                    <div className="w-4 h-4 flex items-center justify-center"><span className="text-[10px] font-black text-orange-600">@</span></div>
                                                    <span className="text-[11px] font-bold uppercase truncate">{event.location || 'TBA'}</span>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <span className="text-[9px] font-black text-orange-800 bg-orange-100 px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm">
                                                    {event.category || 'Strategic Event'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-32 text-center bg-[#fcfaf7] rounded-[3rem] border-2 border-dashed border-orange-100">
                                <p className="text-xs font-black text-[#002316]/20 uppercase tracking-[0.3em] italic">No upcoming strategic schedules available</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Grievance Section */}
            {activeTab === 'grievances' && (
                <div className="space-y-10 animate-slide-up">
                   <div className="flex items-center gap-4">
                        <div className="p-3 bg-orange-100 rounded-2xl text-orange-600 shadow-sm">
                            <MegaphoneIcon className="w-7 h-7 rotate-12"/>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-[#002316] tracking-tight leading-none uppercase">Public Grievance Redressal Hub</h2>
                            <p className="text-[10px] font-bold text-[#002316]/70 uppercase tracking-widest mt-1.5">Secure Grievance Redressal Mechanism</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                        <div>
                             <GrievanceForm onSubmit={submitGrievance} />
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-black text-[#002316] uppercase tracking-widest text-xs flex items-center gap-3">
                                        <span className="w-3 h-3 bg-orange-600 rounded-full animate-pulse shadow-lg shadow-orange-600/50"></span>
                                        Grievance Reports
                                    </h3>
                                <p className="text-[10px] font-bold text-[#002316]/20 uppercase tracking-widest">{grievances.length} Submissions</p>
                            </div>
                            {grievances.length > 0 ? grievances.map(g => (
                                <div key={g.id} className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-orange-100 transition-all hover:border-orange-600/20">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="font-black text-[#002316] text-base uppercase tracking-tight pr-4">{g.subject}</h4>
                                        <span className={`text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm ${
                                            g.status === 'NEW' ? 'bg-orange-100 text-orange-700 border border-orange-200' : 'bg-orange-100 text-orange-700 border border-orange-200'
                                        }`}>
                                            {g.status}
                                        </span>
                                    </div>
                                    <p className="text-xs text-[#002316]/40 line-clamp-3 leading-relaxed mb-6 font-medium italic">"{g.description}"</p>
                                    {g.status === 'RESOLVED' && (
                                        <div className="p-6 bg-orange-50 rounded-2xl border-2 border-orange-100 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100 rounded-full -mr-8 -mt-8 opacity-40" />
                                            <p className="text-[9px] font-black text-orange-800 uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
                                                Official Union Resolution
                                            </p>
                                            <p className="text-[13px] text-[#002316] font-bold leading-relaxed">"{g.response}"</p>
                                        </div>
                                    )}
                                </div>
                            )) : (
                                <div className="p-24 text-center bg-[#fcfaf7] rounded-[2.5rem] border-2 border-dashed border-orange-100 opacity-60">
                                    <p className="text-[10px] font-black text-[#002316]/20 uppercase tracking-[0.3em]">No legal submissions recorded</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Surveys Section (Only in Home tab for Member) */}
            {(activeTab === 'dashboard' || activeTab === 'overview') && (
                <>
                <div className="animate-fade-in [animation-delay:200ms] mt-24 pt-24 border-t border-orange-100">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-orange-100 rounded-2xl text-orange-600 shadow-sm">
                            <ClipboardListIcon className="w-7 h-7"/>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-[#002316] tracking-tight leading-none uppercase">Public Survey / Suggestion</h2>
                            <p className="text-[10px] font-bold text-[#002316]/70 uppercase tracking-widest mt-1.5">Your Voice in Union Governance</p>
                        </div>
                    </div>
                    {availableSurveys.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {availableSurveys.map(survey => (
                                <SurveyCard key={survey.id} survey={survey} onSubmit={handleVoteSubmit} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-[#fcfaf7] text-center p-24 rounded-[3rem] border-2 border-dashed border-orange-100 opacity-60">
                            <div className="mx-auto w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-200">
                                <CheckCircleIcon className="w-10 h-10 shadow-inner" />
                            </div>
                            <p className="text-xs font-black text-orange-900/20 uppercase tracking-[0.3em]">No active referendums at retrieval</p>
                        </div>
                    )}
                </div>

                {votedSurveys.length > 0 && (
                    <div className="animate-fade-in [animation-delay:400ms] mt-16">
                        <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-orange-100 rounded-2xl text-orange-600 shadow-sm">
                            <CheckCircleIcon className="w-4 h-4 opacity-50"/>
                        </div>
                        <h2 className="text-lg font-black text-orange-900/20 tracking-widest uppercase mb-1">Archived Consultations</h2>
                    </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {votedSurveys.map(survey => (
                            <VotedSurveyCard 
                                key={survey.id} 
                                survey={survey} 
                                userVoteOptionId={survey.votes[currentUser.id]} 
                                onReVote={handleReVote}
                            />
                            ))}
                        </div>
                    </div>
                )}
                </>
            )}
        </div>
    );
};

export default MemberDashboard;
