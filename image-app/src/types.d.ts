export interface UnsplashAPIReposponse {
  total: number
  total_pages: number
  results: Result[]
}

export interface Result {
  id: string
  created_at: Date
  width: number
  height: number
  color: string
  blur_hash: string
  likes: number
  liked_by_user: boolean
  description: string
  user: User
  current_user_collections: any[]
  urls: Urls
  links: ResultLinks
}

export interface ResultLinks {
  self: string
  html: string
  download: string
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

export interface User {
  id: string
  username: string
  name: string
  first_name: string
  last_name: string
  instagram_username: string
  twitter_username: string
  portfolio_url: string
  profile_image: ProfileImage
  links: UserLinks
}

export interface UserLinks {
  self: string
  html: string
  photos: string
  likes: string
}

export interface ProfileImage {
  small: string
  medium: string
  large: string
}
