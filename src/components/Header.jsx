export default function Header() {
    return (
        <header>
            {/* <div className="avatar">SV</div> */}
            <div>
                {/* <h1>Swapnith Varma</h1>
                <p className="lead">
                    Software Engineer - C++ | .NET | PLM Cloud | CAD
                </p> */}

                <div>
                    <h1 className="header-name">Swapnith Varma</h1>
                    <p className="header-title">Software Engineer — C++ | .NET | PLM Cloud | CAD</p>
                </div>


            </div>
            <a className="btn download-btn" href="/resume.pdf" download>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
            </a>

      </header>
  );
}

// export default function Header() {
//   return (
//       <header>
//           <div>
//               <div className="header-row">
                  
//                    <div className="avatar">SV</div>

//                   <div>
//                       <h1>Swapnith Varma</h1>
//                       <p className="lead">
//                           Software Engineer — C++ | .NET | PLM Cloud | CAD
//                       </p>
//                   </div>

                    
//                   <div className="btnsection">
//                       <a className="btn download-btn" href="/resume.pdf" download>
//                           Download Resume
//                       </a>
//                   </div>

//               </div>
//           </div>
//       </header>
//   );
// }

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