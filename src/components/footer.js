import React from 'react'

import GitHubSVG from '../svg/github.svg'
import TwitterSVG from '../svg/twitter.svg'

const socialLinks = [
  {
    Component: GitHubSVG,
    href: 'https://github.com/nor1c',
    title: 'GitHub',
  },
  {
    Component: TwitterSVG,
    href: 'https://twitter.com/nor1c_',
    title: 'Twitter',
  },
]

function Footer() {
  return (
    <footer className="bg-purple-700">
      <div className="flex flex-col md:flex-row items-center md:justify-between py-6 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl space-y-6 md:space-y-0">
        <p className="text-gray-300 text-sm">Powered by <a className="text-white" href="https://www.gatsbyjs.com/">GatsbyJS</a> & <a className="text-white" href="https://graphcms.com/">GraphCMS</a>, hosted on <a className="text-white" href="https://vercel.com">Vercel</a></p>
        <ul className="inline-flex space-x-6">
          {socialLinks.map(({ Component, href, title }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                className="block text-gray-300 hover:text-white p-1 text-sm"
                rel="noopener noreferrer"
                title={title}
              >
                <Component className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
