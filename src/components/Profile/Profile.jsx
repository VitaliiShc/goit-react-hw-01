import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profileCard}>
      <div>
        <img className={css.profileImg} src={image} alt={name} height={200} />
        <p className={css.name}>{name}</p>
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
