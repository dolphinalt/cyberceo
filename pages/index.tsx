import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import styles from '../styles/Home.module.scss'  // Import your stylesheet
import Footer from '../components/Footer'

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
			{/* <Footer /> */}
        </>
    )
}

export default Home
