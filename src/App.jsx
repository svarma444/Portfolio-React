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
                <h3>{selectedProject.title}</h3>
                <p className="small">{selectedProject.details}</p>
              </div>
            </div>
          )}
        </main>

        <aside>
          <Education />
          <Skills />
        </aside>
      </div>
    </div>
  );
}
