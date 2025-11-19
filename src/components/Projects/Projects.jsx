import React from 'react';
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';



const Projects = () => {
    return (
        <section className={styles.container} id='projects'>


            <div className={styles.greenPlanet} />
            <div className={styles.greenBlur} />
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {
                    projects.map((project, id) => {
                        return (
                            <ProjectCard project={project} key={id} />
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Projects;
