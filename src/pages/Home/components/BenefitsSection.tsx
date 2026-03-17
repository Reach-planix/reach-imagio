import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Premium Visual Enhancements",
      description: "Transform raw plans, renders, and photos into polished visuals ready for presentations, marketing materials, and portfolios."
    },
    {
      icon: Users,
      title: "Faster Client Approvals",
      description: "Clear visual presentations help clients understand design ideas quickly and make decisions with greater confidence."
    },
    {
      icon: TrendingUp,
      title: "Realistic Material Visualization",
      description: "Experiment with colours, textures, and finishes to showcase interior materials accurately before finalizing designs."
    },
    {
      icon: Star,
      title: "Professional Moodboards and Boards",
      description: "Create structured concept boards that communicate design direction clearly and strengthen presentations."
    },
        {
      icon: Clock,
      title: "High-Impact Marketing Visuals",
      description: "Generate attractive imagery for websites, brochures, social media, and real estate campaigns."
    },
    {
      icon: Users,
      title: "Works with CAD and Render Tools",
      description: "Enhance drawings and renders from other design tools with overlays, annotations, and graphic refinements."
    },
    {
      icon: TrendingUp,
      title: "Consistent Studio Visual Style",
      description: "Use presets and templates to maintain consistent image quality across projects and teams."
    },
    {
      icon: Star,
      title: "Strong Brand Visual Identity",
      description: "Develop a recognizable visual style that helps your studio stand out in the interior design market."
    },
  ];

  return (
    <section className="py-16 bg-white text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-024959">
          Benefits of REACH Imagio
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Best In Class Imagio Software
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-bef0fb p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-0a829e mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;