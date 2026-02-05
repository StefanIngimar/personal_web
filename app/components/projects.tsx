type Project = {
  id: string;
  title: string;
  href: string;
  description: string;
  year?: string;
  stack?: string[];
  diagram?: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    id: "road",
    title: "Fix My Road",
    href: "https://github.com/StefanIngimar/fix-my-road",
    year: "2025",
    description: "A school project where I developed a web application that uses computer vision to identify and report road damages such as potholes and cracks. The application allows users to upload images of road conditions, which are then analyzed using a pre-trained YOLOv5 model to detect damages. The detected damages are marked on the images, and users can submit reports to local authorities for maintenance.",
    stack: ["Python", "Django", "FastAPI", "Docker", "Kubernetes", "YOLOv5"],
    diagram: "/images/systemarch.png"
  },
  {
    id: "steering",
    title: "Steering Algorithm",
    href: "https://github.com/StefanIngimar/Steering-Algorithm-DIT639",
    year: "2025",
    description: "A school project where I developed a steering algorithm for an autonomous vehicle in a simulated environment. The algorithm uses a combination of sensor data and machine learning techniques to navigate the vehicle safely and efficiently through various scenarios, including obstacle avoidance and path planning.",
    stack: ["Python", "C++", "Docker"],
  },
  {
    id: "dentist",
    title: "Dentist Appointment System",
    href: "https://github.com/StefanIngimar/DIT356-Mini-Project-Distributed-Systems-Development",
    year: "2025",
    description: "A school project where I, together with a team developed a microservice-based appointment system for dental clinics. The system consists of multiple services, including an API gateway, authentication service, appointment management service, and notification service. We used MQTT for communication between services and SQLite for data storage. The project was containerized using Docker for easy deployment.",
    stack: ["Python", "MQTT", "SQLite", "Docker", "Vue"],
    diagram: "/images/systemArchitecture.v6.png",
  },
];


export function Projects() {
  return (
    <section className="max-w-3xl mx-auto px-6">
      <div className="mb-6">
        <div className="font-mono text-xs uppercase tracking-wider text-neutral-100">
          projects
        </div>
        <h2 className="text-2xl font-semibold mt-2 text-neutral-100">
          Selected work
        </h2>
        <p className="text-neutral-100 mt-2">
          A few projects with context and artifacts.
        </p>
      </div>

      <div className="divide-y divide-neutral-200">
        {projects.map((p) => (
          <article
            key={p.id}
            className="py-6 px-4 -mx-4 rounded-xl hover:bg-neutral-50/70 transition"
          >
            <header className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-100">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-neutral-100 hover:text-blue-700 transition-colors"
                  >
                    {p.title}
                  </a>
                </h3>
                {p.year ? (
                  <div className="font-mono text-xs text-neutral-500 mt-1">
                    {p.year}
                  </div>
                ) : null}
              </div>

              {/* <span className="font-mono text-xs text-neutral-400 mt-1">
                ↗
              </span> */}
            </header>

            <p className="mt-3 text-sm leading-relaxed text-neutral-100 max-w-[75ch]">
              {p.description}
            </p>

            {p.stack?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Pill key={`${p.id}-${s}`}>{s}</Pill>
                ))}
              </div>
            ) : null}

            {p.diagram ? (
              <figure className="mt-4 rounded-xl border border-neutral-200 bg-white p-3 shadow-sm">

                <div className="rounded-lg bg-slate-50 p-2 border border-slate-100">
                  <img
                    src={p.diagram}
                    alt={`${p.title} system architecture diagram`}
                    className="w-full h-auto block"
                  />
                </div>
              </figure>
            ) : null}

            {p.links?.length ? (
              <nav className="mt-4 flex flex-wrap gap-3 font-mono text-xs text-neutral-600">
                {p.links.map((l) => (
                  <a
                    key={`${p.id}-${l.href}`}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-4 hover:underline hover:text-blue-700 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs text-slate-700 border border-slate-200 bg-slate-50 rounded-full px-2.5 py-1">
      {children}
    </span>
  );
}