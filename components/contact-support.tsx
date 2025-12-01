import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

interface ContactSupportProps {
  className?: string
}

export function ContactSupport({ className }: ContactSupportProps) {
  return (
    <a href="mailto:support@useamplify.ai">
      <Button className={cn("gap-2", className)}>
        <Mail className="h-4 w-4" />
        Contact Support
      </Button>
    </a>
  )
}
