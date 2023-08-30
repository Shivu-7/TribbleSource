import React from 'react'
import styles from "./style";
import { socialMedia } from "./constants";
import { Billing, Business, DedicatedSupport, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import OtherNav from './components/OtherNav';

const BlogPage = () => (
  
  <div className="bg-primary w-full overflow-hidden min-h-screen">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <OtherNav />
      </div>
    </div>


    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <h2 className={styles.heading3}>
          Crafting Success Online: The Significance of Web Design and Why Your New Business Should Choose Us
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          In an increasingly digital world, where first impressions are often made online, the importance of web design cannot be overstated. A well-designed website is more than just an attractive digital facade – it's a powerful tool that can shape perceptions, drive engagement, and ultimately lead to business success. If you're a new business looking to make a mark in the digital landscape, here's why web design matters and why partnering with us can set you on the path to excellence.
          <br />
          <br />
          <br />
          <br />
          <p class="text-sky-100" align="center">Why Web Design Matters:</p>

          <p class="text-gray-600">1. Captivating First Impressions:</p>
          Imagine your website as a virtual storefront. Just as you'd want your physical store to be inviting and visually appealing, your website should create an instant positive impression. A well-designed website grabs attention and entices visitors to explore further.

          <p class="text-gray-600">2. User Experience that Converts:</p>
          User experience (UX) is at the core of effective web design. A user-friendly and intuitive website keeps visitors engaged and encourages them to take desired actions – whether that's making a purchase, filling out a contact form, or signing up for a newsletter.

          <p class="text-gray-600">3. Reflecting Brand Identity:</p>
          Your website is a reflection of your brand's personality and values. Consistent design elements, colors, and fonts create a cohesive brand identity that resonates with your target audience, fostering a sense of trust and recognition.

          <p class="text-gray-600">4. Search Engine Visibility:</p>
          A well-optimized website with good design practices positively impacts your search engine ranking. By incorporating SEO-friendly elements, your website becomes more discoverable, driving organic traffic and potential customers to your digital doorstep.

          <p class="text-gray-600">5. Mobile Responsiveness:</p>
          With the majority of users browsing the web on mobile devices, a responsive website design is essential. A mobile-friendly site ensures that your content looks and functions seamlessly across all screen sizes, providing a superior user experience.

          <p class="text-gray-600">6. Establishing Credibility:</p>
          In a crowded digital landscape, a professional website sets you apart from amateur competitors. A sleek design communicates credibility and competence, making visitors more likely to trust your business and its offerings.
          <br />
          <br />
          <br />
          <br />
          <p class="text-sky-100" align="center"> Why Choose Us:</p>

          <p class="text-gray-600">1. Expertise and Experience:</p>
          Our team of skilled web designers brings years of experience to the table. We've worked with businesses of all sizes and industries, crafting tailor-made solutions that align with their goals and visions.

          <p class="text-gray-600">2. Creative Vision:</p>
          We understand that your website is an extension of your brand's identity. Our designers are adept at translating your vision into a visually stunning and cohesive online presence that captivates visitors.

          <p class="text-gray-600">3. User-Centric Approach:</p>
          We prioritize user experience, ensuring that every element on your website is designed to enhance engagement and guide visitors toward conversion. Our intuitive navigation and strategic call-to-actions lead to tangible results.

          <p class="text-gray-600">4. Innovative Design Techniques:</p>
          Web design is an ever-evolving field, and we stay ahead of the curve. We employ the latest design trends and technologies to create websites that are both aesthetically appealing and functionally advanced.

          <p class="text-gray-600">5. Custom Solutions:</p>
          No two businesses are alike, and neither should their websites be. We offer tailored solutions that cater to your unique needs, ensuring that your website effectively communicates your brand's message and offerings.

          <p class="text-gray-600">6. Results-Driven Approach:</p>
          Our ultimate goal is to help your business succeed. We analyze data, track user behavior, and make iterative improvements to ensure your website is a driving force behind your business's growth.
          <br />
          <br />        
          <br />
          <br />
          <p class="text-sky-100" align="center"> Your Digital Journey Starts Here</p>

          In today's digital age, web design isn't just about aesthetics; it's about creating an immersive online experience that engages and converts visitors into loyal customers. By choosing us as your web design partner, you're not just getting a website – you're getting a strategic tool that can elevate your brand, expand your reach, and drive business success. Our team's expertise, creative vision, and user-centric approach ensure that your new business gets the digital edge it deserves. Your journey to digital excellence starts with the right web design – and we're here to make that journey a resounding success.
          <br />
          <br />        
          <br />
          <br />
        </p>
      </div>
    </div>
    {/* <Clients /> */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col px-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 TribbleTabble. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </div>
);

export default BlogPage
