function Experience() {
	return (
		<div className="mt-5 p-5 shadow-lg rounded-lg bg-white sm:row-span-4">
			<p className="font-bold text-xl">Experiences</p>
			<div>
				<div className="flex items-center justify-between">
					<img src="https://picsum.photos/90/90" alt="" />
					<div className="m-8">
						<p className="text-sm text-slate-400 mb-3">Feb 2017 - Current</p>
						<p className="font-bold mb-3">Front-end developer</p>
						<p>
							Donec aliquam est dui, vel vestibulum diam sollicitudin id.
							Quisque feugiat malesuada molestie.
						</p>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<img src="https://picsum.photos/90/90" alt="" />
					<div className="m-8">
						<p className="text-sm text-slate-400 mb-3">Aug 2016 - Feb 2018</p>
						<p className="font-bold mb-3">Full-stack developer</p>
						<p>
							Donec aliquam est dui, vel vestibulum diam sollicitudin id.
							Quisque feugiat malesuada molestie.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Experience };
