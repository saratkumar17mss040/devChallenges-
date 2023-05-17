function Blog() {
	return (
		<section className="mt-5 p-5 shadow-lg rounded-lg bg-white sm:col-start-2 sm:row-start-2 sm:row-end-7">
			<p className="text-slate-500">Blog</p>
			<div className="flex justify-between flex-col md:flex-row">
				<p className="text-2xl max-w-[30%] mb-5">How to organize your CSS</p>
				<img
					className="max-w-4/5"
					src="https://picsum.photos/400/320"
					alt="organize-css-img"
				/>
			</div>
			<div className="mt-20">
				<div className="mb-5">
					In this article I tell the story about Proin eu justo sit amet lacus
					bibendum tincidunt.
				</div>
				<div className="mb-5">
					Vivamus non volutpat nisl, a luctus mi. Donec aliquam est dui, vel
					vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
				</div>
				<div className="mb-5">
					In this article I tell the story about Proin eu justo sit amet lacus
					bibendum tincidunt.
				</div>
			</div>
			<a className="mt-7 block underline" href="#">
				dev.to
			</a>
		</section>
	);
}

export { Blog };
