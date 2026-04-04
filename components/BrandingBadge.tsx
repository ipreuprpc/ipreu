import React from 'react';

const BrandingBadge: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-2 py-4">
            <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl flex flex-col items-center group transition-all hover:bg-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500/80 mb-1">Official Platform Provider</p>
                <p className="text-xs font-bold text-gray-300 tracking-wide">
                    BUILT FOR THE EMPLOYEES, BY <span className="text-white hover:text-orange-400 transition-colors">MR. NAVEEN KUMAR RANA</span>
                </p>
                <p className="text-[9px] font-medium text-gray-500 uppercase tracking-widest mt-1">
                    (EXECUTIVE MEMBER, IPREU)
                </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-gray-800"></span>
                <span className="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Secure Connect v2.0</span>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-gray-800"></span>
            </div>
        </div>
    );
};

export default BrandingBadge;
