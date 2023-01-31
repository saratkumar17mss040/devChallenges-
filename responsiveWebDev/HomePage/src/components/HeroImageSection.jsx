import './HeroImageSection.css';
import heroImg from '../assets/heroImage.jpg';
import EmailInput from './EmailInput';

export default function HeroImageSection() {
	return (
		<section className="hero-img-section">
			<p className="hero-quote">Unhappy with your website?</p>
			<p className="hero-tag-line">We create beautiful and fast web services</p>
			<img className="hero-img" src={heroImg} alt="hero-img" />
			<p className="hero-tag-line">Story, emotion and purpose</p>
			<p className="hero-info">
				We help transform your ideas into real world applications that will
				outperform your toughest competition and help you achieve your strategic
				goals in short period of time.
			</p>
			<EmailInput inputWrapperWidth={'w-min'} />
		</section>
	);
}
