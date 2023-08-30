import { card } from "../assets";
import styles, { layout } from "../style";
import { Link } from 'react-router-dom'
import Button from "./Button";

const DedicatedSupport = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Stand aware of accomplishments,  <br className="sm:block hidden" /> stay awake to achieve more.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our expert team of designers, developers, illustrators and project 
      managers work with streamlined processes to break through organizational roadblocks.
      Our team specializes in Data Analysis, Web Analysis, Data Reporting, Performance tests, Content Ideas and Blog Setup
      </p>
      {/* <a href={nav.link}>
      <Button styles={`mt-10`}/>
      </a> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default DedicatedSupport;
