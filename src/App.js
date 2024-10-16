import navItems from './data/navItems.json';
import portfolioItems from './data/portfolioItems.json';
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
    <iframe className="portfolio-media" src={item.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" rel="0" allowfullscreen></iframe> :
    "";
  let itchioEmbed = item.itchioUrl && item.embedUrl ?
    <iframe className="portfolio-media" title={item.name + " - itch.io"} frameborder="0" src={item.embedUrl} width="552" height="167">
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
      <p>Controller and envelope emoji designed by <a href="https://openmoji.org/">OpenMoji</a> – the open-source emoji and icon project. License: <a href="https://creativecommons.org/licenses/by-sa/4.0/#">CC BY-SA 4.0</a></p>
    </div>
  );
}

function App() {
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
