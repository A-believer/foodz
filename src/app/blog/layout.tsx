import React from 'react'

type Props = {}

const BlogLayout = ({children}: {children: React.ReactNode}) => {
  return (
      <div>{ children}</div>
  )
}

export default BlogLayout