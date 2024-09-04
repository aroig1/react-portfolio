export const HERO_CONTENT = `Hello! I'm Aidan Roig and I am a software engineering 
                major at the University of Arizona. I currently live in Tucson, Arizona, 
                but I originally grew up in Flagstaff, Arizona. Throughout this portfolio 
                I hope to express my strong drive to gain experience and make an
                impact working in the tech industry. I am a great leader, but most importantly I have a
                great work ethic which allows me to overcome any obstacles in order to reach my goals.`;

export const ABOUT_TEXT = `some about text`;

export const EXPERIENCES = [
    {
        date: "May 2024 - August 2024",
        role: "Test Automation Developer Intern",
        company: "Blue Cross Blue Shield",
        description: `During my tech internship, I gained hands-on experience in software
         development, working closely with senior engineers to design and implement new
          features. I also had the opportunity to collaborate with cross-functional teams,
           enhancing my problem-solving and communication skills. This internship solidified 
           my passion for technology and provided me with valuable industry insights.`,
        technologies: ["Java", "Cucumber", "Selenium", "SQL", "Azure DevOps"]
    },
    {
        date: "May 2023 - July 2023",
        role: "Software Developer Intern",
        company: "Zoot Enterprises",
        description: `During my tech internship, I gained hands-on experience in software
         development, working closely with senior engineers to design and implement new
          features. I also had the opportunity to collaborate with cross-functional teams,
           enhancing my problem-solving and communication skills. This internship solidified 
           my passion for technology and provided me with valuable industry insights.`,
        technologies: ["Python", "Linux", "Jenkins", "Ansible", "YAML", "JSON", "Pandas"]
    },
];

export const TOP_PROJECTS = [
    {
        title: "Scholarship Management Application",
        description: `Full stack web application that allows students, teachers,
                and admins to create, manage, apply to, and accept scholarships.`,
        image: "src/assets/UASAMS.PNG",
        technologies: ["HTML", "CSS", "Javascript", "Typescript", "SvelteKit", "SQL"]
    },
    {
        title: "Tanks Game",
        description: `2D tanks game where the player destroys CPU enemy tanks with a 
            variety of abilities across multiple levels.`,
        image: "src/assets/tanks.PNG",
        technologies: ["Python", "Pygame", "Pathfinding", "OOP", "JSON"]
    },
    {
        title: "FPGA based Pipelined Datapath with Searching Algorithm",
        description: `Designed, implemented, and validated a five-stage 
            pipelined data path for the MIPS 32-bit ISA on an FPGA. Implemented 
            an image processing algorithm in MIPS that was executed on the FPGA.`,
        image: "src/assets/pipelinedDatapath.PNG",
        technologies: ["MIPS Assembly Language", "Verilog", "FPGA"]
    },
];