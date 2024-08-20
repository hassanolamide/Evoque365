import "./Shop.css"
import img1 from "../img/product_20.png"
import img2 from "../img/product_6.png"
import img3 from "../img/product_36.png"
import img4 from "../img/product_3.png"
const Shop = () => {
  return (
    <div>
      <section id="shop">
        <p>Shop By Collection</p>
        <hr />
       <div className="card-body">
        
        <div className="card ">
          <img src={img1} alt=""  />
          <h1>MEN</h1>
        </div>
        <div className="card">
          <img src={img2} alt="" />
          <h1>WOMEN</h1>
        </div>
        <div className="card">
          <img src={img3} alt="" />
          <h1>KIDS</h1>
        </div>
        <div className="card">
          <img src={img4} alt="" />
          <h1>EXCLUSIVE</h1>
        </div>
       </div>
      </section>
    </div>
  )
}

export default Shop
