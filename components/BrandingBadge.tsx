import React from 'react';

const BrandingBadge: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-3 py-6">
            <div className="relative group">
                {/* Glow Effect Background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative px-8 py-4 bg-white border-2 border-orange-500/20 rounded-2xl shadow-xl flex flex-col items-center transition-all hover:border-orange-500/50">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 mb-2 drop-shadow-sm">Official Platform Identity</p>
                    
                    <h4 className="text-base md:text-lg font-black tracking-tight text-center leading-tight">
                        <span className="text-gray-900">Design & Developed by </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-700 uppercase drop-shadow-sm">
                            Mr. NAVEEN KUMAR
                        </span>
                    </h4>
                    
                    <div className="mt-2 px-3 py-0.5 bg-orange-600 rounded-full">
                        <p className="text-[9px] font-black text-white uppercase tracking-widest">
                            (EXECUTIVE MEMBER) IPREU
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center gap-3 mt-1 opacity-60">
                <span className="h-[2px] w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></span>
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Secure Premium Infrastructure</span>
                <span className="h-[2px] w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></span>
            </div>
        </div>
    );
};

export default BrandingBadge;
