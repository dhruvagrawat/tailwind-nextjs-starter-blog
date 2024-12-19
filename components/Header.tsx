import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'

const Header = () => {
  // Use a dynamic background image with inline styles
  const headerStyle = {
    backgroundImage: 'url(/static/defImages/Grain.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  let headerClass =
    'flex items-center bg-red-500 border-b-[3px] border-black lg:pr-10 lg:pl-10 w-full justify-between py-7'

  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <>
      {/* Announcement Section */}
      <div className="bg-white py-2 text-center text-black">
        <div className="overflow-hidden whitespace-nowrap text-sm font-semibold">
          <div className="animate-marquee inline-block">
            <p className="font-popins font-thin"> Get upto 50% off on your first months rent</p>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className={headerClass} style={headerStyle}>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>

        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block font-popins font-extrabold text-white hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                >
                  {link.title}
                </Link>
              ))}
          </div>

          {/* Add a button with an image */}
          <button className="flex items-center rounded-full bg-white px-4 py-2 font-popins text-black shadow-custom transition duration-300 hover:bg-gray-100">
            <img src="/static/defImages/logo.png" alt="Icon" className="mr-2 h-5 w-5" />
            <span className="text-sm">Livebuy Home</span>
          </button>

          <SearchButton />
          <MobileNav />
        </div>
      </header>
    </>
  )
}

export default Header
