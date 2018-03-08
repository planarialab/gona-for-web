// @flow
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <a href="/">
              <strong>Gona</strong>
            </a>
          </div>

          <div className="column is-offset-one-quarter">
            <div className="footer-item-header">Product</div>
            <ul className="list-unstyled">
              <li>
                <a href="/account" className="footer-item">
                  Account
                </a>
              </li>
              <li>
                <a href="/pricing" className="footer-item">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/faq" className="footer-item">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="footer-item-header">Connect</div>
            <ul className="list-unstyled">
              <li>
                <a href="/contact" className="footer-item">
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/gona"
                  className="footer-item"
                  target="noopener"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://telegram.me/gona"
                  className="footer-item"
                  target="noopener"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="footer-item-header">Legal</div>
            <ul className="list-unstyled">
              <li>
                <a href="/terms" className="footer-item">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="/privacy" className="footer-item">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="has-text-centered copyright has-text-grey-light">
          Copyright©2018 planaria.com. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
