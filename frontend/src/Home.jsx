import NavBar from './NavBar'
function Home() {
    // const id = [1, 2, 3, 4, 5]
    const object = [{
        id: 1,
        name: 'Tejasathvika',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiV7aZI2Wn-Nx8y3qQpdV1ARwOlswLJ8OL-A&s',
        time: '2 hours ago ',
        head: 'Getting Started with React and Tailwind CSS',
        para: 'Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for modern web development.',

        read: '7 min read'

    }, {
        id: 2,
        name: 'Tejasathvika',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiV7aZI2Wn-Nx8y3qQpdV1ARwOlswLJ8OL-A&s',
        time: '2 hours ago ',
        head: 'Getting Started with React and Tailwind CSS',
        para: 'Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for modern web development.',

        read: '7 min read'

    }, {
        id: 3,
        name: 'Tejasathvika',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiV7aZI2Wn-Nx8y3qQpdV1ARwOlswLJ8OL-A&s',
        time: '2 hours ago ',
        head: 'Getting Started with React and Tailwind CSS',
        para: 'Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for modern web development.',

        read: '7 min read'
    }, {
        id: 4,
        name: 'Tejasathvika',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsg24bG8eTFGWSk8TKw-qg0mwl5OGLgc8PQ&s',
        time: '2 hours ago',
        head: 'Getting Started with React and Tailwind CSS',
        para: 'Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for modern web development.',
        read: '7 min read'
    }, {
        id: 5,
        name: 'Tejasathvika',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsg24bG8eTFGWSk8TKw-qg0mwl5OGLgc8PQ&s',
        time: '2 hours ago ',
        head: 'Getting Started with React and Tailwind CSS',
        para: 'Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for modern web development.',
        read: '7 min read'
    }, {
        id: 6,
        name: 'Tejasathvika',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJiiT__A2j9wWyTbbSnU_VgttGjZiWnKS6Cw&s',
        time: '2 hours ago ',
        head: 'Getting Started with React and Tailwind CSS',
        para: 'Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for modern web development.',
        read: '7 min read'
    }]
    return (
        <>

            <div className="flex min-h-screen flex-col justify-center items-center ">
                <NavBar />
                <h1 className="font-bold text-4xl mb-7">Welcome to BlogVerse</h1>
                <h1 className="text-gray-500 text-xl text-center mb-7">Discover amazing stories, insights, and ideas from  our community of <br />writers.<span className="text-blue-500 hover:underline cursor-pointer">Sign in</span> to create your own posts and save your favorites.
                </h1>
                <div className="flex flex-wrap mt-5 w-full pb-5 gap-10 justify-center items-center ">
                    {/* </div><div className="w-1/3 h-1/3 border-1 border-gray-700 shadow-2xs flex  flex-col justify-center py-6"> */}
                    {object.map((item) => (
                        <div className=" h-[27%] border-1 lg:w-[25%] sm:w-[70%]  border-gray-300 shadow-2xs flex flex-col justify-center items-center  rounded-2xl relative  hover:shadow-2xl ">

                            <div key={item.id}>
                                <img src={item.img} alt="Loading image" className="w-full object-fill h-1/3 rounded-t-2xl transition-transform duration-300  hover:scale-102 " />
                                <p className=" bg-blue-500 px-2 py-1 text-white m-auto rounded-3xl text-center absolute top-4 left-4 ">Technology</p>
                                <button onClick={() => alert("This page has been saved")} className=" bg-white rounded-full w-4 absolute top-4 right-4" >⇲</button>
                                <div className="flex gap-3 py-5 px-3">
                                    <img src={item.img} alt="no profile" className="w-[50px] h-[50px] rounded-full object-cover " />
                                    <div>
                                        <p className="font-semibold sm:text-2xl">{item.name}</p>
                                        <div className="flex gap-3">
                                            <p>{item.time}</p>
                                            <p>🧐{item.read}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-center justify-center flex-col items-center " >

                                    <h2 className="flex justify-center text-center flex-col font-bold text-1xl mb-4 ">{item.head}</h2>
                                    <p className="mb-4 px-5">{item.para}</p>
                                    <div className="border-1 border-gray-200 w-[90%] mb-4 "></div>
                                </div>
                                <div className="flex justify-between mb-4 px-4">
                                    <p>🕛{item.read}</p>
                                    <p className="text-blue-500 hover:cursor-pointer">Read More</p>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
export default Home