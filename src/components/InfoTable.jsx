import Table from "./Table";
import BalanceCard from "./BalanceCard";
import WalletInfoCard from "./WalletInfoCard";
import LineChart from "./LineChart";

let etherIndex;

const InfoTable = ({ address, setAddress, balanceData, error }) => {
  let tableItems = [];
  let weeklyItems = [];
  if (balanceData) {
    const items = balanceData.data.items;

    for (let item in items) {
      let decimals = items[item].contract_decimals;
      if (items[item].contract_name === "Ether") {
        etherIndex = item;
        let temp = items[item].holdings;
        for (let x in temp) {
          weeklyItems.push({
            date: items[item].holdings[x].timestamp,
            balance:
              items[item].holdings[x].close.balance / Math.pow(10, decimals),
          });
        }
        // console.log(weeklyItems);
      }
      tableItems.push({
        contract_name: items[item].contract_name,
        balance: items[item].holdings[0].close.balance / Math.pow(10, decimals),
        quote: items[item].holdings[0].close.quote,
      });
    }

    return (
      <div className="flex flex-col justify-center items-center overflow-y-auto">
        <div className="grid md:grid-cols-2 gap-5 px-5">
          <BalanceCard
            balance={tableItems[etherIndex].balance}
            quote={tableItems[etherIndex].quote}
          />
          <WalletInfoCard
            address={address}
            setAddress={setAddress}
            error={error}
          />
          <LineChart weeklyItems={weeklyItems} />
          <Table data={tableItems} />
        </div>
      </div>
    );
  }
};

export default InfoTable;
