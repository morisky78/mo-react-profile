import React, {useState} from 'react'
import "./style.css"

export default function Contact() {

    const [sender, setSender] = useState('');

    const handleInputChange = (e) => {

    }
  return (
    <div className="contact">
        <h2>Contact Me</h2>
        <form className="form">
            <div>
            <label for="sender">Name</label>
            <input type="text" 
                value=""
                name="sender"
                id="sender"
                onChange={handleInputChange}
            />
            </div>
            <div>
            
            </div>
            
        </form>
    </div>
  )
}
