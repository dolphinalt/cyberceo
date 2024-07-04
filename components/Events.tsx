// import {
// 	VerticalTimeline,
// 	VerticalTimelineElement,
// } from 'react-vertical-timeline-component'
// import 'react-vertical-timeline-component/style.min.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
// 	faCode,
// 	faCodeBranch,
// 	faGamepad,
// 	faLock,
// 	faMicrophone,
// 	faPen,
//   faGlobe
// } from '@fortawesome/free-solid-svg-icons'

// const EventsAbout = () => {
// 	return (
// 		<VerticalTimeline>
//       <VerticalTimelineElement
// 				className="vertical-timeline-element--work"
// 				contentStyle={{ background: '#0dd3a4', color: '#fff' }}
// 				contentArrowStyle={{ borderRight: '7px solid  #0dd3a4' }}
// 				iconStyle={{ background: '#0dd3a4', color: '#fff' }}
// 				icon={<FontAwesomeIcon icon={faGlobe} />}
// 			>
// 				<h3 className="vertical-timeline-element-title">
//         <span>Penn Climate Ventures Prize</span> in Collaboration With Penn
// 							Climate Ventures!
// 				</h3>
// 				<br />
// 				<h4 className="vertical-timeline-element-subtitle">March 2022</h4>
// 				<p>
//           The PCV Prize was an competition where students pitched a climate
// 					tech startup for a chance at $5K in non-dilutive funding, as well as
// 					mentorship and publicity opportunities.
// 				</p>
// 			</VerticalTimelineElement>
//       <VerticalTimelineElement
// 				className="vertical-timeline-element--work"
// 				contentStyle={{ background: '#9035eb', color: '#fff' }}
// 				contentArrowStyle={{ borderRight: '7px solid  #9035eb' }}
// 				date="2011 - present"
// 				iconStyle={{ background: '#9035eb', color: '#fff' }}
// 				icon={<FontAwesomeIcon icon={faGamepad} />}
// 			>
// 				<h3 className="vertical-timeline-element-title">
// 					Level Up: An Introduction to Game Development!{' '}
// 				</h3>
// 				<br />
// 				<h4 className="vertical-timeline-element-subtitle">October 2021</h4>
// 				<p>
// 					Students learned the basics of Game Design and Development in a comprehensive
// 					series of workshops. The lessons walked through game genres, the design
// 					process, and coding a game. At the end, students participated in a game
// 					development competition to win over $200 in prizes.
// 				</p>
// 			</VerticalTimelineElement>
// 			<VerticalTimelineElement
// 				className="vertical-timeline-element--work"
// 				contentStyle={{ background: '#00b9cb', color: '#fff' }}
// 				contentArrowStyle={{ borderRight: '7px solid  #00b9cb' }}
// 				iconStyle={{ background: '#00b9cb', color: '#fff' }}
// 				icon={<FontAwesomeIcon icon={faLock} />}
// 			>
// 				<h3 className="vertical-timeline-element-title">
// 					The Future of Cyberspace: Information Security & Digital Forensics
// 				</h3>
// 				<br />
// 				<h4 className="vertical-timeline-element-subtitle">April 2021</h4>
// 				<p>
// 					Through a series of 4 interactive workshops, participants learned about online
// 					safety and ethics, became familiar with cybersecurity concepts, basic digital
// 					forensic techniques such as steganography techniques and analyzing files, and
// 					gained better understanding of how the Internet works. At the end,
// 					participants were able to hear from experts in the field of cybersecurity,
// 					including the founder of IoT Village and ex-Microsoft CTO of security. The
// 					program concluded with a CTF-style competition where students applied their
// 					newfound knowledge to solve a multitude of cybersecurity challenges and win
// 					cash prizes!
// 				</p>
// 			</VerticalTimelineElement>
// 			<VerticalTimelineElement
// 				className="vertical-timeline-element--work"
// 				contentStyle={{ background: '#0dd3a4', color: '#fff' }}
// 				contentArrowStyle={{ borderRight: '7px solid  #0dd3a4' }}
// 				iconStyle={{ background: '#0dd3a4', color: '#fff' }}
// 				icon={<FontAwesomeIcon icon={faMicrophone} />}
// 			>
// 				<h3 className="vertical-timeline-element-title">
// 					Global Entrepreneurship & Emerging Tech Conference
// 				</h3>
// 				<br />
// 				<h4 className="vertical-timeline-element-subtitle">December 2020</h4>
// 				<p>
// 					Students learned directly from speakers including leaders from Qualcomm,
// 					Northrop Grumman, and successful co-founders and CFOs on the newest and up and
// 					coming industries in a half-day, free-of-cost conference. Speakers presented
// 					on topics of their expertise in 30 minute talks followed by audience Q&As.
// 				</p>
// 			</VerticalTimelineElement>
// 			<VerticalTimelineElement
// 				className="vertical-timeline-element--work"
// 				contentStyle={{ background: '#9035eb', color: '#fff' }}
// 				contentArrowStyle={{ borderRight: '7px solid  #9035eb' }}
// 				date="2011 - present"
// 				iconStyle={{ background: '#9035eb', color: '#fff' }}
// 				icon={<FontAwesomeIcon icon={faCode} />}
// 			>
// 				<h3 className="vertical-timeline-element-title">Web Development 101</h3>
// 				<br />
// 				<h4 className="vertical-timeline-element-subtitle">October 2020</h4>
// 				<p>
// 					Students learned the basics of web development using HTML, CSS, and JavaScript
// 					in a 4 class series hosted by Zipline Theory instructors. Free domains were
// 					provided for students to host the website they created.
// 				</p>
// 			</VerticalTimelineElement>
// 			<VerticalTimelineElement
// 				className="vertical-timeline-element--work"
// 				contentStyle={{ background: '#00b9cb', color: '#fff' }}
// 				contentArrowStyle={{ borderRight: '7px solid  #00b9cb' }}
// 				iconStyle={{ background: '#00b9cb', color: '#fff' }}
// 				icon={<FontAwesomeIcon icon={faPen} />}
// 			>
// 				<h3 className="vertical-timeline-element-title">Introduction to Business</h3>
// 				<br />
// 				<h4 className="vertical-timeline-element-subtitle">August 2020</h4>
// 				<p>
// 					Students took part in a comprehensive business course with topics such as
// 					economics, finance, business plans, and business factors. The curriculum was
// 					designed by our experienced instructors such as DECA state finalists and
// 					social entrepreneurs to create content-filled classes with lecture and
// 					activity portions. Students created their own business plans and worked to
// 					design a business idea of their own interest, and have the opportunity to use
// 					the coding/web development skills they learned in our previous workshops in
// 					implementing their idea.
// 				</p>
// 			</VerticalTimelineElement>
// 			<VerticalTimelineElement
// 				className="vertical-timeline-element--work"
// 				contentStyle={{ background: '#0dd3a4', color: '#fff' }}
// 				contentArrowStyle={{ borderRight: '7px solid  #0dd3a4' }}
// 				iconStyle={{ background: '#0dd3a4', color: '#fff' }}
// 				icon={<FontAwesomeIcon icon={faCodeBranch} />}
// 			>
// 				<h3 className="vertical-timeline-element-title">The Basics of Python</h3>
// 				<br />
// 				<h4 className="vertical-timeline-element-subtitle">July 2020</h4>
// 				<p>
// 					Students attended a 4 class series on the basics of Python. From basic
// 					printing to functions and libraries, students learned how to turn their ideas
// 					to life with Python. It was the first exposure to coding for many of them.
// 				</p>
// 			</VerticalTimelineElement>
// 		</VerticalTimeline>
// 	)
// }

// export default EventsAbout
