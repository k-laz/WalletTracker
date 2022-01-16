import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";

export default function TransactionVolume(props) {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  //console.log("what is this" + props.data);

  //console.log(props.data.data.items);
  if (props.data) {
    const items = props.data.data.items;
    let volume = 0;
    for (let i = 0; i < items.length; i++) {
      //console.log(items[i].block_signed_at.slice(8, 10));

      if (items[i].block_signed_at.slice(8, 10) === `${current.getDate()}`) {
        volume += items[i].value_quote;
      }
    }
    return (
      <React.Fragment>
        <div className="transactionCard">
          <Title>Transaction Volume</Title>
          <Typography component="p" variant="h4">
            {volume.toFixed(4)}
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {date}
          </Typography>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="transactionCard">
          <Title>Transaction Volume</Title>
          <Typography component="p" variant="h4">
            0
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {date}
          </Typography>
        </div>
      </React.Fragment>
    );
  }
}
