import { React } from "react";

function Review({review,onDeleteClick}) {

    const {comment,title, product, star_rating}=review

    const stars = Array.from({ length: star_rating }, () => <i className="fa fa-star"></i>)

    function handleDeleteClick(){
      onDeleteClick(review.id)
    }
    return (
        <div class="row justify-content-center mb-3">
        <div class="col-md-12 col-xl-10">
          <div class="card shadow-0 border rounded-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div class="bg-image hover-zoom ripple rounded ripple-surface">
                    <img src={product.productImage} alt={product.productName}
                      class="w-100" />
                    <a href="#!">
                      <div class="hover-overlay">
                        <div class="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <h5 style={{color: "teal", fontSize: "12px"}}>Review for {product.productName} </h5>
                  <div class="d-flex flex-row">
                    <div class="text-warning mb-1 me-2">
                        {stars}
                    </div>
                    <span>{star_rating}/5 stars</span>
                  </div>
                  <div class="mt-1 mb-0 text-muted small">
                    <span class="text-primary"><i class="fa-solid fa-check"></i>verified buyer</span>
                    {/* <span class="text-primary"> <i class="fa-solid fa-check"></i> </span> */}
                    {/* <span class="text-primary">Return customer</span> */}
                    <h5><b>{title}</b></h5>
                  </div>
                  <p class=" mb-4 mb-md-0">
                    {comment}
                  </p>
                </div>
                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div class="d-flex flex-row align-items-center mb-1">
                  </div>
                  <div class="d-flex flex-column mt-4">
                    <button class="btn btn btn-sm" type="button" style={{backgroundColor: "teal", color: "white"}} onClick={handleDeleteClick}>Delete</button>
                    {/* <button class="btn btn-outline btn-sm mt-2" type="button" style={{backgroundColor: "teal", color: "white"}}>
                      Edit comment
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Review;