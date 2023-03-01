import { React, useState, useEffect } from "react";
import Review from "./Review"

function Reviews () {

   const [reviews, setReviews]=useState([]);

   const url="http://localhost:9292/reviews"

   useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data=>setReviews(data))
  }, [])

  function handleDeleteClick(id){
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }
  const allReviews= reviews.map((review, index)=>{
    return <Review key={index} review={review} onDeleteClick={handleDeleteClick}/>
  })
  if (!reviews) return <h2>Loading reviews...</h2>;
    return (
    <>
        <section style={{backgroundColor: "#eee"}}>
            <h2 className="title-reviews">REVIEWS</h2>
            <div class="text-dark mb-1 me-2" style={{textAlign: "center"}}>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <span className="total-reviews"> {reviews.length}</span>
            </div>
            <button class="btn btn btn-sm" type="button" style={{backgroundColor: "teal", color: "white", float: "right", marginRight: "230px", padding: "6px"}}>WRITE A REVIEW</button>
                <div class="container py-5">
                    {allReviews}
                </div>
        </section>
    </>
    )
}

export default Reviews;