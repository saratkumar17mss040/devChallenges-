import './EmailInput.css';

export default function EmailInput({
	textColor,
	width,
	inputWrapperWidth,
	mLeft,
}) {
	return (
		<div
			className={
				mLeft ? `email-input-container ${mLeft}` : 'email-input-container'
			}
		>
			<p className={textColor ? `hero-contact ${textColor}` : 'hero-contact'}>
				Want us to contact you?
			</p>
			<div
				className={
					inputWrapperWidth
						? `email-input-wrapper ${inputWrapperWidth}`
						: 'email-input-wrapper'
				}
			>
				<input
					type="email"
					name="user-email"
					id="user-email"
					placeholder="Email"
					className={width ? `email-input ${width}` : 'email-input'}
				/>
				<button className="join-btn">join</button>
			</div>
		</div>
	);
}
