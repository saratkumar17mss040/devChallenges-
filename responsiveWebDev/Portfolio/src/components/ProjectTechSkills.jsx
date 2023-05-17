import './ProjectTechSkills.css';

function ProjectTechSkills() {
	return (
		<>
			<section className="bg-white p-5 mt-5 rounded-md shadow-lg sm:col-start-1 sm:col-end-2">
				<p className="uppercase font-medium text-sm">Front end</p>
				<ul>
					<li className="flex justify-between">
						<p>React</p>
						<div className="w-60 mb-4">
							<div className="relative bg-gray-200 rounded-md overflow-hidden h-2 before:block before:content-'' before:absolute before:top-0 before:left-0 before:h-full before:w-40 before:bg-blue-500 ">
								<progress className="opacity-0"></progress>
							</div>
						</div>
					</li>

					<li className="flex justify-between">
						<p>Javascript</p>
						<div className="w-60 mb-4">
							<div className="relative bg-gray-200 rounded-md overflow-hidden h-2 before:block before:content-'' before:absolute before:top-0 before:left-0 before:h-full before:w-20 before:bg-blue-500 ">
								<progress className="opacity-0"></progress>
							</div>
						</div>
					</li>

					<li className="flex justify-between">
						<p>CSS</p>
						<div className="w-60 mb-4">
							<div className="relative bg-gray-200 rounded-md overflow-hidden h-2 before:block before:content-'' before:absolute before:top-0 before:left-0 before:h-full before:w-80 before:bg-blue-500 ">
								<progress className="opacity-0"></progress>
							</div>
						</div>
					</li>

					<li className="flex justify-between">
						<p>Vue</p>
						<div className="w-60 mb-4">
							<div className="relative bg-gray-200 rounded-md overflow-hidden h-2 before:block before:content-'' before:absolute before:top-0 before:left-0 before:h-full before:w-20 before:bg-blue-500 ">
								<progress className="opacity-0"></progress>
							</div>
						</div>
					</li>

					<li className="flex justify-between">
						<p>Redux</p>
						<div className="w-60 mb-4">
							<div className="relative bg-gray-200 rounded-md overflow-hidden h-2 before:block before:content-'' before:absolute before:top-0 before:left-0 before:h-full before:w-40 before:bg-blue-500 ">
								<progress className="opacity-0"></progress>
							</div>
						</div>
					</li>

					<li className="flex justify-between">
						<p>React Native</p>
						<div className="w-60 mb-4">
							<div className="relative bg-gray-200 rounded-md overflow-hidden h-2 before:block before:content-'' before:absolute before:top-0 before:left-0 before:h-full before:w-40 before:bg-blue-500 ">
								<progress className="opacity-0"></progress>
							</div>
						</div>
					</li>
				</ul>
			</section>
		</>
	);
}

export { ProjectTechSkills };
