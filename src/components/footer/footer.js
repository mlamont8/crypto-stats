import React from 'react';



const Footer = () => (

    <footer>
        <section className="ft-announcement"><h3>For Demo Purposes Only</h3></section>
        <section className="ft-links">
        <div>          
            <h2 className="ft-title">About</h2>
            <ul>
                <li><a href="foo">Services</a></li>
                <li><a href="foo">Portfolio</a></li>
                <li><a href="foo">Pricing</a></li>
                <li><a href="foo">Customers</a></li>
                <li><a href="foo">Careers</a></li>
            </ul>
          </div>
        <div>
        <h2 className="ft-title">Resources</h2>
          <ul>
            <li><a href="foo">Docs</a></li>
            <li><a href="foo">Blog</a></li>
            <li><a href="foo">eBooks</a></li>
            <li><a href="foo">Webinars</a></li>
          </ul>
        </div>
            <div>
            <h2 className="ft-title">Contact</h2>
          <ul>
            <li><a href="foo">Help</a></li>
            <li><a href="foo">Sales</a></li>
            <li><a href="foo">Advertise</a></li>
          </ul>
            </div>
        </section>

        <section className="ft-email">
          <h2 className="ft-title">Stay Updated</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
       
            <form>
              <input type="email" name="email" placeholder="Enter email address" />
              <input type="submit" value="Subscribe" />
            </form>
         

        </section>

        <section className="ft-legal">
                <ul className="ft-legal-list">
                  <li><a href="foo">Terms &amp; Conditions</a></li>
                  <li><a href="foo">Privacy Policy</a></li>
                  <li>&copy; 2021 Copyright Marimi Lamont Taylor</li>
                </ul>
        </section>
    </footer>
);

export default Footer;