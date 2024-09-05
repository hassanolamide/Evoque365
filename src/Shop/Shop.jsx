import "./Shop.css"
import img1 from "../img/6c9cb96428172df2794d36176a1c0963.jpg"
import img2 from "../img/IMG-20240905-WA0038.jpg"
import img3 from "../img/IMG-20240905-WA0029.jpg"
import img4 from "../img/IMG-20240826-WA0209.jpg"
const Shop = () => {
  return (
    <div>
      <section id="shop">
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
    </div>
  )
}

export default Shop
