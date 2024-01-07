import React from "react";
import crypto from "../assests/cryptoSharingDapp.webp";
import shop from "../assests/shopEase.png";
import notes from "../assests/desktopNotesApp.png";
import meal from "../assests/mealDB.webp";
import log from "../assests/logAndQuery.webp";
import dice from "../assests/diceGame.webp";
import page from "../assests/foodLandingPage.webp";

function ProjectPageComponent() {
  return (
    <div className="projectsPageComponent">
      <div className="title">
        <div></div>
        PROJECTS
        <div></div>
      </div>
      <div className="projects">
        <div className="project">
          <div className="image_name">
            <img src={crypto} alt="project_image" />
            <p>Crypto Sharing DApp</p>
          </div>
          <div className="description">
            <p>
              Crypto Sharing DApp is an innovative platform designed for users
              to securely exchange cryptocurrencies directly in the Web 3.0
              environment. With a focus on user privacy and data integrity, this
              DAppures inherent in blockchain technology, ensuring a
              decentralized and trustless system where transactions occur
              directly between two users. The absence of a third party enhances
              the security of the exchange, guaranteeing that all interactions
              remain confidential and tamper-proof. With a focus on user privacy
              and data integrity, this DApp offers a seamless and secure
              experience, fostering a peer-to-peer cryptocurrency exchange
              ecosystem within the Web 3.0 framework.
            </p>
            <p>Skills: Blockchain, Solidity, Tailwind CSS</p>
            <a href="https://github.com/psbharadwaj2002/crypto_sharing_Dapp.git">
              👉 Source Code
            </a>
            <a href="https://kryptsd.netlify.app/">👉 Deployed URL</a>
          </div>
        </div>

        <div className="gap"></div>
        <div className="project">
          <div className="image_name">
            <img src={shop} alt="project_image" />
            <p>ShopEase</p>
          </div>
          <div className="description">
            <p>
              ShopEase is a full-stack e-commerce platform that I built to
              showcase my skills. For the look and feel, I used React and React
              Bootstrap, making it user-friendly. On the backend, I used
              Express.js and MongoDB, which helped in managing data smoothly. To
              keep things secure, I added JWT authentication to make sure only
              the right people access it. And for extra security, I used bcrypt
              to keep sensitive information safe. This project not only shows
              what I can do but also how I make sure things are safe and easy
              for users.
            </p>
            <p>
              Skills: React.js, Context API, React Bootstrap, SCSS, MongoDB,
              Express.js
            </p>
            <a href="https://github.com/psbharadwaj2002/mern_project.git">
              👉 Source Code
            </a>
            <a href="https://steady-pothos-ab81dd.netlify.app/">
              👉 Deployed URL
            </a>
          </div>
        </div>
        <div className="gap"></div>
        <div className="project">
          <div className="image_name">
            <img src={log} alt="project_image" />
            <p>Log Ingestor and Query Interface</p>
          </div>
          <div className="description">
            <p>
              Developed a comprehensive Log Ingestor and Query Interface system,
              with the Log Ingestor serving as the backend for adding data
              through the "/api/ingestLogs" endpoint. This functionality enables
              users to input single or multiple logs via tools like Postman,
              with the data seamlessly stored in a MongoDB database.
              Additionally, the system incorporates a "/api/getLogs" endpoint
              for retrieving data. On the frontend, the Query Interface, built
              using ReactJS, facilitates intuitive data querying and
              visualization. This interface includes a robust search
              functionality, empowering users to retrieve specific information
              from the stored logs. The seamless integration of the Log Ingestor
              and Query Interface provides a cohesive and efficient solution for
              both log ingestion and data retrieval processes.
            </p>
            <p>Skills: React.js, MongoDB, Express.js</p>
            <a href="https://github.com/psbharadwaj2002/dyte.git">
              👉 Source Code
            </a>
          </div>
        </div>
        <div className="gap"></div>
        <div className="project">
          <div className="image_name">
            <img src={notes} alt="project_image" />
            <p>Desktop Notes App (Context API)</p>
          </div>
          <div className="description">
            <p>
              I crafted a straightforward desktop notes application employing
              the simplicity of the Context API. This application is designed to
              provide a user-friendly and clutter-free interface for seamless
              note management. Experience the convenience of dynamic updates,
              making your note-taking process effortlessly smooth.
            </p>
            <p>Skills: React, Context API, SCSS</p>
            <a href="https://github.com/psbharadwaj2002/notes-context.git">
              👉 Source Code
            </a>
            <a href="https://main--notes-app-context-api.netlify.app/">
              👉 Deployed URL
            </a>
          </div>
        </div>
        <div className="gap"></div>
        <div className="project">
          <div className="image_name">
            <img src={notes} alt="project_image" />
            <p>Desktop Notes App (Redux)</p>
          </div>
          <div className="description">
            <p>
              I engineered an organized desktop notes application, leveraging
              the efficiency of Redux for robust state management. Immerse
              yourself in a responsive and user-friendly environment, ensuring a
              seamless note-taking experience. With Redux, experience enhanced
              efficiency, making your desktop notes effortlessly organized and
              accessible. Explore a new realm of productivity with this
              purposeful application.
            </p>
            <p>Skills: React, Redux, SCSS</p>
            <a href="https://github.com/psbharadwaj2002/notes-redux.git">
              👉 Source Code
            </a>
            <a href="https://notes-application-redux.netlify.app/">
              👉 Deployed URL
            </a>
          </div>
        </div>
        <div className="gap"></div>
        <div className="project">
          <div className="image_name">
            <img src={meal} alt="project_image" />
            <p>Meal DB</p>
          </div>
          <div className="description">
            <p>
              MEAL DB is a dynamic React.js web app seamlessly connected to 'The
              MealDB' API, designed to cater to all food enthusiasts. This
              responsive application ensures a delightful experience across
              various devices, allowing users to effortlessly explore a diverse
              array of recipes. Its intuitive interface simplifies the search
              for favorite dishes, while integrated YouTube videos provide
              additional guidance. Whether you're a passionate foodie or a
              casual cook, MEAL DB transforms the journey of finding and
              creating the perfect meal into a delightful and accessible
              experience, making every culinary adventure enjoyable on any
              device.
            </p>
            <p>Skills: React, Fetch API, SCSS</p>
            <a href="https://github.com/psbharadwaj2002/meal_db.git">
              👉 Source Code
            </a>
            <a href="https://meal-database-project.netlify.app/">
              👉 Deployed URL
            </a>
          </div>
        </div>
        <div className="gap"></div>
        <div className="project">
          <div className="image_name">
            <img src={dice} alt="project_image" />
            <p>Dice Game</p>
          </div>
          <div className="description">
            <p>
              Designed and developed an exciting and interactive dice game that
              combines a visually appealing HTML and CSS interface with dynamic
              functionality powered by the Document Object Model (DOM). In this
              game, players compete to reach a score of 30 points first. The
              game's elegant design, user-friendly interface, and engaging
              gameplay make it a perfect choice for a quick and entertaining
              pastime. It's a testament to my skills in front-end development
              and JavaScript, showcasing my ability to create interactive web
              experiences that bring fun and enjoyment to users.
            </p>
            <p>Skills: HTML, CSS, SCSS, Document Object Model(DOM)</p>
            <a href="https://github.com/psbharadwaj2002/Dice_Game_DOM_JS.git">
              👉 Source Code
            </a>
            <a href="https://psbharadwaj2002.github.io/Dice_Game_DOM_JS/">
              👉 Deployed URL
            </a>
          </div>
        </div>
        <div className="gap"></div>
        <div className="project">
          <div className="image_name">
            <img src={page} alt="project_image" />
            <p>Restaurant Landing Page</p>
          </div>
          <div className="description">
            <p>
              The 'Food Landing Page' is a meticulously crafted and highly
              responsive web page that showcases a delightful array of culinary
              experiences. Developed using a combination of HTML, CSS and SaSS,
              this page sets a new standard for visually engaging and
              user-friendly interfaces.
            </p>
            <p>Skills: HTML, CSS, SCSS</p>
            <a href="https://github.com/psbharadwaj2002/food_landing_page.git">
              👉 Source Code
            </a>
            <a href="https://restaurant-landing-page-front-end.netlify.app/">
              👉 Deployed URL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPageComponent;
