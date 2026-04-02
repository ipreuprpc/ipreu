import React, { useState, FormEvent } from 'react';
import { useAppContext } from '../App';
import { INDIAN_STATES } from '../constants';
import { User, UserRole } from '../types';


const Auth: React.FC = () => {
    const [view, setView] = useState<'login' | 'register' | 'status' | 'adminLogin'>('login');

    const renderView = () => {
        switch (view) {
            case 'register': return <RegistrationForm onToggle={() => setView('login')} />;
            case 'status': return <StatusCheckForm onToggle={() => setView('login')} />;
            case 'adminLogin': return <AdminLoginForm onToggle={() => setView('login')} />;
            case 'login':
            default:
                return <LoginForm
                    onToggleRegister={() => setView('register')}
                    onToggleStatus={() => setView('status')}
                    onToggleAdminLogin={() => setView('adminLogin')}
                />;
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-10">
            <div className="bg-white p-8 rounded-xl shadow-lg">
                {renderView()}
            </div>
        </div>
    );
};

const LoginForm: React.FC<{ onToggleRegister: () => void; onToggleStatus: () => void; onToggleAdminLogin: () => void; }> = ({ onToggleRegister, onToggleStatus, onToggleAdminLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { memberLogin, getUserStatus } = useAppContext();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const { status } = await getUserStatus(email);

            if (status === UserRole.PENDING) {
                setError('Your application is still pending approval. Please check back later.');
                return;
            }

            const success = await memberLogin(email, password);
            if (!success) {
                setError('Invalid Email or password. Please check your credentials or register.');
            }
        } catch (err: any) {
            setError(err.message || 'An error occurred. Please check your Email or register.');
        }
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Member Login</h2>
            {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        placeholder="e.g., mail@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        placeholder="••••••••"
                    />
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Login
                </button>
            </form>
            <div className="mt-6 space-y-2 text-center text-sm text-gray-600">
                <p>Not a member yet? <button onClick={onToggleRegister} className="font-medium text-orange-600 hover:text-orange-500">Register here</button></p>
                <p>Waiting for approval? <button onClick={onToggleStatus} className="font-medium text-orange-600 hover:text-orange-500">Check your status</button></p>
                <p>Are you an administrator? <button onClick={onToggleAdminLogin} className="font-medium text-orange-600 hover:text-orange-500">Admin Login</button></p>
            </div>
        </>
    );
};

const AdminLoginForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { adminLogin } = useAppContext();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const success = await adminLogin(email, password);
            if (!success) setError('Invalid Admin Email or password.');
        } catch (err: any) {
            setError(err.message || 'Login failed.');
        }
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
            {error && <p className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="admin-login-email" className="block text-sm font-medium text-gray-700">Admin Email</label>
                    <input
                        id="admin-login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        placeholder="e.g., admin@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="admin-login-password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        id="admin-login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        placeholder="••••••••"
                    />
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Login as Admin
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
                <button onClick={onToggle} className="font-medium text-orange-600 hover:text-orange-500">Back to Member Login</button>
            </p>
        </>
    );
};

const RegistrationForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
    const [formData, setFormData] = useState<Omit<User, 'id' | 'role'>>({
        email: '', employeeNumber: '', employeeName: '', dob: '', fatherName: '', motherName: '', nativePlace: '', state: '', caste: '', mobileNumber: '', password: ''
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState({ type: '', text: '' });
    const { register } = useAppContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setMessage({ type: '', text: '' });

        if (formData.password !== confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match.' });
            return;
        }

        try {
            const success = await register(formData);
            if (success) {
                setMessage({ type: 'success', text: 'Registration successful! Your application is pending approval.' });
                setFormData({ email: '', employeeNumber: '', employeeName: '', dob: '', fatherName: '', motherName: '', nativePlace: '', state: '', caste: '', mobileNumber: '', password: '' });
                setConfirmPassword('');
            }
        } catch (err: any) {
            setMessage({ type: 'error', text: err.message || 'An account with this Email already exists.' });
        }
    };

    // Ordered specifically to start with Email
    const registrationFields = [
        { name: 'email', label: 'Email Address', type: 'email', autoComplete: 'email', required: true },
        { name: 'mobileNumber', label: 'Mobile Number', type: 'tel', autoComplete: 'tel', required: true },
        { name: 'employeeNumber', label: 'Employee Number', type: 'text', autoComplete: 'username', required: true },
        { name: 'employeeName', label: 'Employee Name', type: 'text', autoComplete: 'name', required: true },
        { name: 'dob', label: 'Date of Birth', type: 'date', autoComplete: 'bday', required: true },
        { name: 'fatherName', label: "Father's Name", type: 'text', autoComplete: 'off', required: true },
        { name: 'motherName', label: "Mother's Name", type: 'text', autoComplete: 'off', required: true },
        { name: 'nativePlace', label: 'Native Place', type: 'text', autoComplete: 'address-level2', required: true },
        { name: 'caste', label: 'Category/Caste (Optional)', type: 'text', autoComplete: 'off', required: false },
    ];

    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">New Member Registration</h2>
            {message.text && (
                <p className={`${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} p-3 rounded-md mb-4 text-sm`}>{message.text}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {registrationFields.map(({ name, label, type, autoComplete, required }) => (
                        <div key={name}>
                            <label htmlFor={`register-${name}`} className="block text-sm font-medium text-gray-700">{label}</label>
                            <input
                                type={type} name={name} id={`register-${name}`} value={formData[name as keyof typeof formData] || ''} onChange={handleChange} required={required} autoComplete={autoComplete}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            />
                        </div>
                    ))}
                    <div>
                        <label htmlFor="register-state" className="block text-sm font-medium text-gray-700">State</label>
                        <select id="register-state" name="state" value={formData.state} onChange={handleChange} required autoComplete="address-level1" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md">
                            <option value="">Select a state</option>
                            {INDIAN_STATES.map(state => <option key={state} value={state}>{state}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" id="register-password" value={formData.password} onChange={handleChange} required autoComplete="new-password"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="register-confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="register-confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required autoComplete="new-password"
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
                    </div>
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Submit for Approval
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
                Already registered? <button onClick={onToggle} className="font-medium text-orange-600 hover:text-orange-500">Login here</button>
            </p>
        </>
    );
};

const StatusCheckForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
    const [email, setEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
    const { getUserStatus } = useAppContext();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatusMessage({ type: '', text: '' });
        if (!email.trim()) return;

        try {
            const { status, user } = await getUserStatus(email);

            switch (status) {
                case UserRole.MEMBER:
                case UserRole.ADMIN:
                    setStatusMessage({ type: 'success', text: `Congratulations, ${user?.employeeName}! Your application has been approved. You can now log in.` });
                    break;
                case UserRole.PENDING:
                    setStatusMessage({ type: 'info', text: `Hi ${user?.employeeName}, your application is still under review. Please check back later.` });
                    break;
                case 'NOT_FOUND':
                    setStatusMessage({ type: 'error', text: 'We could not find an application with this Email Address.' });
                    break;
            }
        } catch (err: any) {
            setStatusMessage({ type: 'error', text: 'We could not find an application with this Email Address.' });
        }
    };

    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Check Application Status</h2>
            {statusMessage.text && (
                <p className={`${statusMessage.type === 'success' ? 'bg-green-100 text-green-700' :
                        statusMessage.type === 'info' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-700'
                    } p-3 rounded-md mb-4 text-sm`}>{statusMessage.text}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="status-email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        id="status-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        placeholder="Enter your registered email"
                    />
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    Check Status
                </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
                <button onClick={onToggle} className="font-medium text-orange-600 hover:text-orange-500">Back to Login</button>
            </p>
        </>
    );
};


export default Auth;