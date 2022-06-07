const TransactionVolumeCard = ({ data }) => {
  const current = new Date();
  let volume = 0;

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  if (data) {
    // const items = data.data.items;
    // for (let i = 0; i < items.length; i++) {
    //   if (items[i].block_signed_at.slice(8, 10) === `${current.getDate()}`) {
    //     volume += items[i].value_quote;
    //   }
    // }
    return (
      <div class="flex justify-center">
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
            Transaction Volume
          </h5>
          <p class="text-gray-700 text-base mb-4">{volume.toFixed(4)}</p>
          <p>{date}</p>
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
