import { useState } from "react";
import InfoTable from "./InfoTable";
import Input from "./Input";

const Dashboard = () => {
  const [address, setAddress] = useState("");

  if (address !== "") {
    return <InfoTable address={address} />;
  } else {
    return <Input address={address} setAddress={setAddress} />;
  }
};

export default Dashboard;
