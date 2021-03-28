import { Link, useParams } from "react-router-dom";
import { Header } from "./Header";
import { TransactionStatusPill } from "./TransactionStatusPill";
import { FaInbox } from "react-icons/fa";
import { formatTransactionDate } from "../helpers";

export const TransactionDetails = (props) => {
  let { id } = useParams();
  const data =
    props.transactions.find((transaction) => transaction.id === id) || {};
  return (
    <div className="transactionDisplayCard">
      <Header pageHeader={"Detail Transaksi"} />
      <div className="transactionDetailsSubHeader">
        <div className="transactionDetails">
          <h5 className="transactionId">ID TRANSAKSI: {data.id}</h5>
        </div>
        <TransactionStatusPill transactionStatus={data.status} />
      </div>
      <div className="transactionSummary">
        <div className="inbox">
          <FaInbox size={"3em"} color={"#fd6542"} />
        </div>
        <div className="summaryDetails">
          <div>
            <h5 className="summarySubHeaders">PENGIRIN</h5>
            <h5 className="info bankName">{data.sender_bank}</h5>
          </div>

          <div>
            <h5 className="summarySubHeaders">PENERIMA</h5>
            <h5 className="info bankName">{data.beneficiary_bank}</h5>
            <h5 className="info">{data.account_number}</h5>
            <h5 className="info beneficiaryName">{data.beneficiary_name}</h5>
          </div>
          <div>
            <h5 className="summarySubHeaders">NOMINAL</h5>
            <h5 className="info">Rp{data.amount.toLocaleString("id-ID")}</h5>
            <h5 className="info">Kode Unik: {data.unique_code}</h5>
          </div>
          <div>
            <h5 className="summarySubHeaders">CATATAN</h5>
            <h5 className="info dataRemark">{data.remark}</h5>
          </div>
          <div>
            <h5 className="summarySubHeaders">WAKTU DIBUAT</h5>
            <h5 className="info">{formatTransactionDate(data.completed_at)}</h5>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="backButton" type="button">
          Kembali
        </button>
      </Link>
    </div>
  );
};
