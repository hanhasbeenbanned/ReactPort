interface ProjectProps {
    title: string;
    description: string;
    image: string;
    githubLink: string;
    deployedLink: string;
}

const Project = ({ title, description, image, githubLink, deployedLink}: ProjectProps) => {
    return(
        <div className="project">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={image} alt={title} />
            <a href={githubLink}>GitHub</a>
            <a href={deployedLink}>Deployed</a>
        </div>
    )
}

export default Project;
