import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import TransactionVolume from "./TransactionVolume";
import TokenBalanceTable from "./TokenBalanceTable";

const mdTheme = createTheme();

// import logo from "./logo.png";
class CryptoWalletTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      image:
        "https://logos.covalenthq.com/tokens/1/0xb8c77482e45f1f44de1745f52c74426c631bdd52.png",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.handleWalletChange(e.target.value);
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    this.props.handleAddressSubmit(e);
  }

  render() {
    return (
      <div className="walletAddressForm">
        <img
          className="logo"
          src={this.state.image}
          height="80px"
          width="80px"
          alt="Coin"
        />
        <form onSubmit={this.handleSubmit}>
          <label>
            Wallet Address:
            <input
              type="text"
              name="address"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleWalletChange = this.handleWalletChange.bind(this);
    this.state = {
      open: true,
      value: "",
      apiTokenData: "",
      apiTransactionData: "",
    };
  }

  handleAddressSubmit(e) {
    //alert('A name was submitted: ' + this.state.value);
    //console.log('https://api.covalenthq.com/v1/1/address/' + this.state.value + '/balances_v2/?&key=ckey_dc5027f0ba21436ab4bd0ae837a:')
    //fetch('https://api.covalenthq.com/v1/1/transaction_v2/0xbda92389200cadac424d64202caeab70cd5e93756fe34c08578adeb310bba254/?key=ckey_dc5027f0ba21436ab4bd0ae837a:')
    //fetch('https://api.covalenthq.com/v1/1/address/demo.eth/balances_v2/?&key=ckey_dc5027f0ba21436ab4bd0ae837a:')
    //portfolio_v2/  -- Get historical portfolio value over time
    //https://api.covalenthq.com/v1/1/tokens/0xfc811061134fa6ccfd22f56cc91bf6450bea2d01/nft_transactions/123/

    //https://api.covalenthq.com/v1/1/address/0xa79E63e78Eec28741e711f89A672A4C40876Ebf3/transactions_v2/?&key=ckey_dc5027f0ba21436ab4bd0ae837a:

    //https://api.covalenthq.com/v1/1/address/0xfc811061134fa6ccfd22f56cc91bf6450bea2d01/transactions_v2/?&key=ckey_dc5027f0ba21436ab4bd0ae837a:
    // works: fetch('https://api.covalenthq.com/v1/1/address/' + this.state.value + '/balances_v2/?&key=ckey_dc5027f0ba21436ab4bd0ae837a:')
    fetch(
      "https://api.covalenthq.com/v1/1/address/" +
        this.state.value +
        "/balances_v2/?&key=ckey_c69522f343f041e5b9caa69bbe6"
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ apiTokenData: json }); //image: json.data.items[2].logo_url}
      });

    fetch(
      "https://api.covalenthq.com/v1/1/address/" +
        this.state.value +
        "/transactions_v2/?&key=ckey_c69522f343f041e5b9caa69bbe6"
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ apiTransactionData: json }); //image: json.data.items[2].logo_url}
      });

    e.preventDefault();
  }

  handleWalletChange(value) {
    this.setState({ value: value });
  }

  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <Chart data={this.state.apiTransactionData} />
                  </Paper>
                </Grid>
                {/* Recent Deposits */}

                {/* ==============================================================~~~~~~~~~~~~~~~~~~~~~ */}
                <Grid item xs={12} md={6} lg={6}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <TransactionVolume data={this.state.apiTransactionData} />
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12} md={6} lg={6}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <CryptoWalletTracker
                      handleAddressSubmit={this.handleAddressSubmit}
                      handleWalletChange={this.handleWalletChange}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <TokenBalanceTable data={this.state.apiTokenData} />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
}

export default function Dashboard() {
  return <DashboardContent />;
}
