import React,{useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import Cookie from 'js-cookie'

function AboutUs()
{
    var signup="SignIn"
 
    var logincoookie=(Cookie.getJSON('login'))||false
    console.log(logincoookie)
    if(logincoookie)
    {
      console.log("bye")
      const logintype=(Cookie.getJSON('modeoflogin'))||''
      if(logintype==="normal")
      {const signup1=(Cookie.getJSON('userInfo'))||{name:"SignIn"}
      signup=signup1.name}
  
     
      else
      {
        const signup1=(Cookie.getJSON('userInfo'))||{user:{name:"SignIn"}}
        signup=signup1.user.name
      }
    }
    const [isOpen, setSide] = useState(false)
    function handleClick()
    {
      setSide(!isOpen)
    }
    function logout()
  {
      localStorage.clear()
      Cookie.remove('userInfo')
      Cookie.remove('modeoflogin')
      Cookie.remove('login')
     // localStorage.setItem('login',JSON.stringify(false))
   
      window.location.reload(false)
      
  }
  
    return(
       <>
          <Menu className="sidebar" isOpen={ isOpen } customBurgerIcon={false}>
    <div className="container">
      <div className="row">
      <div className="col-12 navtop"><div className="row"><div className="offset-1 col-7">{logincoookie?(<p  style={{cursor:"pointer"}}><span className="fa fa-user" style={{marginRight:"2px"}}></span>{signup}</p>):(<a href="/signup"><p  style={{cursor:"pointer"}}><span className="fa fa-sign-in"></span>Signin</p></a>)}</div><p onClick={handleClick} className=" col-2 fa fa-arrow-left "style={{cursor:"pointer"}}></p></div></div>
   <div className="side-items">
   <div className="col-12 container"><a href ='/home'className="menu-item row"><span className="fa fa-home fa-lg offset-1 offset-sm-2  offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2  col-7 col-sm-6">Home</span></a></div> 
   <div className="col-12 container" onClick={()=>setSide(false)}><a href ='home#accordian'className="menu-item row"><span className="fa fa-th-large fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> Categories</span></a></div> 
   <div className="col-12 container"><a href ='/myorders'className="menu-item row"><span className="fa fa-th-list fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6">  MyOrders</span></a></div> 
   <div className="col-12 container"><a href ='/myaccount'className="menu-item row"><span className="fa fa-user fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> MyAccount</span></a></div> 
   <div className="col-12 container"><a href ='/aboutus'className="menu-item row"><span className="fa fa-info fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> AboutUs</span></a></div> 
   <div className="col-12 container"><a href ='/developedby'className="menu-item row"><span className="fa fa-connectdevelop fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> DevelopedBy</span></a></div> 
   <div className="col-12 container"><a onClick={logout} style={{cursor:"pointer"}} className="menu-item row"><span className="fa fa-sign-out fa-lg offset-1 offset-sm-2 offset-lg-2 col-1 p-1"></span><span className="offset-1 offset-sm-2 col-7 col-sm-6"> LogOut</span></a></div> 

 
   </div>
 </div>
 </div>
</Menu>

<nav className="navbar fixed-top navbar-light bg-dark">
<a className="navbar-brand"  onClick={handleClick}><span className="fa fa-bars fa-lg navicon" style={{color:"white"}}></span>

</a>

<ul className="navbar-nav">
<li className="nav-item col-1 col-lg-5">
 <a className="nav-link" href="/"><img src={`${process.env.PUBLIC_URL}/images/logo.jpg`}style={{width:"2.7rem"},{height:"2.7rem"}}></img>
</a>
</li>
  
</ul>
<span className="nav-item col-7 col-lg-7 font-name">Sri Balaji Stores</span>
</nav>

<div className="container spacingforheader"> 
<div className="row">
    <div className="col-12">bye</div>
    <div className="col-12">        
    ..
    </div>
    <div className="col-12"></div>
    <div className="col-12"></div><div className="col-12"></div>
  
</div>
</div>


<div className="container">


    <div className="row">
        <div className="aboutus-heading  ml-4 ml-md-0 mr-md-0 mt-5"><strong> <h1>About Us </h1></strong></div>

        <div className="col-10  ml-3 mt-5 ml-md-5 mr-5 mr-lg-6 ml-lg-6">
        <p className="aboutus-text"><strong>Sri Balaji Stores established in 1998 is a Kirana Store that's providing its customers various products across categories 
        like Groceries, Household items, Snacks, Personal Care products, Beverages and so on.<br>
        </br>
        <br></br>

        The owner of the store G.Prabhakar believes in providing Quality products at the low prices. Sri Balaji Stores strives to achieve 
        customer satisfaction and focuses on improving customer experience at the store.Sri Balaji Stores provides easy modes of payment such as Cash On Delivery, e-wallets like Paytm, PhonePay, GooglePay.<br></br><br></br>
        The store allows the customer to schedule the time of delivery. 
        and also provides free home delivery to its customers in RT Nagar , Ganga Nagar and Anand Nagar.
</strong>
  
</p>
        </div>




    </div>
    <br>
    </br>
    <br></br>
<div className="row">
<div className="col-12 aboutus-heading text-center "><h3><strong>Contact Us</strong></h3></div>

<div className="col-10  offset-1 offset-md-2 offset-sm-2 col-sm-8  text-center col-lg-8">
        <p>
          <strong>
         <address>
		              Store Landline: 080-23334716 <br />
		              Phone Numer : 7996293760 <br />
		              E-Mail: <a href="mailto:gpsuhas20@gmail.com" >
                         gpsuhas20@gmail.com</a>
                    </address>
        </strong>
        </p>

        <h3 className="aboutus-heading"><strong>Our Address</strong></h3>
                   
		             <strong> 4th MAIN ROAD,
		              KHM BLOCK <br />
                      RT NAGAR BANGALORE 560032</strong><br /><br/>
      


</div>
</div>
    <div className="row">
    
    <div className="col-12 aboutus-heading text-center "><h3><strong>Locate Us </strong></h3></div>
    <br></br>
    <br></br>
    <br></br>
    


     
        <div className="col-12 col-sm-10 col-md-12 text-center mb-5">
                    
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.210696164207!2d77.58947291409599!3d13.022250590822683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b0b8ca8bf7%3A0x401f13df09cce5db!2sSri%20Balaji%20Stores!5e0!3m2!1sen!2sin!4v1600832771880!5m2!1sen!2sin"></iframe>                    </div>

     
    </div>

</div>

       </>
    )
}
export default AboutUs