export function SiteBackground() {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f0f0f0 1px, transparent 1px),
            linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
            radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),
            radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent),
            radial-gradient(circle 600px at 50% 0px, #d5c5ff, transparent),
            radial-gradient(circle 600px at 50% 100%, #d5c5ff, transparent)
          `,
          backgroundSize: `
            96px 64px,
            96px 64px,
            100% 100%,
            100% 100%,
            100% 100%,
            100% 100%
          `,
        }}
      />
    </div>
  )
}


