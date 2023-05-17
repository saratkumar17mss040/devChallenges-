import './Skills.css';

function Skills() {
	return (
		<div className="bg-white p-5 mt-5 rounded-md shadow-lg sm:row-span-2 sm:col-start-1 sm:col-end-3">
			<p className="font-bold text-xl">Projects (3) </p>
			<div className="flex mt-5 flex-col sm:flex-row">
				<button
					className="rounded-lg outline outline-gray-300 px-4 py-1 text-slate-300 mt-3 cursor-pointer"
					disabled
				>
					React
				</button>
				<button
					className="rounded-lg outline outline-gray-300 px-4 py-1 text-slate-300 ml-0 mt-3 sm:ml-3 cursor-pointer"
					disabled
				>
					Vue
				</button>
				<button
					className="rounded-lg px-4 py-1 text-white bg-blue-500 ml-0 mt-3 sm:ml-3 cursor-pointer"
					disabled
				>
					Responsive
				</button>
			</div>
		</div>
	);
}

export { Skills };
