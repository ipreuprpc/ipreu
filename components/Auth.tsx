import React, { useState, FormEvent } from 'react';
import { useAppContext } from '../App';
import { INDIAN_STATES } from '../constants';
import { User, UserRole } from '../types';
import { loadSession, saveSession, clearSession, api } from '../services/storage';


const Auth: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
    const [view, setView] = useState<'login' | 'register' | 'adminLogin'>('login');

    const renderView = () => {
        switch (view) {
            case 'register': return <RegistrationForm onToggle={() => setView('login')} />;
            case 'adminLogin': return <AdminLoginForm onToggle={() => setView('login')} />;
            case 'login':
            default:
                return <LoginForm
                    onToggleRegister={() => setView('register')}
                    onToggleAdminLogin={() => setView('adminLogin')}
                />;
        }
    };

    return (
        <div className="max-w-5xl mx-auto mt-4 md:mt-10 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-100">
                {/* Branding Left Panel (Hidden on Mobile) */}
                <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-orange-600 to-orange-800 p-12 flex-col justify-between text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                    
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20 mb-8">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <h2 className="text-4xl font-display font-bold leading-tight mb-4">Official IPREU<br/>Portal Access</h2>
                        <p className="text-orange-100/90 text-lg leading-relaxed max-w-md">Secure authentication into the Indian Oil Panipat Refinery Employees Union network.</p>
                    </div>
                    
                    <div className="relative z-10 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
                            <span className="text-sm font-medium text-orange-100">End-to-End Encrypted Tunnel</span>
                        </div>
                    </div>
                </div>

                {/* Form Right Panel */}
                <div className="w-full md:w-1/2 p-8 md:p-12 relative flex flex-col justify-center bg-[#fcfaf7]">
                    {onBack && (
                        <button onClick={onBack} className="absolute top-6 left-6 text-gray-600 hover:text-orange-700 flex items-center transition-colors font-black uppercase text-[10px] tracking-widest gap-2">
                            &larr; <span className="text-sm font-medium ml-1">Home</span>
                        </button>
                    )}
                    <div className="mt-8 md:mt-0">
                        {renderView()}
                    </div>
                </div>
            </div>
        </div>
    );
};

