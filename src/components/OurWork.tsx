import CarouselCard from './CarouselCard';
import './ourWorkStyles.css';

const OurWork = () => {
  return (
    <div className="flex flex-col items-center justify-center fade">
      <section className="flex items-center justify-center w-full rounded-2xl">
        <CarouselCard />
      </section>
    </div>
  );
};

export default OurWork;
