import { TransactionStatusPill } from "./TransactionStatusPill";

export const TransactionItem = (props) => {
  return (
    <div
      style={{
        borderLeft:
          props.transactionStatus !== "SUCCESS"
            ? "4px solid #fd6542"
            : "4px solid #56b586",
      }}
      className="transactionItem"
    >
      <div className="transactionDetails">
        <h5 className="transactingBanks">
          {props.senderBankName} <span className="hmtlEntity">&#8594;</span>{" "}
          {props.recipientBankName}
        </h5>
        <h5 className="accountName">{props.accountName}</h5>
        <h5 className="amountAndTime">
          Rp{props.amount} <span className="hmtlEntity">&#xb7;</span>{" "}
          {props.transactionTimeStamp}
        </h5>
      </div>
      <TransactionStatusPill transactionStatus={props.transactionStatus} />
    </div>
  );
};
