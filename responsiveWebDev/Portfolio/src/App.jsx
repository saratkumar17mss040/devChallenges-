import { PersonalInfo } from './components/PersonalInfo';
import { ProjectTechSkills } from './components/ProjectTechSkills';
import { Blog } from './components/Blog';
import { Hobbies } from './components/Hobbies';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Pagination } from './components/Pagination';
import { Footer } from './components/Footer';
import './App.css';

function App() {
	return (
		<>
			{/* // start of the grid container */}
			<main className="grid mx-auto mt-12 max-w-5xl sm:grid-cols-2 sm:gap-4">
				<PersonalInfo />
				<ProjectTechSkills />
				<Blog />
				<Experience />
				<Hobbies />
				<Skills />
				<Projects />
				<Pagination />
			 {/* end of the grid container */}
			</main>
			<Footer />
		</>
	);
}

export default App;
