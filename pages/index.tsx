import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Link
          href="/ProfileCard"
          className="text-blue-500 underline hover:italic"
      />

    </>
  )
}
