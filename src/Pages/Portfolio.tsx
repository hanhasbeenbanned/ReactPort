import Project from "../components/Project";

const Portfolio = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Description 1",
            githubLink: "",
            deployedLink: "",
            image: "/images/hannahlogopw.png"
        },
        {
            title: "Project 2",
            description: "Description 2",
            githubLink: "",
            deployedLink: "",
            image: ""
        },
        {
            title: "Project 3",
            description: "Description 3",
            githubLink: "",
            deployedLink: "",
            image: ""
        }
    ];
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    githubLink={project.githubLink}
                    deployedLink={project.deployedLink}
                />
            ))}
        </div>
    );
}

export default Portfolio;
