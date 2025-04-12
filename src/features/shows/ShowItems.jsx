function ShowItems({ image, name, address, cost }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 transition duration-300 hover:shadow-lg">
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-60 h-80 object-cover rounded-md mb-4 "
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{address}</p>
      <p className="mt-2 text-indigo-600 font-medium">{cost} per ticket</p>
    </div>
  );
}

export default ShowItems;
