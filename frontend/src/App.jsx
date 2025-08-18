import { useState } from 'react'

function App() {

    const groups = [
        {
            title: "HR Professionals",
            desc: "Connect with HRs to discuss recruitment strategies, policies, and workplace culture.",
            link: "https://chat.whatsapp.com/HEr7DVMf8rO9G5tdkYruG0",
        },
        {
            title: "Jobs",
            desc: "Find and share job opportunities across different industries and locations.",
            link: "https://chat.whatsapp.com/LDDQkaPpISY37jPhN78WXf",
        },
        {
            title: "Internship",
            desc: "Get internship updates, apply to opportunities, and interact with recruiters.",
            link: "https://chat.whatsapp.com/FqGBBu4IGdiBTZNebtKPPU",
        },
        {
            title: "Govt. Exam Updates",
            desc: "Stay updated with notifications, exam patterns, and preparation tips for government exams.",
            link: "https://chat.whatsapp.com/Jd2Dy6z8PlvBnVKzl2DSMS",
        },
        {
            title: "Real Estate",
            desc: "Discuss property deals, investment tips, and the latest trends in real estate.",
            link: "https://chat.whatsapp.com/your-realestate-link",
        },
        {
            title: "Movies and WebSeries",
            desc: "Share reviews, recommendations, and updates on trending movies and web series.",
            link: "https://chat.whatsapp.com/your-movies-link",
        },
        {
            title: "Digital Marketing",
            desc: "Learn SEO, social media, and online marketing strategies from professionals.",
            link: "https://chat.whatsapp.com/your-marketing-link",
        },
        {
            title: "Code & Coupons",
            desc: "Get discount coupons, promo codes, and offers on shopping & services.",
            link: "https://chat.whatsapp.com/your-coupons-link",
        },
        {
            title: "Stock and Trading",
            desc: "Discuss stock market updates, trading strategies, and investment insights.",
            link: "https://chat.whatsapp.com/your-stock-link",
        },
        {
            title: "Tutor Group",
            desc: "Join tutors and learners to share study material, guidance, and tips.",
            link: "https://chat.whatsapp.com/your-tutor-link",
        },
        {
            title: "Blue Collor Jobs",
            desc: "Find job opportunities for skilled and unskilled workers in various fields.",
            link: "https://chat.whatsapp.com/your-bluecollar-link",
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
