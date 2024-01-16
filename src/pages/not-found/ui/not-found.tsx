import { Link } from 'react-router-dom'
import { Button } from '@nextui-org/react'

import { Typography } from '@shared/ui'

export const NotFound = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <Typography
        className="text-center mb-3"
        component="h1"
        fontSize="9xl"
      >
        404
        <Typography
          className="block mt-5 mb-4"
          component="span"
        >
          Not Found
        </Typography>
      </Typography>
      <Button
        size="lg"
        as={Link}
        to="/"
      >
        Go to home
      </Button>
    </div>
  )
}
