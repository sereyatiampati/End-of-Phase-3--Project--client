import React, {useState} from 'react'

function Register({changeFormToLogin}) {
const [regForm, setRegForm] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: ""
})
    function handleClickLogin() {
        changeFormToLogin()
    }

    function handleRegFormData(e) {
      const name = e.target.name;
      let value = e.target.value;
      setRegForm({
        ...regForm,
        [name]: value,
      });
    }
    function handleRegSubmit(e) {
      e.preventDefault()
      fetch('http://localhost:9292/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(regForm)
      })
      .then(res => res.json())
      .then(newUser => console.log(newUser))

      setRegForm({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      })
    }
    return(

<section class="text-center">

  <div class="p-5 bg-image" style={{
        backgroundColor: "teal",
        height: "300px"}}></div>

  <div class="card mx-4 mx-md-5 shadow-5-strong" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.8)",
        backdropFilter: "blur(30px)"}}>
    <div class="card-body py-5 px-md-5">

      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h2 class="fw-bold mb-5">Sign up now OR<a style={{color: "blue", border:"none", fontSize: "2.2rem", cursor: "pointer"}} onClick={handleClickLogin}><u>Login here</u></a></h2>
          <form onSubmit={handleRegSubmit}>
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label class="form-label" for="form3Example1">First name</label>
                  <input type="text" id="form3Example1" class="form-control" name="firstName" onChange={handleRegFormData}/>
                  
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <label class="form-label" for="form3Example2">Last name</label>
                  <input type="text" id="form3Example2" class="form-control" name="lastName" onChange={handleRegFormData}/>
                  
                </div>
              </div>
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example3">Email address</label>
              <input type="email" id="form3Example3" class="form-control" name="email"onChange={handleRegFormData}/>
              
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example4">Password</label>
              <input type="password" id="form3Example4" class="form-control" name="password"onChange={handleRegFormData}/>
              
            </div>
            <div class="form-check d-flex justify-content-center mb-4">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
              <label class="form-check-label" for="form2Example33">
                Subscribe to our newsletter
              </label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4">
              Sign up
            </button>

            <div class="text-center">
              <p>or sign up with:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Register;