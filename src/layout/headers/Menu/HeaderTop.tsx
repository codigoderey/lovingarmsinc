import Link from 'next/link'

const HeaderTop = ({ style }: any) => {
   return (
			<div
				className={`navbar-top ${
					style
						? "pt-30 rpt-10 navtop--two"
						: "pt-15 pb-10 bgc-black navtop--one"
				}`}>
				<div className="container">
					<div className={`navtop-inner ${style ? "bgc-gray" : ""}`}>
						<ul className="topbar-left">
							{style ? (
								<>
									<li>
										<b>
											Call now -{" "}
											<Link href="callto:333-444555">(443) 415-1174</Link>
										</b>
									</li>
									<li>1227 Etting St, Baltimore, MD 21217</li>
								</>
							) : (
								<>
									<li>
									  Welcome to Loving Arms!{" "}
									</li>
									<li>
										<i className="flaticon-pin"></i>1227 Etting St, Baltimore,
										MD 21217
									</li>
								</>
							)}
						</ul>
						{/* <ul className="topbar-right">
							<li className="social-area">
								<span>Follow Us - </span>
								<Link href="#">
									<i className="fab fa-facebook-f"></i>
								</Link>
								<Link href="#">
									<i className="fab fa-twitter"></i>
								</Link>
								<Link href="#">
									<i className="fab fa-linkedin-in"></i>
								</Link>
							</li>
						</ul> */}
					</div>
				</div>
			</div>
		);
}

export default HeaderTop
