  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(singleSetLength) // Start at first card of middle set
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Calculate transform to center middle set in viewport
  const transformX = -(currentIndex + singleSetLength) * STEP
