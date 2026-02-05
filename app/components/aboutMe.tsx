const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Django",
    "Machine Learning",
    "CI/CD",
    "C/C++",
    "Docker",
    "Kubernetes",
    "Git",
    "SQL",
    "NoSQL",
    "REST APIs",
    "Linux",
    "Shell Scripting",
  ];
  
  export function AboutMe() {
    return (
      <section className="aboutme-container">
        <p className="text-lg leading-relaxed mb-6">
          I am a student at the University of Gothenburg studying a Bachelor's degree in Software Engineering & Management.
          In this program I have gained knowledge in various fields of software development such as web development, DevOps,
          machine learning and software architecture. I have also had the opportunity to work on several team projects, which
          has helped me develop my collaboration and communication skills. I am passionate about learning new technologies
          and improving my skills as a developer.
        </p>
  
        <div className="mt-4">
          <div className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2">
            toolkit
          </div>
  
          <ul className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="font-mono text-xs text-slate-700 border border-slate-200 bg-slate-50 rounded-full px-2.5 py-1"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  