import StackIcon from './StackIcon';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    stack: string[];
}

function ProjectCard({image, title, description, stack}: ProjectCardProps) {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image"/>
            <div className="project-content">
                <h3>{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-stack">
                    {stack.map((tech) => (
                        <StackIcon key={tech} name={tech}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
