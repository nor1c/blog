import React from 'react'
import { graphql, Link } from 'gatsby'

function IndexPage({ data: { allGraphCmsPost } }) {
  return (
    <div className="divide-y divide-gray-200">
      <ul className="divide-y divide-gray-200">
        {allGraphCmsPost.nodes.map((post) => {
          return (
            <li key={post.id} className="py-4">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-2">
                    <dd className="text-xs font-medium text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                    </dd>
                    <h2 className="text-xl font-bold tracking-tight">
                      <Link
                        to={`/posts/${post.slug}`}
                        className="text-gray-900 hover:text-purple-500 transition duration-200 transform-gpu"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt && (
                      <div className="prose max-w-none text-xs text-gray-500">
                        {post.excerpt}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const indexPageQuery = graphql`
  {
    allGraphCmsPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        date: formattedDate
        excerpt
        slug
        title
      }
    }
  }
`

export default IndexPage
