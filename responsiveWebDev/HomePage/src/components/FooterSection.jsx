import '../components/FooterSection.css';
import '../components/EmailInput';
import EmailInput from '../components/EmailInput';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilTwitterAlt } from '@iconscout/react-unicons';

export default function FooterSection() {
	return (
		<>
			<section id="footer-section">
				<div className="footer-nav">
					<ul>
						<li>Home</li>
						<li>Services</li>
						<li>Our Works</li>
						<li>Clients</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="footer-social-icons-container">
					<p>Edie</p>
					<div className="footer-social-media-icons-div">
						<UilInstagram />
						<UilLinkedin />
						<UilTwitterAlt />
					</div>
				</div>
				<div>
					<EmailInput textColor={'text-white'} width={'w-100'} mLeft={"ml-0"} />
				</div>
			</section>
			<footer>
				created by <strong>sarath</strong> - devChallenges.io
			</footer>
		</>
	);
}
