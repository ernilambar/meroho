import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactForm.scss';

const FORM_ENDPOINT =
	'https://public.herotofu.com/v1/03baeb70-08f7-11ee-8267-d3eb100789b4';

const ContactForm = () => {
	return (
		<Formik
			initialValues={{ name: '', email: '', message: '' }}
			validationSchema={() => {
				return Yup.object({
					name: Yup.string()
						.max(20, 'Name must be 20 characters or less.')
						.required('Name is required'),
					email: Yup.string()
						.email('Invalid email address')
						.required('Email is required'),
					message: Yup.string().required('Message is required'),
				});
			}}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				fetch(FORM_ENDPOINT, {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(values),
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
					.then(() => {
						// console.log('Submitted successfully');
						resetForm({ values: '' });
						setSubmitting(false);
					})
					.catch(() => {});
			}}
		>
			{({ isSubmitting }) => (
				<Form className="contact-form">
					<div>
						<label htmlFor="name">Name:</label>
						<Field type="text" name="name" placeholder="Name" />
						<ErrorMessage name="name">
							{(msg) => (
								<div className="contact-form-input-error">
									{msg}
								</div>
							)}
						</ErrorMessage>
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<Field type="email" name="email" placeholder="Email" />
						<ErrorMessage name="email">
							{(msg) => (
								<div className="contact-form-input-error">
									{msg}
								</div>
							)}
						</ErrorMessage>
					</div>
					<div>
						<label htmlFor="message">Message:</label>
						<Field
							as="textarea"
							name="message"
							placeholder="Message"
						/>
						<ErrorMessage name="message">
							{(msg) => (
								<div className="contact-form-input-error">
									{msg}
								</div>
							)}
						</ErrorMessage>
					</div>
					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
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
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
