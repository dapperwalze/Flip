import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./normalize.css";
import { Header } from "./components/Header";
import { SubHeader } from "./components/SubHeader";
import { SearchBar } from "./components/SearchBar";
import { TransactionItem } from "./components/TransactionItem";
import { TransactionDetails } from "./components/TransactionDetails";
import {
  formatTransactionDate,
  searchTransactions,
  sortTransactionFromZToA,
  sortTransactionFromAToZ,
} from "./helpers";

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    transactions: [],
  });
  const [value, setValue] = useState("");
  const [transactionResults, setTransactionResults] = useState(
    appState.transactions
  );

  useEffect(() => {
    setAppState({ loading: true, transactions: [] });
    const apiUrl =
      "https://cors-anywhere.herokuapp.com/https://nextar.flip.id/frontend-test";
    axios.get(apiUrl).then((transactions) => {
      const allTransactions = transactions.data;
      setAppState({
        loading: false,
        transactions: Object.values(allTransactions),
      });
      setTransactionResults(Object.values(allTransactions)); //The Object.values() method returns an array of a given object's own enumerable property values
    });
  }, []);

  let handleChange = useCallback(
    (e) => {
      let keyword = e.target.value.toLowerCase();
      setTransactionResults(searchTransactions(appState.transactions, keyword));
      setValue(keyword);
    },
    [appState.transactions]
  );

  let handleSorting = useCallback(
    (e) => {
      const value = e.target.value.toLowerCase();
      const filteredValue =
        value === "a-z"
          ? sortTransactionFromAToZ(transactionResults)
          : sortTransactionFromZToA(transactionResults);

      setTransactionResults(filteredValue);
    },
    [transactionResults]
  );

  let calculateTotalAmount = (amount) => {
    let sum = 0;
    amount.forEach(({ amount }) => (sum += amount));
    return sum.toLocaleString("id-ID");
  };

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <div className="transactionDisplayCard">
            <Header pageHeader={"Daftar Transaksi"} />
            <SubHeader
              greeting={"Halo "}
              userName={"kak"}
              totalTransactionAmount={calculateTotalAmount(transactionResults)}
            />
            <SearchBar
              value={value}
              handleChange={(e) => handleChange(e)}
              handleSorting={(e) => handleSorting(e)}
            />

            {transactionResults.map((transaction) => {
              return (
                <Link
                  key={transaction.id}
                  className="transactionLink"
                  to={`/${transaction.id}`}
                >
                  <TransactionItem
                    senderBankName={transaction.sender_bank}
                    recipientBankName={transaction.beneficiary_bank}
                    accountName={transaction.beneficiary_name}
                    amount={transaction.amount.toLocaleString("id-ID")}
                    transactionTimeStamp={formatTransactionDate(
                      transaction.completed_at
                    )}
                    transactionStatus={transaction.status}
                  />
                </Link>
              );
            })}
          </div>
        </Route>
        <Route path="/:id">
          <TransactionDetails transactions={appState.transactions} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
