import React, { useState } from 'react';
import { useAppContext } from '../App';
import { Survey } from '../types';
import { ClipboardListIcon } from './icons/ClipboardListIcon';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import { PaperClipIcon } from './icons/PaperClipIcon';


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


// Main Member Dashboard Component
const MemberDashboard: React.FC = () => {
    const { surveys, currentUser, submitVote, announcements } = useAppContext();

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
            {/* Greeting Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between">
                <div>
                    <h1 className="text-3xl font-display font-bold mb-2">
                        {greeting}, {currentUser.employeeName.split(' ')[0]}! <span className="animate-bounce inline-block">👋</span>
                    </h1>
                    <p className="text-orange-100">Welcome to your secure union portal. Here's what's happening today.</p>
                </div>
                <div className="mt-6 md:mt-0 bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 text-sm font-medium">
                    Status: <span className="text-white font-bold ml-1">Active Member</span>
                </div>
            </div>

            <div>
                 <div className="flex items-center gap-3 mb-6">
                    <MegaphoneIcon className="w-8 h-8 text-orange-600"/>
                    <h2 className="text-2xl font-bold text-gray-800">Latest Announcements</h2>
                </div>
                 {announcements.length > 0 ? (
                    <div className="space-y-4">
                        {announcements.map(ann => (
                            <div key={ann.id} className="relative bg-white p-6 rounded-xl shadow border-l-4 border-orange-500 hover:shadow-lg transition-shadow group overflow-hidden">
                                {isNew(ann.createdAt) && (
                                    <div className="absolute top-4 right-4 bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-orange-200">
                                        New
                                    </div>
                                )}
                                <h3 className="font-bold text-xl text-gray-800 pr-16">{ann.title}</h3>
                                <p className="text-gray-600 mt-2 whitespace-pre-wrap leading-relaxed">{ann.content}</p>
                                {ann.attachment && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <a href={ann.attachment.url}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-800 bg-orange-100 hover:bg-orange-200 px-3 py-1 rounded-full transition-colors">
                                            <PaperClipIcon className="w-4 h-4" />
                                            <span>{ann.attachment.name}</span>
                                            <span className="text-xs opacity-60">↗ Open</span>
                                        </a>
                                        {ann.attachment.driveId && (
                                            <a
                                                href={`https://drive.google.com/uc?export=download&id=${ann.attachment.driveId}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                                            >
                                                ↓ Download
                                            </a>
                                        )}
                                    </div>
                                )}
                                {ann.createdAt && <p className="text-xs text-gray-400 mt-3 text-right">{new Date(ann.createdAt).toLocaleString()}</p>}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white text-center py-16 px-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                         <div className="w-24 h-24 mb-4 text-gray-200">
                            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                         </div>
                         <p className="text-lg font-medium text-gray-600">No recent announcements</p>
                         <p className="text-sm text-gray-400 mt-1">You're all caught up!</p>
                    </div>
                )}
            </div>

            <div>
                 <div className="flex items-center gap-3 mb-4">
                    <ClipboardListIcon className="w-8 h-8 text-orange-600"/>
                    <h2 className="text-2xl font-bold text-gray-800">Available Surveys</h2>
                </div>
                {availableSurveys.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {availableSurveys.map(survey => (
                            <SurveyCard key={survey.id} survey={survey} onSubmit={submitVote} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white text-center p-8 rounded-lg shadow">
                         <p className="text-gray-500">No new surveys at the moment. Check back later!</p>
                    </div>
                )}
            </div>

            {votedSurveys.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Completed Surveys</h2>
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
