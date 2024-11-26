interface CardProps {
  title: string;
  text: string;
  image: string;
}

const Card = ({ title, text, image }: CardProps) => {
  return (
    <div className="flex items-center w-full bg-white shadow-lg rounded-3xl border border-blue-300 p-6 gap-4">
      <div className="flex flex-col mt-4 gap-2">
        <button className="border border-slate-200 text-slate-500 px-4 py-2 rounded-3xl transition">
          Learn More
        </button>
        <button className="border border-slate-200 text-blue-500 px-4 py-2 rounded-3xl transition">
          Contact Us
        </button>
      </div>
      {/* Image Section */}
      <div className=" w-44 h-56 grow">
        <img
          src={image}
          alt={title}
          className="block w-full h-full rounded-xl object-cover border border-gray-200"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1">
        <h2 className="text-2xl font-semibold text-blue-800">{title}</h2>
        <p className="text-blue-800">{text}</p>
      </div>
    </div>
  );
};

export default Card;
