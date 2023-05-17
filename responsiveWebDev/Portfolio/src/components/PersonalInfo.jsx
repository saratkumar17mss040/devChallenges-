import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function PersonalInfo() {
	return (
		<div className="sm:col-start-1 sm:col-end-3">
			{/* start of the flex container */}
			<div className="flex flex-col gap-x-5 shadow-lg p-8 rounded-lg bg-white sm:flex-row">
				<img
					className="rounded-md max-w-100 transform scale-60"
					src="https://picsum.photos/200"
					alt="Billy Pearson"
				/>
				<div>
					{/* start of the flex container */}
					<div className="flex flex-col justify-between gap-x-16 sm:flex-row">
						<div className="mt-5">
							<strong>Billy Pearson</strong>
							<p>Front-end developer</p>
						</div>
						<div className="mt-5">
							<div>
								<FaEnvelope className="inline-block mr-5" />
								<span>billy@example.com</span>
							</div>
							<div>
								<FaPhoneAlt className="inline-block mr-5" />
								<span>(+603) 546 624 342</span>
							</div>
						</div>
					</div>
					<div className="mt-5">
						<p className="mt-3">
							Self-motivated developer, who is willing to learn and create
							outstanding UI applications.
						</p>
						<p className="mt-3">
							Donec aliquam est dui, vel vestibulum diam sollicitudin id.
							Quisque feugiat malesuada molestie.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export { PersonalInfo };
