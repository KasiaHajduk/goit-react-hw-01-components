import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

function TransactionHistory(props) {
    const transactions = props.transactions;
    const viewTransactions = transactions.map((transaction) =>
        <tr key={transaction.id} className={styles.row}>
            <td className={styles.type}>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
        </tr>
    );

    return <table className={styles.transaction_history}>
        <thead className={styles.header}>
            <tr className={styles.row}>
            <th className={styles.type}>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {viewTransactions}
       </tbody>
    </table>
}

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionHistory;


