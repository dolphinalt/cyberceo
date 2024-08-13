// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from '../styles/EventsHero.module.scss'

const EventsHero = () => {
	return (
		<div id="eventgrid" className={style.mainbox}>
			<div className={style.content}>
				{/* LEFT STYLE EVENT */}
				{/* <div className={style.eventDiv}>
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
				</div> */}
				{/* LEFT STYLE EVENT */}

				<h1>Past Events</h1>

				{/* RIGHT STYLE EVENT */}
				<div className={style.eventDiv}>
					<div className={style.eventBio}>
						<br></br>
						<h1>D39 Campus Workshop</h1>
						<h2><i>10/11/23 - 10/12/23</i></h2>
						<p>Our first ever event! Debuing our CyberCEO Elementary School Workshops by presenting to the Design 39 Campus 4th and 5th graders. What an amazing event this was for our instructors and their students!</p>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
					</div>
					<div className={style.eventImgDiv}>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="./eventPics/d39Outreach/CyberCEO_20231004_D39C_01.jpg"
								alt="Event"
							/>
							<img
								className={style.eventpic}
								src="./eventPics/d39Outreach/CyberCEO_20231011_D39C_01.jpg"
								alt="Event"
							/>
						</div>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="./eventPics/d39Outreach/CyberCEO_20231011_D39C_04.jpg"
								alt="Event"
							/>
							<img
								className={style.eventpic}
								src="./eventPics/d39Outreach/CyberCEO_20231011_D39C_05.jpg"
								alt="Event"
							/>
						</div>
						<div className={style.signupDivExpiredFull}>
							<br></br>
							<span>75+</span>
							<h4><i>Elementary students taught</i></h4>
						</div>
						{/* <div className={style.signupDivExpiredHalf}>
							<br></br>
							<span>75+</span>
							<h4><i>Students Taught</i></h4>
						</div>
						<div className={style.signupDivExpiredHalf}>
							<br></br>
							<span>-</span>
							<h4><i>-</i></h4>
						</div> */}
					</div>
				</div>
				{/* RIGHT STYLE EVENT */}

				{/* LEFT STYLE EVENT */}
				<div className={style.eventDiv}>
					<div className={style.eventImgDiv}>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="./eventPics/MRESOutreach/CyberCEO_20231129_MRES_02.jpg"
								alt="Event"
							/>
							<img
								className={style.eventpic}
								src="./eventPics/MRESOutreach/CyberCEO_20231129_MRES_01.jpg"
								alt="Event"
							/>
						</div>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="./eventPics/MRESOutreach/CyberCEO_20231129_MRES_03.jpg"
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
							<span>50+</span>
							<h4><i>Elementary students taught</i></h4>
						</div>
					</div>
					<div className={style.eventBio}>
						<br></br>
						<h1>MRES Workshop</h1>
						<h2><i>11/29/23</i></h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
						<br></br>
					</div>
				</div>
				{/* LEFT STYLE EVENT */}

				{/* RIGHT STYLE EVENT */}
				<div className={style.eventDiv}>
					<div className={style.eventBio}>
						<br></br>
						<h1>PES Workshop</h1>
						<h2><i>02/07/24</i></h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
						<br></br>
					</div>
					<div className={style.eventImgDiv}>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="./eventPics/PESOutreach/CyberCEO_20240207_PES_01.jpg"
								alt="Event"
							/>
							<img
								className={style.eventpic}
								src="./eventPics/PESOutreach/CyberCEO_20240207_PES_04.jpg"
								alt="Event"
							/>
						</div>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="./eventPics/PESOutreach/CyberCEO_20240207_PES_06.jpg"
								alt="Event"
							/>
							<img
								className={style.eventpic}
								src="./eventPics/PESOutreach/CyberCEO_20240207_PES_07.jpg"
								alt="Event"
							/>
						</div>
						<div className={style.signupDivExpiredFull}>
							<br></br>
							<span>50+</span>
							<h4><i>Elementary students taught</i></h4>
						</div>
						{/* <div className={style.signupDivExpiredHalf}>
							<br></br>
							<span>75+</span>
							<h4><i>Students Taught</i></h4>
						</div>
						<div className={style.signupDivExpiredHalf}>
							<br></br>
							<span>-</span>
							<h4><i>-</i></h4>
						</div> */}
					</div>
				</div>
				{/* RIGHT STYLE EVENT */}

				{/* LEFT STYLE EVENT */}
				<div className={style.eventDiv}>
					<div className={style.eventImgDiv}>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="./eventPics/4SRLibraryOutreach/CyberCEO_20240302_4SR_Library_01.jpg"
								alt="Event"
							/>
							<img
								className={style.eventpic}
								src="./eventPics/4SRLibraryOutreach/CyberCEO_20240302_4SR_Library_FromStaff_04.jpg"
								alt="Event"
							/>
						</div>
						<div className={style.eventImg}>
							<img
								className={style.eventpic}
								src="./eventPics/4SRLibraryOutreach/CyberCEO_20240302_4SR_Library_FromStaff_09.jpg"
								alt="Event"
							/>
							<img
								className={style.eventpic}
								src="./eventPics/4SRLibraryOutreach/CyberCEO_20240302_4SR_Library_FromStaff_07.jpg"
								alt="Event"
							/>
						</div>
						<div className={style.signupDivExpiredFull}>
							<br></br>
							<span>25+</span>
							<h4><i>Elementary students taught</i></h4>
						</div>
					</div>
					<div className={style.eventBio}>
						<br></br>
						<h1>4S Ranch Library Workshop</h1>
						<h2><i>03/02/24</i></h2>
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
