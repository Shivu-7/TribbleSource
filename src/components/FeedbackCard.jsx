import { quotes } from "../assets";

const FeedbackCard = ({ content1,content2,content3,content4,content5,content6,content7,content8,content9,content10, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content1} <br className="sm:block hidden" /> 
      {content2} <br className="sm:block hidden" /> 
      {content3} <br className="sm:block hidden" /> 
      {content4} <br className="sm:block hidden" /> 
      {content5} <br className="sm:block hidden" /> 
      {content6} <br className="sm:block hidden" /> 
      {content7} <br className="sm:block hidden" /> 
      {content8} <br className="sm:block hidden" /> 
      {content9} <br className="sm:block hidden" /> 
      {content10} <br className="sm:block hidden" /> 
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
