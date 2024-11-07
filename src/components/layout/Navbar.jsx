import { buttonBackground } from "../../../public/icons"
import CustomBackgroundButton from "../common/CustomBackgroundButton"
export default function Navbar(){
     
    const navItems = [
        {
            title: "Shop Now",
            link: "",
        },
        {
            title: "Deals",
            link: "",
        },
        {
            title: "Categories",
            link: "",
        },

        {
            title: "About Us",
            link: "",
        },
        {
            title: "Contact",
            link: "",
        },
        {
            title: "Get Started",
            link: "",
        },

    ]
    return(
        <div className=" w-full h-[158px] px-5 sticky   z-[10] flex items-center backdrop-filter backdrop-blur bg-opacity-10 bg-black  inset-0 justify-between bg-transparent">
            <div className="w-fit flex flex-col items-center h-fit ">
                <h3 className="text-[30px] text-white leading-[42px] font-semibold">Electronics, Fashion, Home Goods</h3>
                <p className="text-[16px] text-white leading-[24px] font-semibold">Vibrant Marketplace</p>
            </div>
             
            <div className="w-fit h-fit flex gap-6  items-center">
                {navItems.map((el,l) => (
                    
                  el.title !== "Get Started" ?  
                  <div key={l} className={`${el.title === "Shop Now" ? "text-[#BBA27B]" : "text-white"} px-1 text-[16px] font-semibold `}>
                     {el.title}
                    </div>    
                    :  <CustomBackgroundButton  text={el.title}/>
                ))}
            </div>
        </div>
    )
}