const Table = ({ data }) => {
  const Row = ({ key, contract, balance, quote }) => (
    <tr className="bg-white border-b overflow-y-auto max-h-20">
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {key}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {contract}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {balance}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {quote}
      </td>
    </tr>
  );

  if (data) {
    return (
      <div className="flex flex-col max-h-[13rem]">
        <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 scroll-smooth">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <table className="min-w-full">
                <thead className="bg-white border-b text-xl">
                  <tr>
                    <th className="font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Contract
                    </th>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Balance
                    </th>
                    <th
                      scope="col"
                      className="font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Quote
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <Row
                      key={index}
                      contract={item.contract_name}
                      balance={item.balance}
                      quote={item.quote}
                    />
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      </div>
    );
  }
};

export default Table;
