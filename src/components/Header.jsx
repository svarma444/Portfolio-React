export default function Header() {
  return (
      <header>
          <div>
              <div className="header-row">
                  
                   <div className="avatar">SV</div>

                  <div>
                      <h1>Swapnith Varma</h1>
                      <p className="lead">
                          Software Engineer — C++ | .NET | PLM Cloud | CAD
                      </p>
                  </div>

                  <div className="cta">
                      <a className="btn download-btn" href="/resume.pdf" download>
                          Download Resume
                      </a>
                  </div>

              </div>
          </div>
      </header>
  );
}

//<button className="btn theme-toggle">
 //   Toggle Theme
//</button>

/* <header>
    <div className="brand">
        <div className="avatar">SV</div>
        <div>
            <h1>Swapnith Varma</h1>
            <p className="lead">
                Software Engineer — C++ | .NET | PLM Cloud | CAD
            </p>
        </div>
    </div>
    <div className="cta">
        <a className="btn" href="/resume.pdf" download>
            Download Resume
        </a>
    </div>
</header> */