import { portfolioItems } from "@/assets/portfolio-items"

export default async function Page({ params }) {
  const { slug } = await params
  console.log(slug)
   // Encontrar el proyecto específico
  const project = portfolioItems.find(item => 
    item.slug === slug || item.title.toLowerCase().replace(/\s+/g, '-') === slug
  )

  // Si no se encuentra el proyecto
  if (!project) {
    return (
      <div className="section">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-900">Proyecto no encontrado</h1>
          <p className="text-gray-600 mt-4">El proyecto que buscas no existe.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="section py-16">
      <div className="container">
        {/* Header del proyecto */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.description}</p>
        </div>

        {/* Imagen del proyecto */}
        {project.img && (
          <div className="h-100 bg-cover bg-center" style={{backgroundImage:`url(${project.img})`}} />
        )}

        {/* Detalles del proyecto */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sobre el proyecto</h2>
            <p className="text-gray-700 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Tecnologías</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Enlaces del proyecto */}
            {(project.url || project.githubUrl) && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Enlaces</h3>
                <div className="flex gap-4">
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Ver Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Código
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}