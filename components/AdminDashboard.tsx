import React, { useState, useEffect, FormEvent, useRef } from 'react';
import { useAppContext } from '../App';
import { User, UserRole, Survey, SurveyOption, Announcement, CalendarEvent, Grievance } from '../types';
import MembershipCard from './MembershipCard';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { ClipboardListIcon } from './icons/ClipboardListIcon';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import { TrashIcon } from './icons/TrashIcon';
import { PaperClipIcon } from './icons/PaperClipIcon';
import { ClockIcon } from './icons/ClockIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { UserCheckIcon } from './icons/UserCheckIcon';
import { XMarkIcon } from './icons/XMarkIcon';
import { SearchIcon } from './icons/SearchIcon';

// ─── Stat Card ───────────────────────────────────────────────────────────────
const StatCard: React.FC<{ title: string; value: number; icon: React.ReactNode; color?: string }> = ({ title, value, icon, color = 'orange' }) => (
    <div className="relative overflow-hidden bg-white p-6 rounded-[2rem] shadow-xl border border-orange-100 flex items-center space-x-5 transition-all hover:scale-[1.02] hover:border-orange-500/30 group">
        <div className={`absolute -right-6 -top-6 w-32 h-32 bg-${color}-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
        <div className={`bg-${color}-100 p-4 rounded-2xl text-${color}-600 shadow-sm border border-${color}-200 relative z-10`}>
            {icon}
        </div>
        <div className="relative z-10">
            <p className="text-[10px] text-[#002316]/70 font-black tracking-[0.2em] uppercase mb-1">{title}</p>
            <p className="text-4xl font-black text-[#002316] tracking-tighter drop-shadow-sm">
                {value}
            </p>
        </div>
    </div>
);

// ─── Pending Member Card ─────────────────────────────────────────────────────
const PendingMemberCard: React.FC<{
    member: User;
    onApprove: (id: string) => void;
    onReject: (id: string) => void;
}> = ({ member, onApprove, onReject }) => (
    <div className="bg-white p-6 rounded-[2rem] shadow-xl border-2 border-orange-100 transition-all hover:border-orange-300 relative overflow-hidden group">
        <div className="absolute top-3 right-3">
            <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
        </div>
        <h3 className="font-black text-xl text-[#002316] uppercase tracking-tight mb-1">{member.employeeName}</h3>
        <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-4">Emp ID: {member.employeeNumber}</p>
        
        <div className="space-y-2.5 mb-6">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-900">
                <span className="text-[9px] uppercase tracking-widest opacity-40 w-16">Mobile:</span>
                <span>{member.mobileNumber}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-orange-900">
                <span className="text-[9px] uppercase tracking-widest opacity-40 w-16">Native:</span>
                <span>{member.nativePlace}</span>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
            <button 
                onClick={() => onApprove(member.id)} 
                className="bg-orange-600 text-white px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
            >
                Approve
            </button>
            <button 
                onClick={() => onReject(member.id)} 
                className="bg-orange-50 text-orange-700 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-50 transition-all border border-orange-200"
            >
                Reject
            </button>
        </div>
    </div>
);

const VoterListModal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; voters: { name: string; empNo: string; dept: string }[] }> = ({ isOpen, onClose, title, voters }) => {
    const [search, setSearch] = useState('');
    if (!isOpen) return null;

    const filtered = voters.filter(v => 
        v.name.toLowerCase().includes(search.toLowerCase()) || 
        v.empNo.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#002316]/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden border border-orange-100">
                <div className="p-8 border-b border-orange-50 flex justify-between items-center bg-[#fcfaf7]">
                    <div>
                        <h3 className="text-xl font-black text-[#002316] uppercase tracking-tight">{title}</h3>
                        <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mt-1">{voters.length} Members in this category</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-orange-100 rounded-full transition-colors text-orange-950">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 bg-white shrink-0">
                    <div className="relative">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-300" />
                        <input 
                            type="text" 
                            placeholder="Find member by name or emp no..." 
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-orange-50 border border-orange-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-[#002316] font-bold"
                        />
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto p-6 pt-0 space-y-2">
                    {filtered.length > 0 ? (
                        filtered.map((v, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-orange-50/50 rounded-2xl border border-transparent hover:border-orange-200 transition-all group">
                                <div>
                                    <p className="font-black text-[#002316] group-hover:text-orange-600 transition-colors uppercase text-sm">{v.name}</p>
                                    <p className="text-[10px] font-bold text-orange-900/40 uppercase tracking-widest mt-0.5">{v.dept}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-mono text-xs font-black text-orange-700">{v.empNo}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="py-20 text-center">
                            <p className="text-orange-900/20 font-black uppercase tracking-widest">No matching members found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const SurveyResultCard: React.FC<{ survey: Survey }> = ({ survey }) => {
    const { users } = useAppContext();
    const [activeModal, setActiveModal] = useState<{ optionText: string; voters: any[] } | null>(null);
    
    const allVotes = Object.values(survey.votes);
    const totalVotes = allVotes.length;
    const getCount = (optId: string) => allVotes.filter(v => v === optId).length;

    const getVoterDetailsForOption = (optId: string) => {
        return Object.entries(survey.votes)
            .filter(([_, votedOptId]) => votedOptId === optId)
            .map(([userId, _]) => {
                const u = users.find(user => user.id === userId);
                return {
                    name: u?.employeeName || 'Unknown Member',
                    empNo: u?.employeeNumber || 'N/A',
                    dept: u?.department || 'Member'
                };
            });
    };

    const handleExport = () => {
        const rows = [
            ['Member Name', 'Employee Number', 'Department', 'Selected Choice'],
            ...Object.entries(survey.votes).map(([uid, optId]) => {
                const u = users.find(user => user.id === uid);
                const opt = survey.options.find(o => o.id === optId);
                return [
                    u?.employeeName || 'Unknown',
                    u?.employeeNumber || 'N/A',
                    u?.department || 'N/A',
                    opt?.text || 'N/A'
                ];
            })
        ];

        const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.map(cell => `"${cell}"`).join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `survey_results_${survey.id.substring(0,6)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-orange-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                <div>
                    <h3 className="font-black text-2xl text-[#002316] uppercase tracking-tight leading-tight max-w-xl">{survey.question}</h3>
                    <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mt-2 bg-orange-100 inline-block px-3 py-1 rounded-full">{totalVotes} Verified Votes Recorded</p>
                </div>
                <button 
                  onClick={handleExport}
                  className="shrink-0 text-[10px] font-black text-white bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-2xl transition-all flex items-center gap-2 uppercase tracking-widest shadow-lg shadow-emerald-600/20 active:scale-95"
                >
                  <PaperClipIcon className="w-4 h-4" />
                  Export CSV Report
                </button>
            </div>

            <div className="space-y-10 relative z-10">
                {survey.options.map(option => {
                    const count = getCount(option.id);
                    const pct = totalVotes > 0 ? (count / totalVotes) * 100 : 0;
                    const voters = getVoterDetailsForOption(option.id);
                    
                    return (
                        <div key={option.id} className="group/row">
                            <div className="flex justify-between items-end mb-3">
                                <div>
                                    <span className="text-[10px] font-black text-orange-800/60 uppercase tracking-widest mb-1 block">Option Category</span>
                                    <p className="text-sm font-black text-[#002316] uppercase tracking-tight">{option.text}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-black text-[#002316]">{pct.toFixed(1)}%</p>
                                    <p className="text-[10px] font-bold text-orange-600 uppercase tracking-tighter">{count} Votes</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <div className="flex-grow bg-orange-50 rounded-2xl h-5 shadow-inner p-1 overflow-hidden">
                                    <div 
                                        className="bg-gradient-to-r from-orange-600 to-orange-400 h-full rounded-xl shadow-lg transition-all duration-1000 ease-out relative" 
                                        style={{ width: `${pct}%` }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-xl"></div>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={() => setActiveModal({ optionText: option.text, voters })}
                                    disabled={count === 0}
                                    className="shrink-0 p-3 bg-white border border-orange-100 hover:border-orange-300 rounded-2xl text-orange-600 shadow-sm transition-all hover:-translate-y-0.5 disabled:opacity-20 active:scale-90"
                                    title="View Voters"
                                >
                                    <UserGroupIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <VoterListModal 
                isOpen={!!activeModal}
                onClose={() => setActiveModal(null)}
                title={activeModal?.optionText || ''}
                voters={activeModal?.voters || []}
            />
        </div>
    );
};

// ─── Survey Creator ──────────────────────────────────────────────────────────
const SurveyCreator: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState<string[]>(['', '']);
    const { createSurvey } = useAppContext();

    const handleOptionChange = (index: number, value: string) => {
        const next = [...options];
        next[index] = value;
        setOptions(next);
    };

    const addOption = () => setOptions([...options, '']);
    const removeOption = (index: number) => {
        if (options.length > 2) setOptions(options.filter((_, i) => i !== index));
    };

    const [isPublishing, setIsPublishing] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const surveyOptions: SurveyOption[] = options
            .filter(opt => opt.trim() !== '')
            .map(opt => ({ id: `opt-${Date.now()}-${Math.random()}`, text: opt }));
            
        if (question.trim() && surveyOptions.length >= 2) {
            setIsPublishing(true);
            try {
                await createSurvey({ question, options: surveyOptions });
                setQuestion('');
                setOptions(['', '']);
            } catch (err: any) {
                alert(err.message || 'Failed to publish survey');
            } finally {
                setIsPublishing(false);
            }
        }
    };

    return (
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-orange-100">
            <h3 className="text-2xl font-black text-[#002316] mb-6 uppercase tracking-tight">Post New Strategic Survey</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="survey-question" className="block text-[10px] font-black text-orange-800/60 uppercase tracking-[0.2em] mb-2">Primary Question</label>
                    <textarea id="survey-question" value={question} onChange={e => setQuestion(e.target.value)} required rows={2} className="mt-1 block w-full px-4 py-3 bg-orange-50 border-2 border-orange-100 rounded-2xl shadow-sm text-[#002316] focus:outline-none focus:border-orange-500 transition-all font-bold placeholder:text-[#002316]/30" placeholder="What is the union's stance on..." />
                </div>
                <div>
                    <label className="block text-[10px] font-black text-orange-800/60 uppercase tracking-[0.2em] mb-3">Response Options</label>
                    <div className="space-y-3">
                        {options.map((option, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <input type="text" value={option} onChange={e => handleOptionChange(index, e.target.value)} required className="flex-grow px-4 py-3 bg-orange-50 border-2 border-orange-100 rounded-2xl shadow-sm text-[#002316] focus:outline-none focus:border-orange-500 transition-all font-bold placeholder:text-[#002316]/30" placeholder={`Option ${index + 1}`} />
                                <button type="button" onClick={() => removeOption(index)} disabled={options.length <= 2} className="p-3 text-red-400 hover:text-red-600 disabled:opacity-20 transition-colors">
                                    <TrashIcon className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button type="button" onClick={addOption} className="text-[10px] font-black text-orange-600 hover:text-orange-800 mt-4 uppercase tracking-[0.2em] flex items-center gap-1.5 transition-all">
                        <span className="text-lg">+</span> Add Response Alternative
                    </button>
                </div>
                <button 
                    type="submit" 
                    disabled={isPublishing}
                    className="w-full py-4 px-6 border-none rounded-2xl shadow-xl text-xs font-black text-white bg-orange-600 hover:bg-orange-700 disabled:bg-orange-200 disabled:cursor-not-allowed transition-all uppercase tracking-[0.2em]"
                >
                    {isPublishing ? 'Publishing Strategic Referendum...' : 'Publish Strategic Referendum'}
                </button>
            </form>
        </div>
    );
};

// ─── Announcement Manager ────────────────────────────────────────────────────
const AnnouncementManager: React.FC = () => {
    const { announcements, createAnnouncement, updateAnnouncement, deleteAnnouncement } = useAppContext();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [driveUrl, setDriveUrl] = useState('');
    const [driveName, setDriveName] = useState('');
    const [driveUrlError, setDriveUrlError] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const linkInputRef = useRef<HTMLInputElement>(null);

    /** Extract the raw file/doc ID from any Google Drive share URL format */
    const extractDriveId = (url: string): string | null => {
        const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (fileMatch) return fileMatch[1];
        const docsMatch = url.match(/docs\.google\.com\/[^/]+\/d\/([a-zA-Z0-9_-]+)/);
        if (docsMatch) return docsMatch[1];
        const openMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
        if (openMatch) return openMatch[1];
        return null;
    };

    const isValidDriveUrl = (url: string) =>
        url.includes('drive.google.com') || url.includes('docs.google.com');

    /** Open Google Drive in a new tab so the admin can upload */
    const openDrive = () => {
        window.open('https://drive.google.com/drive/my-drive', '_blank', 'noopener,noreferrer');
        // Delay focus to the link field so it's ready when admin comes back
        setTimeout(() => linkInputRef.current?.focus(), 800);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setDriveUrlError('');
        if (!title.trim() || !content.trim()) return;
        setIsPosting(true);
        try {
            let driveAttachment: Announcement['attachment'] | undefined;
            if (driveUrl.trim()) {
                if (!isValidDriveUrl(driveUrl)) {
                    setDriveUrlError('Please paste a valid Google Drive or Google Docs link.');
                    setIsPosting(false);
                    return;
                }
                const driveId = extractDriveId(driveUrl);
                // Normalise any share/view/edit link to the canonical share URL
                const shareUrl = driveId
                    ? `https://drive.google.com/file/d/${driveId}/view?usp=sharing`
                    : driveUrl;
                driveAttachment = {
                    name: driveName.trim() || 'Attachment',
                    url: shareUrl,
                    driveId: driveId ?? undefined,
                };
            }

            if (editingId) {
                await updateAnnouncement(editingId, title, content);
                setEditingId(null);
            } else {
                await createAnnouncement(title, content, driveAttachment);
            }

            setTitle('');
            setContent('');
            setDriveUrl('');
            setDriveName('');
        } catch (err: any) {
            alert(err.message || 'An error occurred.');
        } finally {
            setIsPosting(false);
        }
    };

    const cancelEdit = () => {
        setEditingId(null);
        setTitle('');
        setContent('');
        setDriveUrl('');
        setDriveName('');
        setDriveUrlError('');
    };

    const linkIsValid = driveUrl.trim() && !driveUrlError && isValidDriveUrl(driveUrl);

    return (
        <div className="space-y-6">
            {/* ── Post / Edit Form ── */}
            <div className={`p-6 rounded-2xl shadow-xl transition-colors border ${editingId ? 'bg-orange-100 border-orange-300' : 'bg-white border-orange-100'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-black text-[#002316] uppercase tracking-tight">
                        {editingId ? 'Refine Announcement' : 'Post New Official Notice'}
                    </h3>
                    {editingId && (
                        <button onClick={cancelEdit} className="text-xs font-black text-orange-600 hover:text-orange-800 uppercase tracking-widest transition-colors">
                            Cancel Edit
                        </button>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="ann-title" className="block text-[10px] font-black text-orange-800/60 uppercase tracking-[0.2em] mb-1.5">Strategic Title</label>
                        <input
                            id="ann-title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                            className="block w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-bold placeholder:text-[#002316]/30"
                            placeholder="Immediate Action Required: ..."
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1.5">
                            <label htmlFor="ann-content" className="block text-[10px] font-black text-orange-800/60 uppercase tracking-[0.2em]">Detailed Content</label>
                            <span className={`text-[10px] font-black uppercase tracking-widest ${content.length > 800 ? 'text-red-500' : 'text-orange-400/60'}`}>
                                {content.length} / 800
                            </span>
                        </div>
                        <textarea
                            id="ann-content"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            required
                            rows={4}
                            className="block w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-bold placeholder:text-[#002316]/30"
                            placeholder="Enter the official announcement details here..."
                        />
                    </div>

                    {/* ── Google Drive Attachment Panel (hidden during edit since attachment isn't editable) ── */}
                    {!editingId && (
                        <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 space-y-4">

                            {/* Header row */}
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="flex items-center gap-2">
                                    <PaperClipIcon className="w-5 h-5 text-gray-400" />
                                    <span className="text-sm font-medium text-gray-700">Attach a Document (Optional)</span>
                                </div>
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 border border-blue-200">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    View-only · Members cannot edit
                                </span>
                            </div>

                            {/* Step 1 — Open Drive */}
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-700 text-xs font-bold flex items-center justify-center mt-0.5">1</div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-600 mb-2">
                                        Upload your file to Google Drive, then share it as <strong>"Anyone with the link — Viewer"</strong>.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={openDrive}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
                                    >
                                        {/* Google Drive colour icon */}
                                        <svg className="w-4 h-4" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                                            <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
                                            <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                                            <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                                            <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                                            <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 27h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                                        </svg>
                                        Open Google Drive to Upload
                                        <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Step 2 — Paste link */}
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-700 text-xs font-bold flex items-center justify-center mt-0.5">2</div>
                                <div className="flex-1 space-y-2">
                                    <p className="text-sm text-gray-600">
                                        After uploading, right-click the file → <strong>Share</strong> → <strong>Copy link</strong>. Paste it here:
                                    </p>
                                    <input
                                        id="drive-url"
                                        ref={linkInputRef}
                                        type="url"
                                        value={driveUrl}
                                        onChange={e => { setDriveUrl(e.target.value); setDriveUrlError(''); }}
                                        placeholder="https://drive.google.com/file/d/..."
                                        className={`block w-full px-3 py-2 bg-white border rounded-md shadow-sm text-gray-900 text-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 ${
                                            driveUrlError ? 'border-red-400 bg-red-50' : 'border-gray-300'
                                        }`}
                                    />
                                    {driveUrlError && (
                                        <p className="text-xs text-red-600 flex items-center gap-1">
                                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                                            {driveUrlError}
                                        </p>
                                    )}
                                    {linkIsValid && (
                                        <p className="text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-md flex items-center gap-2">
                                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                            Valid Google Drive link. <strong>Ensure sharing is set to "Viewer"</strong> — members can view &amp; download but cannot edit or delete.
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Step 3 — Display name */}
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-700 text-xs font-bold flex items-center justify-center mt-0.5">3</div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-600 mb-2">Enter a display name members will see:</p>
                                    <input
                                        id="drive-name"
                                        type="text"
                                        value={driveName}
                                        onChange={e => setDriveName(e.target.value)}
                                        placeholder="e.g., Circular No. 5 – April 2026.pdf"
                                        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 text-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isPosting}
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed transition-colors"
                    >
                        {isPosting ? 'Publishing Notice...' : (editingId ? 'Update Official Announcement' : 'Post Official Announcement')}
                    </button>
                </form>
            </div>

            {/* ── Posted Announcements List ── */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Posted Announcements</h3>
                {announcements.length > 0 ? (
                    announcements.map(ann => (
                        <div key={ann.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-start">
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-gray-800">{ann.title}</h4>
                                <p className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{ann.content}</p>

                                {ann.attachment && (
                                    <div className="mt-3 flex flex-wrap gap-2 items-center">
                                        {/* View in Drive */}
                                        <a
                                            href={ann.attachment.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-800 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-3 py-1.5 rounded-lg transition-colors"
                                        >
                                            <PaperClipIcon className="w-4 h-4 flex-shrink-0" />
                                            <span className="truncate max-w-xs">{ann.attachment.name}</span>
                                            <span className="text-xs opacity-60">↗</span>
                                        </a>
                                        {/* Direct download (only if we have the file ID) */}
                                        {ann.attachment.driveId && (
                                            <a
                                                href={`https://drive.google.com/uc?export=download&id=${ann.attachment.driveId}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                                            >
                                                ↓ Download
                                            </a>
                                        )}
                                    </div>
                                )}

                                {ann.createdAt && (
                                    <p className="text-xs text-gray-400 mt-2">
                                        {new Date(ann.createdAt).toLocaleString()}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-start ml-3 gap-2 flex-shrink-0">
                                <button
                                    onClick={() => {
                                        const text = `📢 *IPREU Announcement*\n\n*${ann.title.toUpperCase()}*\n\n${ann.content}\n\n📱 View Portal: https://ipreu.co.in/`;
                                        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
                                        window.open(url, '_blank');
                                    }}
                                    className="text-green-600 hover:text-green-800 px-3 py-1 rounded-full hover:bg-green-50 text-sm font-bold flex items-center gap-1.5"
                                    title="Share to WhatsApp Groups"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 68.9 27.1 106.1 27.1h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.6-2.8-23.6-8.7-45-27.7-16.6-14.8-27.8-33.1-31.1-38.6-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.8 2.8-3.2 3.7-5.5 5.5-9.3 1.9-3.7 1-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                                    WhatsApp
                                </button>
                                <button
                                    onClick={() => {
                                        setEditingId(ann.id);
                                        setTitle(ann.title);
                                        setContent(ann.content);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className="text-orange-600 hover:text-orange-800 px-3 py-1 rounded-full hover:bg-orange-100 text-sm font-medium"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => {
                                        if (window.confirm("Are you sure you want to delete this announcement? This cannot be undone.")) {
                                            deleteAnnouncement(ann.id);
                                        }
                                    }}
                                    className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 ml-1"
                                >
                                    <TrashIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No announcements posted yet.</p>
                )}
            </div>
        </div>
    );
};

// ─── Calendar Manager ────────────────────────────────────────────────────────
const CalendarManager: React.FC = () => {
    const { calendarEvents, createCalendarEvent, deleteCalendarEvent } = useAppContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState<CalendarEvent['category']>('MEETING');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await createCalendarEvent({ title, description, date, startTime, location, category });
            setTitle(''); setDescription(''); setDate(''); setStartTime(''); setLocation(''); setCategory('MEETING');
            setIsAdding(false);
        } catch (err: any) {
            alert(err.message || 'Failed to create event');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Union Calendar</h3>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors"
                >
                    {isAdding ? 'Cancel' : '+ Add Event'}
                </button>
            </div>

            {isAdding && (
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[2rem] shadow-xl border border-orange-100 space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[10px] font-black text-orange-800/60 uppercase tracking-[0.2em] mb-1.5">Event Identity</label>
                            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="block w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black text-orange-800/60 uppercase tracking-[0.2em] mb-1.5">Action Category</label>
                            <select value={category} onChange={e => setCategory(e.target.value as any)} className="block w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold">
                                <option value="MEETING">Strategic Meeting</option>
                                <option value="HOLIDAY">Union Holiday</option>
                                <option value="ELECTION">Referendum / Election</option>
                                <option value="SOCIAL">Social Gathering</option>
                                <option value="OTHER">Other Operation</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[10px] font-black text-orange-800/60 uppercase tracking-[0.2em] mb-1.5">Target Date</label>
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="block w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black text-orange-800/60 uppercase tracking-[0.2em] mb-1.5">Commencement Time</label>
                            <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} required className="block w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold font-mono" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[10px] font-black text-orange-800/60 uppercase tracking-[0.2em] mb-1.5">Strategic Location (Optional)</label>
                        <input type="text" value={location} onChange={e => setLocation(e.target.value)} className="block w-full px-4 py-3 bg-orange-50 border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} rows={2} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 focus:ring-orange-500" />
                    </div>
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-2 bg-orange-600 text-white rounded-md font-bold hover:bg-orange-700 disabled:bg-orange-200 disabled:cursor-not-allowed transition-colors"
                    >
                        {isSubmitting ? 'Publishing Event...' : 'Publish Event'}
                    </button>
                </form>
            )}

            <div className="grid grid-cols-1 gap-4">
                {calendarEvents.length > 0 ? (
                    calendarEvents.slice().sort((a,b) => a.date.localeCompare(b.date)).map(event => (
                        <div key={event.id} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow border-l-4 border-orange-500 flex justify-between items-center group">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase ${
                                        event.category === 'MEETING' ? 'bg-blue-100 text-blue-700' :
                                        event.category === 'ELECTION' ? 'bg-red-100 text-red-700' :
                                        event.category === 'HOLIDAY' ? 'bg-green-100 text-green-700' :
                                        'bg-gray-100 text-gray-700'
                                    }`}>
                                        {event.category}
                                    </span>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-100">{event.title}</h4>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    {new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })} at {event.startTime}
                                </p>
                                {event.location && <p className="text-[10px] text-gray-400">📍 {event.location}</p>}
                            </div>
                            <button
                                onClick={() => { if(confirm('Delete this event?')) deleteCalendarEvent(event.id); }}
                                className="text-red-400 hover:text-red-600 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <TrashIcon className="w-5 h-5" />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-lg border border-dashed dark:border-gray-800">
                      <ClockIcon className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                      <p className="text-gray-500">No upcoming events scheduled.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// ─── Grievance Inbox ────────────────────────────────────────────────────────
const GrievanceInbox: React.FC = () => {
    const { grievances, respondToGrievance } = useAppContext();
    const [responseMap, setResponseMap] = useState<Record<string, string>>({});

    const handleRespond = async (id: string) => {
        const reply = responseMap[id];
        if (!reply?.trim()) return;
        try {
            await respondToGrievance(id, reply);
            setResponseMap(prev => {
                const multi = { ...prev };
                delete multi[id];
                return multi;
            });
        } catch (err: any) {
            alert(err.message || 'Failed to respond');
        }
    };

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-black text-[#002316] uppercase tracking-tight">Messages Hub / Grievances</h3>
            <div className="space-y-4">
                {grievances.length > 0 ? (
                    grievances.map(g => (
                        <div key={g.id} className={`p-5 rounded-xl border transition-all ${
                            g.status === 'NEW' ? 'bg-orange-50 border-orange-200' : 'bg-white border-orange-100'
                        }`}>
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                            g.status === 'NEW' ? 'bg-orange-200 text-orange-800' : 'bg-emerald-100 text-emerald-700'
                                        }`}>
                                            {g.status}
                                        </span>
                                        <h4 className="font-bold text-[#002316]">{g.subject}</h4>
                                    </div>
                                    <p className="text-xs text-orange-900/60 mt-0.5">From: <span className="font-semibold">{g.userName}</span> ({g.userId.substring(0,6)})</p>
                                </div>
                                <span className="text-[10px] text-orange-400 italic">{new Date(g.createdAt).toLocaleDateString()}</span>
                            </div>
                            <p className="text-sm text-orange-900 bg-orange-50/50 p-3 rounded-lg border border-orange-100 mb-4 italic">"{g.description}"</p>
                            
                            {g.status === 'RESOLVED' ? (
                                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                    <p className="text-xs font-bold text-emerald-700 mb-1">✅ Admin Response:</p>
                                    <p className="text-sm text-emerald-800">{g.response}</p>
                                    <p className="text-[10px] text-emerald-600 mt-2 italic">Resolved on {new Date(g.respondedAt!).toLocaleDateString()}</p>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <textarea
                                        placeholder="Write your response here..."
                                        value={responseMap[g.id] || ''}
                                        onChange={e => setResponseMap(prev => ({ ...prev, [g.id]: e.target.value }))}
                                        rows={2}
                                        className="w-full px-3 py-2 text-sm bg-white border border-orange-200 rounded-lg text-[#002316] focus:ring-orange-500"
                                    />
                                    <button
                                        onClick={() => handleRespond(g.id)}
                                        className="px-4 py-1.5 bg-orange-600 text-white rounded-lg text-xs font-bold hover:bg-orange-700 transition-colors shadow-sm"
                                    >
                                        Send Reply & Mark Resolved
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                  <div className="text-center py-20 bg-white rounded-xl border border-dashed border-orange-200">
                    <CheckCircleIcon className="w-12 h-12 text-orange-500/30 mx-auto mb-2" />
                    <p className="text-[#002316]/60">No grievances reported. Excellent!</p>
                  </div>
                )}
            </div>

            {/* Notification Guide */}
            <div className="mt-12 group">
                <div className="p-8 rounded-[2.5rem] bg-orange-100/50 border border-orange-200">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
                            <MegaphoneIcon className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-[#002316] uppercase tracking-tight">Broadcast Direct Communication</h3>
                            <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mt-1">Free Forever Push Infrastructure Active</p>
                        </div>
                    </div>
                    <p className="text-sm text-orange-900/70 mb-8 leading-relaxed max-w-2xl">
                        To transmit broadcast intelligence to all mobile units, utilize the <strong>Firebase Control Center</strong>. This secure protocol ensures 100% reach with no operational overhead.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl border border-orange-200/50">
                            <div className="w-6 h-6 rounded-lg bg-orange-600 text-white text-[10px] font-black flex items-center justify-center flex-shrink-0">1</div>
                            <p className="text-xs font-bold text-orange-900 leading-tight">Access Messaging via Firebase Console.</p>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl border border-orange-200/50">
                            <div className="w-6 h-6 rounded-lg bg-orange-600 text-white text-[10px] font-black flex items-center justify-center flex-shrink-0">2</div>
                            <p className="text-xs font-bold text-orange-900 leading-tight">Initiate New Campaign &rarr; Notifications.</p>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl border border-orange-200/50">
                            <div className="w-6 h-6 rounded-lg bg-orange-600 text-white text-[10px] font-black flex items-center justify-center flex-shrink-0">3</div>
                            <p className="text-xs font-bold text-orange-900 leading-tight">Transmit payload to target Web Application.</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => window.open('https://console.firebase.google.com/', '_blank')}
                        className="inline-flex items-center gap-3 px-8 py-3 bg-orange-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 hover:scale-[1.02]"
                    >
                        Initialize Command Center
                        <span className="text-sm">↗</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

// ─── Member Details Modal ─────────────────────────────────────────────────────
const MemberDetailsModal: React.FC<{ member: User; onClose: () => void }> = ({ member, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002316]/40 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] max-w-2xl w-full p-8 border border-orange-100 overflow-hidden relative" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-8">
                <div>
                        <h2 className="text-5xl font-black text-[#002316] uppercase tracking-tighter mb-2">Admin Command Center</h2>
                        <p className="text-lg font-bold text-[#002316]/70 uppercase tracking-[0.3em]">IPREU Union Connect Portal</p>
                </div>
                <button onClick={onClose} className="p-2 bg-orange-50 text-[#002316]/40 hover:text-orange-700 rounded-xl transition-all">
                    <XMarkIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="space-y-4 text-xs font-bold text-orange-900/80 flex-1 bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                    <div className="flex justify-between border-b border-orange-100 pb-2">
                        <span className="text-[9px] uppercase tracking-widest opacity-40">Status</span>
                        <span className="text-emerald-600">ACTIVE MEMBER</span>
                    </div>
                    <p className="flex justify-between"><span className="opacity-40 uppercase text-[9px] tracking-widest">Emp No</span>{member.employeeNumber}</p>
                    <p className="flex justify-between"><span className="opacity-40 uppercase text-[9px] tracking-widest">Birth</span>{member.dob}</p>
                    <p className="flex justify-between"><span className="opacity-40 uppercase text-[9px] tracking-widest">Contact</span>{member.mobileNumber}</p>
                    <p className="flex justify-between"><span className="opacity-40 uppercase text-[9px] tracking-widest">Region</span>{member.nativePlace}</p>
                    <p className="flex justify-between"><span className="opacity-40 uppercase text-[9px] tracking-widest">Authority</span><span className="capitalize">{member.role?.toLowerCase()}</span></p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-orange-100/30 rounded-[2rem] border border-orange-200/50 shadow-inner">
                    <p className="text-[9px] font-black text-orange-400 uppercase tracking-[0.2em] mb-4">Strategic Digital Intelligence</p>
                    <div className="scale-90 origin-top hover:scale-[1.1] transition-transform duration-500">
                        <MembershipCard user={member} logoUrl="/logo.png" />
                    </div>
                </div>
            </div>
            <button onClick={onClose} className="mt-8 w-full py-4 px-6 bg-orange-600 hover:bg-orange-700 rounded-2xl text-[10px] font-black text-white uppercase tracking-[0.2em] transition-all shadow-xl shadow-orange-600/20">
                Close Intelligence Viewer
            </button>
        </div>
    </div>
);

// ─── Elite Overview Widget ──────────────────────────────────────────────────
const EliteOverview: React.FC = () => {
    const { users, grievances, calendarEvents } = useAppContext();
    const approvedMembers = users.filter(u => u.role === 'MEMBER');
    const openGrievances = grievances.filter(g => g.status === 'NEW').length;
    const activeNotifications = approvedMembers.filter(u => u.fcmToken).length;
    const upcomingEvents = calendarEvents.length;

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Total Members" value={approvedMembers.length} icon={<UserCheckIcon className="w-6 h-6" />} color="blue" />
                <StatCard title="Push Reach" value={activeNotifications} icon={<MegaphoneIcon className="w-6 h-6" />} color="orange" />
                <StatCard title="Open Grievances" value={openGrievances} icon={<ClipboardListIcon className="w-6 h-6" />} color="red" />
                <StatCard title="Calendar Events" value={upcomingEvents} icon={<ClockIcon className="w-6 h-6" />} color="green" />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-600 rounded-xl text-white shadow-lg shadow-orange-600/20">
                        <MegaphoneIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#002316]">Elite Platform Status</h3>
                        <p className="text-sm text-orange-900/60">Your union communication infrastructure is active and healthy.</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                        <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Push Notifications</p>
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                             <span className="text-sm font-bold text-orange-900">FCM Operational</span>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                        <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Member ID System</p>
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                             <span className="text-sm font-bold text-orange-900">QR Engine Active</span>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-orange-50/50 border border-orange-100">
                        <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Grievance Hub</p>
                        <div className="flex items-center gap-2">
                             <div className={`w-2 h-2 rounded-full ${openGrievances > 0 ? 'bg-orange-500' : 'bg-emerald-500'}`}></div>
                             <span className="text-sm font-bold text-orange-900">
                                {openGrievances} pending action
                             </span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

// ─── Admin Dashboard (Main) ─────────────────────────────────────────────────
interface AdminDashboardProps {
    activeTab: 'overview' | 'members' | 'surveys' | 'announcements' | 'calendar' | 'grievances';
    setActiveTab: (tab: any) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ activeTab, setActiveTab }) => {
    const { users, surveys, announcements, calendarEvents, grievances, approveRegistration, rejectRegistration, deleteSurvey } = useAppContext();
    const [selectedMember, setSelectedMember] = useState<User | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const pendingMembers = users.filter(u => u.role === UserRole.PENDING);
    const approvedMembers = users.filter(u => u.role === UserRole.MEMBER || u.role === UserRole.ADMIN);
    const filteredMembers = approvedMembers.filter(m =>
        m.employeeName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.employeeNumber?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const tabs = [
        { id: 'overview' as const, label: 'Overview', icon: <UserGroupIcon className="w-5 h-5" /> },
        { id: 'members' as const, label: 'Members', icon: <UserCheckIcon className="w-5 h-5" /> },
        { id: 'surveys' as const, label: 'Surveys', icon: <ClipboardListIcon className="w-5 h-5" /> },
        { id: 'announcements' as const, label: 'Notices', icon: <MegaphoneIcon className="w-5 h-5" /> },
        { id: 'calendar' as const, label: 'Calendar', icon: <ClockIcon className="w-5 h-5" /> },
        { id: 'grievances' as const, label: 'Messages', icon: <MegaphoneIcon className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-[#fcfaf7] p-6 lg:p-10 -mx-4 lg:-mx-8 -mt-8 text-[#002316]">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Navigation Tabs */}
                    <div className="bg-white rounded-[2rem] p-1.5 flex gap-1 flex-wrap border border-orange-100 shadow-xl">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-3 px-6 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                activeTab === tab.id
                                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-200 scale-[1.02]'
                                    : 'text-[#002316]/60 hover:text-[#002316] hover:bg-orange-50'
                            }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                    </div>
                    
                    {/* Live Clock / Status */}
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest bg-orange-100 px-6 py-3 rounded-full border border-orange-200 shadow-sm">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                            <span className="text-orange-700">Hub Active</span>
                        </div>
                        <div className="w-[1px] h-4 bg-orange-200 mx-2"></div>
                        <span className="text-orange-900/60 font-mono">{currentTime.toLocaleTimeString()}</span>
                    </div>
                </div>

            {/* Overview */}
            {activeTab === 'overview' && (
                <div className="space-y-6">
                    <EliteOverview />

                    {pendingMembers.length > 0 && (
                        <div className="animate-fade-in">
                            <h2 className="text-xl font-bold text-[#002316] mb-4 flex items-center gap-2">
                                <ClockIcon className="w-5 h-5 text-orange-600" />
                                Pending Approvals ({pendingMembers.length})
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {pendingMembers.map(m => (
                                    <PendingMemberCard
                                        key={m.id}
                                        member={m}
                                        onApprove={approveRegistration}
                                        onReject={rejectRegistration}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {pendingMembers.length === 0 && (
                        <div className="bg-white rounded-xl shadow-xl p-8 text-center border border-orange-100 animate-fade-in">
                            <CheckCircleIcon className="w-12 h-12 text-emerald-500/30 mx-auto mb-3" />
                            <p className="text-[#002316]/60">No pending approvals. All caught up!</p>
                        </div>
                    )}
                </div>
            )}

            {/* Members */}
            {activeTab === 'members' && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <h2 className="text-xl font-bold text-[#002316]">
                            Approved Members ({approvedMembers.length})
                        </h2>
                        <input
                            type="text"
                            placeholder="Search members..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="px-4 py-2 bg-white border border-orange-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-60 text-[#002316] placeholder:text-[#002316]/30 shadow-sm"
                        />
                    </div>

                    {filteredMembers.length > 0 ? (
                        <div className="bg-white rounded-[2.5rem] shadow-xl border border-orange-100 overflow-hidden">
                            <table className="min-w-full divide-y divide-orange-50 text-sm">
                                <thead className="bg-orange-50/50 text-[#002316]">
                                    <tr>
                                        <th className="px-8 py-5 text-left text-[10px] font-black text-orange-800 uppercase tracking-[0.2em]">Member No</th>
                                        <th className="px-8 py-5 text-left text-[10px] font-black text-orange-800 uppercase tracking-[0.2em]">Full Name / Identity</th>
                                        <th className="px-8 py-5 text-left text-[10px] font-black text-orange-800 uppercase tracking-[0.2em] hidden md:table-cell">Emp No</th>
                                        <th className="px-8 py-5 text-left text-[10px] font-black text-orange-800 uppercase tracking-[0.2em] hidden lg:table-cell">Email Address</th>
                                        <th className="px-8 py-5 text-left text-[10px] font-black text-orange-800 uppercase tracking-[0.2em]">Authority</th>
                                        <th className="px-8 py-5 text-center text-[10px] font-black text-orange-800 uppercase tracking-[0.2em]">Profile</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-orange-50 bg-transparent">
                                    {filteredMembers.map(m => (
                                        <tr key={m.id} className="hover:bg-orange-50/30 transition-colors group">
                                            <td className="px-8 py-5 text-orange-950 font-mono text-[11px]">{m.memberNo || m.pfNumber || 'N/A'}</td>
                                            <td className="px-8 py-5 font-bold text-[#002316] group-hover:text-orange-600 transition-colors">{m.employeeName}</td>
                                            <td className="px-8 py-5 text-orange-900/60 hidden md:table-cell font-mono">{m.employeeNumber}</td>
                                            <td className="px-8 py-5 text-orange-900/60 hidden lg:table-cell">{m.email}</td>
                                            <td className="px-8 py-5">
                                                <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ${
                                                    m.role === UserRole.ADMIN
                                                        ? 'bg-orange-500/10 text-orange-600 border border-orange-500/20'
                                                        : 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
                                                }`}>
                                                    {m.role}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5 text-center">
                                                <button
                                                    onClick={() => setSelectedMember(m)}
                                                    className="text-[10px] font-black text-orange-600/40 hover:text-orange-600 uppercase tracking-widest transition-all underline underline-offset-4"
                                                >
                                                    View File
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-xl p-8 text-center border border-orange-100">
                             <p className="text-[#002316]/60 font-bold">No members found matching "{searchTerm}".</p>
                        </div>
                    )}
                </div>
            )}

            {/* Surveys */}
            {activeTab === 'surveys' && (
                <div className="space-y-6">
                    <SurveyCreator />
                    {surveys.length > 0 ? (
                        surveys.map(s => (
                            <div key={s.id} className="relative">
                                <SurveyResultCard survey={s} />
                                <button
                                    onClick={() => deleteSurvey(s.id)}
                                    className="absolute top-6 right-6 text-orange-400 hover:text-red-600 p-2 rounded-full hover:bg-orange-50 transition-all"
                                    title="Delete survey"
                                >
                                    <TrashIcon className="w-5 h-5" />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white rounded-xl shadow-xl p-8 text-center border border-orange-100">
                             <p className="text-[#002316]/60 font-bold">No active surveys found. Deploy one above.</p>
                        </div>
                    )}
                </div>
            )}

            {/* Announcements */}
            {activeTab === 'announcements' && <AnnouncementManager />}

            {/* Calendar */}
            {activeTab === 'calendar' && <CalendarManager />}

            {/* Grievances */}
            {activeTab === 'grievances' && <GrievanceInbox />}

            {/* Member Details Modal */}
            {selectedMember && (
                <MemberDetailsModal member={selectedMember} onClose={() => setSelectedMember(null)} />
            )}
        </div>
    </div>
);
};

export default AdminDashboard;