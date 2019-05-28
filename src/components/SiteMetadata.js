import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
            siteMetadata {
                url
                title
                description
                copyright
                author {
                    name
                    photo
                    bio
                    contacts {
                        email
                        twitter
                        github
                    }
                }
                menu {
                    label,
                    path
                }
            }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
