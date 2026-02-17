import './styles/App.css';
import {GithubIcon, LinkedinIcon} from 'lucide-react';
import ProjectCard from './components/ProjectCard';

function App() {

    return (
        <>
            <main className="app">
                <div className="profile">
                    <div className="photoContainer">
                        <img src="/photo.jpg" alt="photo" className="photo"/>
                    </div>
                    <h1 className="name">Abdou-Rahmane</h1>
                    <p className="description">
                        Développeur fullstack avec 2 ans d'expérience en backend dans une ad tech spécialisé dans le
                        domaine de la santé,
                        je conçois des applications web utilisant des technologies comme NestJS, Spring et React.
                    </p>
                    <nav className="links">
                        <ul>
                            <li>
                                <a href="https://github.com/AbdouRGitHub">
                                    <GithubIcon/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/abdou-rahmane-sani/">
                                    <LinkedinIcon/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <section className="project">
                    <h2 className="section-title">Projets</h2>
                    <ProjectCard
                        image="m.png"
                        title="Microblogging"
                        description="Une application de microblogging inspiré de X (ex Twitter) et Bluesky, développé sous Spring Boot et React."
                        stack={['spring', 'react', 'javascript', 'typescript', 'java']}
                    />
                    <ProjectCard
                        image="swap_circle.png"
                        title="Swap Circle"
                        description="Application mobile permettant le prêt entre voisins, amis ou autres avec un système de caution permettant la sécurisation des échanges."
                        stack={['nestjs', 'expo']}/>
                </section>
            </main>
            <footer></footer>
        </>
    )
}

export default App
