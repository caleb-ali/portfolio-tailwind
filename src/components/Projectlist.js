import React from 'react'
import { projectcards } from './Data'

const Projectlist = () => {
  return (
    <div className='m-8'>
      <div></div>
      <div>
        {/* card begins */}
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 font-Redrose font-normal">
          {projectcards.map((post) => (
            <div key={post.id}>
              <div className="p-4 border my-4 rounded-lg border-gray duration-300 hover:-translate-y-1">
                <img src={post.photo} class="w-full" />
                <div>
                  <div className="flex flex-col text-xs text-gray-500">
                    <span>{post.title}</span>
                    <span >{post.description}</span>
                    <span>{post.technology}</span>
                  </div>
        
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*card ends here*/}
      </div>
    </div>
  )
}

export default Projectlist