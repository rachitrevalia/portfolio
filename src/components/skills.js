// import React, { useEffect } from 'react'; 

// function Skills() {
//     useEffect(() => {
//         const faders = document.querySelectorAll(".fade-in");
    
//         const appearOptions = {
//           threshold: 0.1,
//           rootMargin: "0px 0px -50px 0px"
//         };
    
//         const animateSkills = (section) => {
//           const bars = section.querySelectorAll('.bar');
//           bars.forEach(bar => {
//             const percent = bar.getAttribute('data-percent');
//             const fill = bar.querySelector('.bar-fill');
//             const text = bar.querySelector('.progress-text');
    
//             if (fill) {
//               fill.style.width = percent;
//               fill.style.transition = 'width 2s ease-in-out';
//             }
//             if (text) {
//               text.innerText = percent;
//               text.style.opacity = 1;
//               text.style.transition = 'opacity 1s ease-in-out';
//             }
//           });
//         };
    
//         const appearOnScroll = new IntersectionObserver((entries, observer) => {
//           entries.forEach(entry => {
//             if (!entry.isIntersecting) return;
//             animateSkills(entry.target);
//             entry.target.classList.add("show");
//             observer.unobserve(entry.target);
//           });
//         }, appearOptions);
    
//         const initBars = () => {
//           const bars = document.querySelectorAll('.bar');
//           bars.forEach(bar => {
//             const text = bar.querySelector('.progress-text');
//             if (text) text.style.opacity = 0;
    
//             const fill = bar.querySelector('.bar-fill');
//             if (fill) fill.style.width = '0';
//           });
    
//           faders.forEach(fader => {
//             const rect = fader.getBoundingClientRect();
//             if (rect.top < window.innerHeight && rect.bottom > 0) {
//               animateSkills(fader);
//               fader.classList.add("show");
//             }
//           });
//         };
    
//         initBars();
    
//         faders.forEach(fader => {
//           appearOnScroll.observe(fader);
//         });
//       }, []);
      
//   return (
//     <section id="skills" className="fade-in">
//       <h2>Skills</h2>
      
//       {/* OPTION 2: Two-column wider bars */}
//       <div className="skills-layout-option-2">
//         <div className="skills-category">
//           <h3>Backend Development</h3>
//           <div className="skills-grid">
//             <div className="skill-bar-container">
//               <p>Python</p>
//               <div className="bar" data-percent="95%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">95%</span>
//               </div>
//             </div>
//             <div className="skill-bar-container">
//               <p>FastAPI</p>
//               <div className="bar" data-percent="85%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">85%</span>
//               </div>
//             </div>
//             <div className="skill-bar-container">
//               <p>Flask / Django</p>
//               <div className="bar" data-percent="90%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">90%</span>
//               </div>
//             </div>
//             <div className="skill-bar-container">
//               <p>REST APIs & Integration</p>
//               <div className="bar" data-percent="85%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">85%</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="skills-category">
//           <h3>Frontend Development</h3>
//           <div className="skills-grid">
//             <div className="skill-bar-container">
//               <p>React / TypeScript</p>
//               <div className="bar" data-percent="85%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">85%</span>
//               </div>
//             </div>
//             <div className="skill-bar-container">
//               <p>Electron</p>
//               <div className="bar" data-percent="75%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">75%</span>
//               </div>
//             </div>
//             <div className="skill-bar-container">
//               <p>JavaScript / HTML / CSS</p>
//               <div className="bar" data-percent="85%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">85%</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="skills-category">
//           <h3>Data Engineering</h3>
//           <div className="skills-grid">
//             <div className="skill-bar-container">
//               <p>SQL / Database Design</p>
//               <div className="bar" data-percent="85%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">85%</span>
//               </div>
//             </div>
//             <div className="skill-bar-container">
//               <p>Data Pipelines & ETL</p>
//               <div className="bar" data-percent="80%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">80%</span>
//               </div>
//             </div>
//             <div className="skill-bar-container">
//               <p>Biometric Data Processing</p>
//               <div className="bar" data-percent="75%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">75%</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="skills-category">
//           <h3>DevOps & Tools</h3>
//           <div className="skills-grid">
//             <div className="skill-bar-container">
//               <p>Git / Version Control</p>
//               <div className="bar" data-percent="85%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">85%</span>
//               </div>
//             </div>
//             <div className="skill-bar-container">
//               <p>Linux / SSH / SFTP</p>
//               <div className="bar" data-percent="80%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">80%</span>
//               </div>
//             </div>
//             <div className="skill-bar-container">
//               <p>Poetry / Dependency Management</p>
//               <div className="bar" data-percent="75%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">75%</span>
//               </div>
//             </div>
//             <div className="skill-bar-container">
//               <p>Server Deployment</p>
//               <div className="bar" data-percent="75%">
//                 <div className="bar-fill"></div>
//                 <span className="progress-text">75%</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* OPTION 2: 2-column grid - Wider bars, more breathing room */
//         .skills-layout-option-2 .skills-category {
//           margin-bottom: 3.5rem;
//         }
        
//         .skills-layout-option-2 .skills-category h3 {
//           color: #00796B;
//           margin-bottom: 1.5rem;
//           font-size: 1.3rem;
//           font-weight: 600;
//         }
        
//         .skills-layout-option-2 .skills-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 2.5rem 3rem;
//         }
        
//         .skills-layout-option-2 .skill-bar-container {
//           min-width: 320px;
//         }
        
