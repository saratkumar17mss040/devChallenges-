import Page404Styles from './Page404.module.css';
import scareCrowImgURL from '../assets/Scarecrow.png';

export function Page404() {
	return (
		<div>
			<p className={Page404Styles.txtBold}>404 NOT FOUND</p>
			<div className={Page404Styles.heroSection}>
				<div className={`${Page404Styles.flexItem} ${Page404Styles.flexItem1}`}>
					<img
						className={Page404Styles.heroImg}
						src={scareCrowImgURL}
						alt="ScareCrow"
					/>
				</div>
				<div
					className={`${Page404Styles.flexItem} ${Page404Styles.flexItemAlignSelfStart}`}
				>
					<h2 className={`${Page404Styles.heroTitle}`}>
						I have bad news for you
					</h2>
					<p className={`${Page404Styles.heroTxt}`}>
						The page you are looking for might be removed or is temporarily
						unavailable
					</p>
					<button className={`${Page404Styles.btn}`} type="button">
						back to home page
					</button>
				</div>
			</div>
		</div>
	);
}
