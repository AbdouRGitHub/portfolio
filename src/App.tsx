import './App.css';
import {GithubIcon, LinkedinIcon} from 'lucide-react';

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
                        Développeur fullstack avec 2 ans d’expérience en backend dans une ad tech spécialisé dans le
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
                </section>
            </main>
            <footer></footer>
        </>
    )
}

export default App
