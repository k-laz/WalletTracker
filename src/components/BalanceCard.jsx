const BalanceCard = ({ balance, quote }) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="flex justify-center items-center w-full h-full bg-white shadow-lg rounded-lg text-xl">
      <div className="block m-5">
        <p className="text-gray-900 leading-tight font-medium text-center mb-5">
          Balance
        </p>
        <div className="flex flex-row justify-center gap-10">
          <p className="text-gray-700 mb-5 text-center">
            {numberWithCommas(balance.toFixed(2))} ETH
          </p>
          <p className="text-gray-700 mb-5 text-center">
            {numberWithCommas(quote)} USD
          </p>
        </div>

        <p className="text-center">{date}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
