import './CheckoutPage.css';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';

export default function CheckoutPage() {
	return (
		<>
			<div className="checkout-wrapper-container">
				<p className="heading m-1 txt-center">Checkout</p>
				<section className="checkout-section">
					<div id="checkout-form-container">
						<form id="checkout-form">
							<p className="txt-bold">Contact information</p>
							<div>
								<label htmlFor="email" id="email">
									E-mail
								</label>
								<div className="input-icons">
									<i className="fa fa-regular fa-envelope icon"></i>
									<input type="email" placeholder="Enter your email..." />
								</div>
								<label htmlFor="phone" id="phone">
									Phone
								</label>
								<div className="input-icons">
									<i className="fa fa-solid fa-phone icon"></i>
									<input type="number" placeholder="Enter your phone..." />
								</div>
							</div>
							<div className="mt-2">
								<p className="txt-bold">Shipping address</p>
								<div>
									<label htmlFor="full-name" id="full-name">
										Full name
									</label>
									<div className="input-icons">
										<i className="fa fa-solid fa-user icon"></i>
										<input
											className="txt-bold"
											type="text"
											name="full-name"
											id="full-name"
											value="Rodney Cotton"
										/>
									</div>
									<label htmlFor="address" id="address">
										Address
									</label>
									<div className="input-icons">
										<i className="fa fa-solid fa-house icon"></i>
										<input
											type="text"
											name="address"
											id="address"
											placeholder="Your address"
										/>
									</div>
									<label htmlFor="city" id="city">
										City
									</label>
									<div className="input-icons">
										<i className="fa fa-solid fa-building icon"></i>
										<input
											type="text"
											name="city"
											id="city"
											placeholder="Your city"
										/>
									</div>
									<div className="d-flex col-2-gap">
										<div>
											<label htmlFor="country">Country</label>
											<div className="input-icons">
												<i className="fa fa-solid fa-earth-americas icon"></i>
												<input
													type="text"
													name="country"
													id="country"
													placeholder="Your country"
												/>
											</div>
										</div>
										<div>
											<label htmlFor="postal-code">Postal code</label>
											<div className="input-icons">
												<div className="input-icons">
													<i className="fa fa-solid fa-envelopes-bulk icon"></i>
													<input
														id="postal-code"
														type="text"
														placeholder="Your postal code"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="d-flex col-1-gap">
										<input
											className="checkbox"
											type="checkbox"
											id="save-all-input-values-checkbox"
										/>
										<p>Save this information for next time</p>
									</div>
								</div>
								<button className="btn btn-continue">Continue</button>
							</div>
						</form>
					</div>
					<div className="cart-wrapper">
						<div className="cart-container">
							<div className="cart-item">
								<img src={photo1} alt="bagImg" />
								<div className="cart-item-info">
									<div className="cart-item-price">
										<p>Vintage Backbag</p>
										<p>
											<span>$54.99</span>
											<span>$94.99</span>
										</p>
									</div>
									<div className="cart-qty">
										<button className="btn-minus">-</button>
										<p>1</p>
										<button className="btn-plus">+</button>
									</div>
								</div>
							</div>
							<div className="cart-item">
								<img src={photo2} alt="shoeImg" />
								<div className="cart-item-info">
									<div className="cart-item-price">
										<p>Vintage Backbag</p>
										<p>
											<span>$54.99</span>
											<span>$94.99</span>
										</p>
									</div>
									<div className="cart-qty">
										<button className="btn-minus">-</button>
										<p>1</p>
										<button className="btn-plus">+</button>
									</div>
								</div>
							</div>
							<hr />
							<div className="shipping-charge txt-bold">
								<p>Shipping</p>
								<p>$19</p>
							</div>
							<hr />
							<div className="total-charge txt-bold">
								<p>Total</p>
								<p>$148.98</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
