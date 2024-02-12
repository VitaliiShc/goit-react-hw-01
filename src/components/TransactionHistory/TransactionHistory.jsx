import css from './TransactionHistory.module.css'

export default function TransactionHistory({ transactions }) {
  return (
      <table className={css.table}>
        <thead className={css.head}>
          <tr>
            <th className={css.headCell}>Type</th>
            <th className={css.headCell}>Amount</th>
            <th className={css.headCell}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr className={css.row} key={transaction.id}>
              <td className={css.dateCell}>{transaction.type}</td>
              <td className={css.dateCell}>{transaction.amount}</td>
              <td className={css.dateCell}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
}
