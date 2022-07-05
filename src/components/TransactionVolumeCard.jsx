const TransactionVolumeCard = ({ data }) => {
  const current = new Date();
  let volume = 0;

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  if (data) {
    const items = data.data.items;
    for (let item of items) {
      if (item.block_signed_at.slice(8, 10) === `${current.getDate()}`) {
        volume += item.value_quote;
      }
    }
    return (
      <div className="flex justify-center items-center w-full h-full bg-white shadow-lg rounded-lg text-xl">
        <div className="block">
          <p className="text-gray-900 leading-tight font-medium text-center mb-5">
            Transaction Volume
          </p>
          <p className="text-gray-700 mb-5 text-center">{volume.toFixed(4)}</p>
          <p className="text-center">{date}</p>
        </div>
      </div>
    );
  }
};

export default TransactionVolumeCard;

// <button
//   type="button"
//   class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
// >
//   Button
// </button>;
