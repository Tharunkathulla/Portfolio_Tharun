'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center"
				>
					Full Stack Projects
				</motion.h2>

				<div className="space-y-16">
					{/* AI-Powered Email Replier */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<h3 className="text-2xl font-bold mb-4">AI-Powered Email Replier</h3>
									<p className="text-gray-400">
										An intelligent email reply assistant built using React and Spring Boot. It integrates OpenAI APIs to generate personalized responses and includes a Chrome extension that allows users to choose tones like casual, formal, or friendly when replying to emails.
									</p>
									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend (React + Extension)</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Chrome Extension for Gmail</li>
												<li>• Tone Selector UI</li>
												<li>• Rich Text Formatting</li>
												<li>• Responsive Interface</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend (Spring Boot)</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• OpenAI API Integration</li>
												<li>• REST API for Email Replies</li>
												<li>• Email Context Processing</li>
												<li>• Secure User Sessions</li>
											</ul>
										</div>
									</div>
									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Highlights</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Context-aware and tone-specific replies</li>
											<li>• Seamless Chrome Extension Workflow</li>
											<li>• Real-world productivity enhancement</li>
										</ul>
									</div>
								</div>
								<div className="rounded-xl overflow-hidden">
									<Image
										src="/ai-mail-replier.png"
										alt="AI Mail Replier Screenshot"
										width={600}
										height={400}
										className="rounded-lg object-cover"
									/>
								</div>
							</div>
						</div>
					</motion.div>

					{/* AI Doctor */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<h3 className="text-2xl font-bold mb-4">AI Doctor - Medical Triage System</h3>
									<p className="text-gray-400">
										A full-stack medical assistant that analyzes patient symptoms and suggests possible conditions and specialist recommendations using AI models and Spring Boot.
									</p>
									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend (React)</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Symptom Input Form</li>
												<li>• Real-time Diagnosis Feedback</li>
												<li>• Patient Record View</li>
												<li>• Firebase Auth + Contact Form</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend (Spring Boot)</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• AI Prediction Engine</li>
												<li>• PostgreSQL DB Integration</li>
												<li>• RESTful APIs</li>
												<li>• Secure Patient Data Handling</li>
											</ul>
										</div>
									</div>
									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Features</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• ML-powered symptom-to-diagnosis mapping</li>
											<li>• Specialty-based doctor recommendations</li>
											<li>• Modular API design for future scalability</li>
										</ul>
									</div>
								</div>
								<div className="rounded-xl overflow-hidden">
									<Image
										src="/ai-doctor.png"
										alt="AI Doctor Screenshot"
										width={600}
										height={400}
										className="rounded-lg object-cover"
									/>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Payment Management System */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<h3 className="text-2xl font-bold mb-4">Payment Management System (MERN)</h3>
									<p className="text-gray-400">
										A secure and scalable payment platform using the MERN stack that supports subscription billing, one-time payments, and admin/user dashboards with Stripe integration.
									</p>
									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend (React)</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Role-Based Dashboards</li>
												<li>• Stripe Checkout Integration</li>
												<li>• Subscription Status</li>
												<li>• Responsive Material UI</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend (Node + Express)</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Stripe Webhooks Handling</li>
												<li>• MongoDB for Transactions</li>
												<li>• RESTful Billing APIs</li>
												<li>• JWT-based Authentication</li>
											</ul>
										</div>
									</div>
									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Impact</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Secure tokenized payments with audit logging</li>
											<li>• Real-time billing insights for admins</li>
											<li>• Built-in scalability for SaaS integration</li>
										</ul>
									</div>
								</div>
								<div className="rounded-xl overflow-hidden">
									<Image
										src="/payment-system.png"
										alt="Payment Management System Screenshot"
										width={600}
										height={400}
										className="rounded-lg object-cover"
									/>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
