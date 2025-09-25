'use client'

interface AmhurstLogoProps {
  className?: string
  showText?: boolean
}

export default function AmhurstLogo({ className = "w-12 h-12", showText = true }: AmhurstLogoProps) {
  return (
    <div className="flex items-center group cursor-pointer">
      {/* Animated Logo SVG */}
      <div className={`${className} relative`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity={1}>
                <animate attributeName="stop-color" values="#60A5FA;#A855F7;#60A5FA" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#A855F7" stopOpacity={1}>
                <animate attributeName="stop-color" values="#A855F7;#EC4899;#A855F7" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#EC4899" stopOpacity={1}>
                <animate attributeName="stop-color" values="#EC4899;#60A5FA;#EC4899" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>

            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>

            {/* Glow Filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Outer Ring - Rotating */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            opacity="0.3"
            filter="url(#glow)"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Inner Design - Letter A stylized */}
          <g>
            {/* Main A Shape */}
            <path
              d="M30 75 L50 25 L70 75 M37 60 L63 60"
              fill="none"
              stroke="url(#logoGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
            >
              <animate attributeName="stroke-width" values="4;6;4" dur="2s" repeatCount="indefinite" />
            </path>

            {/* Globe Icon Integration */}
            <circle
              cx="50"
              cy="40"
              r="8"
              fill="none"
              stroke="url(#accentGradient)"
              strokeWidth="2"
              opacity="0.7"
            >
              <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Globe Lines */}
            <path
              d="M42 40 Q50 32 58 40 Q50 48 42 40"
              fill="none"
              stroke="url(#accentGradient)"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <path
              d="M50 32 L50 48 M42 40 L58 40"
              fill="none"
              stroke="url(#accentGradient)"
              strokeWidth="1"
              opacity="0.5"
            />

            {/* Connecting Elements */}
            <circle cx="35" cy="65" r="2" fill="url(#logoGradient)" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="65" cy="65" r="2" fill="url(#logoGradient)" opacity="0.8">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Pulse Effect */}
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="1"
            opacity="0"
          >
            <animate attributeName="r" values="20;50;20" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="1;0.5;1" dur="4s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Animated Text */}
      {showText && (
        <div className="ml-3 transition-all duration-500 group-hover:scale-110">
          <span className="inline-block transition-all duration-500">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-bold text-2xl animate-pulse">
              Amhurst
            </span>
            <span className="ml-2 text-white font-light tracking-wider text-2xl">
              Global
            </span>
          </span>
        </div>
      )}
    </div>
  )
}