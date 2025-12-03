import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/style.css";
import axios from "axios";
// app.use('/posts', require('./routes/posts'))


export default function Register({currentForm , set ,  setCurrentForm}) {
  const [formData ,  setFormData] = useState({
      username: currentForm ? currentForm.username : '' , 
      firstname : currentForm ? currentForm.firstname : '', 
      lastname : currentForm ? currentForm.lastname : '', 
      password: currentForm ? currentForm.password : '', 
      confirm: currentForm ? currentForm.confirm : ''
  })

   const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (
      !formData.username ||
      !formData.firstname ||
      !formData.lastname ||
      !formData.password ||
      !formData.confirm
    ) {
      newErrors.global = "กรุณากรอกข้อมูลให้ครบ ❕ ";
      return newErrors;
    }

    if (formData.password !== formData.confirm) {
      newErrors.global = "กรุณากรอกรหัสผ่านให้ตรงกัน 🔒";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = validate();
    setErrors(result);

    // ❌ ถ้ามี error → หยุด
    if (Object.keys(result).length !== 0) return;

    try {
      if (currentForm) {
        // Update
        await axios.patch(`http://localhost:5000/posts/${currentForm._id}`, formData);
      } else {
        // Create new user
        await axios.post("http://localhost:5000/posts", formData);
      }

      const { data } = await axios.get("http://localhost:5000/posts");
      set(data);

      alert("Register Successful ✅");

      setFormData({
        username: "",
        firstname: "",
        lastname: "",
        password: "",
        confirm: "",
      });

      setCurrentForm(null);

    } catch (error) {
      console.log(error);
      alert("เกิดข้อผิดพลาดในการเชื่อมต่อ Server ❌");
    }
  };




  

  return (
    <div className="bodyp">
      <nav className="menu-wraper">
        <div className="logo">
         <Link to="/"><img src="/logo.png" alt="Logo" /></Link> 
        </div>

        <div className="ls-menu">
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><Link to="/order">Product</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href=""></a>Cart</li>
             <li><Link to=""><i className="fa-solid fa-user fa-lg"></i></Link></li>
          </ul>
        </div>

        <div className="hamberger-bar">
          <i style={{ color: "aliceblue" }} className="fa-solid fa-bars fa-bounce"></i>
        </div>
      </nav>

      <div className="itempage3">

        <div className="titleabout2">
            <h1>Register</h1>

        </div>

     
  
           
            
            
      </div>

      <div className="about-content">
        <br />
        <br />
        <br />
        <br />
        <div className="content1-a">
           <center>
                <form onSubmit={handleSubmit}>
                     {errors.global && (
                        <p
                          style={{
                            padding: 8,
                            color: "red",
                            WebkitBorderRadius: 20,
                            backgroundColor: "black",
                            width: 250,
                            marginTop: 20,
                            marginLeft: 120
                          }}
                        >
                          {errors.global}
                        </p>
                      )}
                    <br />
                    <br />
                    <label htmlFor="">Username : <input  name="username" value={formData.username} onChange={handleChange}   style={{width:"200px" , height: "50px" , marginLeft: "30px"}} type="text"  id="" placeholder="Enter User-name" /></label>
                    
                    <br />
                    <br />
                    <label htmlFor="">Firstname :    <input name="firstname" value={formData.firstname} onChange={handleChange} style={{width:"200px" , height: "50px" , marginLeft: "30px"}} type="text" placeholder="Enter First-name" /> </label>
                    
                    <br />
                    <br />
                    <label htmlFor="">Lastname : <input name="lastname" value={formData.lastname} onChange={handleChange} style={{width:"200px" , height: "50px" , marginLeft: "30px"}} type="text" placeholder="Enter Last-name" /> </label>
                   
                    <br />
                    <br />
                    <label htmlFor="">Password: <input name="password" value={formData.password} onChange={handleChange}  style={{width:"200px" , height: "50px" , marginLeft: "30px"}} type="password" placeholder="Enter Password" /> </label>
                    
                    <br />
                    <br />
                    <label htmlFor="">Confrime Password : <input name="confirm" value={formData.confirm} onChange={handleChange}  style={{width:"200px" , height: "50px" , marginLeft: "0px"}} type="password" placeholder="Cobfrime Password" /> </label>
                    
                    <br />
                    <br />
                   

                    <button type="submit" style={{width:"200px" , height: "50px"}}>Register</button>
                </form>
                 
                
                <br />
                <br />
                <p> OPEN : 9:00 AM - 18:00PM</p>
                <br />
                <p> TELL : 0123456789</p>
                <br />
                <Link to="https://www.google.com/maps/@13.6761404,101.0824919,11z?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"><p style={{color: "black"}}> Location :  https://www.google.com/maps</p></Link>
                <br />
                <br />
            </center>
        </div>
        

        
      </div>
    </div>
  );
  
}
