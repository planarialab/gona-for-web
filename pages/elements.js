// @flow
import React from 'react'

import { Nav, Copyright } from './components'

export default () => (
  <div id="wrapper">
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
      {/* Post */}
      <section className="post">
        <header className="major">
          <h1>
            Elements<br />
            Reference
          </h1>
        </header>

        {/* Text stuff */}
        <h2>Text</h2>
        <p>
          This is <b>bold</b> and this is <strong>strong</strong>. This is{' '}
          <i>italic</i> and this is <em>emphasized</em>. This is{' '}
          <sup>superscript</sup> text and this is <sub>subscript</sub> text.
          This is <u>underlined</u> and this is code: <code>for (;;) </code>.
          Finally, this is a <a href="#">link</a>.
        </p>
        <hr />
        <h2>Heading Level 2</h2>
        <h3>Heading Level 3</h3>
        <h4>Heading Level 4</h4>
        <h5>Heading Level 5</h5>
        <h6>Heading Level 6</h6>
        <hr />
        <header>
          <h2>Heading with a Subtitle</h2>
          <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
        </header>
        <p>
          Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
          porttitor sem non mi integer non faucibus ornare mi ut ante amet
          placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
          varius montes viverra nibh in adipiscing blandit tempus accumsan.
        </p>
        <header>
          <h3>Heading with a Subtitle</h3>
          <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
        </header>
        <p>
          Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
          porttitor sem non mi integer non faucibus ornare mi ut ante amet
          placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
          varius montes viverra nibh in adipiscing blandit tempus accumsan.
        </p>
        <header>
          <h4>Heading with a Subtitle</h4>
          <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
        </header>
        <p>
          Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
          porttitor sem non mi integer non faucibus ornare mi ut ante amet
          placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
          varius montes viverra nibh in adipiscing blandit tempus accumsan.
        </p>

        <hr />

        {/* Lists */}
        <h2>Lists</h2>
        <div className="row">
          <div className="6u 12u$(small)">
            <h3>Unordered</h3>
            <ul>
              <li>Dolor pulvinar etiam.</li>
              <li>Sagittis lorem eleifend.</li>
              <li>Felis feugiat dolore viverra.</li>
              <li>Dolor pulvinar etiam.</li>
            </ul>

            <h3>Alternate</h3>
            <ul className="alt">
              <li>Dolor pulvinar etiam etiam.</li>
              <li>Sagittis adipiscing eleifend.</li>
              <li>Felis enim dolore viverra.</li>
              <li>Dolor pulvinar etiam etiam.</li>
            </ul>
          </div>
          <div className="6u$ 12u$(small)">
            <h3>Ordered</h3>
            <ol>
              <li>Dolor pulvinar etiam.</li>
              <li>Etiam vel felis at viverra.</li>
              <li>Felis enim feugiat magna.</li>
              <li>Etiam vel felis nullam.</li>
              <li>Felis enim et tempus.</li>
            </ol>

            <h3>Icons</h3>
            <ul className="icons">
              <li>
                <a href="#" className="icon fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-github">
                  <span className="label">Github</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon fa-dribbble">
                  <span className="label">Dribbble</span>
                </a>
              </li>
            </ul>
            <ul className="icons alt">
              <li>
                <a href="#" className="icon alt fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon alt fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon alt fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon alt fa-github">
                  <span className="label">Github</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon alt fa-dribbble">
                  <span className="label">Dribbble</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h3>Definition</h3>
        <dl>
          <dt>Item 1</dt>
          <dd>
            <p>
              Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
              vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
              adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
            </p>
          </dd>
          <dt>Item 2</dt>
          <dd>
            <p>
              Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
              vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
              adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
            </p>
          </dd>
          <dt>Item 3</dt>
          <dd>
            <p>
              Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
              vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
              adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
            </p>
          </dd>
        </dl>

        <h3>Actions</h3>
        <ul className="actions">
          <li>
            <a href="#" className="button special">
              Special
            </a>
          </li>
          <li>
            <a href="#" className="button">
              Default
            </a>
          </li>
        </ul>
        <ul className="actions small">
          <li>
            <a href="#" className="button special small">
              Small
            </a>
          </li>
          <li>
            <a href="#" className="button small">
              Small
            </a>
          </li>
        </ul>
        <div className="row">
          <div className="6u 12u$(small)">
            <ul className="actions vertical">
              <li>
                <a href="#" className="button special">
                  Default
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Default
                </a>
              </li>
            </ul>
          </div>
          <div className="6u 12u$(small)">
            <ul className="actions vertical small">
              <li>
                <a href="#" className="button special small">
                  Small
                </a>
              </li>
              <li>
                <a href="#" className="button small">
                  Small
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="6u 12u$(small)">
            <ul className="actions vertical">
              <li>
                <a href="#" className="button special fit">
                  Default
                </a>
              </li>
              <li>
                <a href="#" className="button fit">
                  Default
                </a>
              </li>
            </ul>
          </div>
          <div className="6u$ 12u$(small)">
            <ul className="actions vertical small">
              <li>
                <a href="#" className="button special small fit">
                  Small
                </a>
              </li>
              <li>
                <a href="#" className="button small fit">
                  Small
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        {/* Blockquote */}
        <h2>Blockquote</h2>
        <blockquote>
          Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
          sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus
          vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing
          accumsan faucibus. Vestibulum ante ipsum primis in faucibus
          vestibulum. Blandit adipiscing eu felis.
        </blockquote>

        <hr />

        {/* Table */}
        <h2>Table</h2>

        <h3>Default</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item 1</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 2</td>
                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td> Morbi faucibus arcu accumsan lorem.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 4</td>
                <td>Vitae integer tempus condimentum.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 5</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2" />
                <td>100.00</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h3>Alternate</h3>
        <div className="table-wrapper">
          <table className="alt">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item 1</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 2</td>
                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td> Morbi faucibus arcu accumsan lorem.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>Item 4</td>
                <td>Vitae integer tempus condimentum.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>Item 5</td>
                <td>Ante turpis integer aliquet porttitor.</td>
                <td>29.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2" />
                <td>100.00</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <hr />

        {/* Buttons */}
        <h2>Buttons</h2>
        <ul className="actions">
          <li>
            <a href="#" className="button special">
              Special
            </a>
          </li>
          <li>
            <a href="#" className="button">
              Default
            </a>
          </li>
        </ul>
        <ul className="actions">
          <li>
            <a href="#" className="button special big">
              Big
            </a>
          </li>
          <li>
            <a href="#" className="button">
              Default
            </a>
          </li>
          <li>
            <a href="#" className="button small">
              Small
            </a>
          </li>
        </ul>
        <ul className="actions fit">
          <li>
            <a href="#" className="button special fit">
              Fit
            </a>
          </li>
          <li>
            <a href="#" className="button fit">
              Fit
            </a>
          </li>
        </ul>
        <ul className="actions fit small">
          <li>
            <a href="#" className="button special fit small">
              Fit + Small
            </a>
          </li>
          <li>
            <a href="#" className="button fit small">
              Fit + Small
            </a>
          </li>
        </ul>
        <ul className="actions">
          <li>
            <a href="#" className="button special icon fa-search">
              Icon
            </a>
          </li>
          <li>
            <a href="#" className="button icon fa-download">
              Icon
            </a>
          </li>
        </ul>
        <ul className="actions">
          <li>
            <span className="button special disabled">Special</span>
          </li>
          <li>
            <span className="button disabled">Default</span>
          </li>
        </ul>

        <hr />

        {/* Form */}
        <h2>Form</h2>

        <form method="post" action="#" className="alt">
          <div className="row uniform">
            <div className="6u 12u$(xsmall)">
              <input
                type="text"
                name="demo-name"
                id="demo-name"
                value=""
                placeholder="Name"
              />
            </div>
            <div className="6u$ 12u$(xsmall)">
              <input
                type="email"
                name="demo-email"
                id="demo-email"
                value=""
                placeholder="Email"
              />
            </div>
            {/* Break */}
            <div className="12u$">
              <div className="select-wrapper">
                <select name="demo-category" id="demo-category">
                  <option value="">- Category -</option>
                  <option value="1">Manufacturing</option>
                  <option value="1">Shipping</option>
                  <option value="1">Administration</option>
                  <option value="1">Human Resources</option>
                </select>
              </div>
            </div>
            {/* Break */}
            <div className="4u 12u$(small)">
              <input
                type="radio"
                id="demo-priority-low"
                name="demo-priority"
                checked
                onChange={() => {}}
              />
              <label htmlFor="demo-priority-low">Low</label>
            </div>
            <div className="4u 12u$(small)">
              <input
                type="radio"
                id="demo-priority-normal"
                name="demo-priority"
              />
              <label htmlFor="demo-priority-normal">Normal</label>
            </div>
            <div className="4u$ 12u$(small)">
              <input
                type="radio"
                id="demo-priority-high"
                name="demo-priority"
              />
              <label htmlFor="demo-priority-high">High</label>
            </div>
            {/* Break */}
            <div className="6u 12u$(small)">
              <input type="checkbox" id="demo-copy" name="demo-copy" />
              <label htmlFor="demo-copy">Email me a copy</label>
            </div>
            <div className="6u$ 12u$(small)">
              <input
                type="checkbox"
                id="demo-human"
                name="demo-human"
                checked
                onChange={() => {}}
              />
              <label htmlFor="demo-human">I am a human</label>
            </div>
            {/* Break */}
            <div className="12u$">
              <textarea
                name="demo-message"
                id="demo-message"
                placeholder="Enter your message"
                rows="6"
              />
            </div>
            {/* Break */}
            <div className="12u$">
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="special"
                  />
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </div>
          </div>
        </form>

        <hr />

        {/* Image */}
        <h2>Image</h2>

        <h3>Fit</h3>
        <span className="image fit">
          <img src="static/images/pic01.jpg" alt="" />
        </span>
        <div className="box alt">
          <div className="row 50% uniform">
            <div className="4u">
              <span className="image fit">
                <img src="static/images/pic02.jpg" alt="" />
              </span>
            </div>
            <div className="4u">
              <span className="image fit">
                <img src="static/images/pic03.jpg" alt="" />
              </span>
            </div>
            <div className="4u$">
              <span className="image fit">
                <img src="static/images/pic04.jpg" alt="" />
              </span>
            </div>
            {/* Break */}
            <div className="4u">
              <span className="image fit">
                <img src="static/images/pic04.jpg" alt="" />
              </span>
            </div>
            <div className="4u">
              <span className="image fit">
                <img src="static/images/pic02.jpg" alt="" />
              </span>
            </div>
            <div className="4u$">
              <span className="image fit">
                <img src="static/images/pic03.jpg" alt="" />
              </span>
            </div>
            {/* Break */}
            <div className="4u">
              <span className="image fit">
                <img src="static/images/pic03.jpg" alt="" />
              </span>
            </div>
            <div className="4u">
              <span className="image fit">
                <img src="static/images/pic04.jpg" alt="" />
              </span>
            </div>
            <div className="4u$">
              <span className="image fit">
                <img src="static/images/pic02.jpg" alt="" />
              </span>
            </div>
          </div>
        </div>

        <h3>Left &amp; Right</h3>
        <p>
          <span className="image left">
            <img src="static/images/pic08.jpg" alt="" />
          </span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt
          felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
          faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
          adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
          tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
          primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
          faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
          adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
          tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
          primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
          volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
          praesent. Vestibulum ante ipsum primis in faucibus magna blandit
          adipiscing eu felis iaculis.
        </p>
        <p>
          <span className="image right">
            <img src="static/images/pic09.jpg" alt="" />
          </span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt
          felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
          faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
          adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
          tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
          primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
          faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
          adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
          tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum
          primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis
          volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
          praesent. Vestibulum ante ipsum primis in faucibus magna blandit
          adipiscing eu felis iaculis.
        </p>

        <hr />

        {/* Box */}
        <h2>Box</h2>
        <div className="box">
          <p>
            Felis sagittis eget tempus primis in faucibus vestibulum. Blandit
            adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu
            faucibus. Integer ac pellentesque praesent tincidunt felis sagittis
            eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus
            vestibulum. Blandit adipiscing eu ipsum primis in faucibus
            vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus lorem ipsum dolor sit amet nullam.
            Integer ac pellentesque praesent tincidunt felis sagittis eget.
            tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus
            euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
            Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan
            eu faucibus. Integer ac pellentesque praesent tincidunt felis
            sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
            Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu
            felis iaculis volutpat lorem ipsum dolor.
          </p>
        </div>

        <hr />

        {/* Preformatted Code */}
        <h2>Preformatted</h2>
        <pre>
          <code>var a = 1;</code>
        </pre>
      </section>
    </div>

    {/* Copyright */}
    <Copyright />
  </div>
)
