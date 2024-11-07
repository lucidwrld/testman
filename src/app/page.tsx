import Image from "next/image";
import HeaderFooter from "@/components/layout/layout"
import {backgroundIMage, deal1, deal2, deal3, deal4, first, second, secondBack, third} from "../../public/icons/index"
import CustomBackgroundButton from "@/components/common/CustomBackgroundButton";
export default function Home() {

  const cardData = [
    {
      title: "Over 50,000 happy customers",
      value: "78,513"
    },
    {
      title: "85% customer satisfaction rate",
      value: "99%"
    },
    {
      title: "More than 2 million products sold",
      value: "5.5 million"
    },
  
  ]
  const dealData = [
    {
      icon: deal1,
      title: "Electronics Hub",
      description: "Explore cutting-edge technology and gadgets that enhance your lifestyle.",
      linkTitle: "Shop Electronics Now",
      link: ""
    },
    {
      icon: deal2,
      title: "Fashion Forward",
      description: "Step into style with our trendy clothing and accessories curated just for you.",
      linkTitle: "Browse Fashion Trends",
      link: ""
    },
    {
      icon: deal3,
      title: "Home Essentials",
      description: "Transform your living space with our high-quality home goods that combine functionality and design.",
      linkTitle: "Explore Home Goods",
      link: ""
    },
    {
      icon: deal4,
      title: "Exclusive Offers",
      description: "Don't miss out on our limited-time promotions that guarantee unbeatable prices.",
      linkTitle: "View All Promotions",
      link: ""
    },
  ]
  return (
    <HeaderFooter>
      <div className="w-full h-full bg-white flex flex-col ">
        
        <div className="w-full h-fit flex relative bg-white">
          <div className="w-[28%] h-full absolute z-[3] bg-[#535353]">

          </div>
          <div className="w-full px-[95px] flex gap-10  flex-col justify-center h-full absolute z-[4] bg-black/85">
              <h3 className="w-fit text-[60px] leading-[86px] font-semibold text-white">Discover Your Next Favorite <br/> Product!</h3>
               
               <CustomBackgroundButton noBackground={false} text={"Sign Up for Free"}  buttonName={"!rounded-[4px] "}/>
          </div>
          <div className="h-[703px] w-full object-cover" style={{
            background: `url(${backgroundIMage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "cover"
          }}>

          </div>
        </div>

        <div className="w-full h-fit grid px-[95px] py-40 grid-cols-3 gap-6 ">
             {
              cardData.map((el,l) => (

                <div key={l} className="flex flex-col  py-5 px-6 bg-[#FCFCFC] rounded-[12px] border border-[#B3B3B3]">
                  <h3 className="text-[#0D0D0D] text-[18px] leading-[28px] font-medium">
                    {el.title}
                  </h3>
                  <p className="text-[36px] leading-[52px] font-bold text-black">{el.value}</p>
                </div>  
              ))
             }
        </div>
        <div className="w-full h-fit px-32  flex flex-col items-center">
             <h3 className="text-[18px] text-[#4D4D4D] font-bold leading-[28px]">Shop the Best Deals</h3>
             <h3 className="text-[30px] text-black font-bold leading-[42px]">Discover Your Perfect Product Today!</h3>
             <div className="w-full h-fit mt-16 grid grid-cols-4 gap-8">
                {
                  dealData.map((el,l) => (
                    <div key={l} className="flex flex-col gap-4 items-center w-full h-fit">
                        <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[12px] border border-[#B3B3B3]"> 
                          <Image src={el.icon} alt="" width={undefined} height={undefined} className="w-[24px] h-[24px] object-cover" />
                        </div>
                        <h3 className="text-[18px] text-black font-semibold leading-[28px]">{el.title}</h3>
                        <h3 className="text-[16px] text-black font-normal text-center leading-[24px]">{el.description}</h3>
                        <h3 className="text-[18px] text-[#EF2A82] font-semibold leading-[28px]">{el.linkTitle}</h3>
                    </div>
                  ))
                }
             </div>
        </div>
        <div className=" w-full h-fit grid mt-32 px-[95px] grid-cols-2 gap-24">
                <div className="w-full h-full flex flex-col gap-5 justify-center">
                    <h3 className="text-[30px] leading-[42px] text-black font-bold">Unlock the Future of Shopping <br /> with Us!</h3>
                    <p className="text-[18px] leading-[28px] text-black font-normal">Explore a diverse range of products tailored just for you. From the latest gadgets to fashionable attire, enjoy a seamless shopping experience.</p>
                    <div className="w-full h-fit flex justify-between gap-6">
                      <CustomBackgroundButton noBackground={true} buttonName={"!bg-[#FCFCFC] text-black w-full text-center border border-[#B3B3B3] rounded-[12px]"} text={"Discover More Deals"} />
                      <CustomBackgroundButton noBackground={true} buttonName={"!bg-[#EF2A82] text-white w-full text-center border border-[#EF2A82] rounded-[12px]"} text={"Start Shopping Today"} />
                    </div>
                    <div className="w-full h-fit flex gap-3 items-center">
                      <div className="w-[112px] flex-shrink-0 relative h-[48px] ">
                        <Image src={first} alt="" width={undefined} height={undefined} className="w-[48px] h-[48px] z-[1]   object-cover absolute" />
                        <Image src={second} alt="" width={undefined} height={undefined} className="w-[48px] h-[48px] z-[2] left-[32px] object-cover absolute" />
                        <Image src={third} alt="" width={undefined} height={undefined} className="w-[48px] h-[48px] z-[3] left-[64px]  object-cover absolute" />
                      </div>
                      <h3 className="text-[18px] font-normal leading-[28px] text-[#0d0d0dce]">Join our community for personalized recommendations that suit your style and preferences!</h3>
                    </div>
                </div>
                <Image src={secondBack} alt="" width={undefined} height={undefined} className="w-full relative flex-shrink-0 h-[524px] object-cover" />
        </div>
      </div>
    </HeaderFooter>
  );
}
