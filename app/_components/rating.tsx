import { StarHalfIcon, StarIcon } from "lucide-react"
import { cn } from "../_lib/utils"

interface RatingProps {
  score: number
  totalRatings: number
}

const Rating = ({ score, totalRatings }: RatingProps) => {
  const adjustedRating = Math.min(Math.max(score, 0), 5)
  const fullStars = Math.floor(adjustedRating)
  const hasHalfStar = adjustedRating - fullStars >= 0.5
  const emptyStars = 5

  return (
    <div className="relative flex items-center gap-2 text-primary-foreground">
      <div className="flex gap-1">
        {[...Array(emptyStars)].map((_, index) => (
          <StarIcon key={cn(index, "empty")} size={16} />
        ))}
      </div>
      <div className="absolute flex gap-1">
        {[...Array(fullStars)].map((_, index) => (
          <StarIcon key={cn(index, "fill")} fill="#fff" size={16} />
        ))}
        {hasHalfStar && <StarHalfIcon fill="#fff" size={16} />}
      </div>
      <span>({totalRatings})</span>
    </div>
  )
}

export default Rating
