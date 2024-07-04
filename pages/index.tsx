import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import styles from '../styles/Home.module.scss'  // Import your stylesheet

const Home = () => {
    return (
        <>
            <Nav active="home" />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
            <div className={styles.heroContainer}>
                <Hero />
            </div>
			<About />
        </>
    )
}

export default Home
