import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/style.css";

export default function Register() {
  const [form, setForm ] = useState({
     username:"" , 
    firstname: "",
    lastname:"", 
    password:"",
    confirm:"" ,    
  });

  const [errors , setErrors] = useState({});

  const handleChange = (e) =>{
    setForm({...form,[e.target.name]: e.target.value});
  };

  const validate = () => {
  let newErrors = {};
  let message = "กรุณากรอกข้อมูลให้ครบ ❕ ";

  const requiredFields = ["username", "firstname", "lastname", "password", "confirm"];

  // ถ้ามีช่องไหนว่าง → ให้เด้ง error เดียวเลย
  const isMissing = requiredFields.some(field => !form[field]);

  if (isMissing) {
    newErrors.global = message;
    return newErrors; // ไม่ต้องเช็คอย่างอื่นแล้ว
  }

  // เช็ค password ตรงกัน
  if (form.password !== form.confirm) {
    newErrors.global = "กรุณากรอกรหัสผ่านให้ตรงกัน 🔒";
  }

  return newErrors;
};


  const handleSubmit = (e) =>{
    e.preventDefault(); 
    const result = validate();

    setErrors(result) ; 

    if(Object.keys(result).length === 0 ){
      alert("Register Successful ✅")
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
             <li><Link to=""><i class="fa-solid fa-user fa-lg"></i></Link></li>
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
                    <label htmlFor="">Username : <input  name="username" value={form.username} onChange={handleChange}   style={{width:"200px" , height: "50px" , marginLeft: "30px"}} type="text"  id="" placeholder="Enter User-name" /></label>
                    
                    <br />
                    <br />
                    <label htmlFor="">Firstname :    <input name="firstname" value={form.firstname} onChange={handleChange} style={{width:"200px" , height: "50px" , marginLeft: "30px"}} type="text" placeholder="Enter First-name" /> </label>
                    
                    <br />
                    <br />
                    <label htmlFor="">Lastname : <input name="lastname" value={form.lastname} onChange={handleChange} style={{width:"200px" , height: "50px" , marginLeft: "30px"}} type="text" placeholder="Enter Last-name" /> </label>
                   
                    <br />
                    <br />
                    <label htmlFor="">Password: <input name="password" value={form.password} onChange={handleChange}  style={{width:"200px" , height: "50px" , marginLeft: "30px"}} type="password" placeholder="Enter Password" /> </label>
                    
                    <br />
                    <br />
                    <label htmlFor="">Confrime Password : <input name="confirm" value={form.confirm} onChange={handleChange}  style={{width:"200px" , height: "50px" , marginLeft: "0px"}} type="password" placeholder="Cobfrime Password" /> </label>
                    
                    <br />
                    <br />
                   

                <button style={{width:"200px" , height: "50px"}}>Register</button>
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
