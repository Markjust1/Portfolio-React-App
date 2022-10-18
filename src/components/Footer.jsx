import "./Footer.css";

function Footer() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="menu">
      <div className="label">Follow Me</div>
      <div className="spacer"></div>
      <div className="item-container">
        <div className="item">
          <span onClick={() => openInNewTab('https://www.linkedin.com/in/artnovikov/')}>LinkedIn</span>
        </div>
        <div className="item">
          <span onClick={() => openInNewTab('https://github.com/Markjust1')}>Github</span>
        </div>
        <div className="item">
          <span onClick={() => openInNewTab('https://www.facebook.com/artem.novikov.3348/')}>Facebook</span>
        </div>
      </div>
      <div className="footer-end">
        <div>Artem Novikov</div>
        <div>novikov711@gmail.com</div>
        <div>2022</div>
        </div>
    </div>
  );
}

export default Footer;
