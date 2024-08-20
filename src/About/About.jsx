import './About.css'
import img5 from "../img/815f7ae5f4a972621bf9346b48b84076.jpg"
const About = () => {
  return (
    <div>
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
    </div>
  )
}

export default About
