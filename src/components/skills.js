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
    <section id="skills" class="fade-in">
            <h2>Skills</h2>
            <div class="skills">
                <div class="skill-bar-container">
                    <p>Python</p>
                    <div class="bar" data-percent="95%">
                        <div class="bar-fill"></div>
                        <span class="progress-text">95%</span>
                    </div>
                </div>
                <div class="skill-bar-container">
                    <p>Flask / Django</p>
                    <div class="bar" data-percent="90%">
                        <div class="bar-fill"></div>
                        <span class="progress-text">90%</span>
                    </div>
                </div>
                <div class="skill-bar-container">
                    <p>React / JS</p>
                    <div class="bar" data-percent="80%">
                        <div class="bar-fill"></div>
                        <span class="progress-text">80%</span>
                    </div>
                </div>
                <div class="skill-bar-container">
                    <p>SQL / SQLite</p>
                    <div class="bar" data-percent="85%">
                        <div class="bar-fill"></div>
                        <span class="progress-text">85%</span>
                    </div>
                </div>
                <div class="skill-bar-container">
                    <p>Linux / Git</p>
                    <div class="bar" data-percent="75%">
                        <div class="bar-fill"></div>
                        <span class="progress-text">75%</span>
                    </div>
                </div>
                <div class="skill-bar-container">
                    <p>AI Training / Prompting</p>
                    <div class="bar" data-percent="50%">
                        <div class="bar-fill"></div>
                        <span class="progress-text">50%</span>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Skills;