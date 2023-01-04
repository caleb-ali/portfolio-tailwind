import React from "react";
import { projectcards } from "./Data";

const Projectlist = () => {
  
  return (
    <div className="lg:ml-24 lg:mr-24 ml-4 mr-4 mt-4 lg:p-4 " id="projects" >
      <div className="flex justify-center font-Redrose font-bold text-gray-700 text-2xl underline underline-offset-8 decoration-persian-green-600">
        Projects
      </div>
      <div className="mt-4 mb-4">
        {/* card begins */}
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 font-Redrose font-normal">
          {projectcards.map((post) => (
            <div key={post.id} link={post.link}>
              <div  className="p-4 border my-4 rounded-lg border-gray duration-300 hover:-translate-y-1" > 
                <img src={post.image} className="h-96 w-96 " />
                <div>
                  <div className="flex flex-col  text-gray-500">
                    <span className="text-xl text-persian-green-600">{post.title}</span>
                    <span className="text-xs mt-[7x] mb-[2px] ">{post.technology}</span>
                    <span className="text-xs mb-[7px] ">
                      {post.description}
                    </span>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="nonreferrer"
                      className=" text-sm px-4 py-2 rounded  bg-persian-green-500 hover:bg-persian-green-600 text-white font-normal flex justify-center"
                    >
                      <button>Visit Site</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*card ends here*/}
      </div>
    </div>
  );
};

export default Projectlist;
