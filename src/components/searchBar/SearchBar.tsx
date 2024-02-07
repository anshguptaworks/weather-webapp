import React, { useState, useRef, useEffect } from 'react'

interface SearchBarProps {
  onSearch: (value: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const downHandler = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', downHandler)
    return () => window.removeEventListener('keydown', downHandler)
  }, [])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="py-2 border border-solid border-primary md:h-10 h-8 flex justify-between items-center rounded-lg md:w-[400px] w-[200px]"
    >
      <input
        ref={inputRef}
        type="search"
        placeholder="Search..."
        className="w-full bg-transparent outline-none px-4"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hover:bg-primary mr-4">
        <span className="text-xs">⌘</span>J
      </kbd>
    </form>
  )
}

export default SearchBar
