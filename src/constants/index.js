export const HERO_CONTENT = `I’m an enthusiastic software engineering student at the University of 
    Arizona, graduating in May 2025. With a strong passion for building efficient and innovative 
    solutions, I have developed skills in full-stack development, software design, and embedded software. 
    I'm actively seeking entry-level full-time opportunities where I can apply my expertise and grow 
    within a dynamic team.`;

export const ABOUT_TEXT = [
    `Hello! I'm Aidan Roig and I am a software engineering 
    major at the University of Arizona. I currently live in Tucson, Arizona, 
    but I originally grew up in Flagstaff, Arizona.`,
    `Throughout this portfolio 
    I hope to express my strong drive to gain experience and make an
    impact working in the tech industry. I am a great leader, but most importantly I have a
    great work ethic which allows me to overcome any obstacles in order to reach my goals.`,
];

export const FUTURE_PLAN = [
    `In 10 years, I see myself managing a software engineering team at a larger company. After completing 
    my bachelor's degree while achieving the Dean's list for all 4 years, I plan on joining a tech 
    company where I will work within the software department. After gaining experience as a developer, 
    I want to work my way up into a management position where I will oversee larger projects. I know 
    I'd be a good fit in management because I am a natural leader in projects as I am proficient at 
    strategizing the best and most efficient way to complete a task. Even in difficult moments, my work 
    ethic helps me to perservere through any problems and ultimately come up successful. I also want to 
    work within management because it will allow me to work with multiple different engineering 
    disciplines and I believe that it would be a fun challenge to properly integrate all the different 
    groups into one working unit.`,
];

export const OUTSIDE_CLASS = [
    `Outside of class I like to try and stay as physically fit as possible. My favorite ways of staying 
    active are through weight lifting and playing basketball. I've been playing basketball since elementary 
    school and have been lifting weights for 4+ years.`,
    `I also enjoy various hands-on activities such as working on cars and playing guitar. I spent several 
    years rebuilding an old 1991 Mazda Miata before eventually selling it. More recently I've been focused 
    on learning how to play different songs on my acoustic guitar.`
]

