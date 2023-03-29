import Hero from '../src/components/hero'
import About from '../src/components/about'
import Footer from './components/footer'
import Image1 from '../src/assets/img/CDyAuTy75.png'
import Image2 from '../src/assets/img/1020_Hivezzz.png'
import Image3 from '../src/assets/img/Weather_man.png'
import Image4 from '../src/assets/img/Stoic_picture.png'
import Image5 from '../src/assets/img/Moneg_Agri.png'
function App() {
  
  return (
    <div className="bg-white text-black">
      <header className="bg-gradient-to-t from-indigo-500 via-purple-500 to-black">
        {/* <h1 className="text-3xl font-bold">Welcome to Kagisho Phahlamohlaka's canvas of sites</h1> */}
        <Hero/>
      </header>
      <section className="flex flex-wrap justify-center p-6">
        <div className="bg-gray-200 m-4 p-6 w-80">
        <img src={Image2} alt="" className="rounded-full h-52 w-48 mx-auto mb-12"/>
          <h2 className="text-xl font-bold mb-4">1020 Hivezzz Data Collector(Refactoring Coming soon)</h2>
          <p className="text-lg">Not Complete. Main aim is to collect data using first Google Sheets then PostgreSQL</p>
          <a href='https://zippy-pika-b1aa90.netlify.app'>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-black hover:text-white transition duration-300" >
          View
        </button>
        </a>
        </div>
        <div className="bg-gray-200 m-4 p-6 w-80">
          <img src={Image3} alt="" className="rounded-full h-52 w-48 mx-auto mb-12"/>
          <h2 className="text-xl font-bold mb-4">Weather Man App</h2>
          <p className="text-lg">Dont't want to be caught wearing the wrong clothing for the day.</p>
          <a href='https://the-weather-man-web-app.netlify.app/'>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-black hover:text-white transition duration-300" >
          View
        </button>
        </a>
        </div>
        <div className="bg-gray-200 m-4 p-6 w-80">
        <img src={Image4} alt="" className="rounded-full h-52 w-48 mx-auto mb-12"/>
          <h2 className="text-xl font-bold mb-4">Stoic Quote Generator(Refactoring Coming soon)</h2>
          <p className="text-lg">Wise Quotes to uplift you for the day.</p>
          <a href="https://elastic-banach-e56ade.netlify.app/">
        <button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300" >
        View
        </button>
        </a>
        </div>
        <div className="bg-gray-200 m-4 p-6 w-80">
        <img src={Image5} alt="" className="rounded-full h-52 w-48 mx-auto mb-12"/>
          <h2 className="text-xl font-bold mb-4">WordPress(Project) Moeng AgriBusiness Cooperation website</h2>
          <p className="text-lg">Website which I have been tasked to create using WordPress by my current Mentor at MIIS Business Botswana</p>
          <a href='https://moengagribusiness.miisbotswana.com/'>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-black hover:text-white transition duration-300" >
          View
        </button>
        </a>
        </div> */}
        <div className="bg-gray-200 m-4 p-6 w-80">
          <img src={Image1} alt="" className="rounded-full h-52 w-48 mx-auto mb-12"/>
          <h2 className="text-xl font-bold mb-4">HashNode Blog Posts</h2>
          <p className="text-lg">Please Check out my latest HashNode blog posts</p>
          <a href='https://moengagribusiness.miisbotswana.com/'>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-black hover:text-white transition duration-300" >
          View
        </button>
        </a>
        </div>
      </section>
      <section className="p-6">
       <About/>
      </section>
      <footer >
        <Footer/>
      </footer>
    </div>
  )
}

export default App
