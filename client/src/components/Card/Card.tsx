import React from "react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react"; 

interface CardProps {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  buttonLink: string;
}

const Card: React.FC<CardProps> = ({ id, title, subtitle, image, buttonLink }) => {
  return (
    <Link to={buttonLink}>
      <div className="relative w-80 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group">
        {/* Image */}
        <div className="h-52 w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Overlay (Shown on Hover) */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Eye className="text-white w-12 h-12" />
        </div>

        {/* Text Content */}
        <div className="p-5 text-center">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          {subtitle && <p className="text-gray-500 text-sm mt-2">{subtitle}</p>}
        </div>
      </div>
    </Link>
  );
};

export default Card;
