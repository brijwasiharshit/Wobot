import React from 'react';

const RecCard = ({recData}) => {
  const {title,image} = recData;
  console.log(title);
  return (
    <div className="m-4 p-4 w-72 max-w-xs bg-gray-150 h-[350px] hover:bg-gray-300 rounded-lg shadow-lg border-100 ">
      <img className="w-full h-48 object-cover rounded-t-lg" src={image} />
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
      </div>
    </div>
  )
}

export default RecCard;
