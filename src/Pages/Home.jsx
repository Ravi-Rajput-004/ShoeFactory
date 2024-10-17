import React from 'react'
import Image from './Image';
import Slider from './Slider';
import Navbar from '../Commonets/Navbar';
import Footer from '../Commonets/Footer';

function Home() {
  return (
    <div className='flex flex-col justify-around'>
      <Navbar />
      <div >

        <Slider />




        <div className='text-3xl h-[50px] mt-[30px] w-[250px] py-3 '>Boys Collection</div>
        <div className=' h-[350px]  mt-[10px] mb-[70px] grid grid-cols-4 gap-[5px] '>
          {/* <div className='bg-slate-600 h-[350px]' > <img className='size-full' src='https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24592346/2023/8/22/95005a4c-074f-43b2-968e-bb060794a2ed1692713208695RedTapeMenWhiteColourblockedPUSkateShoes1.jpg'></img></div>
        <div className='bg-slate-900 h-[350px]'> <img className='size-full' src='https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg' /> </div>
        <div className='bg-slate-600 h-[350px]'><img className='size-full' src='https://imgs7.luluandsky.com/catalog/product/8/9/898907884623054-_1_.JPG' /></div>
        <div className='bg-slate-600 h-[350px]'><img className='size-full' src='https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=true' /></div>
        `` */}
          <Image img={'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24592346/2023/8/22/95005a4c-074f-43b2-968e-bb060794a2ed1692713208695RedTapeMenWhiteColourblockedPUSkateShoes1.jpg'} />
          <Image img={'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg'} />
          <Image img={'https://imgs7.luluandsky.com/catalog/product/8/9/898907884623054-_1_.JPG'} />
          <Image img={'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=true'} />



        </div>
        <div className='text-3xl h-[50px] mt-[20px] w-[200px] py-3'>Girls Collection</div>
        <div className=' h-[350px]  mt-[10px]  grid grid-cols-4 gap-[5px] mb-[70px] '>
          <div className='bg-slate-600 h-[350px] ' > <img className='size-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUY-skL-jBTHkR1Z93wlZqTww1xuUpPsnRsWJ4c35Cdg&s'></img></div>
          <div className='bg-slate-900 h-[350px]'> <img className='size-full' src='https://images.meesho.com/images/products/337268371/edhta_512.webp' /> </div>
          <div className='bg-slate-600 h-[350px]'><img className='size-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMdS9Ok66WQiFWTeqxy1yMMoE1EVZiEdCTo3GwZSobg&s' /></div>
          <div className='bg-slate-600 h-[350px]'><img className='size-full' src='https://www.touchy-style.com/cdn/shop/products/women-s-casual-shoes-white-solid-tennis-fashion-sneakers-yhh-s0322-touchy-style-1-32274624020675.jpg?v=1697942484&width=1100' /></div>

        </div>

        <div className='text-3xl h-[50px] mt-[20px] w-[200px] py-3'>Kids Collection</div>
        <div className=' h-[350px]  mt-[10px]  grid grid-cols-4 gap-[5px] '>
          <div className='bg-slate-600 h-[350px]' > <img className='size-full' src='https://images.meesho.com/images/products/323311503/gdrm9_512.webp'></img></div>
          <div className='bg-slate-900 h-[350px]'> <img className='size-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Hlsw8g2cYurpn26xYJ8429Mk7RNPUY-i7ehudqjuKA&s' /> </div>
          <div className='bg-slate-600 h-[350px]'><img className='size-full' src='https://image.made-in-china.com/2f0j00BFpTJvjGCozt/Children-Sports-Sandals-Shoes-with-LED-Wall-Light-Kids-Footwear-790-.webp' /></div>
          <div className='bg-slate-600 h-[350px]'><img className='size-full' src='https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwa0b765a0/images/page-designer/2024/February_2/16194_Comp_E2_Image1.jpg?sw=991&sfrm=jpg' /></div>

        </div>














      </div>
      <Footer />
    </div >
  )
}

export default Home;
