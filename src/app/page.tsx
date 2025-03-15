export default function Home() {
  return (
    <div className="flex flex-col text-gray-800 font-tektur text-2xl">
      <div className="flex flex-col space-y-7 bg-amber-800">
        <section className="flex ml-10">
          <div className="flex">Image</div>
          <div className="flex flex-col ml-10">
            <div>
              Michael Sollazzo
            </div>
            <div>
              Software Developer and Analyst
            </div>
          </div>
        </section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta porro ut blanditiis rerum aperiam, consequatur recusandae totam eos autem assumenda atque odio! Eius illo cumque minima odit quos magni?
          </p>
          <button>
            Learn More
          </button>

      </div>
      <div className="flex flex-col space-y-7 bg-amber-800">
        <h1 className="">
          Recent Projects
        </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta porro ut blanditiis rerum aperiam, consequatur recusandae totam eos autem assumenda atque odio! Eius illo cumque minima odit quos magni?
          </p>
          <button>
            Learn More
          </button>
      </div>

    </div>
  )
}
