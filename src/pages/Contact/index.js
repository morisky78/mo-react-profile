import React, {useState,useEffect} from 'react'
import { validateEmail } from '../../utils/helpers';
import {send} from 'emailjs-com';

import "./style.css"

export default function Contact({currentPage, setCurrentPage}) {

    // const [sender, setSender] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [submitMsg, setsubmitMsg] = useState('');

    const initialState = {
        from_name: '',
        message:'',
        reply_to:'',
    };

    function emailSent() {
        return new Promise(resolve => {
          setTimeout(resolve, 800);  });
    }

    const [toSend, setToSend] = useState(initialState);

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

        if ( inputType === 'from_name') {
            // setSender(inputValue);
            if ( target.value === '') {
                setErrorMsg('Please enter a name.');
            } else {setErrorMsg(''); }
        } else if ( inputType === 'reply_to') {
            // setEmail(inputValue);
            if ( target.value === '') {
                setErrorMsg('Please enter a valid email address.');
            } else {setErrorMsg(''); }
        } else {
            // setMessage(inputValue);
            if ( target.value === '') {
                setErrorMsg('Please enter a message.');
            } else {setErrorMsg(''); }
        }
        setToSend({...toSend, [inputType]:inputValue});

    }
    
    const clearState = () => {
        setsubmitMsg('Your message has been sent. Thank you!');
        setToSend({ ...initialState });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!toSend.from_name) {
            setErrorMsg('Please enter a name.');
            return;
        }
        if (!validateEmail(toSend.reply_to)) {
            setErrorMsg('Please enter a valid email address');
            return;
        }
        if (!toSend.message) {
            setErrorMsg('Please enter a message.');
            return;
        }
        

        send(
            'service_xs9fgjt',
            'template_orrebq2',
            toSend,
            'NT9JYNn4MnapxNsZz'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }).catch((err) => {
            console.log('FAILED...', err);
        });
        setErrorMsg('');
        emailSent().then(clearState);
    }
  return (
    <div className="contact">
        <div className="contentbox">
            <h2>Contact Me</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className='inputLine'>
                    <label>Name</label>
                    <input type="text" 
                        value={toSend.from_name}
                        name="from_name"
                        id="from_name"
                        placeholder='Your name'
                        onChange={handleInputChange} />
                </div>
                <div className='inputLine'>
                    <label>Email</label>
                    <input type="email"
                        value={toSend.reply_to}
                        name="reply_to"
                        id="email"
                        placeholder='Your email'
                        onChange={handleInputChange} />
                </div>
                <div className='inputLine'>
                    <label>Message</label>
                    <textarea name="message"
                        id="message"
                        value={toSend.message}
                        placeholder='Your message'
                        onChange={handleInputChange} />
                </div>
                <input type="submit" className='sbmbtn'/>
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
