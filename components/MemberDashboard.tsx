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
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-900/50 group">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-emerald-500 rounded-full"></span>
                        {survey.question}
                    </legend>
                    <div className="space-y-3">
                        {survey.options.map(option => (
                            <label key={option.id} className={`flex items-center p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                selectedOption === option.id 
                                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' 
                                : 'border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-900/30'
                            }`}>
                                <input
                                    type="radio"
                                    name={`survey-${survey.id}`}
                                    value={option.id}
                                    checked={selectedOption === option.id}
                                    onChange={() => setSelectedOption(option.id)}
                                    className="h-5 w-5 text-emerald-600 border-gray-300 focus:ring-emerald-500 bg-white"
                                />
                                <span className={`ml-4 text-sm font-black ${selectedOption === option.id ? 'text-emerald-900 dark:text-emerald-100' : 'text-gray-600 dark:text-gray-400'}`}>
                                    {option.text}
                                </span>
                            </label>
                        ))}
                    </div>
                </fieldset>
                <button
                    type="submit"
                    disabled={!selectedOption}
                    className="mt-8 w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 disabled:opacity-50 disabled:bg-gray-400 disabled:shadow-none active:scale-95"
                >
                    SUMMIT SECURE VOTE
                </button>
            </form>
        </div>
    );
};

