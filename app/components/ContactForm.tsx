'use client';

import { useState } from 'react';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus('loading');
		setErrorMessage('');

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Failed to send message');
			}

			setStatus('success');
			setFormData({ name: '', email: '', message: '' });
		} catch (error) {
			setStatus('error');
			setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
		}
	};

	return (
		<form className="space-y-6" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
					Name
				</label>
				<input
					type="text"
					id="name"
					required
					className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
					value={formData.name}
					onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
				/>
			</div>

			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
					Email
				</label>
				<input
					type="email"
					id="email"
					required
					className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
					value={formData.email}
					onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
				/>
			</div>

			<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
					Message
				</label>
				<textarea
					id="message"
					required
					rows={4}
					className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
					value={formData.message}
					onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
				/>
			</div>

			<button
				type="submit"
				disabled={status === 'loading'}
				className="w-full px-6 py-3 text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{status === 'loading' ? 'Sending...' : 'Send Message'}
			</button>

			{status === 'success' && <p className="text-green-600 text-center">Message sent successfully!</p>}

			{status === 'error' && <p className="text-red-600 text-center">{errorMessage}</p>}
		</form>
	);
}