export const EDUCATION = [
    {
        school: "University of Arizona",
        location: "Tucson, AZ",
        logo: "/images/UofALogo.png",
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
        description: `During my internship Blue Cross Blue Shield, I gained hands-on experience in automated
            End-to-End testing using Java Selenium. I worked closely with senior developers to design, maintain, 
            and execute tets. I also had the opportunity to collaborate with cross-functional teams,
            enhancing my problem-solving and communication skills.`,
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
        description: `During my internship with Zoot Enterprises, I gained experience 
            working in an agile based work environment. I got to work with several new tools
            aimed towards allowing development and deployment of Python code within Linux 
            environments. I was able to complete the full process for a project from development
            to QA testing to deployment.`,
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

export const PROJECTS = [
    {
        title: "Scholarship Management Application",
        description: `Full stack web application that allows students, teachers,
            and admins to create, manage, apply to, and accept scholarships.`,
        paragraphs: [`This project is a full stack web application that can be used to 
            manage and apply to scholarships. It was created as a part of my SFWE 402 
            (DevSecOps) class with 3 teammates. This application consists of four 
            subsystems: Frontend, Backend, Matching Engine, and Reporting Engine. 
            This application has various users including students, donors, and 
            administrators. Students are capable of applying to scholarships, changing 
            their user and application information, as well as viewing the status of 
            applications. Donors can create scholarships with a variety of requirements 
            (ex: majors, minor, GPA), edit scholarships, view applicants for their 
            scholarships, and suggest applicants to be awarded the scholarship. The 
            donors have all the same capabilities as a donor, however they can also 
            search and modify user information, and award the scholarships to applicants.`,
            `This application uses a fullstack framework known as SvelteKit, which 
            primarily consists of HTML, CSS, and Javascript (or Typescript). It included 
            a GitLab pipeline which has build, test, and deployment stages that automatically 
            run when new commits or merges are made to the codebase in order to automatically 
            test and deploy our project. In addition, this project was hosted using 
            Cloudflare Pages, and uses Cloudflare D1's SQL database to store user, 
            scholarship, and application data.`,
            `Within my team, I my role was primarily being a full stack developer as I handled 
            both front and backend. I handled much of the backend components revolving loading 
            and displaying the data dynamically based on user roles and which part of the 
            website was being navigated at that moment. In addition, I was primarily responsible 
            for creating and styling all the GUIs within our website. Lastly, I developed the 
            utility functions which contained SQL queries to retrieve and save data to our 
            database.`
        ],
        image: "/images/UASAMS.PNG",
        video: "",
        technologies: ["HTML", "CSS", "Javascript", "Typescript", "SvelteKit", "SQL"],
        github: "https://github.com/aroig1/Scholarship-Application-Management-System"
    },
    {
        title: "Tanks Game",
        description: `2D tanks game where the player destroys CPU enemy tanks with a 
            variety of abilities across multiple levels.`,
        paragraphs: [`For this project I recreated the classic Wii Play tanks game using 
            pygame's GUI in python. This project really helped me put an object oriented 
            programming style into practice as each tank, projectile, landmine, and even 
            block you see in this game was represented using an object of a class. I created 
            a structure of inheritance from a base 'Tank' class with several subclasses such 
            as 'MovingEnemyTank' and even more specific subclasses such as 'RedTank' to account 
            the the different abilities that each of my 5 enemy tanks had. I also had to 
            create physics in this game focusing especially on the bouncing of projectiles 
            along borders and blocks of each level as well as rotating said projectile's 
            image to the correct direction each time they were shot or bounced. In addition, 
            I was able to incorporate the A* pathfinding method into this program so that CPU 
            tanks could move towards the player through the various level maps. Another feature 
            I implemented was loading levels through a json file, which made adding new 
            levels much quicker and easier. Lastly, I got to have some fun adding background 
            music and sound effects that matched those in the original game.`],
        image: "/images/tanks.PNG",
        video: "",
        technologies: ["Python", "Pygame", "Pathfinding", "OOP", "JSON"],
        github: "https://github.com/aroig1/Tanks"
    },
    {
        title: "FPGA based Pipelined Datapath with Searching Algorithm",
        description: `Designed, implemented, and validated a five-stage 
            pipelined data path for the MIPS 32-bit ISA on an FPGA. Implemented 
            an image processing algorithm in MIPS that was executed on the FPGA.`,
        paragraphs: [`I collaborated with a group to design, implement, and validate a five-stage 
            pipelined datapath for the MIPS 32-bit ISA on the Xilinx Artix-7 FPGA. This datapath 
            design included hazarding and forwarding from both the instruction decode and 
            execution stages (forwarding is not shown on this diagram). In addition, we 
            implemented an image processing algorithm in MIPS ISA and executed on the FPGA 
            based emulation of the pipelined processor on the FPGA.`],
        image: "/images/pipelinedDatapath.PNG",
        video: "",
        technologies: ["MIPS Assembly Language", "Verilog", "FPGA"],
        github: "https://github.com/aroig1/Pipelined_Datapath"
    },
    {
        title: "Flappy Bird",
        description: `Recreation of the mobile game "Flappy Bird" that was coded
            using python with the pygame GUI framework.`,
        paragraphs: [`For this project, I created a Flappy Bird game For this project, 
            I created a Flappy Bird game implemented in Python using the Pygame 
            library. This game allowed me to experiment with creating physics behind 
            my jumping/flying, as well as creating hitboxes and dealing with collisions 
            between objects. In addition, I created a method to randomize the location 
            of the pipes each time they were generated. Lastly, I was able to add a 
            scoreboard that keeps track of both your highest and current score, as 
            well as a simple medal system that appears depending on your score 
            implemented in Python using the Pygame library. This game allowed me to 
            experiment with creating physics behind my jumping/flying, as well as 
            creating hitboxes and dealing with collisions between objects. In 
            addition, I created a method to randomize the location of the pipes 
            each time they were generated. Lastly, I was able to add a scoreboard 
            that keeps track of both your highest and current score, as well as a 
            simple medal system that appears depending on your score.`],
        image: "/images/flappybird.PNG",
        video: "",
        technologies: ["Python", "Pygame", "OOP"],
        github: "https://github.com/aroig1/FlappyBird"
    },
    {
        title: "AidanGPT",
        description: `An AI webpages that leverages OpenAI's API for user interaction 
            with ChatGPT`,
        paragraphs: [`For this project, I created a "copy" of the well known AI 
            called ChatGPT. For the frontend and display I used HTML and CSS to 
            style and create the base for this chat AI. Then, I used Javascript 
            to call to OpenAI's API for ChatGPT and to create new text objects 
            that can be displayed as the user and the AI interact. It was interesting 
            to be able to create my own version of this AI by simply calling to 
            their API, and I should be able to apply this same concept to other 
            Projects in order to further improve them.`],
        image: "/images/AidanGPT.PNG",
        video: "",
        technologies: ["HTML", "CSS", "Javascript", "ChatGPT", "APIs"],
        github: "https://github.com/aroig1/AidanGPT"
    },
    {
        title: "Personal Website",
        description: `Previous version of my online porfolio that used HTML, 
            CSS, and Javascript and was hosted using GitHub Pages.`,
        paragraphs: [`This website in itself is a personal project of mine. I made 
            it using a combination of html and css. I wanted to start working on 
            some more frontend type of programming work and this project was a 
            great start towards that goal. I initially had lots of difficulty 
            organizing the website the way I wanted it, but once I better 
            understood how to use flexbox in css to align, organize, and group 
            different content I was able to successfully create the website how 
            I wanted. Lastly, I was able to add just a small bit of javascript 
            in order to create a clickable dropdown menu for mobile devices.`,
            `This older version of my porfolio is still live at: https://aroig1.github.io/Personal-Website`
        ],
        image: "/images/oldWebsite.PNG",
        video: "",
        technologies: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/aroig1/Personal-Website"
    },
    {
        title: "Tic Tac Toe",
        description: `Tic-Tac-Toe game using Python's Tkinter library that constists 
            of an easy, hard, and AI mode. In the AI mode you play against ChatGPT by 
            using API calls.`,
        paragraphs: [`This Tic Tac Toe game was a personal project of mine. I wanted 
            to create a game with a graphical user interface to play it on. I also 
            wanted to experiment with creating a sort of AI that would make smart 
            decisions based on the previous and currently available moves. Thus, 
            I created this Tic Tac Toe game using python. In addition to my goals 
            with this project, I got to practice writing code in a more object 
            oriented way, and I was able to expose myself to a new python module 
            in tkinter.`,
            `After completing my AidanGPT Project, I added an additional 
            difficulty mode in my Tic Tac Toe game called ChatGPT AI Mode. This 
            mode calls to ChatGPT using an API so that the user is playing against 
            a true AI. This was a fun way to apply my new experience in openai's 
            API even though it turns out ChatGPT is not very good at Tic Tac Toe.`
        ],
        image: "/images/tic-tac-toe.PNG",
        video: "",
        technologies: ["Python", "Tkinter", "ChatGPT", "APIs"],
        github: "https://github.com/aroig1/Tic-Tac-Toe"
    },
    {
        title: "Vehicle Position Simulation",
        description: `This program takes 
            several inputs, primarily direction and velocity, in order to 
            simulate the position and state of a moving car.`,
        paragraphs: [`This program was done as a project for my computer 
            programming in engineering applications II class. This program takes 
            several inputs, primarily direction and velocity, in order to 
            simulate the position and state of a moving car. This program is 
            a great representation of my ability to use object oriented 
            programming and create a program which can vary greatly depending 
            on the input data.`],
        image: null,
        video: "",
        technologies: ["C++", "OOP"],
        github: "https://github.com/aroig1/Vehicle-Position-Simulator"
    },
    {
        title: "Solar Tracker",
        description: `In this project my team construct a device that 
            rotates a solar panel towards the sun in order for it to be of 
            maximum effectiveness using an arduino and a set if photoresistors.`,
        paragraphs: [`In this project I worked within a group of 4 people 
            in order to construct a device that rotates a solar panel 
            towards the sun in order for it to be of maximum effectiveness. 
            I focused on programming the arduino to control the motor 
            which rotated the system. I did this by reading the change in 
            voltage caused by the photoresistors as they were exposed to 
            more or less light. I then programmed the motor to rotate 
            accordingly in the direction which was determined to be of 
            greater sunlight.`],
        image: "/images/solar-tracker.PNG",
        video: "",
        technologies: ["Arduino", "Embedded"],
        github: null
    },
    {
        title: "Alien Invasion Game",
        description: `game that is very similar to galaga with various 
            moving entities as well as a score counting system.`,
        paragraphs: [`This program was done as a project for my introduction 
            to software engineering class. It is a game that is very similar 
            to galaga with various moving entities as well as a score 
            counting system. This program displays my ability to code using 
            an object oriented programming style.`],
        image: "/images/alien-invasion.PNG",
        video: "",
        technologies: ["Python", "Pygame", "OOP"],
        github: "https://github.com/aroig1/Alien-Invasion-Game"
    },
    {
        title: "UNO",
        description: `Single player Uno game played in a the console using 
            text and programmed in C.`,
        paragraphs: [`This program was done as a project for my computer 
            programming in engineering applications class. It is a fully 
            funtional text-based Uno game. It is a great display of my 
            ability to manage dynamicallly allocated data through the 
            use of linked lists and an overall understanding of the c 
            programming language.`],
        image: "/images/Uno.PNG",
        video: "",
        technologies: ["C", "Dynamic Memory Allocation"],
        github: "https://github.com/aroig1/Uno"
    }
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