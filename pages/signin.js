// @flow
import React from 'react'
import Link from 'next/link'

import { Layout } from '../components'

type Props = {}

class SignIn extends React.Component<Props, *> {
  render () {
    return (
      <Layout title="Sign In | Gona" hideNav={true}>
        <div className="page">
          <div className="page-single">
            <div className="container">
              <div className="row">
                <div className="col col-login mx-auto">
                  <div className="text-center mb-6">
                    <img
                      src="/static/images/logo.png"
                      className="h-6"
                      width="32"
                      alt=""
                    />
                  </div>
                  <form className="card" action="" method="post">
                    <div className="card-body p-6">
                      <div className="card-title">Login to your account</div>
                      <div className="form-group">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          Password
                          <a
                            href="./forgot-password.html"
                            className="pull-right small"
                          >
                            I forgot password
                          </a>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <label className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                          />
                          <span className="custom-control-label">
                            Remember me
                          </span>
                        </label>
                      </div>
                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="text-center text-muted">
                    Don't have account yet?{' '}
                    <Link href="/signup">
                      <a>Sign up</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SignIn
