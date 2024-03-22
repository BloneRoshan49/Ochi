import React from 'react'

function PAGE4() {

  const cards = document.querySelectorAll(".card");

  cards.forEach((card)=>{
    card.addEventListener("mouseenter",()=>{
      let childDiv = card.firstChild;
      childDiv.style.transform = "scale(1.2,1.2)"
    })
    card.addEventListener("mouseleave",()=>{
      let childDiv = card.firstChild;
      childDiv.style.transform = "scale(1,1)"
    })
  })


  return (
    <div className='w-full min-h-[100vh]'>
        <div className='w-full h-[28vh] flex items-center pt-[4vh] px-[3vw] border-b-2 border-slate-400' >
          <h2 className='text-[4vw]'>Featured projects</h2>
        </div>
        <div className='w-full flex px-[3vw] gap-4'>
          <div className='w-1/2'>
            <div className='w-full  flex items-center gap-2 pt-14 pb-4'>
            <span className="w-[12px] h-[12px] bg-black inline-block rounded-full"></span>
              <h4 className='text-md'>FYDE</h4>
            </div>
            <div className='card w-full h-[80vh] rounded-xl overflow-hidden'>
              <img className='object-cover w-full h-full transition-transform duration-700 ease-in-out' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="leftpic" />
            </div>
            <div className='w-full my-5'>
              {
                ["AUDIT","COPYWRITE","SALES DECK","SLIDES DESIGN"].map((elem,index)=>{
                  return(
                    <span key={index} className='px-3 py-1 border-2 mr-2 rounded-full'>{elem}</span>
                  )
                })
              }
            </div>
          </div>
          <div className='w-1/2'>
            <div className='w-full flex items-center gap-2 pt-14 pb-4'>
            <span className="w-[12px] h-[12px] bg-black inline-block rounded-full"></span>
              <h4 className='text-md'>VISA</h4>
            </div>
            <div className='card w-full h-[80vh] rounded-xl overflow-hidden'>
              <img className='w-full h-full object-cover transition-transform duration-700 ease-in-out' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="rightpic" />
            </div>
            <div className='w-full my-5'>
            {
                ["AGENCY","COMPANY PRESENTATION"].map((elem, index)=>{
                  return(
                    <span key={index} className='px-3 py-1 border-2 mr-2 rounded-full'>{elem}</span>
                  )
                })
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default PAGE4