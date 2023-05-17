import '../components/DesignSection.css';
import designImg1 from '../assets/smarthome.jpg';
import designImg2 from '../assets/onboard.png';
import designImg3 from '../assets/booking.png';
import designImg4 from '../assets/juice-product.png';
import { UilArrowRight } from '@iconscout/react-unicons';

export default function DesignSection() {
	return (
		<section id="design-section">
			<p className="design-title">Good design means good business</p>
			<div className="design-flex-container">
				<div className="first-design">
					<img src={designImg1} alt="design-img-1" />
					<div>
						<p className="design-name">Full stack application</p>
						<p className="design-ex">Smart home dashboard</p>
					</div>
				</div>
				<div className="second-design">
					<img src={designImg2} alt="design-img-2" />
					<div>
						<p className="design-name">UX/UI design</p>
						<p className="design-ex">Onboard application</p>
					</div>
				</div>
			</div>
			<div className="design-flex-container">
				<div className="third-design">
					<img src={designImg3} alt="design-img-3" />
					<div>
						<p className="design-name">Mobile application</p>
						<p className="design-ex">Booking system</p>
					</div>
				</div>
				<div className="fourth-design">
					<img src={designImg4} alt="design-img-4" />
					<div>
						<p className="design-name">Front End application</p>
						<p className="design-ex">Juice product homepage</p>
						<p className="see-more">
							<a id="see-more-link" href="#see-more">
								see more
							</a>
							<UilArrowRight className="arrow-right-icon" />
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
