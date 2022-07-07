import { useEffect, useState } from "react";
import InfoTable from "./InfoTable";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { stop } from "../slices/loadingSlice";

const Dashboard = () => {
  const [address, setAddress] = useState(null);
  const [balanceData, setBalanceData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const api_key = process.env.REACT_APP_COVALENT_API_KEY;
  const dispatch = useDispatch();
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
          dispatch(stop());
          setHasError(false);
          setBalanceData(json);
        })
        .catch((error) => {
          dispatch(stop());
          setHasError(true);
          console.error(
            "There has been a problem with your fetch operation: ",
            error
          );
        });
    }
  }, [address, api_key, dispatch]);

  if (address && balanceData) {
    return (
      <InfoTable
        address={address}
        setAddress={setAddress}
        balanceData={balanceData}
        error={hasError}
      />
    );
  } else {
    return <Input address={address} setAddress={setAddress} error={hasError} />;
  }
};

export default Dashboard;
