import style from '../styles/TeamGrid.module.scss'

const TeamGrid = () => {
	return (
		<div id="teamgrid" className={style.mainbox}>
			<div className={style.content}>
				<img
					className={style.teampic}
					src="https://placehold.co/2279x1519"
					alt="team member"
				/>
				<div className={style.grid}>
					<div className={style.card}>
						<div className={style.cardinner}>
							<div className={style.cardfront}>
								<img
									className={style.profilepic}
									src="https://placehold.co/1142x1713"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Name</h1>
								<h2>Position</h2>
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
									src="https://placehold.co/1142x1713"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Name</h1>
								<h2>Position</h2>
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
									src="https://placehold.co/1142x1713"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Name</h1>
								<h2>Position</h2>
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
									src="https://placehold.co/1142x1713"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Name</h1>
								<h2>Position</h2>
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
									src="https://placehold.co/1142x1713"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Name</h1>
								<h2>Position</h2>
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
									src="https://placehold.co/1142x1713"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Name</h1>
								<h2>Position</h2>
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
									src="https://placehold.co/1142x1713"
									alt="team member"
								/>
							</div>
							<div className={style.cardback}>
								<h1>Name</h1>
								<h2>Position</h2>
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
