import Table from "./Table";
import BalanceCard from "./BalanceCard";
import WalletInfoCard from "./WalletInfoCard";
import LineChart from "./LineChart";

let etherIndex;

const InfoTable = ({ address, setAddress, balanceData }) => {
  if (balanceData) {
    const items = balanceData.data.items;
    let tableItems = [];
    let weeklyItems = [];
    for (let item in items) {
      let decimals = items[item].contract_decimals;
      if (items[item].contract_name === "Ether") {
        etherIndex = item;
        weeklyItems.push({ // Only gets most recent day, need all timestamps for object
          date: items[item].holdings[etherIndex].timestamp,
          balance: items[item].holdings[etherIndex].close.balance / Math.pow(10, decimals)
        });
      }
      tableItems.push({
        contract_name: items[item].contract_name,
        balance: items[item].holdings[0].close.balance / Math.pow(10, decimals),
        quote: items[item].holdings[0].close.quote,
      });
      
    }
    console.log(weeklyItems);

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
