import css from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
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
        {items.map((transaction) => (
          <tr className={css.row} key={transaction.id}>
            <td className={css.dataCell}>{transaction.type}</td>
            <td className={css.dataCell}>{transaction.amount}</td>
            <td className={css.dataCell}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
