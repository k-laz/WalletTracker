import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

export default function TokenBalanceTable(props) {
  console.log(props.data.data);

  if (props.data.data) {
    return (
      <React.Fragment>
        <Title>Token Balances</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Contract Name</TableCell>
              <TableCell>Contract Address</TableCell>
              <TableCell>Quote (USD)</TableCell>
              <TableCell align="right">Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.data.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.contract_name}</TableCell>
                <TableCell>{item.contract_address}</TableCell>
                <TableCell>{item.quote}</TableCell>
                <TableCell align="right">{item.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  } else {
    return <div> No Data, please input a wallet address</div>;
  }
}

// export default function Orders(props) {
//   console.log(props.data.items);
//   return (
//     <React.Fragment>
//       <Title>Recent Transactions</Title>
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Date</TableCell>
//             <TableCell>Gas Spent</TableCell>
//             <TableCell>Value</TableCell>
//             <TableCell align="right">Sale Amount</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {/* {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell>{row.date}</TableCell>
//               <TableCell>{row.name}</TableCell>
//               <TableCell>{row.shipTo}</TableCell>
//               <TableCell align="right">{`$${row.amount}`}</TableCell>
//             </TableRow>
//           ))} */}
//           {props.data.items.map((item, index) => (
//             <TableRow key={index}>
//               <TableCell>{item.block_signed_at}</TableCell>
//               <TableCell>{item.gas_spent}</TableCell>
//               <TableCell>{item.value}</TableCell>
//               <TableCell align="right">{`$${item.value}`}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
//         See more orders
//       </Link>
//     </React.Fragment>
//   );
// }
