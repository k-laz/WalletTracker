import { useState } from "react";
import { validWallet } from "../tools/WalletValidator";

const WalletInfoCard = ({ address, setAddress }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validWallet(input)) {
      setAddress(input);
    } else {
      alert("Invalid wallet address, please try again");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-white shadow-lg rounded-lg">
      <div className="block p-6">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-5 text-center">
          Change Wallet Address
        </h5>
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
            mb-10
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
  peer-invalid:invisible
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
};

export default WalletInfoCard;
