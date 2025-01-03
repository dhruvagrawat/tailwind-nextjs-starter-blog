// pages/main.tsx
import { CustomCursor } from '@/components/CustomCursor'
import Link from 'next/link'
import { TagSection } from '@/components/TagSection'
import { BlogCarousel } from '@/components/BlogGrid'
import siteMetadata from '@/data/siteMetadata'
// import NewsletterForm from 'pliny/ui/NewsletterForm';
import MiddleMarquee from '@/components/MiddleMarquee'
import MixtapeComponent from '@/components/Mixtape'
import AchievementSection from '@/components/Tv'
import footer from '@/components/Footer'
import Footer from '@/components/Footer'

// const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      <CustomCursor />

      <TagSection />
      <MiddleMarquee />
      <MixtapeComponent />
      <AchievementSection
        gifUrl="/static/defImages/1.gif"
        title="livebuy becomes North Delhi’s largest player in the rental market"
        description="With over 1,000 direct flats out of 4,000 are listed on livebuy, the platorm has grown to become to largest player in the rental market in the North campus’ history. We now command 1/3rd of the entire market and this number will soon grow. We aim to make the renting process easirer, smoother, and more transparent."
      />
      <div className="space-y-2 bg-white pb-8 pt-6 md:space-y-5">
        {/* <h1 className="text-sm font-extrabold  tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Latest
        </h1> */}
      </div>
      <BlogCarousel posts={posts} />

      <Footer />
    </>
  )
}
