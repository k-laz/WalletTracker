import { useState } from "react";
import { validWallet } from "../tools/WalletValidator";
import LoadingWheel from "./LoadingWheel";

const Input = ({ setAddress, hasError }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
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
      {hasError && <h1>There is an error</h1>}
      <form className="flex flex-col justify-center items-center mb-3 xl:w-96">
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
        {loading && <LoadingWheel />}
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

// <button
//   disabled
//   type="button"
//   class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
// >
//   <svg
//     role="status"
//     class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
//     viewBox="0 0 100 101"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//       fill="currentColor"
//     />
//     <path
//       d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//       fill="#1C64F2"
//     />
//   </svg>
//   Loading...
// </button>;

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
