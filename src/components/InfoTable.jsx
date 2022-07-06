import Table from "./Table";
import BalanceCard from "./BalanceCard";
import WalletInfoCard from "./WalletInfoCard";
import LineChart from "./LineChart";

let etherIndex;

const InfoTable = ({ address, setAddress, balanceData }) => {
  if (balanceData) {
    const items = balanceData.data.items;
    let tableItems = [];
    for (let item in items) {
      if (items[item].contract_name === "Ether") {
        etherIndex = item;
      }
      let decimals = items[item].contract_decimals;
      tableItems.push({
        contract_name: items[item].contract_name,
        balance: items[item].holdings[0].close.balance / Math.pow(10, decimals),
        quote: items[item].holdings[0].close.quote,
      });
    }

    return (
      <div className="flex flex-col justify-center items-center overflow-y-auto">
        <div className="grid grid-cols-2 gap-10">
          <BalanceCard
            balance={tableItems[etherIndex].balance}
            quote={tableItems[etherIndex].quote}
          />
          <WalletInfoCard address={address} setAddress={setAddress} />
        </div>
          <LineChart />
          <Table data={tableItems} />
      </div>
    );
  }
};

export default InfoTable;