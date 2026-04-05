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
    
    const finalLogoUrl = logoUrl || '/icon-512.svg';
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(user.id)}&color=431407&bgcolor=ffffff`;

    const handleDownload = async () => {
        if (!cardRef.current) return;
        setIsDownloading(true);
        try {
            const dataUrl = await toPng(cardRef.current, { 
                cacheBust: true, 
                pixelRatio: 3,
                backgroundColor: '#431407',
                style: {
                    transform: 'scale(1)',
                }
            });
            
            const link = document.createElement('a');
            link.download = `IPREU-ID-${user.employeeNumber}-${user.employeeName.split(' ')[0].toUpperCase()}.png`;
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            console.error('Failed to download card:', err);
            alert('Encountered an OS-level restriction. Please take a screenshot for immediate use.');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="flex flex-col items-center w-full max-w-sm mx-auto">
            <div 
                ref={cardRef} 
                className="relative w-full aspect-[1.6/1] rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 select-none"
                style={{
                   background: 'linear-gradient(135deg, #431407 0%, #7c2d12 50%, #431407 100%)'
                }}
            >
                {/* Glassmorphism Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400/10 rounded-full -ml-16 -mb-16 blur-2xl opacity-40" />
                
                {/* Decorative Micro-lines */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                {/* Main Card Content */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white font-sans z-10">
                    
                    {/* Header: Logo & Title */}
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-white/10 rounded-xl blur opacity-30"></div>
                                <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-xl border border-white/40">
                                    <img 
                                        src={finalLogoUrl} 
                                        alt="Union Logo" 
                                        crossOrigin="anonymous"
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%237c2d12" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>';
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-black tracking-tighter leading-none text-white uppercase drop-shadow-md">IPREU - UNION</h2>
                            </div>
                        </div>
                        
                        <div className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border shadow-xl ${
                            user.role === 'ADMIN' ? 'bg-red-500/80 border-red-400 text-white' : 'bg-orange-700/80 border-orange-500 text-white'
                        }`}>
                            {user.role} CODE
                        </div>
                    </div>

                    {/* Member Details */}
                    <div className="flex justify-between items-end gap-2">
                        <div className="flex-1 min-w-0">
                             <div className="mb-4">
                                <p className="text-[7px] text-orange-300 uppercase tracking-[0.4em] font-black opacity-90 mb-1">MEMBER IDENTITY</p>
                                <p className="text-[22px] font-black tracking-tight leading-[0.95] text-white break-words drop-shadow-xl max-w-[200px]">
                                    {user.employeeName}
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-6">
                                <div>
                                    <p className="text-[7px] text-orange-300 uppercase tracking-[0.3em] font-black opacity-90">EMP ID</p>
                                    <p className="text-sm font-black tracking-widest text-[#fbbf24] shadow-sm">#{user.employeeNumber}</p>
                                </div>
                            </div>
                        </div>

                        {/* Verified QR Section */}
                        <div className="flex-shrink-0 relative group p-2 bg-white rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.3)] border-4 border-orange-500/20">
                            <img 
                                src={qrUrl} 
                                alt="Secure QR" 
                                crossOrigin="anonymous"
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg"
                            />
                            <div className="absolute -top-3 -right-3 bg-orange-700 border-2 border-white rounded-full p-1.5 shadow-2xl">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="absolute -bottom-6 left-0 right-0 text-[7px] text-orange-200/70 font-black uppercase tracking-[0.3em] text-center">Verified ID</p>
                        </div>
                    </div>
                </div>

                {/* Premium Security Hologram Strip */}
                <div className="absolute top-0 right-0 bottom-0 w-2 bg-gradient-to-b from-transparent via-orange-400/20 to-transparent" />
            </div>

            <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="mt-8 group w-full flex items-center justify-center gap-3 px-8 py-3 bg-orange-950 hover:bg-orange-900 border-2 border-orange-700/40 text-white rounded-2xl text-sm font-black transition-all shadow-xl hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
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
