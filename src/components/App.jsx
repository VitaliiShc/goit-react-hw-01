import './App.css';

import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import friends from '../friends.json';
import userData from '../userData.json';
import transactions from '../transactions.json';

export default function App() {
  return (
    <>
      <h2>Завдання 1 - Профіль соціальної мережі</h2>
      <Profile data={userData} />
      <h2>Завдання 2 - Список друзів</h2>
      <FriendList friends={friends} />
      <h2>Завдання 3 - Історія транзакцій</h2>
      <TransactionHistory transactions={transactions} />
    </>
  );
}
