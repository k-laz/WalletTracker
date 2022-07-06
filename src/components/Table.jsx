const Table = ({ data }) => {
  const Row = ({ contract, balance, quote }) => (
    <tr className="bg-white border-b">
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
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
      <div className="max-h-[20rem] rounded-lg overflow-y-auto">
        <div className="flex w-full h-full bg-white shadow-lg rounded-lg text-xl">
          <div className="rounded-lg">
            <table className="rounded-lg">
              <thead className="border-b text-xl rounded-lg">
                <tr>
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
