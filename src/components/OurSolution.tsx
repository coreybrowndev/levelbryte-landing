import BGImage from '../assets/images/stock-bg.png';

const OurSolution = () => {
  return (
    <div className="relative w-full min-h-[300px] rounded-xl overflow-hidden py-6">
      {/* Background Image with Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(33, 139, 255, 0.3), rgba(0, 0, 0, 0.0)), url(${BGImage})`,
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative flex items-center justify-center flex-col text-white h-full gap-10">
        <h2 className="text-5xl font-bold text-blue-500 font-medium">
          Our Solution
        </h2>
        <div className="border border-blue-300 bg-white bg-opacity-80 p-4 rounded-md">
          <h3 className="text-blue-800">Tailored Projects</h3>
          <p className="text-blue-800">
            We build custom projects specific for you. - For your business.
          </p>
        </div>
        <div className="border border-blue-300 bg-white bg-opacity-80 p-4 rounded-md">
          <h3 className="text-blue-800">Quick Deliverables</h3>
          <p className="text-blue-800">
            We deliver on time - within days. - Again, for you.
          </p>
        </div>
        <div className="border border-blue-300 max-w-[270px] bg-white bg-opacity-80 p-4 rounded-md">
          <h3 className="text-blue-800">Simple Pricing</h3>
          <p className="text-blue-800">
            We have a simple pricing model - tailored for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
