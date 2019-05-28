import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook_logo from '../img/social/facebook.svg'
import instagram_logo from '../img/social/instagram.svg'
import twitter_logo from '../img/social/twitter.svg'
import vimeo_logo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    const { menus, contacts } = this.props;
    const {facebook_link, twitter, instagram_link} = contacts;
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    {menus.map((item, index) =>(
                      <li key={index}>
                      <Link to={item.path} className="navbar-item">
                    {item.label}
                      </Link>
                      </li>
                    ))}
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href={facebook_link}>
                  <img
                    src={facebook_logo}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href={twitter}>
                  <img
                    className="fas fa-lg"
                    src={twitter_logo}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href={instagram_link}>
                  <img
                    src={instagram_logo}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo_logo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
