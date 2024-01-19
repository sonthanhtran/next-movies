"use client"

import Logo from '@/components/logo'
import AppMenu from '@/components/menu'
import CommandMenu from '@/components/searchBar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Logo />
      <AppMenu />
      <Button className="" />
    </main>
  )
}
