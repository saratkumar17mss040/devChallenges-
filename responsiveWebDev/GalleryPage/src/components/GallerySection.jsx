import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';
import photo4 from '../assets/photo_4.png';
import photo5 from '../assets/photo5.png';
import photo6 from '../assets/photo6.png';
import '../components/GallerySection.css';

export default function GallerySection() {
	return (
		<section className="userImgSection">
			<img className="gridItem gridItem1" src={photo1} alt="photo1" />
			<img className="gridItem gridItem2" src={photo2} alt="photo2" />
			<img className="gridItem gridItem3" src={photo3} alt="photo3" />
			<img className="gridItem gridItem4" src={photo4} alt="photo4" />
			<img className="gridItem gridItem5" src={photo5} alt="photo5" />
			<img className="gridItem gridItem6" src={photo6} alt="photo6" />
		</section>
	);
}
