'use client';

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with React and Node.js",
      image: "/portfolio/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Development"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses",
      image: "/portfolio/chat-app.jpg",
      technologies: ["Next.js", "OpenAI", "WebSocket", "Tailwind CSS"],
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure and user-friendly mobile banking solution",
      image: "/portfolio/banking-app.jpg",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      category: "Mobile Development"
    }
  ];

  return (
    <main className="container py-5">
      <h1 className="text-center mb-5">Our Portfolio</h1>
      
      {/* Filter Buttons */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
        <button className="btn btn-outline-primary">All</button>
        <button className="btn btn-outline-primary">Web Development</button>
        <button className="btn btn-outline-primary">AI/ML</button>
        <button className="btn btn-outline-primary">Mobile Development</button>
      </div>

      {/* Projects Grid */}
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-img-top bg-light" style={{ height: '200px' }}>
                <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted">
                  Project Image
                </div>
              </div>
              <div className="card-body">
                <span className="badge bg-primary mb-2">{project.category}</span>
                <h2 className="h5 card-title">{project.title}</h2>
                <p className="card-text text-muted">{project.description}</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="badge bg-light text-dark">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="btn btn-primary w-100">View Project</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 