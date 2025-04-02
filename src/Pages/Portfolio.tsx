import Project from "../components/Project";

const Portfolio = () => {
    const projects = [
        {
            title: "Coffee Paralyzed",
            description: "A collaborative project featuring an interactive website where users can discover personalized drink recommendations and save their favorites for easy access.",
            githubLink: "https://github.com/NickDavis07/Coffee-Paralyzed",
            deployedLink: "https://nickdavis07.github.io/Coffee-Paralyzed/",
            image: "/images/CoffeeParalyzed.PNG"
        },
        {
            title: "NovelNexus",
            description: "An application to explore books with Google Books, check out summaries and covers, and save your favorites to a personalized library.",
            githubLink: "https://github.com/hanhasbeenbanned/NovelNexus",
            deployedLink: "https://novelnexus-d5zy.onrender.com/",
            image: "/images/NovelNexusPic.PNG"
        },
        {
            title: "FocusFuel",
            description: "A Kanban board app to create and manage production tickets, track tasks from To Do to Done, and assign team members for smooth collaboration and workflow.",
            githubLink: "https://github.com/hanhasbeenbanned/FocusFuel",
            deployedLink: "https://focusfuel.onrender.com/",
            image: "/images/FocusFuelPic.PNG"
        },
        {
            title: "Filmbound",
            description: "A collaborative app using two APIs—one for books, one for movies—that lets users check if a book has a movie adaptation (or vice versa) and save favorites for later.",
            githubLink: "https://github.com/SMitchell92/Filmbound",
            deployedLink: "https://filmbound.onrender.com/",
            image: "/images/FilmBoundPic.PNG"
        },
        {
            title: "CICD",
            description: "This 10-question Python quiz reinforces syntax concepts with a clean workflow: feature branches → develop → main, auto-deploying to Render for smooth releases and testing.",
            githubLink: "https://github.com/hanhasbeenbanned/CICD",
            deployedLink: "https://cicd-7qpc.onrender.com/",
            image: "/images/CICD.PNG"
        },
        {
            title: "Html and CSS Portfolio",
            description: "A simple portfolio website I made when I first got into coding. It's built with HTML and CSS animations, showcasing my early work and skills.",    
            githubLink: "https://github.com/hanhasbeenbanned/hanhasbeenbanned",
            deployedLink: "https://hanhasbeenbanned.github.io/hanhasbeenbanned/",
            image: "/images/OldPortPic.PNG"
        }
    ];
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <h2>Check out my work! Click "Deployed" to see it live!</h2>
            <div className="project-cards">
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
        </div>
    );
}

export default Portfolio;
