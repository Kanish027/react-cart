import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
// import img1 from "../assets/img1.jpg"

const img1 =
  "https://m.media-amazon.com/images/I/616eKVWRr-L._SL1500_.jpg";
const img2 =
  "https://m.media-amazon.com/images/I/51B5yCfcRHL._SL1500_.jpg";
const img3 = 
"https://m.media-amazon.com/images/I/71jwTLlDKcL._AC_UY327_FMwebp_QL65_.jpg";
const img4 = 
"https://m.media-amazon.com/images/I/6150vg2i4hL._AC_UY327_FMwebp_QL65_.jpg";
const img5 = 
"https://m.media-amazon.com/images/I/514NPRZ1AQL._SL1500_.jpg";
const img6 = 
"https://m.media-amazon.com/images/I/41GZQ1KzwLL.jpg";
const img7 = 
"https://m.media-amazon.com/images/I/61q-2yzbBtL._SL1500_.jpg";
const img8 = 
"https://m.media-amazon.com/images/I/51eIHcTAdeL._SL1500_.jpg";

const Home = () => {

  const productList = [
    {name:"TOZO T6 True Wireless Earbuds Bluetooth 5.3 ", price:2499, imgSrc:img1, id:"1"},
    {name:"Noise Buds VS201 V3", price:1199, imgSrc:img2, id:"2"},
    {name:"BTG Neo Dual Pairing Earbuds", price:1499, imgSrc:img3, id:"3"},
    {name:"boAt Airdopes Atom 81", price:999, imgSrc:img4, id:"4"},
    {name:"OnePlus Nord Buds", price:2499, imgSrc:img5, id:"5"},
    {name:"EDYELL Wireless Earbuds C13 ", price:1599, imgSrc:img6, id:"6"},
    {name:"boAt Immortal 121 TWS ", price:1499, imgSrc:img7, id:"7"},
    {name:"OnePlus Nord Buds True ", price:2499, imgSrc:img8, id:"8"},
  ]

  const dispatch = useDispatch()

  const addToCartHandler = (options)=>{
    dispatch({type:"addToCart",payload:options})
    dispatch({type:"calculatePrice"});
    toast.success("Added To Cart");
  }

  return (
    <div className='home'>
      {productList.map((i)=>(
        <ProductCard 
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  )
};

const ProductCard = ({name, id, price, handler, imgSrc}) => (
    <div className='productCard'>
      <img src={imgSrc} alt={name}/>
      <p>{name}</p>
      <h4>{price}Rs</h4>
      <button onClick={()=>handler({name, price, id, quantity:1, imgSrc})} >Add to Cart</button>
    </div>
  )

export default Home 