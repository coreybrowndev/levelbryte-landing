import './carouselCardStyles.css';
import Card from './Card';
import BGImage from '../assets/images/stock-bg.png';
import { projects } from '../data/projects';

const CarouselCard = () => {
  return (
    <div className="relative w-full min-h-[500px] rounded-xl overflow-hidden pb-8">
      {/* Background Image with Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(87, 255, 206, 0.6), rgba(0, 0, 0, 0.0)), url(${BGImage})`,
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative flex items-center justify-center flex-col text-white h-full gap-10">
        <h2 className="text-5xl font-bold text-green-200 font-medium">
          We create bold experiences
        </h2>
        <div className="flex flex-col flex-wrap gap-4 justify-center px-8 pt-12">
          {projects.map((project, index) => (
            <Card
              title={project.title}
              text={project.description}
              image={project.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
