const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-bef0fb">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Imagio For?
        </h2>

        {/* Automotive OEMs */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Interior design studios and design-led firms
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Interior design studios can maintain a consistent visual standard across project presentations, moodboards, and marketing materials. This helps communicate ideas clearly to clients while reinforcing a strong brand identity.
            </li>
          </ul>
        </div>

        {/* Tier-1 suppliers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Freelance interior designers and boutique consultancies
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Independent designers can upgrade simple plans, renders, and inspiration boards into professional visuals that compete with larger studios. Well-structured concept boards and enhanced images make presentations more persuasive when pitching projects.
            </li>
          </ul>
        </div>

        {/* Aftermarket brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Architectural practices with interior teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Architecture firms can use REACH Imagio as a post-production environment for interior visuals. Designers can add diagrams, labels, and overlays to plans and renders to communicate spatial concepts more effectively during client presentations.
            </li>
          </ul>
        </div>

        {/* Design studios */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            3D visualisation and CG studios
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Visualization studios can refine raw render outputs using colour grading, lighting adjustments, and image compositing. This helps deliver high-impact visuals that better represent the atmosphere and design intent of interior spaces.
            </li>
          </ul>
        </div>

        {/* Dealerships */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Furniture and décor brands
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Furniture, kitchen, wardrobe, and décor brands can refine product and room-set imagery for catalogues, websites, and advertising campaigns. Moodboards and styled visuals help communicate how products work together in real interior environments.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Real estate developers and property marketing teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Developers and marketing teams can enhance floor plans, show apartment images, and amenity visuals for brochures, microsites, and advertising materials. Improved visuals help potential buyers better imagine living in the space.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
