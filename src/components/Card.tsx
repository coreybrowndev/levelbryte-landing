interface CardProps {
  title: string;
  text: string;
  image: string;
}

const Card = ({ title, text, image }: CardProps) => {
  return (
    <div className="flex items-center w-full bg-white shadow-lg rounded-xl p-6 gap-4">
      <div className="flex flex-col mt-4 gap-2">
        <button className="bg-slate-100 text-slate-500 px-4 py-2 rounded-3xl hover:bg-slate-200 transition shadow-md">
          Learn More
        </button>
        <button className="bg-slate-100 text-slate-500 px-4 py-2 rounded-3xl hover:bg-slate-200 transition shadow-md">
          Contact Us
        </button>
      </div>
      {/* Image Section */}
      <div className=" w-44 h-44 grow">
        <img
          src={image}
          alt={title}
          className="block  w-full h-full rounded-xl object-cover border border-gray-200"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Card;
