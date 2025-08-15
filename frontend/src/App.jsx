import { useState } from 'react'

function App() {

  return (
    <>
      <section id="hero">
        <div>
            <h1>Discover & Join Curated WhatsApp Communities</h1>
            <p>One-click access to interest-based groups — connect, collaborate & grow.</p>
            <a href="#group">Browse Group ↓</a>
        </div>
    </section>

    <section id="whychoose">
        <h2>why choose ?</h2>
        <div className="card">
            <div className="item">
                <i className="fa fa-users"></i>
                <h3>Verified Groups</h3>
                <p>All groups are manually verified to ensure quality content and active communities.</p>
            </div>
            <div className="item">
                <i className="fa fa-comments"></i>
                <h3>Active Communities</h3>
                <p>Join vibrant communities with thousands of active members sharing valuable content daily.</p>
            </div>
            <div className="item">
                <i className="fa fa-bolt"></i>
                <h3>Instant Join</h3>
                <p>One-click joining process - no complicated steps or waiting periods required.</p>
            </div>
            <div className="item">
                <i className="fa fa-globe"></i>
                <h3>Global Reach</h3>
                <p>Connect with people worldwide across different languages, cultures, and time zones.</p>
            </div>
        </div>
    </section>

    <section id="group">
        <h2>Featured Communities</h2>
        <div className="groupcard">
            <div className="item">
                <h3><i className="fa fa-whatsapp"></i> HR Professionals</h3>
                <p>Discuss hiring strategies, share insights, and grow with fellow HR experts.</p>
                <a href="">Join Group</a>
            </div>
            <div className="item">
                <h3><i className="fa fa-whatsapp"></i> HR Professionals</h3>
                <p>Discuss hiring strategies, share insights, and grow with fellow HR experts.</p>
                <a href="">Join Group</a>
            </div>
            <div className="item">
                <h3><i className="fa fa-whatsapp"></i> HR Professionals</h3>
                <p>Discuss hiring strategies, share insights, and grow with fellow HR experts.</p>
                <a href="">Join Group</a>
            </div>
            <div className="item">
                <h3><i className="fa fa-whatsapp"></i> HR Professionals</h3>
                <p>Discuss hiring strategies, share insights, and grow with fellow HR experts.</p>
                <a href="">Join Group</a>
            </div>
            <div className="item">
                <h3><i className="fa fa-whatsapp"></i> HR Professionals</h3>
                <p>Discuss hiring strategies, share insights, and grow with fellow HR experts.</p>
                <a href="">Join Group</a>
            </div>
            <div className="item">
                <h3><i className="fa fa-whatsapp"></i> HR Professionals</h3>
                <p>Discuss hiring strategies, share insights, and grow with fellow HR experts.</p>
                <a href="">Join Group</a>
            </div>
            <div className="item">
                <h3><i className="fa fa-whatsapp"></i> HR Professionals</h3>
                <p>Discuss hiring strategies, share insights, and grow with fellow HR experts.</p>
                <a href="">Join Group</a>
            </div>
            <div className="item">
                <h3><i className="fa fa-whatsapp"></i> HR Professionals</h3>
                <p>Discuss hiring strategies, share insights, and grow with fellow HR experts.</p>
                <a href="">Join Group</a>
            </div>
            <div className="item">
                <h3><i className="fa fa-whatsapp"></i> HR Professionals</h3>
                <p>Discuss hiring strategies, share insights, and grow with fellow HR experts.</p>
                <a href="">Join Group</a>
            </div>
            <div className="item">
                <h3><i className="fa fa-whatsapp"></i> HR Professionals</h3>
                <p>Discuss hiring strategies, share insights, and grow with fellow HR experts.</p>
                <a href="">Join Group</a>
            </div>
        </div>
    </section>

    <section id="readytofind">
        <div>
            <h2>Ready to Find Your Community?</h2>
            <p>Join millions of users who have discovered amazing WhatsApp groups through our platform. <br/> Start
                yourjourney today!</p>
            <a href="#group">Start Exploring Groups</a>
        </div>
    </section>

    <section id="footer">
        <div>
            <h2>WhatsApp Communities</h2>
            <p>Connecting people through amazing WhatsApp communities worldwide.</p>
            <div>
                <a href="#hero">Home</a>
                <a href="#whychoose">Why-Choose-us</a>
                <a href="#group">Our-Group</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default App
