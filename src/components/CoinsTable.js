import axios from "axios";
import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { useNavigate } from "react-router-dom";
import {
  Container,
  createTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "../App.css";

const CoinsTable = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false);
  const [search, setsearch] = useState("");
  const currency = "USD";

  const fetchCoins = async () => {
    setloading(true);
    const { data } = await axios.get(CoinList(currency));
    setcoins(data);
    setloading(false);
  };

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  console.log(coins);

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "sans-serif", color: "black" }}
        >
          Top 100 Crypto-Currencies By Market Cap.
        </Typography>
        <TableContainer>
          <Table
            style={{ backgroundColor: "#E6E6FA" }}
            sx={{ minWidth: 650 }}
            aria-label="simple table"
          >
            <TableHead style={{ backgroundColor: "#AFCDED" }}>
              <TableRow>
                <TableCell style={{ fontSize: 24, padding: "16px" }}>
                  Coin
                </TableCell>
                <TableCell style={{ fontSize: 24, padding: "16px" }}>
                  Name
                </TableCell>
                <TableCell style={{ fontSize: 24, padding: "16px" }}>
                  Symbol
                </TableCell>
                <TableCell style={{ fontSize: 24, padding: "16px" }}>
                  Price
                </TableCell>
                <TableCell style={{ fontSize: 24, padding: "16px" }}>
                  24h Change
                </TableCell>
                <TableCell style={{ fontSize: 24, padding: "16px" }}>
                  Market Cap
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coins.map((row) => {
                const profit = row.proce_change_percentage_24h > 0;

                return (
                  <TableRow
                    onClick={() => navigate(`/coins/${row.id}`)}
                    key={row.name}
                    class="row"
                    style={{}}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src={row?.image}
                        alt={row.name}
                        height="50"
                        style={{ marginBottom: 10 }}
                      />
                    </TableCell>
                    <TableCell style={{ fontSize: 22 }}>{row.name}</TableCell>
                    <TableCell
                      style={{ textTransform: "uppercase", fontSize: 22 }}
                    >
                      {row.symbol}
                    </TableCell>
                    <TableCell style={{ fontSize: 20 }}>
                      $ {row.current_price}
                    </TableCell>
                    <TableCell style={{ fontSize: 20 }}>
                      {/* Get the price change value */}
                      {(() => {
                        const change = row.price_change_percentage_24h;

                        // Conditional rendering with a color indicator
                        return (
                          <>
                            {change > 0 ? (
                              <>
                                <span style={{ color: "green" }}>
                                  🟢 {change.toFixed(2)}%
                                </span>
                              </>
                            ) : (
                              <>
                                <span style={{ color: "red" }}>
                                  🔴 {Math.abs(change).toFixed(2)}%
                                </span>
                              </>
                            )}
                          </>
                        );
                      })()}
                    </TableCell>
                    <TableCell style={{ fontSize: 22 }}>
                      {(() => {
                        const marketCap = row.market_cap;

                        if (marketCap >= 1e12) {
                          return `${(marketCap / 1e12).toFixed(2)}T`; // Trillions
                        } else if (marketCap >= 1e9) {
                          return `${(marketCap / 1e9).toFixed(2)}B`; // Billions
                        }
                      })()}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
