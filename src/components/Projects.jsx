import { projects } from '../data/projects';

export default function Projects({ onSelect }) {
  return (
    <section className="card">

      <h2>Featured Projects</h2>

      <div className="projects">
        {projects.map(project => (
          <div
            key={project.id}
            className="proj"
            onClick={() => {
              onSelect(project)
            }}
          >
            <strong>{project.title}</strong>
            <p className="small">{project.description}</p>
            <div className="tech-tags">
              {project.tech.split(',').map((tech, i) => (
                <span key={i} className="tech-tag">{tech.trim()}</span>
              ))}
            </div>

            <div className="click-hint">Click for details →</div>

          </div>
        ))}
      </div>
    </section >
  );
}

//<strong>{project.title}</strong>
//           <p className="small">{project.description}</p>
//            <div className="small">Tech: {project.tech}</div>
//{/* <div className="small" style={{ marginTop: '6px' }}>
//              {project.impact}
//           </div> */}
//<div className="click-hint">Click for details →</div>


//icon related code
{/* <div key={project.id} className="proj" onClick={() => onSelect(project)}>
  <strong>{project.title}</strong>
  <p className="small">{project.description}</p>
  <div className="tech-stack">
    <span className="tech-icon">⚡</span>
    <span className="small">{project.tech}</span>
  </div>
  <div className="click-hint">Click for details →</div>
</div>
.tech-stack {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
}

.tech-icon {
  font-size: 14px;
  color: var(--accent);
} */}

