import Card from './Card';
import BGImage from '../assets/images/work-bg.png';
import { projects } from '../data/projects';

const CarouselCard = () => {
  return (
    <div className="relative w-full min-h-[500px] rounded-xl overflow-hidden pb-8 shadow-xl shadow-blue-300">
      {/* Background Image with Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          opacity: 0.2,
          backgroundImage: `linear-gradient(to top, rgba(33, 139, 255, 0.0), rgba(0, 0, 0, 0.0)), url(${BGImage})`,
        }}
      ></div>

      {/* Content Overlay */}
      <div className=" gap-8 relative flex items-center justify-center flex-col text-white h-full">
        <div>
          <h2 className="text-5xl font-bold text-blue-300 font-normal">
            We create bold experiences
          </h2>
        </div>
        <div className="flex flex-col flex-wrap gap-4 justify-center px-8">
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
