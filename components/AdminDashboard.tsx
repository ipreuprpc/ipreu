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

// ─── Stat Card ───────────────────────────────────────────────────────────────
const StatCard: React.FC<{ title: string; value: number; icon: React.ReactNode; color?: string }> = ({ title, value, icon, color = 'orange' }) => (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 p-5 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 flex items-center space-x-4 transition-transform hover:-translate-y-1 group">
        <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${color}-50 dark:bg-${color}-900/10 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500`} />
        <div className={`bg-${color}-100 dark:bg-${color}-900/30 p-3 rounded-full text-${color}-600 dark:text-${color}-400 shadow-inner relative z-10`}>
            {icon}
        </div>
        <div className="relative z-10">
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">{title}</p>
            <p className="text-3xl font-display font-bold text-gray-800 dark:text-gray-100 tracking-tight">{value}</p>
        </div>
    </div>
);

// ─── Pending Member Card ─────────────────────────────────────────────────────
const PendingMemberCard: React.FC<{
    member: User;
    onApprove: (id: string) => void;
    onReject: (id: string) => void;
}> = ({ member, onApprove, onReject }) => (
    <div className="bg-white p-4 rounded-lg shadow transition-shadow hover:shadow-md">
        <h3 className="font-bold text-lg text-gray-800">{member.employeeName}</h3>
        <p className="text-sm text-gray-500">Emp No: {member.employeeNumber}</p>
        <div className="mt-3 text-sm text-gray-600 space-y-1">
            <p><span className="font-semibold">DOB:</span> {member.dob}</p>
            <p><span className="font-semibold">Location:</span> {member.nativePlace}, {member.state}</p>
            <p><span className="font-semibold">Contact:</span> {member.mobileNumber}</p>
        </div>
        <div className="mt-4 flex space-x-2">
            <button onClick={() => onApprove(member.id)} className="flex-1 bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-green-600 transition-colors">Approve</button>
            <button onClick={() => onReject(member.id)} className="flex-1 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-red-600 transition-colors">Reject</button>
        </div>
    </div>
);

const SurveyResultCard: React.FC<{ survey: Survey }> = ({ survey }) => {
    const { users } = useAppContext();
    const [showVoters, setShowVoters] = useState(false);
    const allVotes = Object.values(survey.votes);
    const totalVotes = allVotes.length;
    const getCount = (optId: string) => allVotes.filter(v => v === optId).length;

    const getVoterNamesForOption = (optId: string) => {
        return Object.entries(survey.votes)
            .filter(([_, votedOptId]) => votedOptId === optId)
            .map(([userId, _]) => users.find(u => u.id === userId)?.employeeName || 'Unknown Member');
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="font-bold text-lg text-gray-800">{survey.question}</h3>
                    <p className="text-sm text-gray-500">{totalVotes} total votes recorded</p>
                </div>
                <button 
                  onClick={() => setShowVoters(!showVoters)}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100 transition-all flex items-center gap-1.5"
                >
                  <UserGroupIcon className="w-3.5 h-3.5" />
                  {showVoters ? 'Hide Voter Names' : 'View Voter Names'}
                </button>
            </div>

            <div className="space-y-6">
                {survey.options.map(option => {
                    const count = getCount(option.id);
                    const pct = totalVotes > 0 ? (count / totalVotes) * 100 : 0;
                    const voterNames = getVoterNamesForOption(option.id);
                    
                    return (
                        <div key={option.id}>
                            <div className="flex justify-between items-center text-sm mb-1.5">
                                <span className="font-semibold text-gray-700">{option.text}</span>
                                <span className="text-gray-500 text-xs">{count} votes ({pct.toFixed(1)}%)</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5">
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2.5 rounded-full shadow-sm" style={{ width: `${pct}%` }} />
                            </div>
                            
                            {showVoters && voterNames.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-3 ml-1 animate-fade-in">
                                    {voterNames.map((name, i) => (
                                        <span key={i} className="text-[10px] bg-white text-gray-600 px-2.5 py-1 rounded-md border border-gray-200 shadow-sm font-medium">
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
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

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const surveyOptions: SurveyOption[] = options
            .filter(opt => opt.trim() !== '')
            .map(opt => ({ id: `opt-${Date.now()}-${Math.random()}`, text: opt }));
        if (question.trim() && surveyOptions.length >= 2) {
            createSurvey({ question, options: surveyOptions });
            setQuestion('');
            setOptions(['', '']);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Create New Survey</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="survey-question" className="block text-sm font-medium text-gray-700">Question</label>
                    <textarea id="survey-question" value={question} onChange={e => setQuestion(e.target.value)} required rows={2} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Options</label>
                    {options.map((option, index) => (
                        <div key={index} className="flex items-center gap-2 mb-2">
                            <input type="text" value={option} onChange={e => handleOptionChange(index, e.target.value)} required className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                            <button type="button" onClick={() => removeOption(index)} disabled={options.length <= 2} className="px-2 py-1 text-red-600 hover:text-red-800 disabled:opacity-30 text-2xl font-bold">&times;</button>
                        </div>
                    ))}
                    <button type="button" onClick={addOption} className="text-sm font-medium text-orange-600 hover:text-orange-500 mt-2">+ Add Option</button>
                </div>
                <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">Publish Survey</button>
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
            <div className={`p-6 rounded-lg shadow transition-colors ${editingId ? 'bg-orange-50 border-2 border-orange-200' : 'bg-white'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                        {editingId ? 'Edit Announcement' : 'Post a New Announcement'}
                    </h3>
                    {editingId && (
                        <button onClick={cancelEdit} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                            Cancel Edit
                        </button>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="ann-title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            id="ann-title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="ann-content" className="block text-sm font-medium text-gray-700">Content</label>
                            <span className={`text-xs ${content.length > 800 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
                                {content.length} characters
                            </span>
                        </div>
                        <textarea
                            id="ann-content"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            required
                            rows={4}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
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
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 transition-colors"
                    >
                        {isPosting ? 'Saving...' : editingId ? 'Update Announcement' : 'Post Announcement'}
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

                            <div className="flex items-start ml-3 flex-shrink-0">
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
    const [isAdding, setIsAdding] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await createCalendarEvent({ title, description, date, startTime, location, category });
            setTitle(''); setDescription(''); setDate(''); setStartTime(''); setLocation(''); setCategory('MEETING');
            setIsAdding(false);
        } catch (err: any) {
            alert(err.message || 'Failed to create event');
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
                <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border dark:border-gray-800 space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Event Title</label>
                            <input type="text" value={title} onChange={e => setTitle(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 focus:ring-orange-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                            <select value={category} onChange={e => setCategory(e.target.value as any)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 focus:ring-orange-500">
                                <option value="MEETING">Meeting</option>
                                <option value="HOLIDAY">Holiday</option>
                                <option value="ELECTION">Election</option>
                                <option value="SOCIAL">Social</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
                            <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 focus:ring-orange-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Time</label>
                            <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 focus:ring-orange-500" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location (Optional)</label>
                        <input type="text" value={location} onChange={e => setLocation(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 focus:ring-orange-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} rows={2} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100 focus:ring-orange-500" />
                    </div>
                    <button type="submit" className="w-full py-2 bg-green-600 text-white rounded-md font-bold hover:bg-green-700 transition-colors">Publish Event</button>
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
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Grievance Inbox</h3>
            <div className="space-y-4">
                {grievances.length > 0 ? (
                    grievances.map(g => (
                        <div key={g.id} className={`p-5 rounded-xl border transition-all ${
                            g.status === 'NEW' ? 'bg-orange-50 border-orange-200 dark:bg-orange-900/10 dark:border-orange-900/30' : 'bg-white border-gray-100 dark:bg-gray-900 dark:border-gray-800'
                        }`}>
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                            g.status === 'NEW' ? 'bg-orange-200 text-orange-800' : 'bg-green-100 text-green-700'
                                        }`}>
                                            {g.status}
                                        </span>
                                        <h4 className="font-bold text-gray-800 dark:text-gray-100">{g.subject}</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-0.5">From: <span className="font-semibold">{g.userName}</span> ({g.userId.substring(0,6)})</p>
                                </div>
                                <span className="text-[10px] text-gray-400 italic">{new Date(g.createdAt).toLocaleDateString()}</span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg border dark:border-gray-700/50 mb-4 italic">"{g.description}"</p>
                            
                            {g.status === 'RESOLVED' ? (
                                <div className="bg-green-50 dark:bg-green-900/10 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
                                    <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-1">✅ Admin Response:</p>
                                    <p className="text-sm text-green-800 dark:text-green-300">{g.response}</p>
                                    <p className="text-[10px] text-green-600 mt-2 italic">Resolved on {new Date(g.respondedAt!).toLocaleDateString()}</p>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <textarea
                                        placeholder="Write your response here..."
                                        value={responseMap[g.id] || ''}
                                        onChange={e => setResponseMap(prev => ({ ...prev, [g.id]: e.target.value }))}
                                        rows={2}
                                        className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 focus:ring-orange-500"
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
                  <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-xl border border-dashed dark:border-gray-800">
                    <CheckCircleIcon className="w-12 h-12 text-green-500/30 mx-auto mb-2" />
                    <p className="text-gray-500">No grievances reported. Excellent!</p>
                  </div>
                )}
            </div>

            {/* Notification Guide */}
            <div className="mt-12 group">
                <div className="p-6 rounded-2xl bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/30">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600">
                            <MegaphoneIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Broadcast Push Notification</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        To send a broadcast message to all members' phones, use the <strong>Firebase Console Cloud Messaging</strong> tab. This is a <strong>Free Forever</strong> service that allows you to send unlimited push notifications.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 flex items-center justify-center text-[10px] font-bold text-orange-600 mt-0.5">1</div>
                            <p className="text-xs text-gray-700 dark:text-gray-300">Go to <strong>Messaging</strong> in your Firebase Console.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 flex items-center justify-center text-[10px] font-bold text-orange-600 mt-0.5">2</div>
                            <p className="text-xs text-gray-700 dark:text-gray-300">Click <strong>"New campaign"</strong> &rarr; <strong>"Notifications"</strong>.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 flex items-center justify-center text-[10px] font-bold text-orange-600 mt-0.5">3</div>
                            <p className="text-xs text-gray-700 dark:text-gray-300">Enter your Title and Message, then target your Web app.</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => window.open('https://console.firebase.google.com/', '_blank')}
                        className="mt-6 inline-flex items-center gap-2 px-6 py-2 bg-orange-600 text-white rounded-lg text-sm font-bold hover:bg-orange-700 transition-all shadow-md group-hover:scale-105"
                    >
                        Open Firebase Console
                        <span className="text-xs">↗</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

// ─── Member Details Modal ─────────────────────────────────────────────────────
const MemberDetailsModal: React.FC<{ member: User; onClose: () => void }> = ({ member, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">{member.employeeName}</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <XMarkIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="space-y-2 text-sm text-gray-700 flex-1">
                    <p><span className="font-semibold w-32 inline-block">Employee No:</span>{member.employeeNumber}</p>
                    <p><span className="font-semibold w-32 inline-block">Date of Birth:</span>{member.dob}</p>
                    <p><span className="font-semibold w-32 inline-block">Email:</span>{member.email}</p>
                    <p><span className="font-semibold w-32 inline-block">Mobile:</span>{member.mobileNumber}</p>
                    <p><span className="font-semibold w-32 inline-block">Native Place:</span>{member.nativePlace}</p>
                    <p><span className="font-semibold w-32 inline-block">State:</span>{member.state}</p>
                    <p><span className="font-semibold w-32 inline-block">PF No:</span>{member.pfNumber}</p>
                    <p><span className="font-semibold w-32 inline-block">Qualification:</span>{member.qualification}</p>
                    <p><span className="font-semibold w-32 inline-block">Role:</span><span className="capitalize">{member.role?.toLowerCase()}</span></p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Digital Membership ID</p>
                    <div className="scale-90 origin-top">
                        <MembershipCard user={member} logoUrl="/logo.png" />
                    </div>
                </div>
            </div>
            <button onClick={onClose} className="mt-6 w-full py-2 px-4 bg-orange-600 hover:bg-orange-700 rounded-lg text-sm font-bold text-white transition-colors shadow-lg">
                Close Viewer
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

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-orange-600 rounded-xl text-white shadow-lg shadow-orange-600/20">
                        <MegaphoneIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Elite Platform Status</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Your union communication infrastructure is active and healthy.</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border dark:border-gray-700/50">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Push Notifications</p>
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                             <span className="text-sm font-bold text-gray-700 dark:text-gray-300">FCM Operational</span>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border dark:border-gray-700/50">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Member ID System</p>
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                             <span className="text-sm font-bold text-gray-700 dark:text-gray-300">QR Engine Active</span>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border dark:border-gray-700/50">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Grievance Hub</p>
                        <div className="flex items-center gap-2">
                             <div className={`w-2 h-2 rounded-full ${openGrievances > 0 ? 'bg-orange-500' : 'bg-green-500'}`}></div>
                             <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
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
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                {/* Tabs */}
                <div className="bg-white rounded-lg shadow-sm p-1.5 flex gap-1 flex-wrap border border-gray-100">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 min-w-[110px] flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                            activeTab === tab.id
                                ? 'bg-orange-600 text-white shadow'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
                </div>
                
                {/* Live Clock */}
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                    <ClockIcon className="w-4 h-4 text-orange-500" />
                    <span>Last Refreshed: <span className="font-semibold text-gray-700">{currentTime.toLocaleTimeString()}</span></span>
                </div>
            </div>

            {/* Overview */}
            {activeTab === 'overview' && (
                <div className="space-y-6">
                    <EliteOverview />

                    {pendingMembers.length > 0 && (
                        <div className="animate-fade-in">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
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
                        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8 text-center border border-gray-100 dark:border-gray-800 animate-fade-in">
                            <CheckCircleIcon className="w-12 h-12 text-green-500/30 mx-auto mb-3" />
                            <p className="text-gray-500">No pending approvals. All caught up!</p>
                        </div>
                    )}
                </div>
            )}

            {/* Members */}
            {activeTab === 'members' && (
                <div className="space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                        <h2 className="text-xl font-bold text-gray-800">
                            Approved Members ({approvedMembers.length})
                        </h2>
                        <input
                            type="text"
                            placeholder="Search members..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 w-60"
                        />
                    </div>

                    {filteredMembers.length > 0 ? (
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-600">Name</th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-600 hidden md:table-cell">Emp No</th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-600 hidden lg:table-cell">Email</th>
                                        <th className="px-4 py-3 text-left font-semibold text-gray-600">Role</th>
                                        <th className="px-4 py-3 text-center font-semibold text-gray-600">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredMembers.map(m => (
                                        <tr key={m.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-3 font-medium text-gray-800">{m.employeeName}</td>
                                            <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{m.employeeNumber}</td>
                                            <td className="px-4 py-3 text-gray-500 hidden lg:table-cell">{m.email}</td>
                                            <td className="px-4 py-3">
                                                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                                                    m.role === UserRole.ADMIN
                                                        ? 'bg-orange-100 text-orange-700'
                                                        : 'bg-green-100 text-green-700'
                                                }`}>
                                                    {m.role}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <button
                                                    onClick={() => setSelectedMember(m)}
                                                    className="text-orange-600 hover:text-orange-800 text-xs font-medium underline"
                                                >
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center py-8">No members found matching "{searchTerm}".</p>
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
                                    className="absolute top-4 right-4 text-red-400 hover:text-red-600 p-1 rounded-full hover:bg-red-50"
                                    title="Delete survey"
                                >
                                    <TrashIcon className="w-4 h-4" />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-8">No surveys yet. Create one above.</p>
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
    );
};

export default AdminDashboard;