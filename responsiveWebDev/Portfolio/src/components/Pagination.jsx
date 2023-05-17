import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Pagination() {
	return (
		<div className="mt-10 mb-4 text-center md:text-right sm:col-span-2">
			<button className="outline px-1 py-1 rounded-sm outline-2">
				<div className="mx-auto text-sm">
					<FaAngleLeft />
				</div>
			</button>
			<button className="outline px-2  rounded-sm outline-2">1</button>
			<button className="outline px-2 rounded-sm outline-2 bg-blue-500 text-white outline-black">
				2
			</button>
			<button className="outline px-2 rounded-sm outline-2">3</button>
			<button className="outline px-2 rounded-sm outline-2 text-center">
				...
			</button>
			<button className="outline px-2 rounded-sm outline-2">10</button>
			<button className="outline px-1 py-1 rounded-sm text-sm outline-2">
				<FaAngleRight />
			</button>
		</div>
	);
}

export { Pagination };
