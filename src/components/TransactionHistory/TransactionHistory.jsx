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
        {items.map(({id,type,amount,currency}) => (
          <tr className={css.row} key={id}>
            <td className={css.dataCell}>{type}</td>
            <td className={css.dataCell}>{amount}</td>
            <td className={css.dataCell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
