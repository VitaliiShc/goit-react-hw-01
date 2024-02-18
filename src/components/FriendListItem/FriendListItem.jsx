import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt="Avatar" height={100} />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.ofline)}>
        {isOnline ? 'Online' : 'Ofline'}
      </p>
    </>
  );
}
