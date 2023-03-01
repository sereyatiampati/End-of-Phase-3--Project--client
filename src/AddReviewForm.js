import { React, useState} from "react";

function AddReviewForm({onAddReview}) {
    const [formData, setFormData] = useState({
        star_rating: "",
        product_id: "",
        title: "",
        comment: ""}
        )
    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;
        setFormData({
            ...formData,
            [name]: value,
          });
        }
    function handleSubmit(event) {
            event.preventDefault();
            fetch('http://localhost:9292/reviews', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(formData)
                })
                .then(res => res.json())
                .then(newReview => onAddReview(newReview))
   
            setFormData({
                star_rating: "",
                product_id: "",
                title: "",
                comment: ""
            })
          }

    return(
<form style={{margin: "40px 300px 0 300px"}} onSubmit={handleSubmit}>
    <p><span style={{color: "red", fontSize: "10px"}}>*</span>indicates a required field</p>
    <div class="form-group">
    <label for="exampleFormControlSelect1"><span style={{color: "red"}}>*</span> Product to review</label>
    <select class="form-control" id="exampleFormControlSelect1" name="product_id" onChange={handleChange} placeholder="Select a value">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1"><span style={{color: "red"}}>*</span> Rating</label>
    <select class="form-control" id="exampleFormControlSelect1" name="star_rating" onChange={handleChange} placeholder="Select a value">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1"><span style={{color: "red"}}>*</span> Title</label>
    <textarea placeholder="Title..." class="form-control" id="exampleFormControlTextarea1" rows="3" name="title" value={formData.title} onChange={handleChange}></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1"><span style={{color: "red"}}>*</span> Comment</label>
    <textarea placeholder="Leave us a comment.." class="form-control" id="exampleFormControlTextarea1" rows="3" name="comment" value={formData.comment} onChange={handleChange}></textarea>
  </div>
 <button class="btn btn-outline btn-sm mt-2" type="submit" style={{backgroundColor: "teal", color: "white"}}>
    Submit Review
</button>
</form>
    )
}

export default AddReviewForm;