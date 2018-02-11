// @flow
import React from 'react'
import { connect } from 'react-redux'

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
  <React.Fragment>
    <article className="post featured">
      <header className="major">
        <span className="date" />
        <h2>
          <a href="#">
            And this is a<br />
            Index Page
          </a>
        </h2>
        <p>
          Aenean ornare velit lacus varius enim ullamcorper proin aliquam
          facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor amet
          nullam sed etiam veroeros.
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

    <Clock lastUpdate={props.lastUpdate} light={props.light} />

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
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
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
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
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
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
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
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
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
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
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
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
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
  </React.Fragment>
)

export default connect(mapStateToProps, null)(Home)
