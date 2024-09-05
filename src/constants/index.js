export const HERO_CONTENT = `Hello! I'm Aidan Roig and I am a software engineering 
                major at the University of Arizona. I currently live in Tucson, Arizona, 
                but I originally grew up in Flagstaff, Arizona. Throughout this portfolio 
                I hope to express my strong drive to gain experience and make an
                impact working in the tech industry. I am a great leader, but most importantly I have a
                great work ethic which allows me to overcome any obstacles in order to reach my goals.`;

export const ABOUT_TEXT = `some about text`;

export const EDUCATION = [
    {
        school: "University of Arizona",
        location: "Tucson, AZ",
        logo: "src/assets/UofALogo.png",
        degree: "Bachelor of Science: Software Engineering",
        date: "Expected in May 2025",
        accomplishments: ["3.93 GPA", "Dean's List [Fall 2021 - Spring 2024"],
        coursework: [
            "Software DevSecOps", "Software Assurance & Security", 
            "Fundamentals of Data Science for Engineers",
            "Software Architecture & Design", "Data Structures and Algorithms",
            "Computer Organization", "Discrete Mathematics",
            "Computer Programming for Engineering Applications",
            "Digital Logic", "Object Oriented Modeling and Design",
            "Web Development and IoT", "Fundamentals of Computer Networks"
        ]
    }
]

export const EXPERIENCES = [
    {
        date: "May 2024 - August 2024",
        role: "Test Automation Developer Intern",
        company: "Blue Cross Blue Shield",
        location: "Phoenix, AZ",
        description: `During my tech internship, I gained hands-on experience in software
         development, working closely with senior engineers to design and implement new
          features. I also had the opportunity to collaborate with cross-functional teams,
           enhancing my problem-solving and communication skills. This internship solidified 
           my passion for technology and provided me with valuable industry insights.`,
        responsibilities: [`Assisted in the development of automated testing within the 
            Testing Center of Excellence (TCoE) team.`,
            `Created, Executed, and maintained test suites focused on 
            E2E testing using Java, Cucumber, and Selenium.`,
            `Updated and maintained database using SQL Server 
            Management Studio (SSMS) to support regression test suites.`,
            `Ran CI/CD pipelines and managed tasks using Azure DevOps.`
        ],
        technologies: ["Java", "Cucumber", "Selenium", "SQL", "Azure DevOps"]
    },
    {
        date: "May 2023 - July 2023",
        role: "Software Developer Intern",
        company: "Zoot Enterprises",
        location: "Bozeman, MT",
        description: `During my tech internship, I gained hands-on experience in software
         development, working closely with senior engineers to design and implement new
          features. I also had the opportunity to collaborate with cross-functional teams,
           enhancing my problem-solving and communication skills. This internship solidified 
           my passion for technology and provided me with valuable industry insights.`,
        responsibilities: [`Worked within the Core Software Integration (CSI) team who 
            develops the backend and cybersecurity portion of Zoot’s 
            automated financial decision software.`,
            `Ensured security of consumer data through the development 
            of file encryption and decryption Python software.`,
            `Improved script configurability with the use of YAML and 
            JSON files.`,
            `Automated the creation of excel document reports to store 
            and summarize client data using Pandas`,
            `Deployed updated scripts to Linux host servers using Jenkins
            and Ansible.`
        ],
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

export const CONCEPTS = [
    "Object-Oriented Programming (OOP)",
    "CI/CD",
    "DevSecOps",
    "DevOps",
    "Unified Modeling Language (UML)",
    "Agile Methodology",
    "End-to-End Testing"
];