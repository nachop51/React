import './ImageList.css'
import { type Result } from '../types.d'
import { LikeIcon } from './Icons'

interface ImageListProps {
  images: Result[]
}

const ImageList = ({ images }: ImageListProps) => {
  return (
    <section className='image-list'>
      {
        images.map(({ id, urls, description, user, likes, color }) => {
          return (
            <article key={id} className='item'>
              <img src={urls.regular} alt={description} className='item-photo' />
              <div className='item-content'>
                <h3>{description}</h3>
                <div className='item-color'>
                  <h4>Picture color: {color}</h4>
                  <div style={{ backgroundColor: color }} />
                </div>
                <div className='item-info'>
                  <div className='item-likes'>
                    <LikeIcon />
                    {likes}
                  </div>
                  <div className='item-user'>
                    <img src={user.profile_image.small} alt={user.first_name + ' ' + user.last_name} />
                    <span>{user.first_name + ' ' + user.last_name}</span>
                  </div>
                </div>
              </div>
            </article>
          )
        })
      }
    </section>
  )
}

export default ImageList
