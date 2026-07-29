import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { validateInvitation, registerInvitation } from '../../services/invitationServices';

const RegisterInvitation = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');

    // Form State
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // UI State
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    // 1. Fetch invitation details on load
    useEffect(() => {
        const fetchInvitation = async () => {
            if (!token) {
                setError('Invalid or missing invitation token.');
                setIsLoading(false);
                return;
            }

            try {
                // Replace with your actual API endpoint
                const data = await validateInvitation(token);

                setEmail(data.email);
                setRole(data.role);

            } catch (err) {
                console.log(err);
                console.log(err.response);
                console.log(err.message);
                setError(err.data?.message || err.message);
            }
            finally {
                setIsLoading(false);
            }
        };

        fetchInvitation();
    }, [token]);

    // 2. Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        setIsSubmitting(true);

        try {
            // Send token and password to create the user in the database
            const data = await registerInvitation({
                token,
                password,
                confirmPassword,
            });

            toast.success(data.message || "Registration successful!");

            navigate("/login?registered=true");
        } catch (err) {

            setError('Something went wrong. Please try again.');

        } finally {

            setIsSubmitting(false);

        }
    };

    // 3. Render Loading or Error states for the Token verification
    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-50">
                <div className="text-gray-500 font-medium animate-pulse">Verifying invitation...</div>
            </div>
        );
    }

    if (error && !email) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-50">
                <div className="p-8 bg-white rounded-xl shadow-sm text-center max-w-md w-full border border-red-100">
                    <h2 className="text-2xl font-bold text-red-600 mb-2">Invalid Link</h2>
                    <p className="text-gray-600">{error}</p>
                </div>
            </div>
        );
    }

    // 4. Render the Registration Form
    return (
        <div className="flex h-screen items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Complete Registration</h1>
                    <p className="text-sm text-gray-500">Set your password to accept the invitation</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email (Read-Only) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            disabled
                            className="w-full px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed focus:outline-none"
                        />
                    </div>

                    {/* Role (Read-Only) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Role</label>
                        <input
                            type="text"
                            value={role}
                            disabled
                            className="w-full px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed focus:outline-none capitalize"
                        />
                    </div>

                    {/* Set Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Set Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Setting up account...' : 'Create Account'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterInvitation;