import Link from 'next/link'
import React, { FunctionComponent } from 'react'

export const Header: FunctionComponent = () => (
  <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between m-8">
    <Link href="/">
      <a>
        <img alt="Bother" className="h-32 w-32" src="/bother.svg" />
      </a>
    </Link>
    <nav className="mt-8 lg:mt-0"></nav>
  </header>
)
