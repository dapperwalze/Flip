export const formatTransactionDate = (timeStamp) => {
  let months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  let transactionTimeStamp = new Date(timeStamp);
  let day = transactionTimeStamp.getDate();
  let month = months[transactionTimeStamp.getMonth()];
  let year = transactionTimeStamp.getFullYear();

  let transactionDate = `${day} ${month} ${year}`;
  return transactionDate;
};

export const searchTransactions = (transactions, keyword) => {
  let results = transactions.filter((transaction) => {
    return (
      keyword.length === 0 ||
      transaction.beneficiary_bank.toLowerCase().includes(keyword) ||
      transaction.sender_bank.toLowerCase().includes(keyword) ||
      transaction.beneficiary_name.toLowerCase().includes(keyword)
    );
  });

  return results;
};

export const sortTransactionFromAToZ = (transactions) => {
  return [...transactions].sort(function (a, b) {
    let beneficiaryNameA = a.beneficiary_name.toLowerCase();
    let beneficiaryNameB = b.beneficiary_name.toLowerCase();
    if (beneficiaryNameA < beneficiaryNameB) {
      return -1;
    }
    if (beneficiaryNameA > beneficiaryNameB) {
      return 1;
    }
    return 0;
  });
};

export const sortTransactionFromZToA = (transactions) => {
  return [...transactions].sort(function (a, b) {
    let beneficiaryNameA = a.beneficiary_name.toLowerCase();
    let beneficiaryNameB = b.beneficiary_name.toLowerCase();
    if (beneficiaryNameA < beneficiaryNameB) {
      return 1;
    }
    if (beneficiaryNameA > beneficiaryNameB) {
      return -1;
    }
    return 0;
  });
};
