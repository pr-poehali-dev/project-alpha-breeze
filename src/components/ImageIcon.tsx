interface ImageIconProps {
  src: string
  size?: number
  className?: string
}

export function ImageIcon({ src, size = 24, className = "bg-blue-600" }: ImageIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`block flex-shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  )
}

export default ImageIcon
