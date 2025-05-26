"use client"

import * as React from "react"
import { X, Check, ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Option = {
  value: string
  label: string
}

interface MultiSelectProps {
  options: Option[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  className?: string
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select options",
  className,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Filter options based on search value
  const filteredOptions = React.useMemo(() => {
    return options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()))
  }, [options, searchValue])

  // Handle clicking outside to close dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Toggle selection of an option
  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value))
    } else {
      onChange([...selected, value])
    }
  }

  // Remove a selected option
  const removeOption = (e: React.MouseEvent, value: string) => {
    e.stopPropagation()
    onChange(selected.filter((item) => item !== value))
  }

  // Get label for a value
  const getLabel = (value: string) => {
    return options.find((option) => option.value === value)?.label || value
  }

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {/* Selected items display / Trigger button */}
      <div
        className={`flex min-h-[38px] w-full flex-wrap items-center gap-1 rounded-md border ${
          isOpen ? "border-purple-500 ring-2 ring-purple-200" : "border-gray-300"
        } bg-white p-1 text-sm`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {selected.map((value) => (
              <Badge key={value} variant="secondary" className="rounded-sm px-1 py-0 bg-purple-100">
                {getLabel(value)}
                <button onClick={(e) => removeOption(e, value)} className="ml-1 rounded-full hover:bg-purple-200">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        ) : (
          <span className="ml-2 text-gray-500">{placeholder}</span>
        )}
        <div className="ml-auto flex items-center self-stretch pl-2">
          {isOpen ? <ChevronUp className="h-4 w-4 opacity-50" /> : <ChevronDown className="h-4 w-4 opacity-50" />}
        </div>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 shadow-lg">
          {/* Search input */}
          <div className="sticky top-0 z-10 bg-white px-2 py-1.5">
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-purple-500 focus:outline-none"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Options list */}
          <div className="mt-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={`flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-purple-50 ${
                    selected.includes(option.value) ? "bg-purple-50" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleOption(option.value)
                  }}
                >
                  <span>{option.label}</span>
                  {selected.includes(option.value) && <Check className="h-4 w-4 text-purple-600" />}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-500">No options found</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
