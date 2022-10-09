const About = ({setNav}) => {
    return ( 
        <div onClick={()=>setNav(false)} className="flex-auto  bg-gray-800 w-full h-full overflow-auto  bg-gray-800">
            <div className="max-w-[1000px] w-full h-full min-h-[40rem] overflow-hidden mx-auto flex justify-center px-4 flex-col items-center">
               <div>
                   <h1 className=" text-4xl text-gray-500 mb-2 font-bold border-b-4 ">About Me</h1>
               </div>
                 <p className="text-white text-center max-w-[500px]">
                     Isaac Anasonye is a self motivated computer scientist and a web developer(front-end) with passion
                     for development currently based in Nigeria. Isaac started writing codes and engaging him
                      self in coding activities
                     from his first year in the university. As he continued coding, it became crystal clear obvious that this
                      was what he wanted to do corresponding with his initial intentions. His goal is to provide as much help as possible to where a call is made. With
                      his knowledge of the listed skills, He is able to deliver on every corresponding or "to be informed" given assignment.
                     Isaac will like to say that a programmer that really knows it, does it. This remains his standard for progressive,
                     substantial and higher achievements.
                 </p>

            </div>
        </div>
     );
}
 
export default About;