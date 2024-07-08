// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from '../styles/EventsHero.module.scss'

const EventsHero = () => {
	return (
		<div id="eventgrid" className={style.mainbox}>
			<div className={style.content}>
				{/* LEFT STYLE EVENT */}
				<div className={style.eventDiv}>
					<div className={style.eventImgDiv}>
						<div className={style.eventImgCurrent}>
							<img
								className={style.eventpicCurrent}
								src="https://placehold.co/500x500"
								alt="Event"
							/>
						</div>
						<div className={style.signupDiv}>
							<br></br>
							<span>Sign up!</span>
							<h4><i>Days left: #</i></h4>
						</div>
					</div>
					<div className={style.eventBio}>
						<br></br>
						<h1>CyberCEO Summer Workshop</h1>
						<h2><i>7/8 - 7/10</i></h2>
						<p>CyberCEO Summer Workshop</p>
						<br></br>
					</div>
				</div>
				{/* LEFT STYLE EVENT */}

				<h1>Past Events</h1>

				{/* RIGHT STYLE EVENT */}
				<div className={style.eventDiv}>
					<div className={style.eventBio}>
						<br></br>
						<h1>Event Name</h1>
						<h2><i>Dates</i></h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
						<br></br>
					</div>
					<div className={style.eventImgDiv}>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="https://placehold.co/500x500"
								alt="Event"
							/>
							<img
								className={style.eventpic}
								src="https://placehold.co/500x500"
								alt="Event"
							/>
						</div>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="https://placehold.co/500x500"
								alt="Event"
							/>
							<img
								className={style.eventpic}
								src="https://placehold.co/500x500"
								alt="Event"
							/>
						</div>
						<div className={style.signupDivExpiredHalf}>
							<br></br>
							<span>25+</span>
							<h4><i>Staff members taught</i></h4>
						</div>
						<div className={style.signupDivExpiredHalf}>
							<br></br>
							<span>400+</span>
							<h4><i>Seniors reached</i></h4>
						</div>
					</div>
				</div>
				{/* RIGHT STYLE EVENT */}

				{/* LEFT STYLE EVENT */}
				<div className={style.eventDiv}>
					<div className={style.eventImgDiv}>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="https://placehold.co/500x500"
								alt="Event"
							/>
							<img
								className={style.eventpic}
								src="https://placehold.co/500x500"
								alt="Event"
							/>
						</div>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="https://placehold.co/500x500"
								alt="Event"
							/>
							<img
								className={style.eventpic}
								src="https://placehold.co/500x500"
								alt="Event"
							/>
						</div>
						<div className={style.signupDivExpiredFull}>
							<br></br>
							<span>650+</span>
							<h4><i>Elementary students taught</i></h4>
						</div>
					</div>
					<div className={style.eventBio}>
						<br></br>
						<h1>Event Name</h1>
						<h2><i>Dates</i></h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
						<br></br>
					</div>
				</div>
				{/* LEFT STYLE EVENT */}

			</div>
		</div>
	)
}

export default EventsHero
