import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ContactForm.scss';

const FORM_ENDPOINT =
	'https://public.herotofu.com/v1/03baeb70-08f7-11ee-8267-d3eb100789b4';

const ContactForm = () => {
	const [status, setStatus] = useState('Submit');

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},

		validationSchema: Yup.object({
			name: Yup.string()
				.max(20, 'Name must be 20 characters or less.')
				.required('Name is required'),
			email: Yup.string()
				.email('Invalid email address')
				.required('Email is required'),
			message: Yup.string().required('Message is required'),
		}),

		onSubmit: (values) => {
			postContactForm(values);
		},
	});

	const postContactForm = (data) => {
		// console.log(data);
		return;

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
					// challenge.
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
			onSubmit={formik.handleSubmit}
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
					onChange={formik.handleChange}
					value={formik.values.name}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.name && formik.errors.name && (
					<div className="contact-form-input-error">
						{formik.errors.name}
					</div>
				)}
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter email"
					onChange={formik.handleChange}
					value={formik.values.email}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.email && formik.errors.email && (
					<div className="contact-form-input-error">
						{formik.errors.email}
					</div>
				)}
			</div>
			<div>
				<label htmlFor="message">Message:</label>
				<textarea
					name="message"
					id="message"
					placeholder="Enter your message"
					onChange={formik.handleChange}
					value={formik.values.message}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.message && formik.errors.message && (
					<div className="contact-form-input-error">
						{formik.errors.message}
					</div>
				)}
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
