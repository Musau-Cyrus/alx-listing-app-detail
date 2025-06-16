import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  title: string;
  price: string;
  description: string;
  onViewDetailsClick?: () => void;
  onBookNowClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  price,
  description,
  onViewDetailsClick,
  onBookNowClick,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 text-lg mb-3">{price}</p>
        <p className="text-gray-600 text-base mb-4">{description}</p>
        <div className="flex justify-between items-center">
          {onViewDetailsClick && (
            <button
              onClick={onViewDetailsClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              View Details
            </button>
          )}
          {onBookNowClick && (
            <button
              onClick={onBookNowClick}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
