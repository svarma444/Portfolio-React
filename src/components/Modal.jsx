export default function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{project.title}</h3>
          <button className="close" onClick={onClose}>✕</button>
        </div>

        <p className="small">{project.details}</p>
      </div>
    </div>
  );
}
