/**
 * Opens the user's email client with a pre-filled email
 * @param email The recipient email address
 * @param subject Optional email subject
 * @param body Optional email body
 * @returns boolean indicating whether the attempt was made
 */
export function openEmailClient(email: string, subject?: string, body?: string): boolean {
  try {
    let mailtoUrl = `mailto:${email}`

    // Add subject and body if provided
    const params = new URLSearchParams()
    if (subject) params.append("subject", subject)
    if (body) params.append("body", body)

    const queryString = params.toString()
    if (queryString) {
      mailtoUrl += `?${queryString}`
    }

    // Create and click a temporary link
    const link = document.createElement("a")
    link.href = mailtoUrl
    link.setAttribute("target", "_blank")
    link.setAttribute("rel", "noopener noreferrer")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    return true
  } catch (error) {
    console.error("Failed to open email client:", error)
    return false
  }
}
