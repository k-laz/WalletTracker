import Table from "./Table";
import TransactionVolumeCard from "./TransactionVolumeCard";

const InfoTable = ({ address }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{address}</p>
      <div className="flex flex-row">
        <TransactionVolumeCard />
        <TransactionVolumeCard />
      </div>

      <Table />
    </div>
  );
};

export default InfoTable;
