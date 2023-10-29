import './TwitterFollowCard.css'

type Props = {
  username: string
  name: string
  isFollowing: boolean
}

const TwitterFollowCard = ({ username, name, isFollowing }: Props) => {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${username}`}
          alt={`${username} avatar`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">@{username}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
