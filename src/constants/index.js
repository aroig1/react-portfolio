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
            and execute tests. I also had the opportunity to collaborate with cross-functional teams,
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
        title: "Autonomous Drone",
        description: `Autonomous drone that flies given a GPS input from a user from a 
            ground control station. The drone uses Camera and LiDAR sensory data to detect 
            and avoid any obstacles in its path.`,
        paragraphs: [`This project is an autonomous drone that flies to a destination provided 
            by a user from a ground control station. The drone then uses camera and LiDAR sensory 
            information to detect and avoid any obstacles in its path. This project is part of an 
            interdisciplinary senior design course (ENGR 498) and contains 7 total team members: 
            2 software engineers, 2 optical engineers, 1 electrical and computer engineer, and 
            2 mechanical/aerospace engineers.`,
            `The embedded system for this drone consists of 5 main parts: The drone kit, the flight 
            controller (Pixhawk), the on-board processor (Jetson Orin Nano), the Camera, and the LiDAR. 
            The camera will feed video frames to the on-board processor which will be processed using 
            image analysis methods via the OpenCV library to detect and outline objects. Similarly, the 
            LiDAR will return a series of 1D points containing distance and angle which will be organized 
            to make up a cross-air pointed at the center of the drone's hit box. Both of these sets of sensory 
            data will be processed by the on-board processor then a decision will be made on whether the drone 
            needs to stop and reroute or not. This decision will be sent from the on-board processor to the 
            flight controller which controls the motors of the drone. Simultaneously, telemetry data will be 
            sent back to the ground control station for the user to view. This telemetry will include important 
            flight information such as the video feed, lidar data, and drone location.`
        ],
        image: "images/autonomousDrone.JPG",
        video: null,
        technologies: ["Python", "C++", "CUDA", "Computer Vision", "LiDAR", "TKinter", "MavLink", "Jetson Orin Nano"],
        github: "https://github.com/UofA-ECE413/HeartMonitor"
    },
    {
        title: "Heart Tracker System",
        description: `Full stack web application paired with IoT sensors that allow 
            users to monitor their heart rate and oxygen saturation over time.`,
        paragraphs: [`This project is a full stack web application that allows for users 
            to monitor the heart of their health by tracking and viewing data collected by 
            two IoT sensors. The 2 sensors, heart rate sensor and oxygen saturation sensor, 
            transfer their data to the cloud using Argon's API, which are then fetched and 
            stored within our MongoDB database. Users can view their average history for the 
            past 7 days or they can choose a specific day to view a graphed plot of their 
            heart rate and oxygen saturation over time. The web application uses password hashing 
            to maintain security as well as token authentication for managing user access.`,
            `The frontend of this project was implemented using HTML, CSS, and Javascript. 
            Ajax was used to assist in the API calls from the frontend. The backend was implemented 
            using Express.js and contained several REST APIs which were called upon by the frontend. 
            The backend used a MongoDB database to store user and sensor data. The web application 
            was hosted on an Amazon EC2 server. The Particle Argon IoT device interfaced with the 
            MAX30102 heart rate and Spo2 sensor using c++ to take sensor reading and upload them to 
            the cloud.`
        ],
        image: "images/heartTrack.JPG",
        video: "videos/heartTrack.mp4",
        technologies: ["HTML", "Javascript", "CSS", "Ajax", "Express.js", "MongoDB", "C++","IoT Sensors", "Amazon EC2", "Argon"],
        github: "https://github.com/UofA-ECE413/HeartMonitor"
    },
    {
        title: "Pharmacy Management System",
        description: `Full stack web application for managing a Pharmacy. It allows users 
            to manage inventory, sell products, and generate automatic reports.`,
        paragraphs: [`This project is a full stack web application that allows for different 
            pharmacy staff to manage their system. It was created as a part of my software 
            management class (SFWE 403) with 4 teammates. The application was programmed using 
            the SvelteKit framework for frontend and backend, with Tailwind used for the majority 
            of styling. In addition, it used the Cloudflare D1 database, which is a based on SQLite, 
            and was deployed using Cloudflare Pages.`,
            `The website supports 4 types of users: manager, pharmacist, technician, and cashier. 
            The manager has access to core pages such as inventory management, patient information, 
            prescription information, and all account information for adding and managing each staff 
            member's account. Similarly, the pharmacist has access to manage inventory and prescriptions, 
            with the additional ability to fill prescriptions. Lastly, the technician and cashier have 
            similar access as they can both conduct the checkout process for costumers as well as view 
            reporting and logging information regarding the pharmacy.`
        ],
        image: "images/pharmacy.JPG",
        video: "videos/pharmacy.mp4",
        technologies: ["SvelteKit", "Typescript", "HTML", "CSS", "Tailwind", "SQL", "Cloudflare", "GitLab"],
        github: "https://gitlab.com/jath03/dev-legacy-pharmacy"
    },
    {
        title: "NBA Game Predictor",
        description: `This project leverages the Scikit-learn Python library to train 
            models and predict games results using various kinds of machine learning models. 
            These models were trained using historic NBA game data scraped from the
            nba stats website using Selenium.`,
        paragraphs: [`For this project I wanted to use machine learning algorithms to 
            predict the winner of NBA games. In order to do this I divided the task 
            into 3 steps: Web scrape NBA game stats data, Pre-process the data with pandas, 
            and Use Scikit-learn library to train models`,
            `I web scraped box score data for each game using the Selenium library. Using 
            the Selenium WebDriver I was able to automate the driver to go to the website 
            URL for each team and parse through the team's box score stats for each game 
            they played. I did this for each of the 30 NBA teams for 5 seasons starting 
            at 2019-20 and ending at 2023-24.`,
            `Next I had to modify this data to be relevant for predicting. I did this by 
            first changing the data from the stats for that particular game to instead be 
            that teams season average for each stat prior to playing that game. Once that 
            was complete, I created an algorithm to match the teams stats to their 
            opponents stats at the time of the game and place them on one line of a csv, 
            splitting them up as home or away team stats. This was due to the fact that 
            the scraped data only had the box scores for one team for each game (based on 
            the team URL I was using), instead of the stats for both teams.`,
            `Lastly, I used Logistic Regression, SVM, and KNN models from the Scikit-learn 
            library to train and predict games based on the data. After pre-processing I 
            had a total >11,000 games of data and I split my training data to be ~10,000 
            games with testing at ~1,000 games. My goal was to predict with >75% accuracy, 
            but to my disappointment the Logistic Regression only had an accuracy of ~64%. 
            However, I was much happier with KNN which had an accuracy of ~96% and RBF SVM 
            which had an accuracy of ~93%.`
        ],
        image: null,
        video: null,
        technologies: ["Python", "Scikit-Learn", "Machine Learning", "Selenium", "Pandas", "SVM", "Logistic Regression", "KNN"],
        github: "https://github.com/aroig1/NBA-Predictor"
    },
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
        video: "/videos/UASAMS_Demo.mp4",
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
        video: "/videos/tanksVideo.mp4",
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
        video: null,
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
        video: "/videos/flappybird.mp4",
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
        video: "/videos/AidanGPT.mp4",
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
        video: null,
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
        video: "/videos/Tic-Tac-Toe Vid.mp4",
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
        video: null,
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
        video: "/videos/solar tracker (edited).mp4",
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
        video: "/videos/Alien Invasion video.mp4",
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
        video: null,
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