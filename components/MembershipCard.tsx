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
    
    // Fallback logo if missing
    const finalLogoUrl = logoUrl || '/logo.png';
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(user.id)}&color=064e3b&bgcolor=ffffff`;

    const handleDownload = async () => {
        if (!cardRef.current) return;
        setIsDownloading(true);
        try {
            // Optimization for high-quality PNG
            const dataUrl = await toPng(cardRef.current, { 
                cacheBust: true, 
                pixelRatio: 2, 
                backgroundColor: 'transparent'
            });
            const link = document.createElement('a');
            link.download = `IPREU-ID-${user.id.substring(0, 6).toUpperCase()}.png`;
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
        <div className="flex flex-col items-center w-full max-w-sm mx-auto">
            <div 
                ref={cardRef} 
                className="relative w-full aspect-[1.6/1] rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 bg-[#064e3b] select-none"
                style={{
                   background: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #022c22 100%)'
                }}
            >
                {/* Glassmorphism Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/10 rounded-full -ml-16 -mb-16 blur-2xl opacity-40" />
                
                {/* Decorative Micro-lines */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                {/* Main Card Content */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white font-sans z-10">
                    
                    {/* Header: Logo & Title */}
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-white/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg border border-white/40">
                                    <img 
                                        src={finalLogoUrl} 
                                        alt="Union Logo" 
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23064e3b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>';
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-black tracking-tighter leading-none text-white drop-shadow-sm">IPREU UNION</h2>
                                <p className="text-[10px] text-emerald-100/70 uppercase tracking-[0.2em] mt-1 font-bold">Smart Membership Hub</p>
                            </div>
                        </div>
                        
                        <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border-2 shadow-sm ${
                            user.role === 'ADMIN' ? 'bg-red-500/30 border-red-400 text-red-100' : 'bg-emerald-500/30 border-emerald-400 text-emerald-100'
                        }`}>
                            {user.role}
                        </div>
                    </div>

                    {/* Member Details */}
                    <div className="flex justify-between items-end gap-4 min-h-0">
                        <div className="flex-1 min-w-0 pr-2">
                             <div className="mb-4">
                                <p className="text-[8px] text-emerald-200 uppercase tracking-[0.3em] font-black opacity-80 mb-0.5">REGISTERED NAME</p>
                                <p className="text-xl font-black tracking-tight truncate leading-tight drop-shadow-lg text-white">
                                    {user.employeeName}
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="min-w-0">
                                    <p className="text-[8px] text-emerald-200 uppercase tracking-[0.3em] font-black opacity-80">EMP ID</p>
                                    <p className="text-sm font-black tracking-wider text-emerald-50 truncate">#{user.employeeNumber}</p>
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[8px] text-emerald-200 uppercase tracking-[0.3em] font-black opacity-80">PF NO</p>
                                    <p className="text-sm font-black tracking-wider text-emerald-50 truncate">{user.pfNumber || 'N/A'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Verified QR Section */}
                        <div className="flex-shrink-0 flex flex-col items-center">
                            <div className="relative group p-1.5 bg-white rounded-2xl shadow-2xl border-2 border-emerald-400/30">
                                <img 
                                    src={qrUrl} 
                                    alt="Audit QR" 
                                    crossOrigin="anonymous"
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl"
                                />
                                <div className="absolute -top-2 -right-2 bg-emerald-600 border-2 border-white rounded-full p-1 shadow-lg">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>
                                </div>
                            </div>
                            <p className="text-[8px] text-emerald-100/60 mt-2 font-black uppercase tracking-widest text-center">Verified ID</p>
                        </div>
                    </div>
                </div>

                {/* Premium Security Hologram Strip */}
                <div className="absolute top-0 right-0 bottom-0 w-2 bg-gradient-to-b from-transparent via-emerald-400/20 to-transparent" />
            </div>

            <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="mt-8 group w-full flex items-center justify-center gap-3 px-8 py-3 bg-[#064e3b] hover:bg-emerald-900 border-2 border-emerald-400/20 text-white rounded-2xl text-sm font-black transition-all shadow-xl hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isDownloading ? (
                    <span className="flex items-center gap-3">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        ENCRYPTING PNG...
                    </span>
                ) : (
                    <>
                        <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        DOWNLOAD DIGITAL ID CARD
                    </>
                )}
            </button>
        </div>
    );
};

export default MembershipCard;
