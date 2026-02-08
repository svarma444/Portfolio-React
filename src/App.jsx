import Header from './components/Header';
import Highlights from './components/Highlights';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Education from './components/Education';
import { useState, useEffect } from 'react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  //escape key to exit from modal box
  useEffect(() => {
    function handleEsc(e) {
      console.log("key pressed");
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    }

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };

  }, []);

  return (
    <div className="container">
      <Header />

      <div className="grid">
        <main>
          <Highlights />
          <Timeline />
          <Projects onSelect={setSelectedProject} />
          {selectedProject && (
            <div className="modal"
              onClick={() => { setSelectedProject(null) }}>

              <div onClick={(e) => e.stopPropagation()}>
                <button className="modal-close"
                  onClick={() => {
                    setSelectedProject(null)
                  }}
                >🗙</button>
                <h2>{selectedProject.title}</h2>

                <div className="modal-section">

                  <ul className="modal-list">
                    {selectedProject.details.split(':').filter(point => point.trim()).map((point, i) => (
                      <li key={i}>{point.trim()}</li>
                    ))}
                  </ul>

                  <h3>Impact</h3>
                  <div className="proj-click-details">
                    <p>{selectedProject.impact}</p>
                  </div>

                  <div className="tech-pills-container">

                    {selectedProject.techStack.languages?.length > 0 && (
                      <div className="tech-pill-group">
                        <span className="tech-label">Languages</span>
                        <div className="tech-pills">
                          {selectedProject.techStack.languages.map((lang, i) => (
                            <span key={i} className="tech-pill">{lang}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedProject.techStack.languages?.length > 0 && (
                      <div className="tech-pill-group">
                        <span className="tech-label">Frameworks</span>
                        <div className="tech-pills">
                          {selectedProject.techStack.frameworks.map((fw, i) => (
                            <span key={i} className="tech-pill">{fw}</span>
                          ))}
                        </div>
                      </div>
                    )}


                  </div>


                </div>
              </div>


            </div>
          )}
        </main>

        <aside>
          <Education />
          <Skills />
        </aside>
      </div >
    </div >
  );
}

{/* <ul className="modal-list">
  {selectedProject.details.split('.').filter(point => point.trim()).map((point, i) => (
    <li key={i}>{point.trim()}</li>
  ))}
</ul> */}

{/* <div onClick={(e) => e.stopPropagation()}>
  <button className="modal-close"
    onClick={() => {
      setSelectedProject(null)
    }}
  >🗙</button>
  <h2>{selectedProject.title}</h2>
  <strong>Project Overview : </strong>
  <p className="small">{selectedProject.details}</p>
</div> */}
