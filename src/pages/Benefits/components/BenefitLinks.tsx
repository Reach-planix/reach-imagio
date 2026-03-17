import { Link } from "react-router-dom";

export const benefitPoints = [
  "Transform raw outputs into premium visuals",
  "Faster client understanding and approvals",
  "Bring materials and colour schemes to life",
  "Stronger moodboards and concept presentations",
  "More impactful marketing and portfolio visuals",
  "Seamless integration with CAD and 3D tools",
  "Consistent visual quality across projects",
  "Stronger visual identity for your brand",
];

const BenefitLinks = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Benefits of using <span className="text-0a829e">REACH Imagio </span>
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Best In Class Imagio Software
        </p>


      <div className="space-y-6 max-w-5xl mx-auto">
         {benefitPoints.map((point, index) => (
      <div
          key={index}
          className="flex items-center justify-between bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
         >
      <div className="flex items-center gap-4">
        <p className="text-gray-800 font-semibold text-lg md:text-xl">
          {point}
        </p>
      </div>

          <Link
             to={`/benefits/detail/${index + 1}`}
             className="text-primary font-medium hover:underline whitespace-nowrap">
                Read more →
          </Link>
         </div>
        ))}
      </div>
      
      </div>
    </section>
  );
};

export default BenefitLinks;
