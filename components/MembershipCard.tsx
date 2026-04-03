import React, { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { User, UserRole } from '../types';

interface MembershipCardProps {
    user: User;
    logoUrl?: string;
}

const MembershipCard: React.FC<MembershipCardProps> = ({ user, logoUrl }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isDownloading, setIsDownloading] = useState(false);
    
    // Generate a simple QR code URL for free
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(user.id)}&color=ea580c&bgcolor=ffffff`;

    const handleDownload = async () => {
        if (!cardRef.current) return;
        setIsDownloading(true);
        try {
            const dataUrl = await toPng(cardRef.current, { cacheBust: true, quality: 1 });
            const link = document.createElement('a');
            link.download = `IPREU-ID-${user.id.substring(0, 6)}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Failed to download card:', err);
            alert('Failed to generate image. Please try again or take a screenshot.');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div ref={cardRef} className="relative w-full max-w-sm mx-auto aspect-[1.6/1] rounded-2xl overflow-hidden shadow-2xl group select-none flex-shrink-0">
                {/* Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-16 -mb-16 blur-2xl" />
                
                {/* Frosted Overlay */}
                <div className="absolute inset-2 rounded-xl bg-white/5 backdrop-blur-[2px] border border-white/20 shadow-inner" />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white font-sans">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            {logoUrl ? (
                                <img src={logoUrl} alt="IPREU Logo" className="w-10 h-10 rounded-lg shadow-lg border border-white/30" />
                            ) : (
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-orange-600 font-bold text-xl shadow-lg">
                                    I
                                </div>
                            )}
                            <div>
                                <h2 className="text-lg font-bold tracking-tight leading-none uppercase">IPREU Union</h2>
                                <p className="text-[10px] text-orange-100 uppercase tracking-widest mt-0.5 opacity-80 font-medium">Digital Membership Card</p>
                            </div>
                        </div>
                        <div className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider border mb-1 ${
                            user.role === 'ADMIN' ? 'bg-rose-500/20 border-rose-300' : 'bg-green-500/20 border-green-300'
                        }`}>
                            {user.role}
                        </div>
                    </div>

                    {/* Body */}
                    <div className="flex justify-between items-end">
                        <div className="space-y-1">
                            <div className="space-y-0.5">
                                <p className="text-[8px] text-orange-200 uppercase tracking-widest font-bold">Member Name</p>
                                <p className="text-lg font-bold tracking-wide drop-shadow-md">{user.employeeName}</p>
                            </div>
                            <div className="flex gap-6 mt-2">
                                <div>
                                    <p className="text-[8px] text-orange-200 uppercase tracking-widest font-bold">Employee ID</p>
                                    <p className="text-xs font-mono font-bold tracking-wider">{user.employeeNumber}</p>
                                </div>
                                <div>
                                    <p className="text-[8px] text-orange-200 uppercase tracking-widest font-bold">PF Number</p>
                                    <p className="text-xs font-mono font-bold tracking-wider">{user.pfNumber}</p>
                                </div>
                            </div>
                        </div>

                        {/* QR Section */}
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-1 rounded-lg shadow-xl border-2 border-white/30" title="Scan to verify membership">
                                <img 
                                    src={qrUrl} 
                                    alt="Verification QR" 
                                    crossOrigin="anonymous"
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded"
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-[7px] text-orange-100 mt-1 opacity-60 uppercase font-bold tracking-tighter">Scan to Verify</p>
                        </div>
                    </div>

                    {/* Footer Strip */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
                
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>

            <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="mt-6 flex items-center gap-2 px-6 py-2 bg-white/10 dark:bg-gray-800/50 border border-orange-500/30 text-orange-600 dark:text-orange-400 rounded-full text-xs font-bold hover:bg-orange-500 hover:text-white transition-all shadow-sm disabled:opacity-50"
            >
                {isDownloading ? (
                    <span className="flex items-center gap-2">
                        <svg className="animate-spin h-3 w-3 text-current" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Generating...
                    </span>
                ) : (
                    <>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Download Digital ID
                    </>
                )}
            </button>
        </div>
    );
};

export default MembershipCard;
