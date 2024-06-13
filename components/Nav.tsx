import Link from 'next/link';
import style from '../styles/Nav.module.scss';
import { NavProps } from '../lib/types';

const Nav = (props: NavProps) => {
	const { active } = props;
	return (
		<div className={style.navbox}>
			<div className={style.nav}>
				<div className={style.navlogos}>
					<Link href="/">
						<img
							className={style.navlogolarge}
							src="./cyberceo_logo.svg"
							alt="logo"
						/>
					</Link>
				</div>
				<div className={style.navlinks}>
					<ul>
						<li>
							<Link href="/"><b>Home</b></Link>
						</li>
						<li>
							<Link href="/team"><b>Team</b></Link>
						</li>
						<li>
							<Link href="/events"><b>Events</b></Link>
						</li>
						<li>
							<Link href="/donate"><b>Donate</b></Link>
						</li>
					</ul>
				</div>
				<div className={style.navbutton}>
					<a target="_blank" rel="noreferrer" href="">
						<button>Join Us</button>
					</a>
				</div>
			</div>
			<div className={style.navMobile}>
				{/* Mobile navigation content goes here */}
			</div>
		</div>
	);
};

export default Nav;
