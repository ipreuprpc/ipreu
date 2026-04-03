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
        <div className="bg-white p-6 rounded-lg shadow transition-shadow hover:shadow-md">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="text-lg font-semibold text-gray-800 mb-4">{survey.question}</legend>
                    <div className="space-y-3">
                        {survey.options.map(option => (
                            <label key={option.id} className="flex items-center p-3 rounded-md border border-gray-200 hover:bg-orange-50 cursor-pointer transition-colors">
                                <input
                                    type="radio"
                                    name={`survey-${survey.id}`}
                                    value={option.id}
                                    checked={selectedOption === option.id}
                                    onChange={() => setSelectedOption(option.id)}
                                    className="h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                                />
                                <span className="ml-3 text-sm font-medium text-gray-700">{option.text}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
                <button
                    type="submit"
                    disabled={!selectedOption}
                    className="mt-6 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed"
                >
                    Submit Vote
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
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
            <h3 className="font-semibold text-gray-800">{survey.question}</h3>
             {userVotedOption && (
                 <p className="text-sm text-orange-700 bg-orange-100 px-2 py-1 rounded-full inline-block mt-2 mb-4">
                    Your vote: <span className="font-bold">{userVotedOption.text}</span>
                </p>
            )}
            <p className="text-sm text-gray-500 mb-4">{totalVotes} total votes</p>
            <div className="space-y-3">
                {survey.options.map(option => {
                    const voteCount = getVoteCountForOption(option.id);
                    const percentage = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;
                    const isUserVote = option.id === userVoteOptionId;
                    return (
                        <div key={option.id}>
                            <div className="flex justify-between items-center text-sm mb-1">
                                <span className={`font-medium ${isUserVote ? 'text-orange-600' : 'text-gray-700'}`}>{option.text} {isUserVote && '✓'}</span>
                                <span className={`font-medium ${isUserVote ? 'text-orange-600' : 'text-gray-500'}`}>{percentage.toFixed(1)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className={`${isUserVote ? 'bg-orange-500' : 'bg-green-500'} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
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
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border dark:border-gray-800 space-y-4">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Submit a Grievance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                    <input type="text" value={subject} onChange={e => setSubject(e.target.value)} required placeholder="Brief title" className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:ring-orange-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:ring-orange-500">
                        <option value="GENERAL">General</option>
                        <option value="SALARY">Salary / Benefits</option>
                        <option value="WORK_CONDITION">Work Conditions</option>
                        <option value="HARASSMENT">Harassment / Safety</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Detailed Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} required rows={3} placeholder="Please describe the issue in detail..." className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:ring-orange-500" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full py-2 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-colors shadow-sm disabled:bg-orange-400">
                {isSubmitting ? 'Submitting...' : 'Post Secure Grievance'}
            </button>
        </form>
    );
};


// Main Member Dashboard Component
const MemberDashboard: React.FC = () => {
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
        <div className="space-y-12 animate-fade-in">
            {/* Greeting & ID Card Row */}
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-stretch">
                {/* Left: Greeting */}
                <div className="xl:col-span-3 bg-gradient-to-br from-orange-600 to-orange-500 rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform duration-700" />
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
                            {greeting}, <span className="text-orange-100">{currentUser.employeeName.split(' ')[0]}</span>! <span className="animate-bounce inline-block">👋</span>
                        </h1>
                        <p className="text-orange-50 text-lg md:text-xl max-w-lg leading-relaxed opacity-90">
                            Welcome to your secure union portal. Manage your profile, participate in surveys, and stay connected.
                        </p>
                    </div>
                    <div className="mt-10 flex flex-wrap items-center gap-4 relative z-10">
                        <div className="bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 text-sm font-bold shadow-sm">
                            Status: <span className="text-white ml-1">Active Member</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 text-sm font-bold shadow-sm">
                            Union ID: <span className="text-white ml-1">#{currentUser.id.substring(0,6).toUpperCase()}</span>
                        </div>
                    </div>
                </div>

                {/* Right: Digital ID Card */}
                <div className="xl:col-span-2 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-inner">
                    <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-6">Digital Membership ID</p>
                    <MembershipCard user={currentUser} logoUrl="/logo.png" />
                    <p className="text-[10px] text-gray-400 mt-6 italic text-center max-w-[200px] leading-relaxed">
                        Scan to verify membership at any union office or event.
                    </p>
                </div>
            </div>

            <div>
                 <div className="flex items-center gap-3 mb-6">
                    <MegaphoneIcon className="w-8 h-8 text-orange-600"/>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Latest Announcements</h2>
                </div>
                 {announcements.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {announcements.map(ann => (
                            <div key={ann.id} className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-shadow group overflow-hidden">
                                {isNew(ann.createdAt) && (
                                    <div className="absolute top-4 right-4 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-orange-200 dark:border-orange-900/50">
                                        New
                                    </div>
                                )}
                                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 pr-16">{ann.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 whitespace-pre-wrap leading-relaxed line-clamp-3">{ann.content}</p>
                                {ann.attachment && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <a href={ann.attachment.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-orange-600 hover:text-orange-800 bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-full transition-colors">
                                            <PaperClipIcon className="w-4 h-4" />
                                            <span>{ann.attachment.name}</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white dark:bg-gray-900 text-center py-10 px-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                         <p className="text-gray-500">No recent announcements</p>
                    </div>
                )}
            </div>

            {/* Union Calendar & Grievances Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calendar Column */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="flex items-center gap-3">
                        <ClockIcon className="w-8 h-8 text-orange-600"/>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Union Calendar</h2>
                    </div>
                    <div className="space-y-4">
                        {calendarEvents.length > 0 ? (
                            calendarEvents.slice(0, 5).sort((a,b) => a.date.localeCompare(b.date)).map(event => (
                                <div key={event.id} className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-orange-200 transition-colors">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex flex-col items-center justify-center text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-900/30">
                                            <span className="text-[10px] font-bold uppercase">{new Date(event.date).toLocaleDateString(undefined, { month: 'short' })}</span>
                                            <span className="text-lg font-bold leading-none">{new Date(event.date).getDate()}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm">{event.title}</h4>
                                            <p className="text-[10px] text-gray-500 mt-0.5">{event.startTime} • {event.location || 'Online / TBA'}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 bg-white dark:bg-gray-900 p-8 rounded-xl border border-dashed dark:border-gray-800 text-center italic text-sm">No upcoming events scheduled.</p>
                        )}
                    </div>
                </div>

                {/* Grievance Column */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                        <MegaphoneIcon className="w-8 h-8 text-orange-600"/>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Grievance Redressal</h2>
                    </div>
                    <GrievanceForm onSubmit={submitGrievance} />
                    
                    {grievances.length > 0 && (
                        <div className="mt-8 space-y-4">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                Your Recent Submissions
                            </h3>
                            {grievances.map(g => (
                                <div key={g.id} className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-gray-800 dark:text-gray-100 text-sm">{g.subject}</h4>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                            g.status === 'NEW' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'
                                        }`}>
                                            {g.status}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 italic">"{g.description}"</p>
                                    {g.status === 'RESOLVED' && (
                                        <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-900/30">
                                            <p className="text-[10px] font-bold text-green-700 dark:text-green-400">ADMIN RESPONSE:</p>
                                            <p className="text-xs text-green-800 dark:text-green-300 mt-1">{g.response}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="animate-fade-in [animation-delay:200ms]">
                 <div className="flex items-center gap-3 mb-4">
                    <ClipboardListIcon className="w-8 h-8 text-orange-600"/>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 uppercase tracking-tight">Available Surveys</h2>
                </div>
                {availableSurveys.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {availableSurveys.map(survey => (
                            <SurveyCard key={survey.id} survey={survey} onSubmit={submitVote} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white dark:bg-gray-900 text-center p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 italic">
                         <p className="text-gray-500">No new surveys at the moment. Check back later!</p>
                    </div>
                )}
            </div>

            {votedSurveys.length > 0 && (
                <div className="animate-fade-in [animation-delay:400ms]">
                    <div className="flex items-center gap-3 mb-4">
                        <CheckCircleIcon className="w-8 h-8 text-green-600"/>
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 uppercase tracking-tight">Completed Surveys</h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {votedSurveys.map(survey => (
                           <VotedSurveyCard key={survey.id} survey={survey} userVoteOptionId={survey.votes[currentUser.id]} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MemberDashboard;
