import blastium_screenshot from './blastium-screenshot.png';
import github_logo from './icons/github.svg';
import linkedin_logo from './icons/linkedin.svg';
import './index.css';

function Header() {
  return (
    <header class="header">
      <h1>Danielle Purdes</h1>
      <p>Software Engineer @ Microsoft since January 2022. Former Game Programmer @ Everi Inc. I also dabble in pixel art, low-poly 3d art, and have made my own music for various projects.</p>
    </header>
  );
}

function NavBar( {items} ) {
  const navItemList = items.map((item) => 
    <NavItem name={item.name} image={item.image} title={item.title} url={item.url} />
  );

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navItemList}
      </ul>
    </nav>
  )
}

function NavItem( {name, image, title, url} ) {
  return (
    <li>
      <a href={url} title={title}>
        <img src={image} alt={title} />
        {name}
      </a>
    </li>
  );
}

function PortfolioItem( {name, year, image, repoUrl, videoUrl, landingUrl, itchioUrl, embedUrl, description, tags} ) {
  let landingLink = landingUrl ? <a href={landingUrl}>Visit {name} Site</a> : "";
  let yearText = year ? " (" + year + ")" : "";
  let imageElement = image ? <img className="portfolio-media" src={image} alt="Gameplay screenshot of " name/> : "";
  let repoLink = repoUrl ? <a href={repoUrl}>View {name} Repo on Github</a> : "";
  let videoEmbed = videoUrl ? 
    <iframe className="portfolio-media" width="560" height="315" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" rel="0" allowfullscreen></iframe> : "";
  let itchioEmbed = itchioUrl && embedUrl ? <iframe className="portfolio-text" title={name + " - itch.io"} frameborder="0" src={embedUrl} width="552" height="167"><a href={itchioUrl}>{name}</a></iframe> : "";

  return (
    <div className="portfolio-element">
      {imageElement}
      {videoEmbed}
      <div className="portfolio-text">
        <h3>{name}{yearText}</h3>
        <PortfolioTags tags={tags} />
        <p>{description}</p>
        {repoLink}
        {landingLink}
      </div>
      {itchioEmbed}
    </div>
  );
}

function PortfolioTags( {tags} ) {
  const tagList = tags.map((tag) => 
    <li className="tag">{tag}</li>
  );

  return (
    <ul className="tag-list">
      {tagList}
    </ul>
  );
}

function Footer() {
  let currentYear = "2024";

  return (
    <div className="footer">
      <p>© {currentYear} Danielle Purdes. All rights reserved.</p>
      <p>Site made with React. <a href="https://github.com/danipurdes/danipurdes.github.io">View repo on Github</a></p>
    </div>
  );
}

function App() {
  let navItems = [
    {
      "name": "Github",
      "image": github_logo,
      "title": "Github Profile for Dani Purdes",
      "url": "https://github.com/danipurdes"
    },
    {
      "name": "LinkedIn",
      "image": linkedin_logo,
      "title": "LinkedIn Profile for Dani Purdes",
      "url": "https://linkedin.com/in/daniellepurdes"
    }
  ];

  return (
    <div>
      <Header />
      <NavBar items={navItems}/>
      <div class="portfolio">
        <PortfolioItem 
          name="Tea Room Simulator"
          year="In Development"
          description="From harvesting tea leaves to brewing the perfect cup of tea, run an independent tea house your way in Tea Time. Currently in Alpha Development."
          landingUrl="https://danipurdes.github.io/playteatime/"
          tags= {["Godot", "Blender"]}
        />
        <PortfolioItem
          name="Blastium"
          year="2017"
          image={blastium_screenshot}
          repoUrl="https://github.com/danipurdes/Blastium"
          itchioUrl="https://danipurdes.itch.io/blastium"
          embedUrl="https://itch.io/embed/126687?linkback=true"
          description="Retro 2D space shooter inspired by Asteroids and Bosconian. Fonts by Chris W Early"
          tags={["Lua", "Love2D"]}
        />
        <PortfolioItem 
          name="Squid Mantazord"
          year="2017" 
          videoUrl="https://www.youtube-nocookie.com/embed/jA9G3lyVIXA?si=cP6nggU-Zdb6jOLg"
          description="A top-down adventure game about a small town octopus fighting his way through a gauntlet of sea-creatures to become the next ruler of the sea, the next Squid Mantazord. Gameplay features a melee twist on twin-stick shooters, with spears you can extend in 8 directions. Made in 48 hours for Global Game Jam 2017. Co-developer: Scott Munro." 
          tags= {["C#", "Unity"]}
        />
        <PortfolioItem
          name="Sudden Death"
          year="2016"
          videoUrl="https://www.youtube-nocookie.com/embed/l6NEmvVBqJk?si=2ZZKdr20_e75Yxu2"
          description="Assemble your party from a roster of 9 fighters each with unique stats. Then, use Physical and Special moves, the Guard ability, and various Items to win the battle. Turn-based Combat project inspired by games like the Final Fantasy series. Student project for Game Technology (CS354R) at UT Austin. Co-developers: Patrick Liu, Scott Munro."
          tags={["C++", "GLSL", "Ogre3D", "Bullet Physics"]}
        />
        <PortfolioItem
          name="Labyrinth"
          year="2015"
          videoUrl="https://www.youtube-nocookie.com/embed/sFsm_7buEzA?si=F1gDPMrsV1rkn-tg" 
          description="Escape from the procedurally-generated maze before the Minotaur gets you! Awarded 'Best Programming' from EGaDs Fall 2015 Game Jam for the procedural maze generation algorithm. Co-developer: Scott Munro."
          tags={["C#", "Unity"]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
