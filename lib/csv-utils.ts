/**
 * Convert an array of objects to CSV format
 * @param data Array of objects to convert
 * @param columns Optional column configuration
 * @returns CSV string
 */
export function convertToCSV(data: Record<string, any>[], columns?: { key: string; header: string }[]): string {
  if (!data || data.length === 0) {
    return ""
  }

  // If columns are not provided, use the keys from the first object
  const cols = columns || Object.keys(data[0]).map((key) => ({ key, header: key }))

  // Create the header row
  const headerRow = cols.map((col) => `"${col.header}"`).join(",")

  // Create the data rows
  const rows = data.map((item) => {
    return cols
      .map((col) => {
        const value = item[col.key]

        // Handle arrays (like sales_locations)
        if (Array.isArray(value)) {
          return `"${value.join("; ")}"`
        }

        // Handle null or undefined values
        if (value === null || value === undefined) {
          return '""'
        }

        // Handle dates
        if (value instanceof Date) {
          return `"${value.toISOString()}"`
        }

        // Handle strings with commas or quotes
        if (typeof value === "string") {
          return `"${value.replace(/"/g, '""')}"`
        }

        // Handle other values
        return `"${value}"`
      })
      .join(",")
  })

  // Combine header and rows
  return [headerRow, ...rows].join("\n")
}

/**
 * Create a downloadable blob from CSV data
 * @param csvData CSV string
 * @param filename Filename for the download
 * @returns Blob URL
 */
export function createDownloadableCSV(csvData: string, filename: string): string {
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" })
  return URL.createObjectURL(blob)
}
