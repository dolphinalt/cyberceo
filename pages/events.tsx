import Nav from '../components/Nav'
import EventsHero from '../components/EventsHero'
// import EventsAbout from '../components/Events'

const EventsPage = () => {
	return (
		<>
			<Nav active="events" />
			<EventsHero />
			{/* <EventsAbout /> */}
		</>
	)
}

export default EventsPage
