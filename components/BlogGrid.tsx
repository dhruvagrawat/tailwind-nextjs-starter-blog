import Link from '@/components/Link'

export function BlogGrid({ posts, MAX_DISPLAY }) {
  return (
    <div className="grid grid-cols-1 gap-8 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {!posts.length && 'No posts found.'}
      {posts.slice(0, MAX_DISPLAY).map((post) => {
        const { slug, title, summary, image, readTime, date, author } = post
        return (
          <div key={slug} className="overflow-hidden rounded-lg bg-white shadow-md">
            <div className="relative">
              <img
                src={image || '/default-image.jpg'}
                alt={title}
                className="h-48 w-full object-cover"
              />
              <button className="absolute right-2 top-2 rounded-full bg-white p-2 shadow hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm7.5-4.5v9m4.5-4.5h-9"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">
                <Link href={`/blog/${slug}`} className="hover:underline">
                  {title}
                </Link>
              </h2>
              <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                <span>{readTime} min read</span>
                <span>·</span>
                <span>{new Date(date).toLocaleDateString()}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                {/* <img
                                    src={author.image || '/default-avatar.jpg'}
                                    alt={author.name}
                                    className="h-6 w-6 rounded-full"
                                /> */}
                {/* <span>{author.name}</span> */}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <button className="flex items-center gap-1 text-gray-600 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 8.25v-1.5A2.25 2.25 0 0013.5 4.5h-3a2.25 2.25 0 00-2.25 2.25v1.5m10.5 0h2.25M6.75 8.25H4.5m16.5 0h-3M9.75 15v6m4.5-6v6m4.5-6H6"
                    />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
