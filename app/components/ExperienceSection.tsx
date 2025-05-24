'use client';

export default function ExperienceSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>

				<div className="space-y-10">
					{/* SIUE */}
					<div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
						<h3 className="text-xl font-semibold text-blue-400">Software Engineer</h3>
						<p className="text-sm text-gray-400">Southern Illinois University Edwardsville · May 2024 – May 2025</p>
						<ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
							<li>Developed full-stack academic tools using React, Spring Boot, and PostgreSQL.</li>
							<li>Built secure dashboards for student data analytics and course tracking.</li>
							<li>Deployed applications on AWS EC2 with S3 for static asset delivery.</li>
							<li>Automated CI/CD pipelines using GitHub Actions and Dockerized services.</li>
							<li>Improved backend performance by 30% through optimized queries and caching.</li>
							<li>Collaborated with research teams to translate ML models into usable services.</li>
						</ul>
					</div>

					{/* Sastra */}
					<div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
						<h3 className="text-xl font-semibold text-purple-400">Software Engineer</h3>
						<p className="text-sm text-gray-400">Sastra Deemed University · June 2021 – June 2023</p>
						<ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
							<li>Contributed to university ERP systems using Java, Spring, and Angular.</li>
							<li>Implemented RESTful APIs for student management, leave requests, and grading.</li>
							<li>Deployed services on AWS Lightsail and managed backup via S3.</li>
							<li>Maintained Jenkins pipelines for automated testing and deployment.</li>
							<li>Reduced page load times by 40% through frontend optimization techniques.</li>
							<li>Led a 3-member team for semester-long digital records migration initiative.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
