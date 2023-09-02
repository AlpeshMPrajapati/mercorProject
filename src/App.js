import Header from "./components/Header";

function App() {
 
  return (
    <div className='App h-screen w-full max-w-[1340px] mx-auto'>
      <div className="w-[90%] mx-auto pt-2 relative">
        <Header/>


        <div className="main w-[90%] mx-auto flex items-start justify-between ">
          <div className="img-1">
            <img src="/intro-cube 1.png" alt="" />
          </div>

          <div className="content flex flex-col items-center justify-center flex-wrap">
            <p className="text-white font-bold text-[12rem]">CASH</p>
            <img src="/intro-phone 1.png" alt="" className="absolute"/>
            <p className="text-white font-bold text-[12rem] relative -top-20 z-10">APP</p>
        </div>

          <div className="img-2">
            <img src="/intro-stairs 1.png" alt="" />
          </div>
        </div>

        <div className="w-[90%] mx-auto flex items-start justify-between relative -top-48 flex-wrap">
          <div className="img-1">
            <img src="/intro-cubes 1.png" alt="" />
          </div>
          <div className="img-2">
            <img src="/intro-pillar 1.png" alt="" />
          </div>
        </div>
       

        <div className="footer text-white flex items-center justify-between relative top-[-280px] flex-wrap">
          <div className="buttons flex items-center gap-3">
            <button className="border px-3 py-2 bg-black font-semibold rounded-md flex gap-2"><img src="/vector.png" alt="" />APP STORE</button>
            <button className="border px-3 py-2 bg-black font-semibold rounded-md flex gap-2"><img src="/playstore.png" alt="" />GOOGLE PLAY</button>
          </div>

          <div className="icon">
            <img src="/arrow.png" alt="" />
          </div>

          <div className="para w-[370px]">
            <p className="text-[9px] text-gray-300">Brokerage services by Cash App Investing LLC, member FINRA / SIPC.See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
          </div>

          <div className="media flex items-center gap-7 flex-wrap">
            <img src="/Frame.png" alt="" />
            <img src="/twitter.png" alt="" />
            <img src="/Frame (1).png" alt="" />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
