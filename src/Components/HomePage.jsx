import Category_HomeBar from "../Category_Handling/Category_HomeBar"
import { Link } from "react-router-dom"


function HomePage() {
    return (
        /* Deep Navy Background for a high-end, premium feel */
        <div className="w-full bg-[#0f172a] min-h-screen">

            <Category_HomeBar />

            {/* OUTER WRAPPER */}
            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* HERO CARD - Dark Glass Effect */}
                <div className="bg-[#1e293b] rounded-3xl shadow-2xl border border-white/5 overflow-hidden transition-all duration-500">

                    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-10 py-20">

                        {/* TEXT AREA */}
                        <div
                            id="textarea"
                            className="w-full md:w-1/2 space-y-8 text-center md:text-left"
                        >
                            <div id="bold" className="space-y-3">
                                <h1 className="font-black text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
                                    Discover Quality
                                </h1>
                                <h1 className="font-black text-5xl md:text-6xl lg:text-7xl text-blue-400">
                                    Products
                                </h1>
                            </div>

                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
                                Shop the latest trends in clothing, handmade items, and essentials —
                                carefully curated to match your lifestyle and budget.
                            </p>

                            {/* CTA */}
                            <div className="flex gap-5 justify-center md:justify-start">
                                <button className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-400 hover:scale-105 transition-all font-bold shadow-lg shadow-blue-500/20">
                                    Shop Now
                                </button>
                                <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition font-bold">
                                    <Link to='/products'>
                                        Explore
                                    </Link>
                                </button>
                            </div>
                        </div>

                        {/* IMAGE AREA */}
                        <div
                            id="image_div"
                            className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
                        >
                            <div className="relative">
                                {/* Subtle Glow behind the image */}
                                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                                <img
                                    src="src/Components/store.png"
                                    alt="Store"
                                    className="relative w-full max-w-md drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] z-10"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 3 section about us, community etc. */}

            <div className="max-w-7xl mx-auto px-6 py-8">

                <div className="flex flex-wrap justify-center gap-8">

                    {/* CARD 1 - Neon Blue Border Effect */}
                    <div className="
                        w-full 
                        md:w-[31%] 
                        flex flex-col 
                        bg-[#1e293b]
                        p-8 
                        rounded-3xl 
                        border border-blue-500/20
                        hover:border-blue-500/50
                        transition-colors
                        relative
                    ">
                        <div className="pr-10 grow">
                            <h1 className="font-bold text-2xl mb-4 text-white">About Us</h1>
                            <p className="text-slate-400 leading-relaxed">
                                Our workplace is hosted in our accessible and welcoming studio space.
                                Our workshops allow creativity to grow.
                            </p>
                        </div>
                        <div className="mt-6">
                            <img src="/src/Components/arrow.png" alt="Go" className="w-6 h-6 invert brightness-200" />
                        </div>
                    </div>

                    {/* CARD 2 - Deep Purple Tone */}
                    <div className="
                        w-full 
                        md:w-[31%] 
                        flex flex-col 
                        bg-[#1e293b]
                        p-8 
                        rounded-3xl 
                        border border-purple-500/20
                        hover:border-purple-500/50
                        transition-colors
                        relative
                    ">
                        <div className="pr-10 grow">
                            <h1 className="font-bold text-2xl mb-4 text-white">Our Community</h1>
                            <p className="text-slate-400 leading-relaxed">
                                Building a strong and inclusive community where creators connect and grow together.
                            </p>
                        </div>
                        <div className="mt-6">
                            <img src="/src/Components/arrow.png" alt="Go" className="w-6 h-6 invert brightness-200" />
                        </div>
                    </div>

                    {/* CARD 3 - Teal Accent */}
                    <div className="
                        w-full 
                        md:w-[31%] 
                        flex flex-col 
                        bg-[#1e293b]
                        p-8 
                        rounded-3xl 
                        border border-emerald-500/20
                        hover:border-emerald-500/50
                        transition-colors
                        relative
                    ">
                        <div className="pr-10 grow">
                            <h1 className="font-bold text-2xl mb-4 text-white">Artwork</h1>
                            <p className="text-slate-400 leading-relaxed">
                                Explore unique artworks crafted by talented artists, blending culture and modern design.
                            </p>
                        </div>
                        <div className="mt-6">
                            <img src="/src/Components/arrow.png" alt="Go" className="w-6 h-6 invert brightness-200" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage