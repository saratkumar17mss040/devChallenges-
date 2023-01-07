import profilePhoto from '../assets/profilePhoto.png';
import './GalleryPage.css';

export default function GalleryPage() {
	return (
		<div>
			<section className="userInfoSection">
				<img className="userImg" src={profilePhoto} alt="userName" />
				<p className="userName">Rodney Cotton</p>
				<p className="userLocation">Helsinki, Finland</p>
				<div className="userStats">
					<div className="userStatsItem">
						<p>100</p>
						<p>Post</p>
					</div>
					<div className="userStatsItem">
						<p>2,242</p>
						<p>Follower</p>
					</div>
					<div className="userStatsItem">
						<p>1,432</p>
						<p>Following</p>
					</div>
				</div>
			</section>
		</div>
	);
}
