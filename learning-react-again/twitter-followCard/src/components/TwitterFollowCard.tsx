import { useState } from 'react'
import './TwitterFollowCard.css'

type Props = {
  username: string
  formatUsername: (username: string) => string
  name: string
  initialIsFollowing: boolean
}

const TwitterFollowCard = ({
  formatUsername,
  username,
  name,
  initialIsFollowing,
}: Props) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

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
          <span className="tw-followCard-infoUsername">
            {formatUsername(username)}
          </span>
        </div>
      </header>
      <aside>
        <button
          className={
            'tw-followCard-button' +
            (isFollowing ? ' tw-followCard-button--following' : '')
          }
          onClick={() => setIsFollowing((prev) => !prev)}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
