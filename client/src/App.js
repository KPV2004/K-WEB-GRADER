import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="grid grid-rows-12 grid-cols-12 w-full h-dvh">
        {/* Side Bar Menu */}
        <div className="bg-[#12372A] row-span-12 col-span-1 grid grid-rows-8 grid-cols-1">
          <div className="flex justify-center items-center">
            <div className="text-white flex items-center w-4/5 justify-center hover:bg-[#436850] hover:rounded-xl px-2 py-2">
              <img src="/icon/lucide--home.png" alt="Home Icon" style={{ width: '30px', height: '30px' }}/>
              <span className="text-xl" >HOME</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-white flex items-center w-4/5 justify-center hover:bg-[#436850] hover:rounded-xl px-2 py-2">
              <img src="/icon/solar--ranking-linear.png" alt="Home Icon" style={{ width: '30px', height: '30px' }}/>
              <span className="text-xl" >RANK</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="text-white flex items-center w-4/5 justify-center hover:bg-[#436850] hover:rounded-xl px-2 py-2">
              <img src="/icon/cil--task.png" alt="Home Icon" style={{ width: '30px', height: '30px' }}/>
              <span className="text-xl" >TAKS</span>
            </div>
          </div>
        </div>
        {/* Header Bar */}
        <header className="bg-[#436850] row-span-1 col-span-11 grid grid-cols-8 grid-rows-1">
          <div className="row-span-1 col-span-6 "></div>
          <div className="row-span-1 col-span-2  grid grid-cols-3">
            <div className="col-span-2 flex justify-center items-center">
              <div>
                <img src="/icon/lucide--home.png" className='rounded-full size-14 mx-2 bg-black'/>
              </div>
              <div className="mx-2 text-white">
                Zhilshi
                <br/>
                SCORE:50
              </div>
            </div>
          </div>
        </header>
        {/* Content Area */}
        <div className="bg-[#FBFADA] row-span-11 col-span-11"></div>
      </div>
    </div>
  );
}

export default App;
