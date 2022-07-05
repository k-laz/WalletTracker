const BalanceCard = ({ balance, quote }) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="flex justify-center items-center w-full h-full bg-white shadow-lg rounded-lg text-xl">
      <div className="block">
        <p className="text-gray-900 leading-tight font-medium text-center mb-5">
          Balance
        </p>
        <div className="flex flex-row justify-center gap-10">
          <p className="text-gray-700 mb-5 text-center">
            {balance.toFixed(2)} eth
          </p>
          <p className="text-gray-700 mb-5 text-center">{quote} usd</p>
        </div>

        <p className="text-center">{date}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
