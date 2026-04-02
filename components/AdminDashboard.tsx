import React, { useState, FormEvent, useRef } from 'react';
import { useAppContext } from '../App';
import { User, UserRole, Survey, SurveyOption, Announcement } from '../types';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { ClipboardListIcon } from './icons/ClipboardListIcon';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import { TrashIcon } from './icons/TrashIcon';
import { PaperClipIcon } from './icons/PaperClipIcon';
import { ClockIcon } from './icons/ClockIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { UserCheckIcon } from './icons/UserCheckIcon';
import { XMarkIcon } from './icons/XMarkIcon';

// Helper: Stat Card
const StatCard: React.FC<{ title: string; value: number; icon: React.ReactNode; }> = ({ title, value, icon }) => (
    <div className="bg-white p-5 rounded-lg shadow flex items-center space-x-4">
        <div className="bg-orange-100 p-3 rounded-full">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);


// Helper: Pending Member Card
const PendingMemberCard: React.FC<{ member: User; onApprove: (id: string) => void; onReject: (id: string) => void; }> = ({ member, onApprove, onReject }) => (
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

// Helper: Survey Result Card
const SurveyResultCard: React.FC<{ survey: Survey }> = ({ survey }) => {
    const allVotes = Object.values(survey.votes);
    const totalVotes = allVotes.length;

    const getVoteCountForOption = (optionId: string) => {
        return allVotes.filter(vote => vote === optionId).length;
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg text-gray-800">{survey.question}</h3>
            <p className="text-sm text-gray-500 mb-4">{totalVotes} total votes</p>
            <div className="space-y-3">
                {survey.options.map(option => {
                    const voteCount = getVoteCountForOption(option.id);
                    const percentage = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;
                    return (
                        <div key={option.id}>
                            <div className="flex justify-between items-center text-sm mb-1">
                                <span className="font-medium text-gray-700">{option.text}</span>
                                <span className="text-gray-500">{voteCount} votes ({percentage.toFixed(1)}%)</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// Helper: Survey Creator
const SurveyCreator: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState<string[]>(['', '']);
    const { createSurvey } = useAppContext();

    const handleOptionChange = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOption = () => setOptions([...options, '']);
    const removeOption = (index: number) => {
        if (options.length > 2) {
            setOptions(options.filter((_, i) => i !== index));
        }
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
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
                    <textarea id="question" value={question} onChange={e => setQuestion(e.target.value)} required rows={2} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Options</label>
                    {options.map((option, index) => (
                        <div key={index} className="flex items-center gap-2 mb-2">
                            <input type="text" value={option} onChange={e => handleOptionChange(index, e.target.value)} required className="flex-grow mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                            <button type="button" onClick={() => removeOption(index)} disabled={options.length <= 2} className="px-2 py-1 text-red-600 hover:text-red-800 disabled:opacity-50 disabled:cursor-not-allowed text-2xl font-bold">&times;</button>
                        </div>
                    ))}
                    <button type="button" onClick={addOption} className="text-sm font-medium text-orange-600 hover:text-orange-500 mt-2">+ Add Option</button>
                </div>
                <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">Publish Survey</button>
            </form>
        </div>
    );
};

// Helper: Announcement Manager
const AnnouncementManager: React.FC = () => {
    const { announcements, createAnnouncement, deleteAnnouncement } = useAppContext();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [attachment, setAttachment] = useState<File | null>(null);
    const [isPosting, setIsPosting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setAttachment(e.target.files[0]);
        }
    };

    const handleRemoveAttachment = () => {
        setAttachment(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            setIsPosting(true);
            await createAnnouncement(title, content, attachment);
            setTitle('');
            setContent('');
            handleRemoveAttachment();
            setIsPosting(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Post a New Announcement</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="announcement-title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input id="announcement-title" value={title} onChange={e => setTitle(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="announcement-content" className="block text-sm font-medium text-gray-700">Content</label>
                        <textarea id="announcement-content" value={content} onChange={e => setContent(e.target.value)} required rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="announcement-attachment" className="block text-sm font-medium text-gray-700">Attachment (Optional)</label>
                        <div className="mt-1 flex items-center gap-4">
                            <label className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <span>Choose File</span>
                                <input id="announcement-attachment" name="announcement-attachment" type="file" className="sr-only" onChange={handleFileChange} ref={fileInputRef} />
                            </label>
                            {attachment && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <PaperClipIcon className="w-5 h-5 text-gray-400" />
                                    <span className="truncate max-w-xs">{attachment.name}</span>
                                    <button type="button" onClick={handleRemoveAttachment} className="text-red-500 hover:text-red-700 font-bold text-lg leading-none">&times;</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <button type="submit" disabled={isPosting} className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400">
                        {isPosting ? 'Posting...' : 'Post Announcement'}
                    </button>
                </form>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">Posted Announcements</h3>
                {announcements.length > 0 ? (
                    announcements.map(ann => (
                        <div key={ann.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-start">
                            <div>
                                <h4 className="font-bold text-gray-800">{ann.title}</h4>
                                <p className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{ann.content}</p>
                                {ann.attachment && (
                                    <div className="mt-3">
                                        <a href={ann.attachment.dataUrl} download={ann.attachment.name}
                                            className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-800 bg-orange-100 hover:bg-orange-200 px-3 py-1 rounded-full transition-colors">
                                            <PaperClipIcon className="w-4 h-4" />
                                            <span>{ann.attachment.name}</span>
                                        </a>
                                    </div>
                                )}
                                <p className="text-xs text-gray-400 mt-2">{new Date(ann.createdAt).toLocaleString()}</p>
                            </div>
                            <button onClick={() => deleteAnnouncement(ann.id)} className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 flex-shrink-0 ml-4">
                                <TrashIcon className="w-5 h-5" />
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No announcements posted yet.</p>
                )}
            </div>
        </div>
    );
};

// Helper: Member Details Modal
const MemberDetailsModal: React.FC<{ member: User; onClose: () => void; }> = ({ member, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 transition-opacity">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white">
                    <h3 className="text-xl font-bold text-gray-800">Member Details</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                    {Object.entries({
                        "Email Address": member.email,
                        "Employee Number": member.employeeNumber,
                        "Full Name": member.employeeName,
                        "Date of Birth": member.dob,
                        "Father's Name": member.fatherName,
                        "Mother's Name": member.motherName,
                        "Mobile Number": member.mobileNumber,
                        "Native Place": member.nativePlace,
                        "State": member.state,
                        "Caste": member.caste || 'N/A',
                    }).map(([label, value]) => (
                        <div key={label} className="py-1">
                            <p className="font-semibold text-gray-500">{label}</p>
                            <p className="text-gray-800">{value}</p>
                        </div>
                    ))}
                </div>
                <div className="p-4 bg-gray-50 text-right rounded-b-lg sticky bottom-0">
                    <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};


// Main Admin Dashboard Component
const AdminDashboard: React.FC = () => {
    const { users, approveRegistration, rejectRegistration, surveys } = useAppContext();
    const [selectedMember, setSelectedMember] = useState<User | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const pendingMembers = users.filter(u => u.role === UserRole.PENDING);
    const approvedMembers = users.filter(u => u.role === UserRole.MEMBER);

    const filteredMembers = approvedMembers.filter(member =>
        member.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.employeeNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="space-y-12">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <StatCard
                            title="Approved Members"
                            value={approvedMembers.length}
                            icon={<CheckCircleIcon className="w-6 h-6 text-green-600" />}
                        />
                        <StatCard
                            title="Pending Registrations"
                            value={pendingMembers.length}
                            icon={<ClockIcon className="w-6 h-6 text-yellow-600" />}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <UserGroupIcon className="w-8 h-8 text-orange-600" />
                        <h2 className="text-2xl font-bold text-gray-800">Membership Management</h2>
                    </div>
                    {pendingMembers.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pendingMembers.map(member => (
                                <PendingMemberCard key={member.id} member={member} onApprove={approveRegistration} onReject={rejectRegistration} />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white text-center p-8 rounded-lg shadow">
                            <p className="text-gray-500">No pending registrations.</p>
                        </div>
                    )}
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <MegaphoneIcon className="w-8 h-8 text-orange-600" />
                        <h2 className="text-2xl font-bold text-gray-800">Announcements & Circulars</h2>
                    </div>
                    <AnnouncementManager />
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <ClipboardListIcon className="w-8 h-8 text-orange-600" />
                        <h2 className="text-2xl font-bold text-gray-800">Surveys & Polls</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <SurveyCreator />
                        </div>
                        <div className="lg:col-span-2 space-y-6">
                            <h3 className="text-xl font-bold text-gray-800">Active Survey Results</h3>
                            {surveys.length > 0 ? surveys.map(survey => (
                                <SurveyResultCard key={survey.id} survey={survey} />
                            )) : <p className="text-gray-500">No active surveys.</p>}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <UserCheckIcon className="w-8 h-8 text-orange-600" />
                        <h2 className="text-2xl font-bold text-gray-800">Approved Members</h2>
                    </div>
                    {approvedMembers.length > 0 ? (
                        <>
                            <div className="mb-4">
                                <input
                                    type="search"
                                    placeholder="Search by name or employee number..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>
                            {filteredMembers.length > 0 ? (
                                <div className="bg-white rounded-lg shadow overflow-hidden">
                                    <ul className="divide-y divide-gray-200">
                                        {filteredMembers.map(member => (
                                            <li key={member.id} className="p-4 flex justify-between items-center hover:bg-gray-50">
                                                <div>
                                                    <p className="font-semibold text-gray-800">{member.employeeName}</p>
                                                    <p className="text-sm text-gray-500">Emp No: {member.employeeNumber}</p>
                                                </div>
                                                <button
                                                    onClick={() => setSelectedMember(member)}
                                                    className="px-3 py-1 text-sm font-medium text-orange-600 border border-orange-600 rounded-full hover:bg-orange-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                                >
                                                    View Details
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div className="bg-white text-center p-8 rounded-lg shadow">
                                    <p className="text-gray-500">No members found matching your search.</p>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="bg-white text-center p-8 rounded-lg shadow">
                            <p className="text-gray-500">No members have been approved yet.</p>
                        </div>
                    )}
                </div>
            </div>
            {selectedMember && <MemberDetailsModal member={selectedMember} onClose={() => setSelectedMember(null)} />}
        </>
    );
};

export default AdminDashboard;