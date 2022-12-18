import React, {useState,useEffect} from 'react'
import { validateEmail } from '../../utils/helpers';

import "./style.css"

export default function Contact({currentPage, setCurrentPage}) {

    const [sender, setSender] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [submitMsg, setsubmitMsg] = useState('');

    useEffect(() => {
        // to prevent this function is called on page load
        if ( currentPage !== 'contact') {
            setCurrentPage('contact')
        } else return;
    },[]);

    const handleInputChange = (e) => {
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if ( inputType === 'sender') {
            setSender(inputValue);
        } else if ( inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        if (!sender) {
            setErrorMsg('Please enter a name.');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMsg('Please enter a valid email address');
            return;
        }
        if (!message) {
            setErrorMsg('Please enter a message.');
            return;
        }
        setSender('');
        setEmail('');
        setMessage('');
        setErrorMsg('');
        setsubmitMsg('Thank you!')
    }
  return (
    <div className="contact">
        <h2>Contact Me</h2>
        <form className="form">
            <div>
                <label for="sender">Name</label>
                <input type="text" 
                    value={sender}
                    name="sender"
                    id="sender"
                    onChange={handleInputChange} />
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email"
                    value={email}
                    name="email"
                    id="email"
                    onChange={handleInputChange} />
            </div>
            <div>
                <label for="message">Message</label>
                <textarea name="message"
                    id="message"
                    value={message}
                    onChange={handleInputChange} />
            </div>
            <input type="submit" onClick={handleFormSubmit} />
            {errorMsg && (
                <p className="errmsg">{errorMsg}</p>
            )}
            {submitMsg && (
                <p className="submitmsg">{submitMsg}</p>
            )}
        </form>
    </div>
  )
}
