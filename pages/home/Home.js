// @flow
import React from 'react'
import { connect } from 'react-redux'

import { Nav, Footer, Copyright } from '../components'
import Clock from './Clock'

type Props = {
  lastUpdate: number,
  light: boolean
}

const mapStateToProps = state => ({
  lastUpdate: state.basic.lastUpdate,
  light: state.basic.light
})

const Home = (props: Props) => (
  <div id="wrapper" className="fade-in">
    {/* Intro */}
    <div id="intro">
      <h1>
        This is<br />
        Massively
      </h1>
      <p>
        A free, fully responsive HTML5 + CSS3 site template designed by{' '}
        <a href="https://twitter.com/ajlkn">@ajlkn</a> for{' '}
        <a href="https://html5up.net">HTML5 UP</a>
        <br />
        and released for free under the{' '}
        <a href="https://html5up.net/license">Creative Commons license</a>.
      </p>
      <ul className="actions">
        <li>
          <a href="#header" className="button icon solo fa-arrow-down scrolly">
            Continue
          </a>
        </li>
      </ul>
    </div>

    {/* Header */}
    <header id="header">
      <a href="index.html" className="logo">
        Massively
      </a>
    </header>

    {/* Nav */}
    <Nav />

    {/* Main */}
    <div id="main">
      {/* Featured Post */}
      <article className="post featured">
        <header className="major">
          <span className="date">
            <Clock lastUpdate={props.lastUpdate} light={props.light} />
          </span>
          <h2>
            <a href="#">
              And this is a<br />
              Index Page
            </a>
          </h2>
          <p>
            Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
            facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
            amet nullam sed etiam veroeros.
          </p>
        </header>
        <a href="#" className="image main">
          <img src="static/images/pic01.jpg" alt="" />
        </a>
        <ul className="actions">
          <li>
            <a href="#" className="button big">
              Full Story
            </a>
          </li>
        </ul>
      </article>

      {/* Posts */}
      <section className="posts">
        <article>
          <header>
            <span className="date">April 24, 2017</span>
            <h2>
              <a href="#">
                Sed magna<br />
                ipsum faucibus
              </a>
            </h2>
          </header>
          <a href="#" className="image fit">
            <img src="static/images/pic02.jpg" alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Story
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header>
            <span className="date">April 22, 2017</span>
            <h2>
              <a href="#">
                Primis eget<br />
                imperdiet lorem
              </a>
            </h2>
          </header>
          <a href="#" className="image fit">
            <img src="static/images/pic03.jpg" alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Story
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header>
            <span className="date">April 18, 2017</span>
            <h2>
              <a href="#">
                Ante mattis<br />
                interdum dolor
              </a>
            </h2>
          </header>
          <a href="#" className="image fit">
            <img src="static/images/pic04.jpg" alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Story
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header>
            <span className="date">April 14, 2017</span>
            <h2>
              <a href="#">
                Tempus sed<br />
                nulla imperdiet
              </a>
            </h2>
          </header>
          <a href="#" className="image fit">
            <img src="static/images/pic05.jpg" alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Story
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header>
            <span className="date">April 11, 2017</span>
            <h2>
              <a href="#">
                Odio magna<br />
                sed consectetur
              </a>
            </h2>
          </header>
          <a href="#" className="image fit">
            <img src="static/images/pic06.jpg" alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Story
              </a>
            </li>
          </ul>
        </article>
        <article>
          <header>
            <span className="date">April 7, 2017</span>
            <h2>
              <a href="#">
                Augue lorem<br />
                primis vestibulum
              </a>
            </h2>
          </header>
          <a href="#" className="image fit">
            <img src="static/images/pic07.jpg" alt="" />
          </a>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis magna etiam.
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Story
              </a>
            </li>
          </ul>
        </article>
      </section>

      {/* Footer */}
      <footer>
        <div className="pagination">
          {/* <a href="#" className="previous">Prev</a>*/}
          <a href="#" className="page active">
            1
          </a>
          <a href="#" className="page">
            2
          </a>
          <a href="#" className="page">
            3
          </a>
          <span className="extra">&hellip;</span>
          <a href="#" className="page">
            8
          </a>
          <a href="#" className="page">
            9
          </a>
          <a href="#" className="page">
            10
          </a>
          <a href="#" className="next">
            Next
          </a>
        </div>
      </footer>
    </div>

    {/* Footer */}
    <Footer />

    {/* Copyright */}
    <Copyright />
  </div>
)

export default connect(mapStateToProps, null)(Home)
