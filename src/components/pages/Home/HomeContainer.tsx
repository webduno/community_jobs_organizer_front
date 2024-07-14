// Modules
import React from 'react'

const HomeContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <main
      className={`m-0
        w-full min-h-screen flex flex-col content-start justify-start  overflow-x-hidden overflow-y-hidden    
        bg-white dark:bg-black font-sans text-black dark:text-white
      `}
    >
      {children}
    </main>
  )
}

export default HomeContainer;