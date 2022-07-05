import Table from "./Table";
import TransactionVolumeCard from "./TransactionVolumeCard";
import WalletInfoCard from "./WalletInfoCard";

const InfoTable = ({ address, setAddress, balanceData }) => {
  console.log(balanceData);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <TransactionVolumeCard data={balanceData} />
        </div>
        <div>
          <WalletInfoCard address={address} setAddress={setAddress} />
        </div>
        <div className="col-span-2">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default InfoTable;
