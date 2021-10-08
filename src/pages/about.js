import React from 'react'

function AboutPage() {
  return (
    <div className="text-xs flex flex-col mx-auto text-center w-full h-full">
      <div className="w-52 shadow-md mx-auto mb-3">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="rounded-md" />
      </div>
      <div className="">
        <span className="text-lg mb-5">Ahmad Fauzi</span>
        <div className="text-xs mb-4">
          <div>programmer • creator of <a className="font-bold text-purple-700" href="https://upy.moe">upy</a></div>
          <div>24 • jakarta, indonesia</div>
        </div>
        <div className="mb-4">
          <div>
            <b>stacks:</b> <span className="text-blue-700">php/codeigniter/laravel</span>, <span className="text-yellow-400">js/ts/vue/nuxt</span>, tailwind, mysql/mongo, flutter, <span className="text-indigo-700">docker, ci/cd</span>
          </div>
        </div>
        <div className="text-xs">
          <a href="https://github.com/nor1c" target="_blank" className="mx-2 text-blue-800">github</a>•
          <a href="mailto:ahmad.uji1902@gmail.com" target="_blank" className="mx-2 text-blue-800">ahmad.uji1902@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default AboutPage