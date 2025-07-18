"use client"

export default function ZunoChatWidget() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
        <!-- Zuno Chat Widget -->
        <script src="https://398676bc-6095-46c1-b661-4d4d20f6cd6c-00-i9646lq3l3x.worf.replit.dev/widget.js"></script>
        <script>
          ZunoChat.init({
            businessName: "webcoupers",
            userId: "4",
            primaryColor: "#3b82f6",
            position: "bottom-right"
          });
        </script>
      `,
      }}
    />
  )
}
