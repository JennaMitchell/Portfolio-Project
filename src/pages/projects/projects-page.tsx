import RedDragonPizzeriaImage from "../../library/assets/projects/red-dragon-pizzeria.png";
import FormRacerImage from "../../library/assets/projects/form-racer-image.png";
import CooksAssistantImage from "../../library/assets/projects/cooks-assistant.png";
import TimelessTreasureImage from "../../library/assets/projects/timeless-treasure.png";
import FrenchQuizImage from "../../library/assets/projects/french-quiz.png";



const ProjectsPage = (): JSX.Element => {

  const cardsData = [
    {
      projectTitle: "Form Racer",
      projectDescription:
        "Experience the thrill of high-speed, pixel-perfect  form filinf  in an adrenaline-fueled game. Navigate through a hositale sci-fi environment, and defend earth from a neverending swarm of asteroids. Challenge friends in to an intense form filing adventure, and customize your ship for the ultimate race.",
      projectUrl: "/",
      projectsImageUrl: FormRacerImage,
    },
    {
      projectTitle: "Cooks Assistant",
      projectDescription:
        "Unleash your inner chef with our intuitive recipe creation web app. Craft mouthwatering dishes effortlessly by choosing from a vast library of ingredients, step-by-step instructions, and personalized culinary tips. Whether you're a seasoned chef or a kitchen novice, elevate your cooking experience and share your delectable creations with the world through our user-friendly platform",
      projectUrl: "https://cooks-assistant.netlify.app",
      projectsImageUrl: CooksAssistantImage,
    },
    {
      projectTitle: "Timeless Treasure",
      projectDescription:
        "Step into a world of timeless elegance with our antique e-commerce web app. Explore a curated collection of rare and exquisite treasures, each with its own unique story and history. Immerse yourself in the charm of the past as you discover and acquire these one-of-a-kind pieces through our seamless and secure online platform.",
      projectUrl: "https://timeless-tresaure.netlify.app",
      projectsImageUrl: TimelessTreasureImage,
    },
    {
      projectTitle: "French Quiz",
      projectDescription:
        "Elevate your French learning experience with our dynamic web app. Create personalized worksheets tailored to your proficiency level, reinforce your vocabulary with interactive flashcards, and challenge your knowledge through engaging quizzes. Immerse yourself in a comprehensive language journey that adapts to your pace, making mastering French both effective and enjoyable.",
      projectUrl: "/",
      projectsImageUrl: FrenchQuizImage,
    },
    {
      projectTitle: "Red Dragon Pizzeria",
      projectDescription:
        "Embark on a culinary quest at our Dungeons and Dragons themed pizzeria web app. Craft your own legendary pizza with our custom creation feature, embark on a seamless online ordering adventure, and indulge in a feast of fantasy-inspired dishes that bring the magic of Dungeons and Dragons to your table. Join us in the realm of flavor, where every bite is a delicious adventure waiting to unfold.",
      projectUrl: "https://red-dragon-pizzeria.netlify.app",
      projectsImageUrl: RedDragonPizzeriaImage,
    },
  ];
  return (
    <section className="projects-section-container">


      <div className="header-container">
        <div className="title-text-container">
          <p className="fs-48 clr-primary-000 "> My</p>
          <p className="fs-48 clr-neon-red"> Portfolio</p>
        </div>
        <div className="title-text-container">
          <p className="fs-22 clr-primary-000">Some of My</p>
          <p className="fs-22 clr-neon-red">Works</p>
        </div>
      </div>

      {cardsData.map((entry, index) => {
        return (
          <>
            {index % 2 === 0 && (
              <div className="projects-card-flipped">
                <img
                  className="projects-card-image"
                  src={entry.projectsImageUrl}
                  alt={entry.projectTitle}
                />

                <div className="projects-card-info-section-flipped">
                  <p className="projects-card-title">{entry.projectTitle}</p>
                  <p className="projects-card-description">
                    {entry.projectDescription}
                  </p>
                  <button className="projects-card-more-info-button">
                    More Info{" "}
                  </button>
                </div>
              </div>
            )}
            {index % 2 === 1 && (
              <div className="projects-card">
                <img
                  className="projects-card-image"
                  src={entry.projectsImageUrl}
                  alt={entry.projectTitle}
                />

                <div className="projects-card-info-section">
                  <p className="projects-card-title">{entry.projectTitle}</p>
                  <p className="projects-card-description">
                    {entry.projectDescription}
                  </p>
                  <button className="projects-card-more-info-button">
                    More Info
                  </button>
                </div>
              </div>
            )}
          </>
        );
      })}
    </section>
  );
};
export default ProjectsPage;
