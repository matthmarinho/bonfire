import { StarHalfIcon, StarIcon } from "lucide-react"
import { cn } from "../_lib/utils"

interface RatingProps {
  score: number
  totalRatings: number
  color?: string
  size?: number
}

const Rating = ({ color, size = 16, score, totalRatings }: RatingProps) => {
  const adjustedRating = Math.min(Math.max(score, 0), 5)
  const fullStars = Math.floor(adjustedRating)
  const hasHalfStar = adjustedRating - fullStars >= 0.5
  const emptyStars = 5
  const textColor = color ? `text-[${color}]` : ""

  return (
    <div className={cn("relative flex items-center gap-2", textColor)}>
      <div className="flex gap-1">
        {[...Array(emptyStars)].map((_, index) => (
          <StarIcon key={`${index}-empty`} size={size} />
        ))}
      </div>
      <div className="absolute flex gap-1">
        {[...Array(fullStars)].map((_, index) => (
          <StarIcon key={`${index}-fill`} fill={color} size={size} />
        ))}
        {hasHalfStar && <StarHalfIcon fill={color} size={size} />}
      </div>
      <span>({totalRatings})</span>
    </div>
  )
}

export default Rating
