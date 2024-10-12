import icon_email from './media/icons/letter-openmoji.svg';
import logo_github from './media/icons/github-mark.svg';
import logo_linkedin from './media/icons/linkedin.svg';
import screenshot_blastium from './media/screenshots/blastium-screenshot.png';
import screenshot_teashop from './media/screenshots/order_complete_web.png';
import './index.css';

function Header() {
  return (
    <header className="header border-box">
      <h1>Danielle Purdes</h1>
      <p>Software Engineer at Microsoft Cloud+AI since January 2022.</p>
      <p>From 2017 to 2020, I developed and shipped 8 casino slot titles as a Game Programmer at <a href='https://www.everi.com/games/'>Everi</a>.</p>
      <p>I also develop indie games in my spare time, including 2D and 3D art.</p>
    </header>
  );
}

function NavBar( {items} ) {
  const navItemList = items.map((item) => 
    <NavItem item={item} />
  );

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navItemList}
      </ul>
    </nav>
  )
}

function NavItem( {item} ) {
  return (
    <li className='border-box'>
      <a href={item.url} title={item.title}>
        <img src={item.image} alt={item.title} />
        {item.name}
      </a>
    </li>
  );
}

function Portfolio( {items}) {
  const portfolioItemList = items.map((item) =>
    <PortfolioItem item={item}/>
  );

  return (
    <div className="portfolio">
      {portfolioItemList}
    </div>
  )
}

function PortfolioItem( {item} ) {
  let landingLink = item.landingUrl ? 
    <p><a href={item.landingUrl}>Visit {item.name} Site</a></p> : 
    "";
  let yearText = item.year ? 
    " (" + item.year + ")" : 
    "";
  let imageElement = item.image ?
    <img className="portfolio-media" src={item.image} alt={"Gameplay screenshot of " + item.name}/> :
    "";
  let repoLink = item.repoUrl ? 
    <a href={item.repoUrl}>View {item.name} Repo on Github</a> :
    "";
  let videoEmbed = item.videoUrl ? 
    <iframe className="portfolio-media" width="560" height="315" src={item.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" rel="0" allowfullscreen></iframe> :
    "";
  let itchioEmbed = item.itchioUrl && item.embedUrl ?
    <iframe className="portfolio-text" title={item.name + " - itch.io"} frameborder="0" src={item.embedUrl} width="552" height="167">
      <a href={item.itchioUrl}>{item.name}</a>
    </iframe> : 
    "";

  return (
    <div className="portfolio-element border-box">
      {imageElement}
      {videoEmbed}
      <div className="portfolio-text">
        <h2>{item.name}{yearText}</h2>
        <PortfolioTags tags={item.tags} />
        <p>{item.description}</p>
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
  return (
    <div className="footer border-box">
      <p>Site made with <a href="https://react.dev/">React</a>. View the <a href="https://github.com/danipurdes/danipurdes.github.io">repo</a> on Github!</p>
      <p>Envelope emoji designed by <a href="https://openmoji.org/">OpenMoji</a> – the open-source emoji and icon project. License: <a href="https://creativecommons.org/licenses/by-sa/4.0/#">CC BY-SA 4.0</a></p>
    </div>
  );
}

function App() {
  let navItems = [
    {
      "name": "Email",
      "image": icon_email,
      "title": "Contact Dani Purdes",
      "url": "mailto:daniellepurdes@gmail.com"
    },
    {
      "name": "Github",
      "image": logo_github,
      "title": "Github Profile for Dani Purdes",
      "url": "https://github.com/danipurdes"
    },
    {
      "name": "LinkedIn",
      "image": logo_linkedin,
      "title": "LinkedIn Profile for Dani Purdes",
      "url": "https://linkedin.com/in/daniellepurdes"
    }
  ];

  let portfolioItems = [
    {
      "name": "Tea Room Simulator",
      "year": "In Development",
      "image": screenshot_teashop,
      "description": "From harvesting tea leaves to brewing the perfect cup of tea, run an independent tea house your way in Tea Time. Currently in Alpha Development.",
      "landingUrl": "https://danipurdes.github.io/playteatime/",
      "tags":  ["Godot", "Blender"]
    },
    {
      "name": "Blastium",
      "year": "2017",
      "image": screenshot_blastium,
      "repoUrl": "https://github.com/danipurdes/Blastium",
      "itchioUrl": "https://danipurdes.itch.io/blastium",
      "embedUrl": "https://itch.io/embed/126687?linkback=true",
      "description": "Retro 2D space shooter inspired by Asteroids and Bosconian. Fonts by Chris W Early",
      "tags": ["Lua", "Love2D"]
    },
    {
      "name": "Squid Mantazord",
      "year": "2017",
      "videoUrl": "https://www.youtube-nocookie.com/embed/jA9G3lyVIXA?si=cP6nggU-Zdb6jOLg",
      "description": "A top-down adventure game about a small town octopus fighting his way through a gauntlet of sea-creatures to become the next ruler of the sea, the next Squid Mantazord. Gameplay features a melee twist on twin-stick shooters, with spears you can extend in 8 directions. Made in 48 hours for Global Game Jam 2017. Co-developer: Scott Munro.",
      "tags": ["C#", "Unity"]
    },
    {
      "name": "Sudden Death",
      "year": "2016",
      "videoUrl": "https://www.youtube-nocookie.com/embed/l6NEmvVBqJk?si=2ZZKdr20_e75Yxu2",
      "description": "Assemble your party from a roster of 9 fighters each with unique stats. Then, use Physical and Special moves, the Guard ability, and various Items to win the battle. Turn-based Combat project inspired by games like the Final Fantasy series. Student project for Game Technology (CS354R) at UT Austin. Co-developers: Patrick Liu, Scott Munro.",
      "tags": ["C++", "GLSL", "Ogre3D", "Bullet Physics"]
    },
    {
      "name": "Labyrinth",
      "year": "2015",
      "videoUrl": "https://www.youtube-nocookie.com/embed/sFsm_7buEzA?si=F1gDPMrsV1rkn-tg",
      "description": "Escape from the procedurally-generated maze before the Minotaur gets you! Awarded 'Best Programming' from EGaDs Fall 2015 Game Jam for the procedural maze generation algorithm. Co-developer: Scott Munro.",
      "tags": ["C#", "Unity"]
    }
  ];

  return (
    <div>
      <Header />
      <NavBar items={navItems} />
      <Portfolio items={portfolioItems} />
      <Footer />
    </div>
  );
}

export default App;
