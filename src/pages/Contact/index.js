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
            if ( target.value === '') {
                setErrorMsg('Please enter a name.');
            } else {setErrorMsg(''); }
        } else if ( inputType === 'email') {
            setEmail(inputValue);
            if ( target.value === '') {
                setErrorMsg('Please enter a valid email address.');
            } else {setErrorMsg(''); }
        } else {
            setMessage(inputValue);
            if ( target.value === '') {
                setErrorMsg('Please enter a message.');
            } else {setErrorMsg(''); }
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
        <div className="contentbox">
            <h2>Contact Me</h2>
            <form className="form">
                <div className='inputLine'>
                    <label>Name</label>
                    <input type="text" 
                        value={sender}
                        name="sender"
                        id="sender"
                        onChange={handleInputChange} />
                </div>
                <div className='inputLine'>
                    <label>Email</label>
                    <input type="email"
                        value={email}
                        name="email"
                        id="email"
                        onChange={handleInputChange} />
                </div>
                <div className='inputLine'>
                    <label>Message</label>
                    <textarea name="message"
                        id="message"
                        value={message}
                        onChange={handleInputChange} />
                </div>
                <input type="submit" onClick={handleFormSubmit} className='sbmbtn'/>
                {errorMsg && (
                    <p className="errmsg">{errorMsg}</p>
                )}
                {submitMsg && (
                    <p className="submitmsg">{submitMsg}</p>
                )}
            </form>
        </div>
    </div>
  )
}
