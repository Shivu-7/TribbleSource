import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Have a project in mind? Let’s get to work.</h2>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
        Everything you need to grow your business anywhere on the planet.<br className="sm:block hidden" /> 
        Get in touch with us to get a free 30-minute no-obligation consultation with one of our experts.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      {/* <Button /> */}


      <div class="flex items-center justify-start">
        <div class="mx-auto max-w-lg">
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>Contact us</p>
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>Email us at support@tribbletabble.com or message us here:</p>

          <form action="mailto:gupta@tribbletabble.com" class="mt-10" id="emailUS" method="POST">

            <input type="hidden"/> 
            <div class="grid gap-6 sm:grid-cols-2">
              <div class="relative z-0">
                <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
              </div>
              <br/>
              {/* <div class="relative z-0">
                <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
              </div> */}
              <div class="relative z-0 col-span-2">
                <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
              </div>
            </div>
            <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white" form="emailUS">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
