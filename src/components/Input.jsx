import { useState } from "react";
import { validWallet } from "../tools/WalletValidator";

const Input = ({ setAddress }) => {
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
    <div className="flex flex-col justify-center items-center">
      <p className="font-mono text-2xl xl:text-4xl mb-20 text-center ">
        Welcome to Wallet Tracker
      </p>
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
        <p className="invisible peer-invalid:visible text-red-500 text-center">
          Please provide a valid etherium address.
        </p>
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
  );
};

export default Input;

//        <button
//       type="submit"
//       onSubmit={processWallet()}
//       className="
//   px-6
//   py-2.5
//   mx-20
//   peer-invalid:invisible
//   bg-blue-600
//   text-white
//   font-medium
//   text-xs
//   leading-tight
//   uppercase
//   rounded
//   shadow-md
//   hover:bg-blue-700 hover:shadow-lg
//   focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
//   active:bg-blue-800 active:shadow-lg
//   transition
//   duration-150
//   ease-in-out"
//     >
//       Search
//     </button>
//curl - X GET "https://api.covalenthq.com/v1/{chain_id}/address/{address}/balances_v2/?key={YOUR API KEY}" - H "Accept: application/json"
