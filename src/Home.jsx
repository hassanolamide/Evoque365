import img from"./img/IMG-20240826-WA0210 (1).jpg"
import './Home.css'
import img1 from "./img/6c9cb96428172df2794d36176a1c0963.jpg"
import img2 from "./img/IMG-20240905-WA0038.jpg"
import img3 from "./img/IMG-20240905-WA0029.jpg"
import img4 from "./img/IMG-20240826-WA0209.jpg"
import img5 from "./img/815f7ae5f4a972621bf9346b48b84076.jpg"

const Home = () => {
  
  return (
    <div>
   <section className="h-[100%] home">
        <div className=" who">
        <div className=" text">
          <h1>Style differently, Stay unique</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, adipisci maiores nihil cumque illo quos, mollitia similique dolore fugiat ipsam dolores architecto voluptas molestias sequi? Beatae, itaque repellat. </p>
        <button>Shop Now</button>
        </div>
        <div className=" image" >
          <img src={img} alt="" width="400px" height="200px"/>
        </div>
        </div>
   </section>
      <section id="shop" >
        <p>Shop By Collection</p>
        <hr />
       <div className="card-body">
        <div className="card ">
          <img src={img1} alt=""  />
         
        </div>
        <div className="card">
          <img src={img2} alt="" />
          
        </div>
        <div className="card">
          <img src={img3} alt="" />
        
        </div>
        <div className="card">
          <img src={img4} alt="" />
        
        </div>
       </div>
      </section>
      <section id="about">
        <div className="bout">
          <div className="card">
          <div className="imgs">
            <img src={img5} alt="" />
            </div>
          </div>
          <div className="us">
      <h1>About Us</h1>
      <p>At <strong>Evoque365</strong> , we believe that fashion is more than just clothing—it is a way to express who you are. Our journey began with a simple idea: to create a brand that celebrates individuality and empowers people to feel confident in their unique style.</p>
      <p>
      Every piece in our collection is thoughtfully designed, combining timeless elegance with modern trends. We take pride in our attention to detail, ensuring that each item reflects our commitment to quality and craftsmanship.</p>
      <p>
      Our team is passionate about fashion and dedicated to bringing you pieces that not only look good but also feel good. We source the finest materials and work closely with skilled artisans to create clothing that stands the test of time.</p>
     <p>
      As we prepare to launch our latest collection, we are excited to share our vision with you. Whether you are dressing for a special occasion or curating your everyday wardrobe, <strong>Evoque365 </strong>is here to inspire your personal style.</p>
      <p>
      Thank you for being a part of our journey. We cant wait for you to discover whats next!</p>
      </div>
      </div>
      </section>
      <section id="collection">
      <p>Our exclusive clothing collection is coming soon! Stay tuned for the latest styles and trends. We cant wait to share it with you!</p>
      <button>Check Out</button>
      </section>
     
    </div>
  )
}

export default Home
