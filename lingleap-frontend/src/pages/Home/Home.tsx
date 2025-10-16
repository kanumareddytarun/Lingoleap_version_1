import React, { useState } from 'react';
import styles from './HomePage.module.css';
import Header from '../../components/Header/Header'; // <-- IMPORT THE HEADER

// Icons from react-icons
import { FaStar, FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF, FaPlus, FaMinus, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

// --- TODO: Add your images to src/assets and uncomment these lines ---
// import heroImage from '../../assets/hero-image.png';
// import trustedByCornell from '../../assets/trusted-by-cornell.png';
// ... and so on for all logos and images

const HomePage = () => {
  // State for the FAQ section
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  
  const faqData = [
    {
      question: "What is LingoLeap?",
      answer: "LingoLeap is a revolutionary AI-powered platform designed for TOEFL preparation. It offers personalized feedback, accurate score predictions, and comprehensive resources to help students achieve their target scores."
    },
    {
      question: "How does LingoLeap work?",
      answer: "You practice TOEFL speaking and writing tasks on our platform. Our AI analyzes your responses, provides instant scores, detailed feedback on areas like grammar and structure, and offers high-scoring model answers to help you improve."
    },
    {
      question: "How to Improve Writing Skills using Corrected Articles?",
      answer: "The platform provides corrected versions of your essays and customized high-score answers. By studying the corrections and suggestions, you can understand your mistakes, learn better sentence structures, and improve your vocabulary."
    },
    {
      question: "How does LingoLeap charge for its services?",
      answer: "LingoLeap operates on a credit-based system. We offer various subscription plans and credit packages to suit different needs. You can start with a free practice test to experience our platform."
    },
    {
      question: "How are LingoLeap's credits used?",
      answer: "Credits are used to get AI evaluations for your speaking and writing tasks. Each evaluation for a task consumes a certain number of credits, which is clearly indicated before you submit your response."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };


  return (
    <div className={styles.pageWrapper}>
      <Header /> {/* <-- ADD THE HEADER COMPONENT HERE */}

      <main>
        {/* Section 1: Hero */}
        <section className={`${styles.section} ${styles.heroSection}`}>
          <div className={styles.heroContent}>
            <h1>
              Accelerate Your TOEFL Preparation <span className={styles.highlight}>5x</span> with AI-Powered Instant Feedback.
            </h1>
            <p>
              Boost your scores, refine your language skills, and achieve your study abroad dreams – anytime, anywhere.
            </p>
            <button className={styles.ctaButton}>Start free practice test</button>
            <div className={styles.reviews}>
                <div className={styles.reviewAvatars}>
                    {/* Placeholder for avatar images */}
                    <img src="https://i.pravatar.cc/40?img=1" alt="User 1"/>
                    <img src="https://i.pravatar.cc/40?img=2" alt="User 2"/>
                    <img src="https://i.pravatar.cc/40?img=3" alt="User 3"/>
                </div>
                <div className={styles.reviewText}>
                    <div className={styles.stars}>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <span>5.0</span>
                    </div>
                    <span>Rated over <strong>2,000+</strong> reviews</span>
                </div>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
             {/* Replace with your actual hero image */}
             <img src="https://lingoleap.ai/_next/image?url=%2Ffeatures_cards%2Fwhole_feature_card_1.png&w=640&q=75" alt="LingoLeap TOEFL Speaking Interface" className={styles.heroImage} />
          </div>
        </section>

        {/* Section 2: Trusted By */}
        <section className={`${styles.section} ${styles.trustedBySection}`}>
            <span className={styles.trustedByTitle}>Trusted by:</span>
            <div className={styles.logos}>
                {/* Replace with your actual logo images */}
                <img src="https://tse4.mm.bing.net/th/id/OIP.e3-l0OsHtZm8OAck8V0s_wAAAA?pid=Api&P=0&h=180" alt="Cornell University" />
                <img src="https://www.kcl.ac.uk/newimages/abroad/institution-logos/the-chinese-university-of-hong-kong-logo.x32534ce5.jpg?f=webp" alt="The Chinese University of Hong Kong" />
                <img src="https://logos-world.net/wp-content/uploads/2023/02/Johns-Hopkins-University-Emblem.png" alt="Johns Hopkins University" />
                <img src="http://logonoid.com/images/northwestern-university-logo.png" alt="Northwestern University" />
                <img src="https://www.liblogo.com/img-logo/na2169nd0a-national-university-of-singapore-logo-national-university-of-singapore-logo-university--com.png" alt="National University of Singapore" />
                <img src="https://coindoo.com/wp-content/uploads/2019/01/NYU-New-York-University-logo-750x750.gif" alt="New York University" />
                <img src="https://logos-world.net/wp-content/uploads/2021/09/Ohio-State-University-Symbol.png" alt="The Ohio State University" />
                <img src="http://pluspng.com/img-png/stanford-university-logo-png-stanford-842.png" alt="Stanford University" />
            </div>
        </section>

        {/* Section 3: Crush Your Exams */}
        <section className={`${styles.section} ${styles.crushExamsSection}`}>
            <div className={styles.sectionHeader}>
                <h2>Crush your TOEFL Exams with a Strategic Prep!</h2>
                <button className={styles.darkButton}>Take free test <FaArrowRight /></button>
            </div>
            <div className={styles.featureCards}>
                 {/* Replace with your actual feature card images */}
                <img src="https://lingoleap.ai/_next/image?url=https:%2F%2Fcdn.sanity.io%2Fimages%2F25652opf%2Fproduction%2F3ce7d64c5f71ab8e57dfee90b205bddf4294ca0b-2766x1690.png&w=3840&q=75" alt="TOEFL Practice Tasks" />
                <img src="https://pica.zhimg.com/v2-8ad35aaf6bff944c60c349649c522f7e_1440w.jpg" alt="AI Estimated Scores and Feedback" />
                <img src="https://lingoleap.ai/_next/image?url=https:%2F%2Fcdn.sanity.io%2Fimages%2F25652opf%2Fproduction%2F3ce7d64c5f71ab8e57dfee90b205bddf4294ca0b-2766x1690.png&w=3840&q=75" alt="Mind Map for Idea Improvement" />
            </div>
            <div className={styles.featureDescriptions}>
                <div>
                    <h3>Practice Like It's Real</h3>
                    <p>Access 1,000+ questions covering diverse topics in an authentic TOEFL exam environment to build confidence and sharpen your skills.</p>
                </div>
                <div>
                    <h3>Get Instant Feedback</h3>
                    <p>Receive immediate AI grading, detailed insights, and personalized recommendations to achieve your target TOEFL score efficiently.</p>
                </div>
                <div>
                    <h3>Boost Your Ideas</h3>
                    <p>Share your thoughts, and watch as our AI evaluator crafts top-scoring answers and mind maps, improving the quality of your responses.</p>
                </div>
            </div>
        </section>

        {/* Section 4: Why Choose LingoLeap */}
        <section className={`${styles.section} ${styles.whyChooseSection}`}>
            <div className={styles.whyChooseContent}>
                <h2>Why Choose LingoLeap?</h2>
                <p className={styles.sectionSubtitle}>
                  LingoLeap offers a revolutionary approach to TOEFL preparation, leveraging artificial intelligence to provide personalized feedback and guidance tailored to individual learning needs.
                </p>
                <div className={styles.whyChooseList}>
                    <div className={styles.whyChooseItem}>
                        <h3>1. Personalized AI Evaluation <IoIosArrowForward /></h3>
                        <p>See exactly where you stand with accurate score predictions and tailored tips to boost your TOEFL results.</p>
                    </div>
                    <div className={styles.whyChooseItem}>
                        <h3>2. Customized High-Score Answers <IoIosArrowForward /></h3>
                        <p>Get personalized feedback on your answers, helping you learn how to write strong responses based on your own ideas.</p>
                    </div>
                    <div className={styles.whyChooseItem}>
                        <h3>3. Comprehensive Resources <IoIosArrowForward /></h3>
                        <p>Practice 1000+ free TOEFL questions, customized high-score answers, and a realistic mock test environment.</p>
                    </div>
                </div>
            </div>
            <div className={styles.whyChooseImageContainer}>
                 {/* Replace with your actual image */}
                <img src="https://cdn-images.toolify.ai/173752530224278723.jpg?x-oss-process=image/resize,l_1000,m_lfit" alt="AI Evaluation Interface" />
            </div>
        </section>

        {/* Section 5: Testimonials */}
        <section className={`${styles.section} ${styles.testimonialSection}`}>
            <div className={styles.sectionHeader}>
                <h2>See What Students are Saying about LingoLeap</h2>
                <div className={styles.navArrows}>
                    <button><FaArrowLeft /></button>
                    <button><FaArrowRight /></button>
                </div>
            </div>
            <div className={styles.testimonialCard}>
                <div className={styles.testimonialImageContainer}>
                    {/* Replace with your student image */}
                    <img src="https://i.imgur.com/8Q9PzO3.png" alt="Student Ivanka" />
                </div>
                <div className={styles.testimonialContent}>
                    <h3>Ivanka</h3>
                    <p>I used LingoLeap.AI to improve my TOEFL writing, focusing on effective essay structuring, refining sentences, and generating compelling examples to support my arguments. I found the Mind Map feature particularly valuable for organizing my ideas and building a cohesive essay structure. Thanks to LingoLeap, I felt more confident and ultimately scored 28 in the writing section of my TOEFL exam.</p>
                    <div className={styles.scoreHighlight}>
                        <strong>104</strong> / after using LingoLeap
                    </div>
                </div>
            </div>
        </section>

        {/* Section 6: Blog */}
        <section className={`${styles.section} ${styles.blogSection}`}>
            <h2>Read our Blog</h2>
            <div className={styles.blogGrid}>
                {/* Replace with your blog post images and content */}
                <div className={styles.blogCard}>
                    <img src="https://i.imgur.com/qE4J3q5.png" alt="LingoLeap new features"/>
                    <div className={styles.blogContent}>
                        <span>Tom - July 31, 2025</span>
                        <h4>What's Next for IELTS Prep? Sneak Peek into LingoLeap's Mobile & AI-Powered Vocabulary Rollout</h4>
                        <p>Coming soon: practice on mobile, adaptive vocab quizzes, exam-like interface—get early access and prepare smarter.</p>
                    </div>
                </div>
                 <div className={styles.blogCard}>
                    <img src="https://i.imgur.com/kP8y4bS.png" alt="IELTS time management"/>
                    <div className={styles.blogContent}>
                        <span>Tom - July 27, 2025</span>
                        <h4>Time-Management Hacks for IELTS: Using LingoLeap Analytics to Pace Yourself</h4>
                        <p>Learn when to move on and when to review: use LingoLeap’s detailed timing breakdown to hit fast-pace...</p>
                    </div>
                </div>
                 <div className={styles.blogCard}>
                    <img src="https://i.imgur.com/uR1k7p2.png" alt="IELTS study plan"/>
                    <div className={styles.blogContent}>
                        <span>Tom - July 22, 2025</span>
                        <h4>Smart Study Plan: How to Fit All Four IELTS Sections into a 4-Week Schedule with AI</h4>
                        <p>Follow this structured, lesson-by-lesson plan: AI mock-test, review, vocabulary, strategy — repeat for intensive IELTS...</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Section 7: FAQ */}
        <section className={`${styles.section} ${styles.faqSection}`}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqContainer}>
                {faqData.map((faq, index) => (
                    <div className={styles.faqItem} key={index}>
                        <div className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                            <span>{faq.question}</span>
                            {openFaqIndex === index ? <FaMinus /> : <FaPlus />}
                        </div>
                        {openFaqIndex === index && (
                            <div className={styles.faqAnswer}>
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
                <div className={styles.footerLogo}>
                    {/* Placeholder for Logo */}
                    <span className={styles.logoBox}>L</span>
                    <span>LingoLeap</span>
                </div>
                <p>Empowering language learners with innovative AI-driven tools for immersive and effective language acquisition.</p>
                <p>© 2025 LingoLeap. All Rights Reserved</p>
                <button className={styles.appStoreButton}>
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />
                </button>
            </div>
            <div className={styles.footerRight}>
                <div className={styles.socialIcons}>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaFacebookF /></a>
                </div>
            </div>
        </div>
        <div className={styles.footerBottom}>
            <p>TOEFL is a registered trademark of ETS. This product is not endorsed or approved by ETS.</p>
            <div className={styles.footerLinks}>
                <a href="#">Contact Us</a>
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;