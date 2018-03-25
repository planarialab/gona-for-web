// @flow
import React from 'react'

import { Layout } from '../components'

export default () => (
  <Layout title="Pricing | Gona" role="main">
    <style jsx>{`
      .pricing-header {
        max-width: 700px;
      }

      .card-deck .card {
        min-width: 220px;
      }

      .border-top {
        border-top: 1px solid #e5e5e5;
      }
      .border-bottom {
        border-bottom: 1px solid #e5e5e5;
      }

      .box-shadow {
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
      }
    `}</style>

    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Pricing</h1>
      <p className="lead">
        Quickly build an effective pricing table for your potential customers
        with this Bootstrap example. It's built with default Bootstrap
        components and utilities with little customization.
      </p>
    </div>
    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $0 <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button
              type="button"
              className="btn btn-lg btn-block btn-outline-primary"
            >
              Sign up for free
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $15 <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">
              Get started
            </button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              $29 <small className="text-muted">/ mo</small>
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">
              Contact us
            </button>
          </div>
        </div>
      </div>

      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg"
              alt=""
              width="24"
              height="24"
            />
            <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-muted" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </Layout>
)
