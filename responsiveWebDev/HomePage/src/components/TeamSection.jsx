import '../components/TeamSection.css';
import photo1 from '../assets/person1.png';
import photo2 from '../assets/person2.png';
import photo3 from '../assets/person3.png';

export default function TeamSection({}) {
	return (
		<section id="team-section-flex-container">
			<div className="team-data">
				<p className="team-text">Meet the team</p>
				<p className="team-tagline">We are chilled and a laidback team</p>
				<p className="team-info">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
			<div className="team-photo-flex-container">
				<div>
					<img src={photo3} alt="username3" />
				</div>
				<div className="team-photo-second-column">
					<div>
						<img src={photo1} alt="username1" />
					</div>
					<div>
						<img src={photo2} alt="username2" />
					</div>
				</div>
			</div>
		</section>
	);
}
