import React from 'react'
import './Contact.css'
import msg_icon from'../../assets/msg-icon.png'
import mail_icon from'../../assets/mail-icon.png'
import phone_icon from'../../assets/phone-icon.png'
import location_icon from'../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eff5fe3e-2068-4136-bc59-79f9d1f690ae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>send us a message <img src={msg_icon}alt=""/></h3>
        <p>If you would like to contact us, please provide your personal details and details of your request.All the fields marked with an asterisk are mandatory.</p><br/>
        <p>Edusity complies with data protection law in the India and laws in other countries that meet internationally accepted standards.</p>
        <ul>
            <li><img src={mail_icon}alt=""/>Contact@EverNote</li>
            <li><img src={phone_icon}alt=""/>+91-9987729282</li>
            <li><img src={location_icon}alt=""/>Chitkara Univeristy<br/>Rajpura Punjab</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required/>
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter Your Phone Number' required/>
        <label >Write Your messages here</label>
        <textarea name="message" rows="6" placeholder='Enter Your message' required></textarea>
        <button type='submit'className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
