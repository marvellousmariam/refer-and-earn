import React from 'react'

const Hero = () => {
  return (
    <section className="flex flex-col w-1/2 h-auto mx-auto mt-20 md:flex-row items-center bg-blue-200 md:justify-between mb-12 shadow-md rounded-lg">
          <div className="md:w-1/2 my-auto mb-4 md:mb-0 ml-5">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">Lets Learn<span className='block' >& Earn</span> </h1>
            <p className="text-gray-600 mb-6">Get a chance to win up-to <span className='text-primary font-semibold text-3xl block'>Rs. 15,000</span></p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 my-6 px-4 rounded">Refer Now</button>
          </div>
          <div className="md:w-1/2">
            <img src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YtLZx6uac8QQv0DpZZO9m0z2nkuk67cmnM4pPGIp740g9YcPQGXKqVPRokmaXGQn6oWClLOY6EiDsTQvwVTXRiVLiaXmBpfRr8J9BM6lb2Uij9oO8nNKkcLb36Ijh5tXFAfutAGNdAXlhUsm9g1z8mdg6ZmpDIc-HKINnQmqVyghA0eNFGnRZjDEmG5lwKjG-6W9bWuUvaW8PF5UFSYWTFfKCJSrOGMAVs4FLGqejMwMr67poz7ymFbXJKCgasvcdiRZFMEYErLET2vsO592FjPd8oc9w4kl~OQBqWmWXfXCAqZOeUhV~Yt9PReTqrrwHP8J8rHRqfmiHQMc6X8kfw__" alt="Refer & Earn" className="rounded-lg"/>
          </div>
        </section>
  )
}

export default Hero
