import { ProjectCard } from './ProjectCard';
import { personalProjectContent } from '../data/PersonalProjectContent';

function Projects() {
	return (
		<div className="sm:col-start-1 sm:col-end-3">
			<div className="w-full mt-5 flex flex-col sm:flex-row gap-5">
				{personalProjectContent.map(({ image, tags, title, description }) => {
					return (
						<ProjectCard
							key={title}
							imgUrl={image}
							tags={tags}
							title={title}
							description={description}
						/>
					);
				})}
			</div>
		</div>
	);
}

export { Projects };
