import Table from "./Table";
import TransactionVolumeCard from "./TransactionVolumeCard";
import WalletInfoCard from "./WalletInfoCard";

const InfoTable = ({ address, setAddress }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row">
        <TransactionVolumeCard data={"some data"} />
        <WalletInfoCard address={address} setAddress={setAddress} />
      </div>

      <Table />
    </div>
  );
};

export default InfoTable;
