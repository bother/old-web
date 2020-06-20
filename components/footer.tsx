import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => (
  <footer className="m-8 text-gray-700">
    &copy; {new Date().getFullYear()}
  </footer>
)
