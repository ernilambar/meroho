import React, { useState } from 'react';

import './ContactForm.scss';

const FORM_ENDPOINT =
	'https://public.herotofu.com/v1/03baeb70-08f7-11ee-8267-d3eb100789b4';

const ContactForm = () => {
	const [status, setStatus] = useState('Submit');
	const handleSubmit = async (e) => {
		e.preventDefault();

		const inputs = e.target.elements;
		const data = {};

		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].name) {
				data[inputs[i].name] = inputs[i].value;
			}
		}

		fetch(FORM_ENDPOINT, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.status === 422) {
					Object.keys(data).forEach((key) => {
						const el = document.createElement('input');
						el.type = 'hidden';
						el.name = key;
						el.value = data[key];

						e.target.appendChild(el);
					});

					e.target.submit();
					throw new Error('Please finish the captcha challenge');
				}

				if (response.status !== 200) {
					throw new Error(response.statusText);
				}

				return response.json();
			})
			.then(() => setStatus('Submitted successfully!'))
			.catch((err) => setStatus(err.toString()));
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="contact-form"
			acceptCharset="UTF-8"
		>
			<div>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Enter full name"
					required
				/>
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter email"
					required
				/>
			</div>
			<div>
				<label htmlFor="message">Message:</label>
				<textarea
					name="message"
					id="message"
					placeholder="Enter your message"
					required
				/>
			</div>
			<button type="submit">{status}</button>
			<div
				style={{
					overflow: 'hidden',
					position: 'absolute',
					whiteSpace: 'nowrap',
					textIndent: '-99999px',
				}}
			>
				<input
					type="text"
					name="_gotcha"
					tabIndex="-1"
					autoComplete="off"
				/>
			</div>
		</form>
	);
};

export default ContactForm;
