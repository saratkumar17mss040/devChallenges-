import { UilPen, UilArrow, UilServerAlt } from '@iconscout/react-unicons';
import '../components/ServiceSection.css';

export default function ServiceSection() {
	return (
		<section id="demand-service-section">
			<p>We offer high demand services</p>
			<div className="demand-service-flex-container">
				<div className="demand-service-card">
					<div className="icon-wrapper bg-blue text-white">
						<UilPen />
					</div>
					<p className="demand-service-card-title">UI/UX Design</p>
					<p className="demand-service-card-info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
						metus ac nulla consequat aliquet id quis turpis.
					</p>
					<button className="demand-service-card-btn">Get started</button>
				</div>
				<div className="demand-service-card">
					<div className="icon-wrapper bg-green text-white">
						<UilArrow />
					</div>
					<p className="demand-service-card-title">Front End</p>
					<p className="demand-service-card-info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
						metus ac nulla consequat aliquet id quis turpis.
					</p>
					<button className="demand-service-card-btn bg-blue text-white">
						Get started
					</button>
				</div>
				<div className="demand-service-card">
					<div className="icon-wrapper bg-red text-white">
						<UilServerAlt />
					</div>
					<p className="demand-service-card-title">Back End</p>
					<p className="demand-service-card-info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
						metus ac nulla consequat aliquet id quis turpis.
					</p>
					<button className="demand-service-card-btn">Get started</button>
				</div>
			</div>
		</section>
	);
}
