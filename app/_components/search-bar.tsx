import { SearchIcon, XIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface SearchBarProps {
  value: string
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, no-unused-vars
  setValue: (value: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClear: () => any
}

const SearchBar = ({ value, setValue, handleClear }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <Input
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value ? (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-3 top-1/2 -translate-y-1/2"
          onClick={handleClear}
        >
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Clear</span>
        </Button>
      ) : (
        <SearchIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      )}
    </div>
  )
}

export default SearchBar
