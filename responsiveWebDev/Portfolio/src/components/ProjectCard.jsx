function ProjectCard({ imgUrl, tags, title, description }) {
	return (
		<div className="w-full mt-5 p-5 shadow-lg rounded-lg bg-white">
			<img className="w-full mt-2 rounded-md" src={imgUrl} alt="img" />
			<p className="mt-2">
				{tags.map((tag) => {
					return (
						<span className="mr-3" key={tag}>
							#{tag}
						</span>
					);
				})}
			</p>
			<p className="mt-2 font-bold text-xl">{title}</p>
			<p className="mt-2">{description}</p>
			<button
				className="rounded-lg
				px-4
				py-1
				text-white
				bg-blue-500
				mt-3
				cursor-pointer"
			>
				Demo
			</button>

			<button className="outline outline-gray-300 text-slate-300 rounded-lg px-4 py-1 ml-3 mt-3 sm:ml-3 cursor-pointer">
				Code
			</button>
		</div>
	);
}

export { ProjectCard };
