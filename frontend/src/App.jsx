import { useState } from 'react'
import dataimg from './assets/Capture.PNG'

function App() {

    const [fullName, setFullName] = useState("");
    const [category, setCategory] = useState("");
    const [otherValue, setOtherValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Hello, here are my details:
Name: ${fullName}
Category: ${category} ${otherValue}`;
        window.open(`https://wa.me/9324504318?text=${encodeURIComponent(message)}`, "_blank");
    };

    const groups = [
        {
            title: "HR Professionals",
            desc: "Connect with HRs to discuss recruitment strategies, policies, and workplace culture.",
            link: "https://chat.whatsapp.com/B7AnSy9NvnB39Z46dDVAOz",
        },
        {
            title: "Jobs",
            desc: "Find and share job opportunities across different industries and locations.",
            link: "https://chat.whatsapp.com/IAANtPHyU5p5s0pcGUyBIp",
        },
        {
            title: "Internship",
            desc: "Get internship updates, apply to opportunities, and interact with recruiters.",
            link: "https://chat.whatsapp.com/JSjGz4Ufsh0BKTXZOt9gVX",
        },
        {
            title: "Govt. Exam Updates",
            desc: "Stay updated with notifications, exam patterns, and preparation tips for government exams.",
            link: "https://chat.whatsapp.com/B9JfaTJhdhK9JbIoXBKGwb",
        },
        {
            title: "Real Estate",
            desc: "Discuss property deals, investment tips, and the latest trends in real estate.",
            link: "https://chat.whatsapp.com/JdxunLVthV49y056IwsWXk",
        },
        {
            title: "Movies and WebSeries",
            desc: "Share reviews, recommendations, and updates on trending movies and web series.",
            link: "https://chat.whatsapp.com/Hw5NdkKB2eN4QXnviXmmwc",
        },
        {
            title: "Digital Marketing",
            desc: "Learn SEO, social media, and online marketing strategies from professionals.",
            link: "https://chat.whatsapp.com/HjQ1ZMb3TFZAC2FKkcmbIw",
        },
        {
            title: "Code & Coupons",
            desc: "Get discount coupons, promo codes, and offers on shopping & services.",
            link: "https://chat.whatsapp.com/L3R0wUhmfKy9PAdfv55R3E",
        },
        {
            title: "Stock and Trading",
            desc: "Discuss stock market updates, trading strategies, and investment insights.",
            link: "https://chat.whatsapp.com/BvCxQNudOsiBV5e8U7Qxfg",
        },
        {
            title: "Tutor Group",
            desc: "Join tutors and learners to share study material, guidance, and tips.",
            link: "https://chat.whatsapp.com/LgoZvMnDr0G3SsHjt0KZsZ",
        },
        {
            title: "Blue Collor Jobs",
            desc: "Find job opportunities for skilled and unskilled workers in various fields.",
            link: "https://chat.whatsapp.com/BIpoFbrR8RU0fDsisdkZT4",
        },
    ];


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

                    {groups.map((group, index) => (
                        <div className="item" key={index}>
                            <h3>
                                <i className="fa fa-whatsapp"></i> {group.title}
                            </h3>
                            <p>{group.desc}</p>
                            <a href={group.link} target="_blank" rel="noopener noreferrer">
                                Join Group
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section id='getdata'>
                <h2>Get Verified Data</h2>
                <div className='getdiv'>
                    <img src={dataimg} alt="" />
                    <form onSubmit={handleSubmit}>
                        <h3>Fill Form</h3>
                        <input type="text" placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                            <option value="">Select Category</option>
                            <option value="hr">HR's</option>
                            <option value="student">Student</option>
                            <option value="college">college</option>
                            <option value="other">other</option>
                        </select>
                        {category === "other" && (
                            <input type="text" placeholder='Enter your category' value={otherValue} onChange={(e) => setOtherValue(e.target.value)} required />
                        )}
                        <input type="submit" className='btn' value="SUBMIT" />
                    </form>

                </div>
            </section>

            <section id="readytofind">
                <div>
                    <h2>Ready to Find Your Community?</h2>
                    <p>Join millions of users who have discovered amazing WhatsApp groups through our platform. <br /> Start
                        yourjourney today!</p>
                    <a href="#group">Start Exploring Groups</a>
                </div>
            </section>

            <section id="footer">
                <div>
                    <h2>WhatsApp Communities</h2>
                    <p>Connecting people through amazing WhatsApp communities worldwide.</p>
                    <div>
                        <a href="#">Home</a>
                        <a href="#whychoose">Why-Choose-us</a>
                        <a href="#group">Our-Group</a>
                    </div>
                    <hr />
                    <p>Built for you by <a href="https://www.doltec.in/" target="_blank" rel="noopener noreferrer">DOLTEC.IN</a></p>
                    <p>🚀 Empowering digital journeys with <a href="https://www.doltec.in/" target="_blank" rel="noopener noreferrer">DOLTEC.IN</a></p>
                </div>
            </section>
        </>
    )
}

export default App