// Helper: Voted Survey Result Card
const VotedSurveyCard: React.FC<{ survey: Survey; userVoteOptionId: string; }> = ({ survey, userVoteOptionId }) => {
    const allVotes = Object.values(survey.votes);
    const totalVotes = allVotes.length;
    
    const userVotedOption = survey.options.find(opt => opt.id === userVoteOptionId);

    const getVoteCountForOption = (optionId: string) => {
        return allVotes.filter(vote => vote === optionId).length;
    };

    return (
        <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm border-l-8 border-emerald-500 border border-gray-100 dark:border-gray-900">
            <h3 className="font-black text-gray-900 dark:text-gray-100 text-lg mb-2">{survey.question}</h3>
             {userVotedOption && (
                 <div className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                    <CheckCircleIcon className="w-3 h-3" />
                    Your choice: {userVotedOption.text}
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
                                <span className={isUserVote ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-500 dark:text-gray-400'}>
                                    {option.text} {isUserVote && ' (SELECTED)'}
                                </span>
                                <span className="text-gray-400">{percentage.toFixed(0)}%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5 overflow-hidden">
                                <div 
                                    className={`h-full rounded-full transition-all duration-1000 ${isUserVote ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-700'}`} 
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await onSubmit(subject, description, category);
            setSubject(''); setDescription(''); setCategory('GENERAL');
            alert('Grievance submitted successfully. The union admin will review it.');
        } catch (err: any) {
            alert(err.message || 'Failed to submit grievance');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border dark:border-gray-800 space-y-6">
            <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 flex items-center gap-3">
                <span className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600">
                    <MegaphoneIcon className="w-5 h-5" />
                </span>
                Submit a Secure Grievance
            </h3>
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Subject / Case Title</label>
                    <input type="text" value={subject} onChange={e => setSubject(e.target.value)} required placeholder="e.g., Salary discrepancy" className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-emerald-500 dark:focus:border-emerald-500 rounded-xl text-sm text-gray-900 dark:text-gray-100 outline-none transition-all font-bold" />
                </div>
                <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-emerald-500 dark:focus:border-emerald-500 rounded-xl text-sm text-gray-900 dark:text-gray-100 outline-none transition-all font-bold">
                        <option value="GENERAL">General Support</option>
                        <option value="SALARY">Salary / Benefits</option>
                        <option value="WORK_CONDITION">Work Conditions</option>
                        <option value="HARASSMENT">Harassment / Safety</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Detailed Description (Private)</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} required rows={4} placeholder="Please provide all relevant details here..." className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-emerald-500 dark:focus:border-emerald-500 rounded-xl text-sm text-gray-900 dark:text-gray-100 outline-none transition-all font-bold" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#064e3b] text-white rounded-xl font-black hover:bg-emerald-900 transition-all shadow-xl shadow-emerald-900/10 active:scale-95 disabled:bg-gray-400 uppercase tracking-widest">
                {isSubmitting ? 'PROCESSING...' : 'DEPLOY SECURE GRIEVANCE'}
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


    if (!currentUser) return null;

    const availableSurveys = surveys.filter(s => !s.votes[currentUser.id]);
    const votedSurveys = surveys.filter(s => !!s.votes[currentUser.id]);

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
                    {/* Left: Greeting - ROYAL EMERALD REDESIGN */}
                    <div className="xl:col-span-3 bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#022c22] rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl flex flex-col justify-center relative overflow-hidden group">
                        {/* Dynamic Background Elements */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-125 transition-transform duration-1000" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full -ml-32 -mb-32 blur-3xl" />
                        
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                                Secure Member Session
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-none">
                                {greeting}, <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 to-emerald-300">
                                    {currentUser.employeeName.split(' ')[0]} 
                                </span>! <span className="inline-block hover:rotate-12 transition-transform duration-300">👋</span>
                            </h1>
                            <p className="text-emerald-50/80 text-lg md:text-xl max-w-lg leading-relaxed font-bold italic">
                                "Welcome back to your elite digital union hub. Your connectivity and document security remain our top priorities."
                            </p>
                        </div>
                        
                        <div className="mt-12 flex flex-wrap items-center gap-4 relative z-10">
                            <div className="bg-white/5 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 text-xs font-black shadow-lg flex items-center gap-2 group/pill">
                                <span className="text-emerald-400 opacity-60 uppercase tracking-widest text-[9px]">Rank</span> 
                                <span className="text-white">Active Member</span>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 text-xs font-black shadow-lg flex items-center gap-2 group/pill">
                                <span className="text-emerald-400 opacity-60 uppercase tracking-widest text-[9px]">Reg ID</span>
                                <span className="text-white">#{currentUser.id.substring(0,8).toUpperCase()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Digital ID Card Preview */}
                    <div className="xl:col-span-2 flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-gray-800 shadow-xl group hover:border-emerald-500/20 transition-all duration-500">
                        <div className="inline-flex items-center gap-2 mb-8 bg-gray-50 dark:bg-gray-800 px-4 py-1.5 rounded-full">
                            <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.3em]">Quick Verify Identity</p>
                        </div>
                        <div className="w-full transform group-hover:scale-[1.02] transition-transform duration-500">
                            <MembershipCard user={currentUser} logoUrl="/logo.png" />
                        </div>
                        <div className="mt-8 flex items-center gap-3 text-gray-400 dark:text-gray-500">
                            <div className="h-[2px] w-8 bg-gray-100 dark:bg-gray-800" />
                            <p className="text-[9px] font-black uppercase tracking-widest text-center italic">
                                SECURE SMART ID BY IPREU
                            </p>
                            <div className="h-[2px] w-8 bg-gray-100 dark:bg-gray-800" />
                        </div>
                    </div>
                </div>

                {/* Latest Announcements */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 shadow-sm">
                                <MegaphoneIcon className="w-7 h-7"/>
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight leading-none uppercase">Latest Broadcasts</h2>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">Important Union Updates & News</p>
                            </div>
                        </div>
                        <div className="w-full max-w-[100px] h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full hidden md:block"></div>
                    </div>
                    
                    {announcements.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {announcements.map(ann => (
                                <div key={ann.id} className="relative bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-all group overflow-hidden flex flex-col justify-between">
                                    <div className="relative">
                                        {isNew(ann.createdAt) && (
                                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-emerald-500/20 translate-x-2 -translate-y-2 z-10">
                                                LIVE
                                            </div>
                                        )}
                                        <h3 className="font-black text-xl text-emerald-900 dark:text-white pr-10 mb-3 group-hover:text-emerald-700 transition-colors leading-tight uppercase tracking-tight">{ann.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 whitespace-pre-wrap leading-relaxed line-clamp-3 font-medium">{ann.content}</p>
                                    </div>
                                    
                                    {ann.attachment && (
                                        <div className="mt-4 pt-6 border-t border-gray-50 dark:border-gray-800 flex flex-wrap gap-2">
                                            <a href={ann.attachment.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-[10px] font-black text-emerald-700 hover:text-white bg-emerald-50 dark:bg-emerald-900/40 hover:bg-emerald-600 px-5 py-2.5 rounded-xl transition-all uppercase tracking-widest shadow-sm">
                                                <PaperClipIcon className="w-4 h-4" />
                                                <span>{ann.attachment.name}</span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-gray-50 dark:bg-gray-950 text-center py-20 px-8 rounded-[2.5rem] border-2 border-dashed border-gray-200 dark:border-gray-800">
                            <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mb-4 text-gray-300">
                                <MegaphoneIcon className="w-8 h-8 opacity-40" />
                            </div>
                            <p className="text-sm font-black text-gray-400 uppercase tracking-widest">No active broadcasts in retrieval</p>
                        </div>
                    )}
                </div>
                </>
            )}

            {/* Calendar Section */}
            {activeTab === 'calendar' && (
                <div className="space-y-8 animate-slide-up">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 shadow-sm">
                            <ClockIcon className="w-7 h-7"/>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight leading-none uppercase">Strategic Calendar</h2>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">Official Union Schedules & Events</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                        {calendarEvents.length > 0 ? (
                            calendarEvents.sort((a,b) => a.date.localeCompare(b.date)).map(event => (
                                <div key={event.id} className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:border-emerald-500/30 transition-all hover:shadow-xl group">
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0 w-20 h-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex flex-col items-center justify-center text-emerald-700 dark:text-emerald-400 border border-gray-100 dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform">
                                            <span className="text-[10px] font-black uppercase tracking-widest mb-1">{new Date(event.date).toLocaleDateString(undefined, { month: 'short' })}</span>
                                            <span className="text-4xl font-black leading-none tracking-tighter">{new Date(event.date).getDate()}</span>
                                            <span className="text-[8px] font-black uppercase mt-1.5 opacity-40">{new Date(event.date).getFullYear()}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-black text-gray-900 dark:text-gray-100 text-xl mb-3 pr-2 leading-tight uppercase group-hover:text-emerald-700 transition-colors truncate">{event.title}</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                                                    <ClockIcon className="w-4 h-4 text-emerald-500 opacity-60" /> 
                                                    <span className="text-[11px] font-bold uppercase">{event.startTime}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                                                    <div className="w-4 h-4 flex items-center justify-center"><span className="text-[10px] font-black text-emerald-500">@</span></div>
                                                    <span className="text-[11px] font-bold uppercase truncate">{event.location || 'TBA'}</span>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <span className="text-[9px] font-black text-emerald-800 dark:text-emerald-100 bg-emerald-100 dark:bg-emerald-900/50 px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-sm">
                                                    {event.category || 'Strategic Event'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-32 text-center bg-gray-50 dark:bg-gray-950 rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-gray-900">
                                <p className="text-xs font-black text-gray-300 uppercase tracking-widest italic">No upcoming strategic schedules available</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Grievance Section */}
            {activeTab === 'grievances' && (
                <div className="space-y-10 animate-slide-up">
                   <div className="flex items-center gap-4">
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 shadow-sm">
                            <MegaphoneIcon className="w-7 h-7 rotate-12"/>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight leading-none uppercase">Legal Support Hub</h2>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">Secure Grievance Redressal Mechanism</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                        <div>
                             <GrievanceForm onSubmit={submitGrievance} />
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-black text-gray-900 dark:text-gray-100 uppercase tracking-widest text-xs flex items-center gap-3">
                                    <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></span>
                                    Private Case History
                                </h3>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{grievances.length} Submissions</p>
                            </div>
                            {grievances.length > 0 ? grievances.map(g => (
                                <div key={g.id} className="bg-white dark:bg-gray-900 p-6 rounded-[1.5rem] shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:border-emerald-500/20">
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="font-black text-emerald-900 dark:text-white text-base uppercase tracking-tight pr-4">{g.subject}</h4>
                                        <span className={`text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm ${
                                            g.status === 'NEW' ? 'bg-orange-100 text-orange-700 border border-orange-200' : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                        }`}>
                                            {g.status}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed mb-6 font-medium italic">"{g.description}"</p>
                                    {g.status === 'RESOLVED' && (
                                        <div className="p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border-2 border-emerald-100 dark:border-emerald-900/20 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full -mr-8 -mt-8 opacity-40" />
                                            <p className="text-[9px] font-black text-emerald-800 dark:text-emerald-400 uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                                                Official Union Resolution
                                            </p>
                                            <p className="text-[13px] text-emerald-900 dark:text-emerald-100 font-bold leading-relaxed">"{g.response}"</p>
                                        </div>
                                    )}
                                </div>
                            )) : (
                                <div className="p-20 text-center bg-gray-50 dark:bg-gray-950 rounded-[2.5rem] border-2 border-dashed border-gray-200 dark:border-gray-800 opacity-60">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">No legal submissions recorded</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Surveys Section (Only in Home tab for Member) */}
            {(activeTab === 'dashboard' || activeTab === 'overview') && (
                <>
                <div className="animate-fade-in [animation-delay:200ms] mt-16 pt-16 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 shadow-sm">
                            <ClipboardListIcon className="w-7 h-7"/>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight leading-none uppercase">Digital Referendums</h2>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">Your Voice in Union Governance</p>
                        </div>
                    </div>
                    {availableSurveys.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {availableSurveys.map(survey => (
                                <SurveyCard key={survey.id} survey={survey} onSubmit={submitVote} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-gray-50 dark:bg-gray-950 text-center p-20 rounded-[2.5rem] border-2 border-dashed border-gray-100 dark:border-gray-900 opacity-60">
                            <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mb-4 text-gray-300">
                                <CheckCircleIcon className="w-8 h-8 opacity-40" />
                            </div>
                            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">No active referendums at retrieval</p>
                        </div>
                    )}
                </div>

                {votedSurveys.length > 0 && (
                    <div className="animate-fade-in [animation-delay:400ms] mt-16">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/10 rounded-2xl text-emerald-600 shadow-sm">
                                <CheckCircleIcon className="w-4 h-4 opacity-50"/>
                            </div>
                            <h2 className="text-lg font-black text-gray-400 dark:text-gray-600 tracking-widest uppercase mb-1">Archived Votes</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {votedSurveys.map(survey => (
                            <VotedSurveyCard key={survey.id} survey={survey} userVoteOptionId={survey.votes[currentUser.id]} />
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