const LoginForm: React.FC<{ onToggleRegister: () => void; onToggleAdminLogin: () => void; }> = ({ onToggleRegister, onToggleAdminLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const { memberLogin } = useAppContext();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        setIsPending(false);

        try {
            const res = await memberLogin(email, password);
            if (res.success) {
                // App will re-render and show dashboard
            } else if (res.pending) {
                setIsPending(true);
            } else {
                setError(res.error || 'Login failed');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="animate-fade-in">
            <h2 className="text-3xl font-black text-center text-[#002316] uppercase tracking-tight mb-8">Member Access</h2>
            
            {isPending && (
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 rounded-r-lg animate-pulse">
                    <p className="text-sm text-orange-800 font-medium">Application Under Review</p>
                    <p className="text-xs text-orange-700 mt-1">We've received your registration. Our executives are currently verifying your details. You'll be able to login once approved.</p>
                </div>
            )}

            {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="login-email" className="block text-[10px] font-black text-[#002316]/90 uppercase tracking-[0.2em] mb-1.5">Email Identity</label>
                    <input
                        id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email"
                        className="block w-full px-4 py-3 bg-white border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold"
                        placeholder="mail@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="login-password" className="block text-[10px] font-black text-[#002316]/90 uppercase tracking-[0.2em] mb-1.5">Secure Key</label>
                    <div className="relative">
                        <input
                            id="login-password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password"
                            className="block w-full px-4 py-3 bg-white border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold"
                            placeholder="••••••••"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-[10px] font-black uppercase text-orange-600 hover:text-orange-700 tracking-widest">
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-orange-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-[0.98] disabled:bg-orange-200 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Authenticating...' : 'Establish Session'}
                </button>
            </form>
            <div className="mt-6 space-y-2 text-center text-sm text-gray-800">
                <p>Not a member yet? <button onClick={onToggleRegister} className="font-medium text-orange-600 hover:text-orange-500">Register here</button></p>
                <p>Are you an administrator? <button onClick={onToggleAdminLogin} className="font-medium text-orange-600 hover:text-orange-500">Admin Login</button></p>
            </div>
        </div>
    );
};

const AdminLoginForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { adminLogin } = useAppContext();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        try {
            const res = await adminLogin(email, password);
            if (!res.success) {
                setError(res.error || 'Admin login failed');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h2 className="text-3xl font-black text-center text-[#002316] uppercase tracking-tight mb-8">Admin Control</h2>
            {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="admin-login-email" className="block text-[10px] font-black text-[#002316]/80 uppercase tracking-[0.2em] mb-1.5">Admin Email</label>
                    <input
                        id="admin-login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email"
                        className="mt-1 block w-full px-4 py-3 bg-white border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold"
                        placeholder="e.g., admin@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="admin-login-password" className="block text-[10px] font-black text-[#002316]/80 uppercase tracking-[0.2em] mb-1.5">Password</label>
                    <div className="relative mt-1">
                        <input
                            id="admin-login-password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password"
                            className="block w-full px-4 py-3 bg-white border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold"
                            placeholder="••••••••"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-[10px] font-black uppercase text-orange-400 hover:text-orange-600 tracking-widest">
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-orange-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-[0.98] disabled:bg-orange-200 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Verifying Admin Access...' : 'Establish Secure Admin Session'}
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-800">
                <button onClick={onToggle} className="font-medium text-orange-600 hover:text-orange-500">Back to Member Login</button>
            </p>
        </>
    );
};

const RegistrationForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
    const [formData, setFormData] = useState<Omit<User, 'id' | 'role'>>({
        email: '', employeeNumber: '', employeeName: '', dob: '', doj: '', department: '', unit: '', fatherName: '', motherName: '', nativePlace: '', state: '', caste: '', mobileNumber: '', password: '',
        postingLocation: '', pocName: '', shift: ''
    });
    const [regStatus, setRegStatus] = useState<'IDLE' | 'OPTIMIZING' | 'UPLOADING' | 'REGISTERING'>('IDLE');
    const [photo, setPhoto] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [submittedData, setSubmittedData] = useState<any>(null);
    const { register } = useAppContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setPhoto(file);
            setPhotoPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });

        if (formData.password !== confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match.' });
            return;
        }

        if (!photo) {
            setMessage({ type: 'error', text: 'Profile photo is mandatory.' });
            return;
        }

        setRegStatus('OPTIMIZING');
        try {
            const success = await register(formData, photo, (status: any) => setRegStatus(status));
            if (success) {
                setSubmittedData(formData);
                setMessage({ type: 'success', text: 'Registration successful! Your application is pending approval.' });
            }
        } catch (err: any) {
            setMessage({ type: 'error', text: err.message || 'An error occurred during registration.' });
        } finally {
            setRegStatus('IDLE');
        }
    };

    // Ordered specifically to start with Email
    const registrationFields = [
        { name: 'email', label: 'Email Address', type: 'email', autoComplete: 'email', required: true },
        { name: 'mobileNumber', label: 'Mobile Number', type: 'tel', autoComplete: 'tel', required: true },
        { name: 'employeeNumber', label: 'Employee Number', type: 'text', autoComplete: 'username', required: true },
        { name: 'employeeName', label: 'Employee Name', type: 'text', autoComplete: 'name', required: true },
        { name: 'dob', label: 'Date of Birth', type: 'date', autoComplete: 'bday', required: true },
        { name: 'doj', label: 'Date of Joining', type: 'date', autoComplete: 'off', required: true },
        { name: 'department', label: 'Department', type: 'text', autoComplete: 'organization-title', required: true },
        { name: 'unit', label: 'Unit', type: 'text', autoComplete: 'organization', required: true },
        { name: 'pocName', label: 'POC Name', type: 'text', autoComplete: 'off', required: true },
        { name: 'fatherName', label: "Father's Name", type: 'text', autoComplete: 'off', required: true },
        { name: 'motherName', label: "Mother's Name", type: 'text', autoComplete: 'off', required: true },
        { name: 'nativePlace', label: 'Native Place', type: 'text', autoComplete: 'address-level2', required: true },
        { name: 'caste', label: 'Category/Caste (Optional)', type: 'text', autoComplete: 'off', required: false },
    ];

    if (submittedData) {
        return (
            <div className="animate-fade-in">
                <div className="text-center mb-6">
                    <svg className="w-16 h-16 text-orange-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-[10px] text-gray-800 font-black uppercase tracking-[0.2em]">Secure Premium Infrastructure</span>
                    <p className="text-orange-900/90 mt-2 font-bold">Your application is now under Executive Review.</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-md border border-gray-200 text-sm space-y-3 mb-8">
                    <p><span className="font-semibold text-gray-700">Email Address:</span> {submittedData.email}</p>
                    <p><span className="font-semibold text-gray-700">Employee Number:</span> {submittedData.employeeNumber}</p>
                    <p><span className="font-semibold text-gray-700">Full Name:</span> {submittedData.employeeName}</p>
                    <p><span className="font-semibold text-gray-700">Mobile Number:</span> {submittedData.mobileNumber}</p>
                    <p><span className="font-semibold text-gray-700">Date of Birth:</span> {submittedData.dob}</p>
                    <p><span className="font-semibold text-gray-700">Date of Joining:</span> {submittedData.doj}</p>
                    <p><span className="font-semibold text-gray-700">Department:</span> {submittedData.department}</p>
                    <p><span className="font-semibold text-gray-700">Unit:</span> {submittedData.unit}</p>
                    <p><span className="font-semibold text-gray-700">Native Place:</span> {submittedData.nativePlace}, {submittedData.state}</p>
                </div>
                <button onClick={onToggle} className="w-full py-4 bg-orange-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20">
                    Return to Login Hub
                </button>
            </div>
        );
    }

    return (
        <>
            <h2 className="text-3xl font-black text-center text-[#002316] uppercase tracking-tight mb-8">New Dossier</h2>
            {message.text && (
                <p className={`${message.type === 'success' ? 'bg-orange-50 text-orange-800' : 'bg-red-100 text-red-700'} p-3 rounded-md mb-4 text-sm`}>{message.text}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {registrationFields.map(({ name, label, type, autoComplete, required }) => (
                        <div key={name}>
                            <label htmlFor={`register-${name}`} className="block text-[10px] font-black text-[#002316]/80 uppercase tracking-[0.2em] mb-1.5">{label}</label>
                            <input
                                type={type} name={name} id={`register-${name}`} value={formData[name as keyof typeof formData] || ''} onChange={handleChange} required={required} autoComplete={autoComplete}
                                className="mt-1 block w-full px-4 py-3 bg-white border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold sm:text-sm"
                            />
                        </div>
                    ))}
                    <div className="md:col-span-2">
                        <label className="block text-[10px] font-black text-[#002316]/80 uppercase tracking-[0.2em] mb-3">Profile Photo (Mandatory)</label>
                        <div className="flex items-center gap-6 p-4 bg-orange-50 border-2 border-dashed border-orange-200 rounded-2xl group hover:border-orange-500 transition-all">
                            <div className="relative w-20 h-20 bg-white rounded-2xl overflow-hidden border border-orange-100 flex-shrink-0 shadow-sm">
                                {photoPreview ? (
                                    <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-orange-200">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    </div>
                                )}
                            </div>
                            <div className="flex-grow">
                                <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" id="photo-upload" required />
                                <label htmlFor="photo-upload" className="inline-block px-6 py-2.5 bg-white border border-orange-200 text-[10px] font-black uppercase text-orange-600 rounded-xl cursor-pointer hover:bg-orange-600 hover:text-white transition-all tracking-widest shadow-sm">
                                    {photo ? 'Change Photo' : 'Select Official Photo'}
                                </label>
                                <p className="text-[10px] text-orange-900/70 font-bold uppercase mt-2 tracking-tighter">JPG/PNG accepted. Max size 5MB.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="register-postingLocation" className="block text-[10px] font-black text-[#002316]/80 uppercase tracking-[0.2em] mb-1.5">Posting Location</label>
                        <select id="register-postingLocation" name="postingLocation" value={formData.postingLocation} onChange={handleChange} required className="mt-1 block w-full pl-4 pr-10 py-3 text-base border border-orange-200 text-[#002316] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold sm:text-sm rounded-xl">
                            <option value="">Select Location</option>
                            <option value="PR">PR</option>
                            <option value="PNCP">PNCP</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="register-shift" className="block text-[10px] font-black text-[#002316]/80 uppercase tracking-[0.2em] mb-1.5">Shift</label>
                        <select id="register-shift" name="shift" value={formData.shift} onChange={handleChange} required className="mt-1 block w-full pl-4 pr-10 py-3 text-base border border-orange-200 text-[#002316] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold sm:text-sm rounded-xl">
                            <option value="">Select Shift</option>
                            <option value="General">General</option>
                            <option value="Shift">Shift</option>
                            <option value="36 Hrs">36 Hrs</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="register-state" className="block text-[10px] font-black text-[#002316]/80 uppercase tracking-[0.2em] mb-1.5">State</label>
                        <select id="register-state" name="state" value={formData.state} onChange={handleChange} required autoComplete="address-level1" className="mt-1 block w-full pl-4 pr-10 py-3 text-base border border-orange-200 text-[#002316] bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold sm:text-sm rounded-xl">
                            <option value="">Select a state</option>
                            {INDIAN_STATES.map(state => <option key={state} value={state}>{state}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="register-password" className="block text-[10px] font-black text-[#002316]/80 uppercase tracking-[0.2em] mb-1.5">Password</label>
                        <div className="relative mt-1">
                            <input type={showPassword ? "text" : "password"} name="password" id="register-password" value={formData.password} onChange={handleChange} required autoComplete="new-password"
                                className="block w-full px-4 py-3 bg-white border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold sm:text-sm" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-[10px] font-black uppercase text-orange-400 hover:text-orange-600 tracking-widest">
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="register-confirmPassword" className="block text-[10px] font-black text-[#002316]/80 uppercase tracking-[0.2em] mb-1.5">Confirm Password</label>
                        <div className="relative mt-1">
                            <input type={showPassword ? "text" : "password"} name="confirmPassword" id="register-confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required autoComplete="new-password"
                                className="block w-full px-4 py-3 bg-white border border-orange-200 rounded-xl text-[#002316] focus:outline-none focus:ring-2 focus:ring-orange-500 font-bold sm:text-sm" />
                        </div>
                    </div>
                </div>
                <button type="submit" disabled={regStatus !== 'IDLE'} className="w-full py-4 bg-orange-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 active:scale-[0.98] disabled:bg-orange-300 relative overflow-hidden group">
                    <span className="absolute top-0 right-0 bg-white/20 px-2 py-0.5 rounded-bl-lg text-[7px] font-black tracking-tighter group-hover:bg-white/30 transition-colors">V2.9 FINAL</span>
                    {regStatus === 'OPTIMIZING' ? 'OPTIMIZING PHOTO...' : 
                     regStatus === 'UPLOADING' ? 'UPLOADING TO SECURE CLOUD...' : 
                     regStatus === 'REGISTERING' ? 'FINALIZING ACCOUNT...' : 
                     'Submit Intelligence Dossier'}
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-800">
                Already registered? <button onClick={onToggle} className="font-medium text-orange-600 hover:text-orange-500">Login here</button>
            </p>
        </>
    );
};

export default Auth;