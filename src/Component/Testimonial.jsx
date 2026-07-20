import React from "react";

const testimonialData = [
  {
    name: "Rahul Sharma",
    city: "Lucknow",
    img: "https://i.pravatar.cc/150?img=11",
    review:
      "Buying our dream home was a wonderful experience. The team was professional, transparent, and supportive throughout the process.",
  },
  {
    name: "Priya Verma",
    city: "Delhi",
    img: "https://i.pravatar.cc/150?img=32",
    review:
      "Highly recommended! They provided genuine property options and excellent customer service from start to finish.",
  },
  {
    name: "Amit Singh",
    city: "Noida",
    img: "https://i.pravatar.cc/150?img=14",
    review:
      "Very satisfied with their professionalism. Documentation was clear, and the entire buying process was smooth.",
  },
  {
  name: "Neha Gupta",
  city: "Gorakhpur",
  img: "https://i.pravatar.cc/150?img=45",
  review:
    "The entire team was very supportive and helped us choose the perfect property within our budget.",
},
{
  name: "Vikas Kumar",
  city: "Kanpur",
  img: "https://i.pravatar.cc/150?img=25",
  review:
    "Excellent experience from site visit to documentation. Everything was handled professionally.",
},
{
  name: "Anjali Mishra",
  city: "Varanasi",
  img: "https://i.pravatar.cc/150?img=36",
  review:
    "Trustworthy company with genuine properties and transparent pricing. Highly recommended.",
},
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">

      <div className="testimonial-title">

        <span>OUR CLIENTS</span>

        <h2>What Our Customers Say</h2>

        <p>
          Customer satisfaction is our highest priority. Here are some
          experiences shared by our happy clients.
        </p>

      </div>

      <div className="testimonial-grid">

        {testimonialData.map((item, index) => (

          <div className="testimonial-card" key={index}>

            <div className="quote">❝</div>

            <p>{item.review}</p>

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <div className="client">

              <img src={item.img} alt="" />

              <div>

                <h3>{item.name}</h3>

                <span>{item.city}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Testimonial;