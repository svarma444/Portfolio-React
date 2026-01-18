import { timeline } from '../data/timeline';

// export default function Timeline() {
//   return (
//     <section className="card">
//       <h2>Experience</h2>

//       <div className="timeline">
//         {timeline.map(item => (
//           <div key={item.id} className="timeline-item">
//             <div className="timeline-dot"></div>

//             <div className="timeline-content">
//               <span className="timeline-period">{item.period}</span>
//               <h4>{item.title}</h4>
//               <div className="small">{item.org}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function Timeline() {
  return (
    <section className="card">
      <h2>Experience</h2>

      <div className="experience-grid">
        {timeline.map(item => (
          <div key={item.id} className="experience-card">
            <span className="period">{item.period}</span>
            <h4>{item.title}</h4>
            <div className="company">{item.org}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

