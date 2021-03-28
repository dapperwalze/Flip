export const SubHeader = (props) => {
  return (
    <>
      <h2 className="welcomeGreeting">
        {props.greeting} {props.userName}!
      </h2>
      <h3 className="subHeader transactionInfo">
        Kamu telah melakukan sebesar{" "}
        <span className="totalTransactionAmount">
          Rp{props.totalTransactionAmount}
        </span>{" "}
        sejak menggunakan Flip.
      </h3>
    </>
  );
};
