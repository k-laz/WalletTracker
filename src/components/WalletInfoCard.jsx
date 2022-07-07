import { useState } from "react";
import { validWallet } from "../tools/WalletValidator";
import { useSelector, useDispatch } from "react-redux";
import { start } from "../slices/loadingSlice";
import LoadingWheel from "./LoadingWheel";

const WalletInfoCard = ({ address, setAddress, error }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(start());
    if (validWallet(input)) {
      setAddress(input);
    } else {
      alert("Invalid wallet address, please try again");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <LoadingWheel />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center w-full h-full bg-white shadow-lg rounded-lg">
        <div className="block m-5">
          <h3 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
            Change Wallet Address
          </h3>
          {error && (
            <h1 className="text-red-500 text-center">Address was not found!</h1>
          )}
          <p className="text-gray-700 text-base mb-5 text-center">{address}</p>
          <form className="flex flex-col justify-center mb-3 xl:w-96">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              pattern="0x(\d|[A-Za-z]){40}"
              className="
          peer
           valid:border-green-500
           invalid:border-red-500
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            mb-5
            focus:text-gray-700 focus:bg-white focus:outline-none
        "
              id="exampleText0"
              placeholder="address input (ex: 0x...)"
            />
            <button
              type="button"
              value="Submit"
              onClick={handleSubmit}
              className="
  px-6
  py-2.5
  mx-20
  peer-invalid:hidden
  bg-blue-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default WalletInfoCard;
