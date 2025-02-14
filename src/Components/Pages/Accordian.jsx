import React, { useState } from "react";
const Section = ({title , discription , isVisible , setIsVisible }) => {
    return (
        <div className=" border-white px-2 py-2 rounded-md w-full lg:w-[70%] bsm mx-auto flex justify-between shadow-lg ring-1 shadow-slate-800" >
            <div className="">
                <h1 className="py-4 text-md font-extrabold w-full">{title}</h1>
                {
                    isVisible && <p className="px-10 text-justify">{discription}</p>
                }
            </div>
            <div className="relative flex">
                {
                    (!isVisible) ? (
                        <button className=" text-4xl text-bold relative" onClick={() => setIsVisible(true)}>+</button>
                    ) : (
                        <button className=" text-5xl text-bold relative" onClick={() => setIsVisible(false)}>-</button>
                    )
                }
            </div>
        </div>
    )
}
const Accordian = () => {
    const [isAccordian , setIsAccordian] = useState("")
    return (
        <div className="space-y-5 px-6">
            <div>
                <Section title={"Web Development"} discription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolor consectetur ad dignissimos ex nesciunt quas eum dolore, ut aut voluptatum saepe sapiente ducimus reprehenderit nobis omnis quae rerum numquam nisi, animi atque. Esse dolores rem cum, modi expedita officia ut id. Suscipit excepturi quam, quae, provident et ab porro quod officiis delectus repellendus quos accusantium. Minima asperiores vel dolorem."}
                isVisible={isAccordian === "webDev"}
                setIsVisible={() => setIsAccordian("webDev")}
            />
            </div>
            <div>
                <Section title={"Application Development"} discription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur. Beatae commodi molestiae error voluptatibus impedit perspiciatis ratione earum rem unde reiciendis maiores repudiandae necessitatibus laudantium possimus voluptates fugit dolorum illo vitae totam explicabo ipsa optio debitis, non numquam. Quo omnis ratione voluptatibus incidunt temporibus eum ea unde voluptates minus dignissimos! Nisi nobis molestiae exercitationem consequuntur accusamus ducimus animi! Suscipit consequatur id ullam ut voluptatum illum dolore ratione unde sit tenetur, fugiat error molestiae obcaecati enim officia perspiciatis modi odit."}
                isVisible={isAccordian === "appDev"}
                setIsVisible={() => setIsAccordian("appDev") }
            />
            </div>
            <div>
                <Section title={"Mechine Learning"} discription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, tenetur quos illum veniam labore explicabo odio. Nisi distinctio nihil porro corporis adipisci, animi accusamus culpa aspernatur quaerat doloremque ut cumque, rem nobis assumenda doloribus? Aspernatur dicta nobis fuga dolorum vitae vero sapiente minus nihil tempore! Voluptatibus, a? Neque, alias doloremque praesentium amet asperiores facilis nisi dolores quam voluptatum veniam sit assumenda enim. Ipsum soluta eveniet officiis. enim tempore illum voluptatibus. Perspiciatis dignissimos sit veritatis praesentium recusandae velit pariatur, animi magni accusantium quod earum veniam! Enim. "} 
                isVisible={isAccordian === "dataSc"}
                setIsVisible={() => setIsAccordian("dataSc")}
            />
            </div>
        </div>
    )
}
export default Accordian;