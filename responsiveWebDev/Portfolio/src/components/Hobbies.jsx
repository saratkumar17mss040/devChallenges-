function Hobbies() {
	return (
		<div className="w-full mt-5 p-5 shadow-lg rounded-lg bg-white sm:col-start-1 sm:col-end-3">
			<p className="mb-5 font-bold text-xl">Hobbies</p>
			<div className="flex flex-col items-center gap-7 sm:justify-between sm:flex-row">
				<div className="hobbby self-center mb-8">
					<img
						className="w-full rounded-md"
						src="https://picsum.photos/id/237/200/300"
						alt="dog"
					/>
					<p className="font-bold mt-3">Gaming</p>
					<p className="text-gray-400">Quisque feugiat malesuada molestie.</p>
				</div>
				<div className="hobbby self-center mb-8">
					<img
						className="w-full rounded-md"
						src="https://picsum.photos/id/237/200/300"
						alt="dog"
					/>
					<p className="font-bold mt-3">Gaming</p>
					<p className="text-gray-400">Quisque feugiat malesuada molestie.</p>
				</div>
				<div className="hobbby self-center mb-8">
					<img
						className="w-full rounded-md"
						src="https://picsum.photos/id/237/200/300"
						alt="dog"
					/>
					<p className="font-bold mt-3">Gaming</p>
					<p className="text-gray-400">Quisque feugiat malesuada molestie.</p>
				</div>
			</div>
		</div>
	);
}

export { Hobbies };
