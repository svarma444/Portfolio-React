import { projects } from '../data/projects';

export default function Projects({onSelect}) {
  return (
    <section className="card">
      <h3>Featured Projects</h3>

      <div className="projects">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="proj"
            onClick={()=>{
              onSelect(project)
            }}
          >
            <h4>{project.title}</h4>
            <p className="small">{project.description}</p>
            <div className="small" style={{ marginTop: '6px' }}>
              {project.impact}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
