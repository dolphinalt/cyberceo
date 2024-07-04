import style from '../styles/TeamGrid.module.scss'

const TeamGrid = () => {
	return (
		<div id="teamgrid" className={style.mainbox}>
			<div className={style.content}>
				<img
					className={style.teampic}
					// src="https://placehold.co/2279x1519"
					src=".\teampics\CyberCEO_Leadership_01-A.jpeg"
					alt="team member"
				/>
				<div className={style.grid}>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src=".\teampics\CyberCEO_Ethan_Zhao_CloseUp_01.jpeg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Ethan Zhao</h1>
								<h2>Director of Strategy</h2>
								<p>
									Description
								</p>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src=".\teampics\CyberCEO_Risha_Guha_CloseUp_02.jpeg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Risha Guha</h1>
								<h2>Director of Curriculum</h2>
								<p>
								Risha is intrigued by the field of cybersecurity and the fascinating art of preventing cyberattacks. She co-founded CyberCEO to ensure that all members of her community gain critical cyber safety skills necessary in an increasingly digital world. She strives to inspire others to protect themselves and their communities from online threat actors. In her free time, Risha enjoys reading and playing the piano.
								</p>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src=".\teampics\CyberCEO_Yash_Parikh_CloseUp_01.jpeg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Yash Parikh</h1>
								<h2>Secretary</h2>
								<p>
								Yash was inspired to volunteer because it gave him an opportunity to share his learnings about cybersecurity, and teach vulnerable populations how to protect themselves in the ever-growing cyberspace. CyberCEO has taken him to communities lacking cybersecurity education, where he assists and informs. As an avid soccer fan, Yash brings the same team spirit to CyberCEO as he does to the field.
								</p>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src=".\teampics\CyberCEO_Advik_Garg_CloseUp_02.jpeg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Advik Garg</h1>
								<h2>Director of Marketing</h2>
								<p>
								Advik is very passionate about cybersecurity and emphasizes the importance of educating the public about internet safety. As a founding member of CyberCEO, he wants to help others in his community to protect themselves from internet dangers, and inspire younger students in pursuing cybersecurity. In his spare time, Advik likes to code, participate in CTFs, play video games, and make music.
								</p>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src=".\teampics\CyberCEO_Will_Cheng_CloseUp_01.jpeg"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Will Cheng</h1>
								<h2>Director of Finances</h2>
								<p>
								William Cheng is a passionate high school student for Cybersecurity who loves to help and teach others. He loves educating other people and inspiring others into the field. CyberCEO makes a profound effect on others to learn and teach people to defend themselves from real life attacks and threats. 
								</p>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src=".\teampics\coming_soon.png"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Ansh Kumar</h1>
								<h2>Director of Outreach</h2>
								<p>
									Description
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TeamGrid
