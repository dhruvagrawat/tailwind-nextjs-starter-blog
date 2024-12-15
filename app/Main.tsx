'use client';
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import React, { useState, useEffect } from "react";


const MAX_DISPLAY = 4;

export default function Home({ posts }) {
  const [viewers, setViewers] = React.useState(5000);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => prev + Math.floor(Math.random() * 20 - 10)); // +/- 10 viewers
    }, 1000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row bg-white h-[84vh]">
          {/* Left Column */}
          <div className="flex flex-col justify-between w-full">
            {/* Top Left Content */}
            <div className="flex items-center pt-5 pl-5 space-x-2">
              {/* Blinking Dot */}
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              <h1 className="text-left text-black text-[14px]">{viewers.toLocaleString()} LIVE READERS</h1>
            </div>

            {/* Bottom Center Content */}
            <div className="flex justify-center">
              <div className="text-[90px]">
                <p className="text-center text-black">DECLUTTER THE NOISE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tag Section */}
        <div className="flex flex-col justify-center pt-10 w-[99%] rounded-[10px] bg-black">
          <div className="flex justify-center pb-10">
            <h1 className="text-white">READ BY CATEGORY</h1>
          </div>
          <div className="flex flex-col pr-20 pl-20 justify-center">
            <div className="flex flex-row justify-between items-center pt-3 pr-3 pl-3">
              <div className="bg-slate-500 pl-3 rounded-[10px] pt-3 pr-3 w-[20%] min-h-[150px]">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="bg-slate-500 pl-4 rounded-[10px] pt-4 pr-4 w-[20%] min-h-[150px]">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="bg-slate-500 pl-4 rounded-[10px] pt-4 pr-4 w-[20%] min-h-[150px]">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="bg-slate-500 pl-4 rounded-[10px] pt-4 pr-4 w-[20%] min-h-[150px]">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
            </div>
            <div className="flex flex-row justify-between pt-3 pr-3 pl-3 pb-20">
              <div className="bg-slate-500 pl-4 rounded-[10px] pt-4 pr-4 w-[20%] min-h-[150px]">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="bg-slate-500 pl-4 rounded-[10px] pt-4 pr-4 w-[20%] min-h-[150px]">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="bg-slate-500 pl-4 rounded-[10px] pt-4 pr-4 w-[20%] min-h-[150px]">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
              <div className="bg-slate-500 pl-4 rounded-[10px] pt-4 pr-4 w-[20%] min-h-[150px]">
                <h3>Delhi University</h3>
                <p>sub text</p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Section */}
        <div className="space-y-2 pb-8 bg-white pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid bg-white grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, image } = post;
            return (
              <div key={slug} className="bg-black rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img src={image || "/default-image.jpg"} alt={title} className="w-full h-48 object-cover" />
                  <div className="absolute bottom-2 left-2 text-white font-bold bg-black bg-opacity-50 px-3 py-1 rounded">
                    <h3>{title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800">
                    <Link href={`/blog/${slug}`} className="hover:underline">{title}</Link>
                  </h2>
                  <div className="text-gray-600 mt-2">
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
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base bg-white font-medium leading-6">
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
        <div className="flex items-center  bg-white justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  );
}
