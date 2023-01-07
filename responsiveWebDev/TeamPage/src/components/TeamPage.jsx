import './TeamPage.css';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';
import photo4 from '../assets/photo4.png';
import photo5 from '../assets/photo5.png';
import photo6 from '../assets/photo6.png';

export function TeamPage() {
	return (
		<>
			<div className="teamIntroSection">
				<div className="teamIntroTitle">The creative crew</div>
				<div>
					<p className="teamWho">
						<strong>who we are</strong>
					</p>
					<p className="teamInfo">
						We are team of creatively diverse. driven. innovative individuals
						working in various locations from the world.
					</p>
				</div>
			</div>
			<div className="teamAlbumsSection">
				<div className="album">
					<img className="albumImg" src={photo1} alt="name1" />
					<p className="role">Product Owner</p>
					<p className="name">Bill Mahoney</p>
				</div>
				<div className="album">
					<img className="albumImg" src={photo2} alt="name2" />
					<p className="role">Art Director</p>
					<p className="name">Saba Cabrera</p>
				</div>
				<div className="album">
					<img className="albumImg" src={photo3} alt="name3" />
					<p className="role">Tech Lead</p>
					<p className="name">Shae Le</p>
				</div>
				<div className="album">
					<img className="albumImg" src={photo4} alt="name4" />
					<p className="role">Tech Lead</p>
					<p className="name">Skylah Lu</p>
				</div>
				<div className="album">
					<img className="albumImg" src={photo5} alt="name5" />
					<p className="role">UX Desginer</p>
					<p className="name">Griff Richards</p>
				</div>
				<div className="album">
					<img className="albumImg" src={photo6} alt="name6" />
					<p className="role">Developer</p>
					<p className="name">Stan John</p>
				</div>
			</div>
		</>
	);
}
