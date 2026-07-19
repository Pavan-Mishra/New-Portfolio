import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'pavanmishra745@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Pavan, I am reaching out to you because...',

    oldPortfolio: 'https://pavan-mishra.github.io/My-Portfolio/',
    upworkProfile: 'https://www.linkedin.com/in/pavan-mishra11/',
};

export const SOCIAL_LINKS = [
    {
        name: 'github',
        url: 'https://github.com/Pavan-Mishra',
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/pavan-mishra11/',
    },
    {
        name: 'Old Version',
        url: 'https://pavan-mishra.github.io/My-Portfolio/',
    },
    {
        name: 'resume',
        url: '/pavanmishraresume.pdf',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Wordpress',
            icon: '/logo/wordpress.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Java',
            icon: '/logo/java.svg',
        },
        {
            name: 'Spring Boot',
            icon: '/logo/springboot.svg',
        },
        {
            name: 'Redis',
            icon: '/logo/redis.svg',
        },
        {
            name: 'Microservices',
            icon: '/logo/microservice.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],

    AI_Tools: [
        {
            name: 'Claude',
            icon: '/logo/claude.png',
        },
        {
            name: 'Cursor',
            icon: '/logo/cursorai.png',
        },
        {
            name: 'ChatGPT',
            icon: '/logo/chatgpt.png',
        },
        {
            name: 'Perplexity',
            icon: '/logo/perplexity.png',
        },
        {
            name: 'Hugging Face',
            icon: '/logo/huggingface.png',
        },
    ],

    design: [
        {
            name: 'Figma',
            icon: '/logo/figma.png',
        },
        {
            name: 'Blender',
            icon: '/logo/blender.png',
        },
        {
            name: 'Canva',
            icon: '/logo/canva.png',
        },
        {
            name: 'Framer',
            icon: '/logo/framer.png',
        },
    ],

    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Notion',
            icon: '/logo/notion.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Food Fiesta',
        slug: 'food-fiesta',
        liveUrl:
            'https://github.com/Pavan-Mishra/Spring-Boot-based-web-application',
        year: 2025,
        description: `
    A full-stack dining management application built to streamline online food ordering and restaurant operations. The platform enables users to browse menus, place orders, and track their order history, while administrators can efficiently manage products, inventory, and customer data.<br/><br/>

    Key Features:
    <ul>
      <li> Food Ordering System: Browse products and place orders seamlessly</li>
      <li> Authentication & Authorization: Secure role-based login for admins and customers</li>
      <li> Product Management: Add, edit, and manage food inventory</li>
      <li> Order History: Track and manage customer orders</li>
      <li> Responsive Interface: Optimized for desktop and mobile devices</li>
      <li> API Documentation: Integrated Swagger/OpenAPI documentation</li>
      <li> Optional Google OAuth2 Login Integration</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Built using Java 21 and Spring Boot 3.4.2 following MVC architecture</li>
      <li>Implemented Spring Security with role-based authentication and authorization</li>
      <li>Integrated Spring Data JPA and Hibernate for efficient database management</li>
      <li>Designed dynamic server-rendered pages using Thymeleaf templates</li>
      <li>Configured H2 for rapid local development and PostgreSQL for production deployment</li>
      <li>Containerized the application using Docker and Docker Compose</li>
    </ul>
  `,
        role: `
    Full-Stack Developer <br/>
    Responsible for the complete development lifecycle:
    <ul>
      <li> Backend: Developed REST APIs and business logic using Spring Boot and Spring Data JPA</li>
      <li> Frontend: Built responsive interfaces using Thymeleaf, CSS, and JavaScript</li>
      <li> Security: Implemented authentication and role-based access control with Spring Security</li>
      <li> Database: Designed and managed relational databases using H2 and PostgreSQL</li>
      <li> Documentation: Integrated Swagger/OpenAPI for API testing and documentation</li>
      <li> Deployment: Configured Docker and Docker Compose for containerized deployment</li>
      <li> Performance: Optimized application structure and database interactions for scalability</li>
    </ul>
  `,
        techStack: [
            'Java',
            'Spring Boot',
            'Spring Security',
            'Spring Data JPA',
            'Hibernate',
            'Thymeleaf',
            'PostgreSQL',
            'H2 Database',
            'Swagger',
            'Docker',
            'Maven',
            'JavaScript',
            'CSS',
        ],
        thumbnail: '/projects/images/productsfood.png',
        longThumbnail: '/projects/images/productsfood.png',
        images: [
            '/projects/images/productsfood.png',
            '/projects/images/aboutfood.png',
            '/projects/images/loginfood.png',
            '/projects/images/userloginfood.png',
            '/projects/images/adminservicesfood.png',
            '/projects/images/swaggerfood.png',
        ],
    },
    {
        title: 'ResQ',
        slug: 'resq-women-safety-app',
        liveUrl: 'https://github.com/Pavan-Mishra/ResQ',
        year: 2026,
        description: `
    A mobile-first women safety and emergency response application designed to provide real-time assistance during critical situations. The platform enables users to instantly alert trusted contacts, share live locations, and seek nearby help with a single tap.<br/><br/>

    <strong>Currently in active development, with core features and emergency workflows being continuously enhanced.</strong><br/><br/>

    Key Features:
    <ul>
      <li> SOS Panic Button: One-tap activation of emergency mode</li>
      <li> Live GPS Tracking: Continuous location sharing until the user is safe</li>
      <li> Instant Alerts: Notify emergency contacts and nearby helpers</li>
      <li> Evidence Capture: Automatic audio and video recording for proof collection</li>
      <li> Anonymous Reporting: Secure incident reporting without revealing identity</li>
      <li> Future Police Integration: Planned collaboration with authorities for faster response</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Designed a scalable emergency response architecture for real-time communication</li>
      <li>Implemented live location sharing and notification workflows</li>
      <li>Planned AI-powered threat detection and intelligent emergency assistance features</li>
      <li>Focused on privacy, accessibility, and user-centric safety experiences</li>
      <li>Architected the platform to support future government and law enforcement integrations</li>
    </ul>
  `,
        role: `
    Founder & Full-Stack Developer <br/>
    Leading the product vision and end-to-end development:
    <ul>
      <li> Frontend: Building the mobile application using React Native and Kotlin</li>
      <li> Backend: Developing APIs and emergency response workflows using Node.js and Express.js</li>
      <li> Database: Designing scalable data models with PostgreSQL and MongoDB</li>
      <li> Real-Time Communication: Integrating Firebase and Socket.io for instant alerts</li>
      <li> AI Integration: Researching ML and NLP solutions for threat detection and intelligent assistance</li>
      <li> Product Design: Creating user flows and interfaces focused on accessibility and emergency usability</li>
      <li> Product Strategy: Defining features, roadmap, and future integrations with public safety services</li>
    </ul>
  `,
        techStack: [
            'React',
            'Python',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'MongoDB',
            'Firebase',
            'Socket.io',
            'TensorFlow',
            'PyTorch',
            'SpaCy',
            'NLTK',
            'Hugging Face',
        ],
        thumbnail: '/projects/images/resqdashh.png',
        longThumbnail: '/projects/images/resqdashh.png',
        images: [
            '/projects/images/resqfirst.png',
            '/projects/images/resqsecond.png',
            '/projects/images/resqthird.png',
        ],
    },
    {
        title: 'WealthWise AI',
        slug: 'wealthwise-ai',
        liveUrl: 'https://wealth-wise-ai-design-3.vercel.app/',
        year: 2026,
        description: `
    A smart personal finance tracking and advisory platform that helps users monitor expenses, analyze spending habits, and receive personalized financial insights through an AI-powered assistant. The application automatically processes SMS-based transaction data and transforms it into actionable financial recommendations.<br/><br/>

    Key Features:
    <ul>
      <li> Automatic Expense Tracking: Extracts and records transactions from SMS messages</li>
      <li> Real-Time Analytics: Visualizes spending patterns, savings, and financial trends</li>
      <li> AI Financial Advisor: Interactive chatbot for personalized financial guidance</li>
      <li> Expense Categorization: Automatically classifies expenses into categories</li>
      <li> Spending Predictions: Uses machine learning to forecast future expenses</li>
      <li> Saving & Investment Insights: Provides tailored recommendations for better financial planning</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Built a microservice-based architecture using Spring Boot and FastAPI</li>
      <li>Integrated OpenAI API to provide conversational financial assistance</li>
      <li>Developed Python-based ML services for expense analysis and prediction</li>
      <li>Implemented secure data storage and analytics using MongoDB</li>
      <li>Designed seamless communication between Android, Java, and Python services</li>
    </ul>
  `,
        role: `
    Full-Stack & AI Developer <br/>
    Responsible for designing and developing the complete application ecosystem:
    <ul>
      <li> Mobile Development: Built the Android application using Kotlin</li>
      <li> Backend: Developed REST APIs and business logic using Spring Boot</li>
      <li> AI Integration: Integrated OpenAI API for personalized financial recommendations</li>
      <li> Machine Learning: Developed Python and FastAPI services for expense analysis and prediction</li>
      <li> Database: Designed and managed data storage using MongoDB</li>
      <li> Analytics: Implemented expense categorization and financial insights dashboards</li>
      <li> System Integration: Connected Android, Spring Boot, and ML services into a unified platform</li>
    </ul>
  `,
        techStack: [
            'Kotlin',
            'Spring Boot',
            'Java',
            'Python',
            'FastAPI',
            'OpenAI API',
            'MongoDB',
            'REST API',
            'Uvicorn',
        ],
        thumbnail: '/projects/images/financetracker3.png',
        longThumbnail: '/projects/images/financetracker3.png',
        images: ['/projects/images/financetracker4.png'],
    },
    {
        title: 'PitchPass',
        slug: 'cricket-events-registration',
        liveUrl:
            'https://pavan-mishra.github.io/Sports-Events-Registration-Website/',
        year: 2025,
        description: `
    A web-based sports event management platform designed to simplify cricket tournament registrations and participant management. The application enables players to register for events, submit their details, and access tournament information through an intuitive and responsive interface.<br/><br/>

    Key Features:
    <ul>
      <li> Player Registration System: Easy online registration for cricket events and tournaments</li>
      <li> Detailed Registration Forms: Collects player information and participation details</li>
      <li> Event Information: Displays tournament schedules and event details</li>
      <li> Responsive Design: Optimized experience across desktop, tablet, and mobile devices</li>
      <li> Modern UI: User-friendly interface focused on simplicity and accessibility</li>
      <li> Fast Navigation: Lightweight and performant frontend experience</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Designed and developed a responsive multi-page web application</li>
      <li>Implemented form validation and interactive user interfaces using JavaScript</li>
      <li>Focused on accessibility and intuitive user flows for event registration</li>
      <li>Applied responsive design principles for seamless cross-device compatibility</li>
      <li>Structured the application for future backend and database integration</li>
    </ul>
  `,
        role: `
    Frontend Developer, Backend Developer & UI Designer <br/>
    Responsible for the complete design and development of the platform:
    <ul>
      <li> UI/UX: Designed intuitive registration flows and user interfaces</li>
      <li> Frontend: Built responsive pages using HTML, CSS, and JavaScript</li>
      <li> Forms: Developed player registration forms with client-side validation</li>
      <li> Responsive Design: Optimized layouts for multiple screen sizes</li>
      <li> Performance: Ensured a fast and lightweight browsing experience</li>
      <li> Deployment: Published the application using GitHub Pages</li>
    </ul>
  `,
        techStack: [
            'HTML5',
            'Tailwind CSS',
            'JavaScript',
            'Bootstrap',
            'GitHub Pages',
        ],
        thumbnail: '/projects/images/pitchpass1.png',
        longThumbnail: '/projects/long/cricket-events.webp',
        images: [
            '/projects/images/pitchpass3.png',
            '/projects/images/pitchpass4.png',
            '/projects/images/pitchpass2.png',
        ],
    },
    {
        title: 'ParkEase',
        slug: 'park-ease',
        liveUrl: 'https://github.com/Pavan-Mishra/Parking-System',
        year: 2024,
        description: `
    A desktop-based parking management system designed to simplify vehicle entry, parking allocation, and fee management. The application provides an intuitive Java Swing interface for managing parking operations and tracking parked vehicles in real time.<br/><br/>

    Key Features:
    <ul>
      <li> Vehicle Entry & Exit Management: Register and remove vehicles seamlessly</li>
      <li> Smart Parking Allocation: Dynamically assigns available parking slots</li>
      <li> Parking Slip Generation: Generates detailed parking receipts automatically</li>
      <li> Automated Fee Calculation: Calculates parking charges based on vehicle type</li>
      <li> Vehicle Tracking Dashboard: Displays all currently parked vehicles</li>
      <li> Desktop GUI: User-friendly interface built with Java Swing</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Implemented object-oriented design principles using Java</li>
      <li>Developed a responsive desktop interface with Java Swing components</li>
      <li>Designed business logic for parking slot allocation and duplicate entry prevention</li>
      <li>Built a modular architecture separating UI, business logic, and data models</li>
      <li>Implemented real-time updates for parking availability and vehicle records</li>
    </ul>
  `,
        role: `
    Java Developer <br/>
    Responsible for the complete design and development of the application:
    <ul>
      <li> Application Development: Built the entire desktop application using Java and Swing</li>
      <li> GUI Development: Designed intuitive interfaces for parking operations</li>
      <li> Business Logic: Implemented vehicle management, slot allocation, and fee calculation</li>
      <li> Data Management: Developed vehicle tracking and parking record functionalities</li>
      <li> Architecture: Structured the application into reusable and maintainable modules</li>
      <li> Testing: Ensured smooth parking workflows and system reliability</li>
    </ul>
  `,
        techStack: [
            'Java',
            'Java Swing',
            'Object-Oriented Programming',
            'Collections Framework',
            'MVC Architecture',
        ],
        thumbnail: '/projects/images/parkease2.png',
        longThumbnail: '/projects/long/parkease2.png',
        images: ['/projects/images/parkease2.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full-Stack Developer Intern',
        company: 'Frugality Fintech',
        duration: 'Oct 2025 - Jan 2026',
    },
    {
        title: 'Software Engineer Trainee',
        company: 'Eraunix Technologies',
        duration: 'June 2025 - Dec 2025',
    },
    {
        title: 'Website Developer & Graphic Designer',
        company: 'Freelancer',
        duration: 'Sep 2022 - July 2024',
    },
];
