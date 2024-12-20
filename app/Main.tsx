'use client'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import React, { useState, useEffect } from 'react'

const MAX_DISPLAY = 4

export default function Home({ posts }) {
  const [viewers, setViewers] = React.useState(5000)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => prev + Math.floor(Math.random() * 20 - 10)) // +/- 10 viewers
    }, 1000)
    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex h-[100vh] flex-row bg-white">
          {/* Left Column */}
          <div className="flex w-full flex-col justify-between">
            {/* Top Left Content */}
            <div className="flex items-center space-x-2 pl-5 pt-5">
              {/* Blinking Dot */}
              <span className="ml-10 h-3 w-3 animate-pulse-custom rounded-full bg-transparent"></span>
              <h1 className="text-left font-popins text-[14px] font-thin text-black">
                <b className="font-bold">{viewers.toLocaleString()}</b> LIVE READERS
              </h1>
            </div>
            {/* Bottom Center Content */}
            <div className="flex h-full w-full items-end justify-center">
              <p className="whitespace-nowrap text-center font-palatino text-[8vw] font-bold text-black">
                DECLUTTER THE NOISE
              </p>
            </div>
          </div>
        </div>

        {/* Tag Section */}
        <div className="flex w-[99%] flex-col justify-center rounded-[10px] bg-black pt-10">
          <div className="flex justify-center pb-10">
            <h1 className="text-white">READ BY CATEGORY</h1>
          </div>
          <div className="flex flex-col justify-center pl-20 pr-20">
            <div className="flex flex-row items-center justify-between pl-3 pr-3 pt-3">
              <div className="min-h-[150px] w-[23%] rounded-[10px] bg-slate-500 pl-3 pr-3 pt-3">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="min-h-[150px] w-[23%] rounded-[10px] bg-slate-500 pl-4 pr-4 pt-4">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="min-h-[150px] w-[23%] rounded-[10px] bg-slate-500 pl-4 pr-4 pt-4">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="min-h-[150px] w-[23%] rounded-[10px] bg-slate-500 pl-4 pr-4 pt-4">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
            </div>
            <div className="flex flex-row justify-between pb-20 pl-3 pr-3 pt-3">
              <div className="min-h-[150px] w-[23%] rounded-[10px] bg-slate-500 pl-4 pr-4 pt-4">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="min-h-[150px] w-[23%] rounded-[10px] bg-slate-500 pl-4 pr-4 pt-4">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="min-h-[150px] w-[23%] rounded-[10px] bg-slate-500 pl-4 pr-4 pt-4">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="min-h-[150px] w-[23%] rounded-[10px] bg-slate-500 pl-4 pr-4 pt-4">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Section */}
        <div className="space-y-2 bg-white pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-8 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, image } = post
            return (
              <div key={slug} className="overflow-hidden rounded-lg bg-black shadow-md">
                <div className="relative">
                  <img
                    src={image || '/default-image.jpg'}
                    alt={title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 rounded bg-black bg-opacity-50 px-3 py-1 font-bold text-white">
                    <h3>{title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800">
                    <Link href={`/blog/${slug}`} className="hover:underline">
                      {title}
                    </Link>
                  </h2>
                  <div className="mt-2 text-gray-600">
                    <p>{summary}</p>
                  </div>
                  <div className="mt-3">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-primary-500 hover:text-primary-600 "
                      aria-label={`Read more: "${title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Pagination */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end bg-white text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 "
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}

      {/* Newsletter Section */}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center  justify-center bg-white pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
