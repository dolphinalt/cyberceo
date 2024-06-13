import React from 'react';
import dynamic from 'next/dynamic';
import style from '../styles/Hero.module.scss';
import Typewriter from 'typewriter-effect';

// Dynamically import Slider with no SSR
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const scrollDown = () => {
	document.getElementById('about')?.scrollIntoView();
};

const Hero = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
	};

	return (
		<>
			<div className={style.mainbox}>
				<div className={style.splitboxes}>
					<div className={style.leftbox}>
						<h1>
							<span>Become
							<br />Cyber
							<br />
								<Typewriter
									options={{
										strings: ['Educated.', 'Secure.', 'Safe.'],
										autoStart: true,
										loop: true,
									}}
								/></span>
						</h1>
						<p>
							Keeping our current and 
							<br />future generations <b>cyber safe</b>.
						</p>
						<button onClick={scrollDown}>Learn More</button>
					</div>
					<div className={style.imagecontainer}>
						<Slider {...settings}>
							<img src="./carouselpics/CyberCEO_20231129_MRES_03.jpg" alt="slide 1" width="1000px"/>
							<img src="./carouselpics/CyberCEO_20240129_Villa_RB_01.jpg" alt="slide 2" width="1000px"/>
							<img src="./carouselpics/CyberCEO_20240129_Villa_RB_04.jpg" alt="slide 3" width="1000px"/>
							<img src="./carouselpics/CyberCEO_20240207_PES_02.jpg" alt="slide 4" width="1000px"/>
							<img src="./carouselpics/CyberCEO_20240207_PES_05.jpg" alt="slide 5" width="1000px"/>
							<img src="./carouselpics/CyberCEO_20240207_PES_02.jpg" alt="slide 6" width="1000px"/>
							<img src="./carouselpics/CyberCEO_20240302_4SR_Library_FromStaff_07.jpg" alt="slide 7" width="1000px"/>
						</Slider>
					</div>
				</div>
			</div>
			<div className={style.mainboxmobile}>
				<div className={style.contentbox}>
					<h1>
						<span>Securing
						<br />the future</span>
					</h1>
					<p>
						Keeping our current and 
						<br />future generations <b>cyber safe</b>.
					</p>
					<button onClick={scrollDown}>Learn More</button>
				</div>
			</div>
		</>
	);
};

export default Hero;
