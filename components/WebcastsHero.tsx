// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from '../styles/WebcastsHero.module.scss'

const WebcastsHero = () => {
	return (
		<div id="webcastgrid" className={style.mainbox}>
			<div className={style.content}>
				{/* WEBCAST TEMPLATE */}
				<h1>CyberCEO Webcast Episode 1: Coach Paul Johnson</h1>

				<div className={style.webcastDiv}>
					<div className={style.webcastVideo}>
						<iframe width="1024" height="576" src="https://www.youtube.com/embed/7Z0lsyc-rOc" title="CyberCEO Webcast Episode 1: Coach Paul Johnson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					</div>
					<div className={style.webcastInfo}>
						<div className={style.signupDivExpiredFull}>
							<br></br>
							<span>Topcis Covered</span>
							<h4>Guest Speaker: Paul Johnson, Coach of the CyberAegis Team<br></br>Government Cybersecurity: Inspirations and Accomplishments<br></br>Cybersecurity Competition Team: How to build a competitive team, qualities learned from student-led program<br></br>Cybersecurity Opportunities: CyberPatriot, how to get started<br></br>Cybersecurity: What makes cybersecurity so important, future developments<br></br>Coach Paul Johnson Day</h4>
							<br></br>
							<span>Additional Resources</span>
							<h4>resources<br></br>by<br></br>line</h4>
						</div>
					</div>
					<div className={style.webcastBio}>
						<h2><i>8/9/2024</i></h2>
						<p>Coach Paul has accomplished quite a lot throughout his career. He received a Bachelor of Science degree in Electrical Engineering from the University of California, San Diego, and a Master of Science degree in Electrical Engineering from Stanford University. Coach Paul holds a Professional Engineer license in Electrical Engineering issued by the State of California and is a Certified Information Systems Security Professional (CISSP). He has also been granted seven U.S. and European patents. Coach Paul has served as a Court-Appointed Expert Witness for a U.S. Magistrate Judge in an intellectual property action and as an Expert Witness for many other legal actions. He also developed and taught a Digital Hardware class for the University of California, San Diego, for 14 years. Coach Paul held the title of Research and Development Project Manager while employed by Hewlett-Packard Company for 17 years, the title of Senior Staff Engineer/Manager while employed by Qualcomm Inc. for 7 years, and the title of Senior Staff Cyber Systems Engineer for Northrop Grumman for 22 years, working on US Department of Defense cybersecurity. Coach Paul is the founder of the CyberAegis Team, a nonprofit organization dedicated to inspiring younger generations in cybersecurity. As a volunteer, he has coached middle school and high school students in cybersecurity and led teams that have competed and achieved National Champion status 12 times in the last 9 years, competing against over 5,000 teams each year.</p>
						<br></br>
					</div>
				</div>
				{/* WEBCAST TEMPLATE */}
				{/* WEBCAST TEMPLATE */}
				<h1>CyberCEO Webcast Episode _: Webcast name</h1>

				<div className={style.webcastDiv}>
					<div className={style.webcastVideo}> 
					{/* Replace the line below with the copy embed from youtube, width: 1024, height: 576  */}
						<iframe width="1024" height="576" src="https://www.youtube.com/embed/7Z0lsyc-rOc" title="CyberCEO Webcast Episode 1: Coach Paul Johnson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					</div>
					<div className={style.webcastInfo}>
						<div className={style.signupDivExpiredFull}>
							<br></br>
							<span>Topcis Covered</span>
							<h4>Topics<br></br>by<br></br>line</h4>
							<br></br>
							<span>Additional Resources</span>
							<h4>resources<br></br>by<br></br>line</h4>
						</div>
					</div>
					<div className={style.webcastBio}>
						<h2><i>d/m/yyyy</i></h2>
						<p>youtube bio</p>
						<br></br>
					</div>
				</div>
				{/* WEBCAST TEMPLATE */}
			</div>
		</div>
	)
}

export default WebcastsHero
