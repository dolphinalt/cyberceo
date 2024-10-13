import style from '../styles/About.module.scss'
import FlipNumbers from "react-flip-numbers";
import AnimatedNumber from "animated-number-react";

const numberStyle = {
  fontWeight: "bold"
};

const About = () => {
	return (
		<div id="about" className={style.mainbox}>
			<div className={style.content}>
				<h1>Impact</h1>
				<br></br>
				<div className={style.content}>
        			<p>
						<b><AnimatedNumber
        				  	value={750}
        				  	duration={5000}
        				  	formatValue={(n) => n.toFixed(0)}
        				  	frameStyle={(percentage) =>
        				  	  percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
        				  	}
        				/>+ </b>
						elementrary school students
					</p>
					<br></br>
					<p>
						<b><AnimatedNumber
        				  	value={950}
        				  	duration={5000}
        				  	formatValue={(n) => n.toFixed(0)}
        				  	frameStyle={(percentage) =>
        				  	  percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
        				  	}
        				/>+ </b>
						senior citizens
					</p>
					<br></br>
        			<p>
						<b><AnimatedNumber
        				  	value={65}
        				  	duration={5000}
        				  	formatValue={(n) => n.toFixed(0)}
        				  	frameStyle={(percentage) =>
        				  	  percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
        				  	}
        				/>+ </b>
						administrative staff
					</p>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<h1>Our Mission is to:</h1>
				<br></br>
				<p1>To provide <b1>quality cybersecurity education</b1> to the groups that <b1>need it the most</b1>, in order to create a more <b1>cyber aware future</b1>.</p1>
			</div>
		</div>
	)
}

export default About
