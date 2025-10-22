import React from 'react';
interface JewelryCardProps {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
  onPurchase: (id: string) => void;
}
const JewelryCard: React.FC<JewelryCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  description,
  onPurchase
}) => {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <button onClick={() => onPurchase(id)} className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors">
            Purchase
          </button>
        </div>
      </div>
    </div>;
};
export default JewelryCard;