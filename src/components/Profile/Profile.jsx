import css from './Profile.module.css';

export default function Profile({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.profileCard}>
      <div>
        <img
          className={css.profileImg}
          src={avatar}
          alt={username}
          height={200}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.value}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.value}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
