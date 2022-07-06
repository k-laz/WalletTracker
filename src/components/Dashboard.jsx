import { useEffect, useState } from "react";
import InfoTable from "./InfoTable";
import Input from "./Input";

const Dashboard = () => {
  const [address, setAddress] = useState(null);
  const [balanceData, setBalanceData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const api_key = process.env.REACT_APP_COVALENT_API_KEY;

  useEffect(() => {
    if (!address) return;

    if (address) {
      fetch(
        "https://api.covalenthq.com/v1/1/address/" +
          address +
          `/portfolio_v2/?&key=${api_key}`
      )
        .then((response) => {
          if (!response.ok) {
            //TODO: send user an error message! fix the error message etc
            setHasError(true);
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

  if (address && balanceData && !hasError) {
    return (
      <InfoTable
        address={address}
        setAddress={setAddress}
        balanceData={balanceData}
      />
    );
  } else {
    return <Input address={address} setAddress={setAddress} error={hasError} />;
  }
};

export default Dashboard;