//         @media (max-width: 968px) {
//           .skills-layout-option-2 .skills-grid {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Skills;
import React, { useEffect } from 'react'; 

function Skills() {
    useEffect(() => {
        const faders = document.querySelectorAll(".fade-in");
    
        const appearOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        };
    
        const animateSkills = (section) => {
          const bars = section.querySelectorAll('.bar');
          bars.forEach(bar => {
            const percent = bar.getAttribute('data-percent');
            const fill = bar.querySelector('.bar-fill');
            const text = bar.querySelector('.progress-text');
    
            if (fill) {
              fill.style.width = percent;
              fill.style.transition = 'width 2s ease-in-out';
            }
            if (text) {
              text.innerText = percent;
              text.style.opacity = 1;
              text.style.transition = 'opacity 1s ease-in-out';
            }
          });
        };
    
        const appearOnScroll = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            animateSkills(entry.target);
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          });
        }, appearOptions);
    
        const initBars = () => {
          const bars = document.querySelectorAll('.bar');
          bars.forEach(bar => {
            const text = bar.querySelector('.progress-text');
            if (text) text.style.opacity = 0;
    
            const fill = bar.querySelector('.bar-fill');
            if (fill) fill.style.width = '0';
          });
    
          faders.forEach(fader => {
            const rect = fader.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              animateSkills(fader);
              fader.classList.add("show");
            }
          });
        };
    
        initBars();
    
        faders.forEach(fader => {
          appearOnScroll.observe(fader);
        });
      }, []);
      
  return (
    <section id="skills" className="fade-in">
      <h2>Skills</h2>
      
      <div className="skills-layout-option-2">
        <div className="skills-category">
          <h3>Backend Development</h3>
          <div className="skills-grid">
            <div className="skill-bar-container">
              <p>Python</p>
              <div className="bar" data-percent="95%">
                <div className="bar-fill"></div>
                <span className="progress-text">95%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>FastAPI</p>
              <div className="bar" data-percent="85%">
                <div className="bar-fill"></div>
                <span className="progress-text">85%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>Flask / Django</p>
              <div className="bar" data-percent="90%">
                <div className="bar-fill"></div>
                <span className="progress-text">90%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>REST APIs & Integration</p>
              <div className="bar" data-percent="85%">
                <div className="bar-fill"></div>
                <span className="progress-text">85%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Frontend Development</h3>
          <div className="skills-grid">
            <div className="skill-bar-container">
              <p>React / TypeScript</p>
              <div className="bar" data-percent="85%">
                <div className="bar-fill"></div>
                <span className="progress-text">85%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>Electron</p>
              <div className="bar" data-percent="75%">
                <div className="bar-fill"></div>
                <span className="progress-text">75%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>JavaScript / HTML / CSS</p>
              <div className="bar" data-percent="85%">
                <div className="bar-fill"></div>
                <span className="progress-text">85%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Machine Learning & AI</h3>
          <div className="skills-grid">
            <div className="skill-bar-container">
              <p>PyTorch</p>
              <div className="bar" data-percent="70%">
                <div className="bar-fill"></div>
                <span className="progress-text">70%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>Computer Vision (YOLOv11 / ONNX)</p>
              <div className="bar" data-percent="75%">
                <div className="bar-fill"></div>
                <span className="progress-text">75%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>Audio Transcription (Whisper)</p>
              <div className="bar" data-percent="75%">
                <div className="bar-fill"></div>
                <span className="progress-text">75%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>ML Inference Optimisation</p>
              <div className="bar" data-percent="70%">
                <div className="bar-fill"></div>
                <span className="progress-text">70%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Data Engineering & Analysis</h3>
          <div className="skills-grid">
            <div className="skill-bar-container">
              <p>SQL / Database Design</p>
              <div className="bar" data-percent="85%">
                <div className="bar-fill"></div>
                <span className="progress-text">85%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>Data Pipelines & ETL</p>
              <div className="bar" data-percent="80%">
                <div className="bar-fill"></div>
                <span className="progress-text">80%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>Pandas / Data Analysis</p>
              <div className="bar" data-percent="80%">
                <div className="bar-fill"></div>
                <span className="progress-text">80%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>Biometric Data Processing</p>
              <div className="bar" data-percent="75%">
                <div className="bar-fill"></div>
                <span className="progress-text">75%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>DevOps & Tools</h3>
          <div className="skills-grid">
            <div className="skill-bar-container">
              <p>Git / Version Control</p>
              <div className="bar" data-percent="85%">
                <div className="bar-fill"></div>
                <span className="progress-text">85%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>Linux / SSH / SFTP</p>
              <div className="bar" data-percent="80%">
                <div className="bar-fill"></div>
                <span className="progress-text">80%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>Poetry / Dependency Management</p>
              <div className="bar" data-percent="75%">
                <div className="bar-fill"></div>
                <span className="progress-text">75%</span>
              </div>
            </div>
            <div className="skill-bar-container">
              <p>Server Deployment</p>
              <div className="bar" data-percent="75%">
                <div className="bar-fill"></div>
                <span className="progress-text">75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-layout-option-2 .skills-category {
          margin-bottom: 3.5rem;
        }
        
        .skills-layout-option-2 .skills-category h3 {
          color: #00796B;
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
          font-weight: 600;
        }
        
        .skills-layout-option-2 .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem 3rem;
        }
        
        .skills-layout-option-2 .skill-bar-container {
          min-width: 320px;
        }
        
        @media (max-width: 968px) {
          .skills-layout-option-2 .skills-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;