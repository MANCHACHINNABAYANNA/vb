import React from 'react'
import './Footer.css'

function Footer() {
  const [email, setEmail] = React.useState('')
  const [setGetEmail] = React.useState('')
  const handleSubmit = () => {
    if (email) {
      alert(`Thank you for subscribing, ${email}!`)
    } else {
      alert('Please enter a valid email address.')
    }

    fetch('https://module-test-14910-default-rtdb.asia-southeast1.firebasedatabase.app/emails.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email }),
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setEmail('')
        setGetEmail('')
      })
  }

  return (
    <div className='footer'>
      <div className='footer1'>
        <div className='footer1__left'>
          <p>Acciojob</p>
        </div>
        <div className='footer1__right'>
          <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/768px-Facebook_f_logo_%282021%29.svg.png?20210818083032' alt='facebook'></img>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/1200px-Instagram.svg.png' alt='instagram'></img>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png' alt='twitter' ></img>
        </div>
      </div>
      <div className='hr'>
        <hr />
      </div>
      <div className='list1'>
        <h3>Company Info</h3>
        <ul>
          <li>About Us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='list2'>
        <h3>Legal</h3>
        <ul>
          <li>About Us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='list3'>
        <h3>Features</h3>
        <ul>
          <li>Business Marketing</li>
          <li>User Analytic</li>
          <li>Live Chat</li>
          <li>Unlimited Support</li>
        </ul>
      </div>
      <div className='list4'>
        <h3>Resources</h3>
        <ul>
          <li>IOS & Android</li>
          <li>Watch a Demo</li>
          <li>Customers</li>
          <li>API</li>
        </ul>
      </div>
      <div className='list5'>
        <h3>Get in Touch</h3>
        <div >
          <input type="email" required placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
          <button className='sub' onClick={handleSubmit}>Subscribe</button>
        </div>
        <p>Lorem impsum dolor amit</p>
      </div>

      <div className='footer2'>
        <p>
          Made with ❤️️ at Acciojob
        </p>
      </div>
    </div>
  )
}

export default Footer