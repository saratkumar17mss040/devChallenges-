import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import './HeroSection.css';

export function HeroSection() {
	return (
		<main className="heroSection">
			<div className="heroInfo">
				<p className="heroInfoTitle">Modern interior</p>
				<p>
					A full-Service residential & commercial interior design and staging
					company offering professional organizing & eco-services.
				</p>
				<p className="heroMoreTxt">
					Read more <span> ➡ </span>{' '}
				</p>
			</div>
			<div className="heroImgSection">
				<img className="heroImg" src={photo1} alt="heroImg" />
				<div className="heroCard">
					<div className="heroCardProfile">
						<div className='heroCardInner'>
							<img className="heroCardProfileImg" src={photo2} alt="nameImg1" />
							<div className="heroCardProfileInfo">
								<p>Aliza Webber</p>
								<p>Interior Designer</p>
							</div>
						</div>
						<div className="heroCardFooter">
							<p>Designed in 2020 by Aliza Webber</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
