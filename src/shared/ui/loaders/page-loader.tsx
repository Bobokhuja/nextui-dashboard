import { CircularProgress } from '@nextui-org/react'

export const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 h-screen flex items-center justify-center bg-background">
      <CircularProgress size="lg" />
    </div>
  )
}
