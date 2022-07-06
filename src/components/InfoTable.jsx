import Table from "./Table";
import BalanceCard from "./BalanceCard";
import WalletInfoCard from "./WalletInfoCard";

const InfoTable = ({ address, setAddress, balanceData }) => {
  if (balanceData) {
    const items = balanceData.data.items;
    let tableItems = [];
    for (let item in items) {
      let decimals = items[item].contract_decimals;
      tableItems.push({
        contract_name: items[item].contract_name,
        balance: items[item].holdings[0].close.balance / Math.pow(10, decimals),
        quote: items[item].holdings[0].close.quote,
      });
    }

    return (
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-10 mx-20">
          <BalanceCard
            balance={tableItems[0].balance}
            quote={tableItems[0].quote}
          />
          <WalletInfoCard address={address} setAddress={setAddress} />
          <Table data={tableItems} />
        </div>
      </div>
    );
  }
};

export default InfoTable;
