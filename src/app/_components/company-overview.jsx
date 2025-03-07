import React from 'react'

export default function CompanyOverview() {
  return (
    <section className="my-10 bg-white ">
    <div className="max-w-7xl mx-auto md:px-0 px-4">
      <div className="grid md:grid-cols-2 gap-6">
        <div className=" mb-8 md:mb-0 grid justify-items-center text-center">
          <h2 className="text-2xl font-bold mb-4 text-heading-main">
          Khonshnaw vegetables & fruits Trading Company
          </h2>
          <p className="mb-4">
          Khonshnaw vegetables & fruits Trading Company, based in the Kurdistan region of Iraq, has been a leader in the fields of afforestation and seedling. With decades of experience, we are dedicated to serving our country by enhancing its green spaces in the most efficient and sustainable manner.
          </p>
          <img
            alt="Image of oranges in a crate"
            className="rounded-lg h-96"
            height={300}
            // src="https://storage.googleapis.com/a1aa/image/RbwamaltC3L6AhGPyoJ28DLJ8sZpocZI9olf0Nbo80BYNhfTA.jpg"
            src='https://upload.wikimedia.org/wikipedia/commons/a/ae/Variety_of_fresh_fruits.jpg'
            width={400}
          />
        </div>
        <div className="grid justify-items-center text-center">
          <h2 className="text-2xl font-bold mb-4 text-heading-main">Local Trading</h2>
          <p className="mb-4">
          Khonshnaw vegetables & fruits Trading Company has a longstanding tradition of engaging with local farmers, fostering strong relationships within the community. We do manage a vast farm that houses numerous trees and yields substantial produce, contributing significantly to the local agricultural economy.
          </p>
          <img
            alt="Image of pomegranates"
            className="rounded-lg h-96"
            height={300}
            src="https://m.media-amazon.com/images/I/71XLxmE8jlL.jpg"
            width={400}
          />
        </div>
      </div>
    </div>
  </section>
  )
}
