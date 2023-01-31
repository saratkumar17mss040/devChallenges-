import Navbar from './components/Navbar';
import HeroImageSection from './components/HeroImageSection';
import './App.css';
import ServiceSection from './components/ServiceSection';
import DesignSection from './components/DesignSection';
import TeamSection from './components/TeamSection';
import ReviewSection from './components/ReviewSection';
import FooterSection from './components/FooterSection';

function App() {
	return (
		<>
			<div className="App">
				<Navbar />
				<HeroImageSection />
				<ServiceSection />
				<DesignSection />
				<TeamSection />
				<ReviewSection />
			</div>
			<FooterSection />
		</>
	);
}

export default App;
