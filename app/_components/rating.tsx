import { StarHalfIcon, StarIcon } from "lucide-react"
import { cn } from "../_lib/utils"

interface RatingProps {
  score: number
  totalRatings: number
  size?: number
}

const Rating = ({ size = 16, score }: RatingProps) => {
  const adjustedRating = Math.min(Math.max(score, 0), 5)
  const fullStars = Math.floor(adjustedRating)
  const hasHalfStar = adjustedRating - fullStars >= 0.5
  const emptyStars = 5

  return (
    <div className={cn("relative flex items-center gap-2")}>
      <div className="flex gap-1">
        {[...Array(emptyStars)].map((_, index) => (
          <StarIcon key={`${index}-empty`} size={size} />
        ))}
      </div>
      <div className="absolute flex gap-1">
        {[...Array(fullStars)].map((_, index) => (
          <StarIcon
            key={`${index}-fill`}
            fill="hsl(var(--secondary))"
            size={size}
          />
        ))}
        {hasHalfStar && (
          <StarHalfIcon fill="hsl(var(--secondary))" size={size} />
        )}
      </div>
    </div>
  )
}

export default Rating
