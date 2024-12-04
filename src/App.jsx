import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
     <div className="nav">
        <div className="nav1">
          <div className="login">
            <img src="uil--user-circle.svg" alt="" />
          </div>
          <div className="logintext">Login</div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <button><img src="ic--round-search.svg" alt="" /></button>
          </div>
        </div>
        <div className="nav2">
          <div className="logo">
            <img src="https://www.miniorange.com/images/logo/miniorange-logo.webp"alt="" />
          </div>
          <div className="nav2p2">
            <div className="product">
              <span>
                Products
                <img src={"mingcute--down-line.svg"} alt="" style={{ marginLeft: '5px' }} />
              </span>
              <div className="producthover">
                <p className="ddmhover">Single Sign-On</p>
                <p className="ddmhover">Multi-Factor Authentication</p>
                <p className="ddmhover">User Lifecycle Management</p>
                <p className="ddmhover">Privileged Access Management</p>
                <p className="ddmhover">Cloud Access Security Broker</p>
                <p className="ddmhover">View Other Products</p>
              </div>
            </div>

            <div className="plugins">
              <span>
                Plugins
                <img src="mingcute--down-line.svg" alt="" />
              </span>
              <div className="pluginshover">
                <p className="ddmhover">WordPress</p>
                <p className="ddmhover">Atlassian</p>
                <p className="ddmhover">Drupal</p>
                <p className="ddmhover">Shopify</p>
                <p className="ddmhover">Joomla</p>
                <p className="ddmhover">DNN</p>
              </div>
            </div>
            <div className="pricing">
              <span>
                Pricing
                <img src="mingcute--down-line.svg" alt="" />
              </span>
              <div className="pricinghover">
                <p className="ddmhover">Workforce Identity</p>
                <p className="ddmhover">Customer Identity</p>
                <p className="ddmhover">PAM</p>
                <p className="ddmhover">Shopify Apps</p>
                <p className="ddmhover">CASB</p>
              </div>
            </div>
            <div className="resources">
              <span>
                Resources
                <img src="mingcute--down-line.svg" alt="" />
              </span>
              <div className="resourceshover">
                <p className="ddmhover">Forum</p>
                <p className="ddmhover">Video Library</p>
                <p className="ddmhover">Blogs</p>
                <p className="ddmhover">Api Docs</p>
                <p className="ddmhover">Webinars</p>
              </div>
            </div>
            <div className="company">
              <span>
                Company
                <img src="mingcute--down-line.svg" alt="" />
              </span>
              <div className="companyhover">
                <p className="ddmhover">About Us</p>
                <p className="ddmhover">News</p>
                <p className="ddmhover">Events</p>
                <p className="ddmhover">Careers</p>
                <p className="ddmhover">Securities</p>
              </div>
            </div>
            <div className="Customer">
              <span>Customers</span>
            </div>
          </div>
          <div className="signup">
            <button>Sign Up</button>
          </div>
          <div className="contactus">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="second">
        <div className="second1">
          <h1>
            Secure Identity, Access
            <span>& Data Everywhere</span>
          </h1>
          <p>
            Get industry-leading security solutions for your employees, customers, and partners to enhance
            productivity, frictionless user experience, and increased customer sign-ups.
          </p>
          <div className="reqdemo">
            <button className="but1"><b>Request a Demo</b></button>
            <button className="but2"><b>Try Now For Free</b></button>
          </div>
        </div>
        <div className="second2">
          <img src="https://www.miniorange.com/images/landing-page/miniorange-index.svg" alt="" />
        </div>
      </div>
      <div className="third">
        <div className="third1">
          <b className="num">6000</b><b className="plus">+</b>
          <p>Applications</p>
        </div>
        <img src="ph--line-vertical-thin (1).svg" alt="" />
        <div className="third2">
          <b className="num">25000</b><b className="plus">+</b>
          <p>Customers</p>
        </div>
        <img src="ph--line-vertical-thin (1).svg" alt="" />
        <div className="third3">
          <b className="num">24</b><b className="plus">*</b><b style={{ fontSize: '40px' }}>7</b>
          <p>Worldwide Support</p>
        </div>
      </div>
      <div className="four">
        <div className="four1">
          <img src="https://www.miniorange.com/images/iam/customer-circle.webp" alt="" />
          <p className="four1text">Trusted Customers around the World ...</p>
          <a href="" className="four1text2">View more &#8594;</a>
        </div>
        <div className="four2">
          <ul>
            <li className="finance">
              <span className="fimage"><img src="https://www.miniorange.com/images/iam/finance-color.webp" alt="" /></span>
              <span className="financetext">Finance</span>
            </li>
            <li className="healthcare">
              <span className="fimage"><img src="https://www.miniorange.com/images/iam/healthcare.webp" alt="" /></span>
              <span className="healthcaretext">Healthcare</span>
            </li>
            <li className="government">
              <span className="fimage"><img src="https://www.miniorange.com/images/iam/customers.webp" alt="" /></span>
              <span className="governmenttext">Government</span>
            </li>
            <li className="retail">
              <span className="fimage"><img src="https://www.miniorange.com/images/iam/retail.webp" alt="" /></span>
              <span className="retailtext">Retail</span>
            </li>
            <li className="education">
              <span className="fimage"><img src="https://www.miniorange.com/images/iam/education.webp" alt="" /></span>
              <span className="retailtext">Education</span>
            </li>
            <li className="education">
              <span className="fimage"><img src="https://www.miniorange.com/images/iam/technology.webp" alt="" /></span>
              <span className="retailtext">Telecom</span>
            </li>
          </ul>
        </div>
        <div className="four3">
          <div className="box1">
            <p className="box1p">Secure SSO Solution for DBS Bank</p>
            <p className="box1p2">
              Our On-Premise Identity Provider (IDP) provided DBS Bank with a solution to restrict
              access to Fortigate VPN with Multi-Factor Authentication.
            </p>
            <img src="dbs.png" alt="" />
            <a href="">Know More</a>
          </div>
          <div className="box2">
            <p className="box2p">Secure SSO Solution for Goldman Sachs</p>
            <p className="box2p2">
              miniOrange SAML SSO app: Seamless login to Jira using Identity Provider (IdP) with our
              miniOrange Jira SAML SSO app.
            </p>
            <img src="goldman-sachs-logo.png" alt="" />
          </div>
        </div>
      </div>

     
      <footer>
        <div className="footer1">
          <img src="footer-logo.png" alt="" />
        </div>
        <div className="footer2">
          <a href="">Privacy</a>
          <a href="">Terms</a>
          <a href="">Support</a>
        </div>
      </footer>

    </>
  )
}

export default App;
