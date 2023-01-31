import photo4 from '../assets/person4.png';
import '../components/ReviewSection.css';

export default function ReviewSection() {
	return (
		<section className="review-section-flex-container">
			<div className="review-info">
				“Fast and outstanding resutls. Edie understands their customer’s needs.
				They have a young and talented team.”
			</div>
			<div className="review-user">
				<div>
					<img className="review-user-img" src={photo4} alt="review-user" />
				</div>
				<div className="d-flex">
					<p className="review-name">Carlos Tran</p>
					<p className="review-title">The Decorate Gatsby</p>
				</div>
			</div>
		</section>
	);
}
