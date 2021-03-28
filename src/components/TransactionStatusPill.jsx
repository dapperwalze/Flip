export const TransactionStatusPill = (props) => {
  return (
    <div
      style={{
        border:
          props.transactionStatus !== "SUCCESS"
            ? "1px solid #fd6542"
            : "1 px solid #56b586",
        backgroundColor:
          props.transactionStatus !== "SUCCESS" ? "#fff" : "#56b586",
        color: props.transactionStatus !== "SUCCESS" ? "#000" : "#fff",
      }}
      className="transactionStatus"
    >
      <h5>{props.transactionStatus}</h5>
    </div>
  );
};
