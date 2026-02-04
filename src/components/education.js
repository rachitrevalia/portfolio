// import React from 'react';

// function Education() {
//   return (
//     <section id="education" className="fade-in">
//       <h2>Education</h2>
//       <div className="card">
//         <h3>2023 - 2027: JAMK University of Applied Sciences, Finland</h3>
//         <p>Bachelors of Engineering in Ifnormation and Communication Technology</p>
//       </div>
//       <div className="card">
//         <h3>2025 - 2026: Breda University of Applied Sciences, The Netherlands</h3>
//         <p>Exchange Year in Applied Data Sciences and Artificial Intelligence</p>
//       </div>
//       <div className="card">
//         <h3>2019 - 2023: Sachdeva Global School, New Delhi, India</h3>
//         <p>Completed Higher Secondary Education</p>
//       </div>
//     </section>
//   );
// }

// export default Education;


import React from 'react';

function Education() {
  return (
    <section id="education" className="fade-in">
      <h2>Education</h2>
      
      <div className="card">
        <div className="education-header">
          <h3>JAMK University of Applied Sciences</h3>
          <span className="education-location">📍 Jyväskylä, Finland</span>
        </div>
        <p className="education-degree">Bachelor of Engineering in Information and Communication Technology</p>
        <span className="education-year">2023 - 2027</span>
      </div>

      <div className="card">
        <div className="education-header">
          <h3>Breda University of Applied Sciences</h3>
          <span className="education-location">📍 Breda, The Netherlands</span>
        </div>
        <p className="education-degree">Exchange Program - Applied Data Sciences and Artificial Intelligence</p>
        <span className="education-year">2025 - 2026</span>
      </div>

      <div className="card">
        <div className="education-header">
          <h3>Sachdeva Global School</h3>
          <span className="education-location">📍 New Delhi, India</span>
        </div>
        <p className="education-degree">Higher Secondary Education</p>
        <span className="education-year">2019 - 2023</span>
      </div>
    </section>
  );
}

export default Education;