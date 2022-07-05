import { useEffect, useState } from "react";
import InfoTable from "./InfoTable";
import Input from "./Input";

const Dashboard = () => {
  const [address, setAddress] = useState(null);
  const [balanceData, setBalanceData] = useState(null);
  const api_key = process.env.REACT_APP_COVALENT_API_KEY;

  useEffect(() => {
    if (!address) return;

    if (address) {
      fetch(
        "https://api.covalenthq.com/v1/1/address/" +
          address +
          `/balances_v2/?&key=${api_key}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not OK");
          }
          return response.json();
        })
        .then((json) => {
          setBalanceData(json);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation: ",
            error
          );
        });
    }
  }, [address, api_key]);

  if (address && balanceData) {
    return (
      <InfoTable
        address={address}
        setAddress={setAddress}
        balanceData={balanceData}
      />
    );
  } else {
    return <Input address={address} setAddress={setAddress} />;
  }
};

export default Dashboard;
