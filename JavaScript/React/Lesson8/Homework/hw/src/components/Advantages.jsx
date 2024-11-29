import React from 'react'
import adv1 from '../assets/img/advantage1.svg'
import adv2 from '../assets/img/advantage2.svg'
import adv3 from '../assets/img/advantage3.svg'


const Advantages = () => {
  return (
    <section className="advantages">
        <div className="container">
            <div className="advantage-item">
                <img src={adv1} alt="advantage1"/>
                <h2>Free Delivery</h2>
                <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
            <div className="advantage-item">
                <img src={adv2} alt="advantage2"/>
                <h2>Sales & discounts</h2>
                <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
            <div className="advantage-item">
                <img src={adv3} alt="advantage3"/>
                <h2>Quality assurance</h2>
                <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </div>
        </div>
    </section>
  )
}

export default Advantages