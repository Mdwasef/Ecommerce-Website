import Category_HomeBar from "../Category_Handling/Category_HomeBar"
import { Link } from "react-router-dom"


function HomePage() {
    return (
        <div className="w-full bg-gray-100 min-h-screen">

            <Category_HomeBar />

            {/* OUTER WRAPPER */}
            <div className="max-w-7xl mx-auto px-6 py-3">

                {/* HERO CARD */}
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">

                    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16">

                        {/* TEXT AREA */}
                        <div
                            id="textarea"
                            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
                        >
                            <div id="bold" className="space-y-2">
                                <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-900">
                                    Discover Quality
                                </h1>
                                <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-gray-600">
                                    Products
                                </h1>
                            </div>

                            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                                Shop the latest trends in clothing, handmade items, and essentials —
                                carefully curated to match your lifestyle and budget.
                            </p>

                            {/* CTA */}
                            <div className="flex gap-4 justify-center md:justify-start">
                                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                                    Shop Now
                                </button>
                                <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                                    <Link to='/products'>
                                        Explore
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* IMAGE AREA */}
                        <div
                            id="image_div"
                            className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
                        >
                            <img
                                src="src/Components/store.png"
                                alt="Store"
                                className="w-3/4 max-w-md drop-shadow-2xl"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* 3 section about us, community etc. */}

            <div className="max-w-7xl mx-auto px-6 py-6">

                {/* OUTER BOX */}
                <div className="
    rounded-2xl 
    flex flex-wrap 
    justify-center 
    gap-6 
    p-6 
    bg-white 
    shadow-xl 
    hover:shadow-2xl 
    transition-shadow
  ">

                    {/* CARD 1 */}
                    <div className="
      w-full 
      sm:w-[90%]
      md:w-[45%] 
      lg:w-[30%] 
      flex flex-col 
      bg-blue-100 
      p-6 
      rounded-2xl 
      relative
    ">
                        <div className="pr-10 grow">
                            <h1 className="font-bold text-3xl mb-3">About Us</h1>
                            <p className="text-gray-700 leading-relaxed">
                                Our workplace is hosted in our accessible and welcoming studio space in Islington.
                                Our workshops allow creativity to grow in a supportive environment.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4">
                            <img
                                src="/src/Components/arrow.png"
                                alt="Go"
                                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                            />
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="
      w-full 
      sm:w-[90%]
      md:w-[45%] 
      lg:w-[30%] 
      flex flex-col 
      p-6 
      rounded-2xl 
      bg-red-100
      relative
    ">
                        <div className="pr-10 grow">
                            <h1 className="font-bold text-3xl mb-3">Our Community</h1>
                            <p className="text-gray-600 leading-relaxed">
                                We believe in building a strong and inclusive community where creators,
                                learners, and innovators connect, collaborate, and grow together.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4">
                            <img
                                src="/src/Components/arrow.png"
                                alt="Go"
                                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                            />
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="
      w-full 
      sm:w-[90%]
      md:w-[45%] 
      lg:w-[30%] 
      flex flex-col 
      bg-green-100 
      p-6 
      rounded-2xl 
      relative
    ">
                        <div className="pr-10 grow">
                            <h1 className="font-bold text-3xl mb-3">Artwork</h1>
                            <p className="text-gray-600 leading-relaxed">
                                Explore unique artworks crafted by talented artists, blending creativity,
                                culture, and modern design into every piece.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4">
                            <img
                                src="/src/Components/arrow.png"
                                alt="Go"
                                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                            />
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default HomePage
