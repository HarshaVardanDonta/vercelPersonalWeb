import { useEffect, useState } from 'react';
import './App.css';
import { Typography } from 'antd';
import Photo from './Assets/Photo.png'
import { IoIosCloudDownload, IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Donar from "./Assets/donar.png"
import Tomo from "./Assets/Tomo.png"
import Flexiver from "./Assets/Flexiver.png"
import { TextField } from '@mui/material';
import useWindowDimensions from './UseDimentions';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loadingImg from './Assets/loading.gif'
function App() {
  useEffect(() => {
    emailjs.init({
      publicKey: '7k29io_jBeV65raM0'
    });

  }, []);

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const { height, width } = useWindowDimensions();
  const [selectedHeaderItem, setSelectedHeaderItem] = useState(0)
  const headerItems = ['Home', 'Portfolio', 'CV', 'Get in touch']
  return (
    <div>
      <div className='section1'>
        <div className='section1Left'>
          <div className='header'>
            {headerItems.map((item, index) => {
              return (
                <div className='headerItem' onClick={() => {
                  if (index === 1) {
                    document.getElementById('section2')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  else if (index == 3) {
                    document.getElementById('section3')?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}>
                  {item}
                </div>
              )
            })
            }
          </div>
          <div className='homeMainText'>
            <span style={{
              color: '#98FF14'
            }}>
              HELLO, &nbsp;
            </span>
            I’m Harsha<br />
            Frontend Developer<br />
            Based in Hyderabad
          </div>
          <div className='homeSubText'>
            I am a dedicated and proficient cross-plaƞorm applicaƟon developer with experƟse in
            using FluƩer. With a passion for creating innovative and user-friendly mobile
            applications, I aim to leverage my skills and experience to develop high-quality, versatile,
          </div>
          <div className='buttonContainer'>
            <div className='hireMeButton'>
              Hire Me!
            </div>
            <div className='downloadCV'>
              Download CV <IoIosCloudDownload />
            </div>
          </div>

          <div className='actionButtonContainer'>
            <div className='actionButton'>
              <FaLinkedin size={50} />
              <div className='actionButtonText'>
                linkedIn<br />
                <span style={{ fontSize: 15 }}>Connect with me</span>
              </div>
            </div>
            <div className='actionButton'>
              <FaGithub size={50} />
              <div className='actionButtonText'>
                GitHub<br />
                <span style={{ fontSize: 15 }}>See my work</span>
              </div>
            </div>
          </div>
          <div className='actionButtonContainer'>
            <div className='actionButton'>
              <FaWhatsapp size={50} />
              <div className='actionButtonText'>
                WhatsApp<br />
                <span style={{ fontSize: 15 }}>Text me</span>
              </div>
            </div>
            <div className='actionButton'>
              <IoMdMail size={50} />
              <div className='actionButtonText'>
                Mail<br />
                <span style={{ fontSize: 15 }}>Drop a mail</span>
              </div>
            </div>
          </div>

        </div>
        {/* image */}
        <div className='section1Right'>
          <img src={Photo} className='section1Image' alt='pic' />
        </div>
      </div>
      <div id='section2' className='section2'>
        <div className='portfolioBox'>
          <img src={Donar} alt=''></img>
          <br />
          <div>Donar</div>
          <br />
          Donar is a comprehensive blood donation application designed to facilitate the process of requesting and donating blood. It connects users in need of blood with potential donors, streamlining communication and ensuring timely assistance. The application is equipped with features to capture patient details, manage blood requests, and provide a seamless chat interface for user communication.
        </div>
        <div className='portfolioBox'>
          <img src={Tomo} alt=''></img>
          <br />
          <div>TOMO</div>
          <br />
          Tomo is a dynamic social media application designed to connect users through sharing and communication. Users can create posts, share images and videos, chat with friends, send friend requests, and explore content from other users. Tomo fosters an engaging and interactive community experience.
        </div>
        <div className='portfolioBox'>
          <img src={Flexiver} alt=''></img>
          <br />
          <div>Flexiver</div>
          <br />
          Flexiver is a modern courier service platform built with React JS and Supabase, designed to streamline the process of sending packages from one place to another. The platform connects users needing to send packages with registered drivers who deliver them. Flexiver also provides a portal for drivers to register their vehicles and manage deliveries, ensuring a seamless experience for both senders and drivers.
        </div>
      </div>
      <div className='section3' id='section3'>
        {loading ?
          <img src={loadingImg} alt='loading' style={{ backgroundColor: '#212121', borderRadius: '10px' }} />
          :
          <div className='contactContainer'>
            Contact me
            <div className='row'>
              <TextField id="Name" placeholder='Name' variant="outlined"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                style={{
                  backgroundColor: '#212121',
                  color: 'white',
                  borderRadius: '10px',
                }}
                sx={{
                  '& .MuiInputBase-root': {
                    height: '40px',
                    width: width < 600 ? '90vw' : '20vw',
                    color: 'white',
                  },
                  '& ::placeholder': {
                    color: 'white',
                    opacity: '0.9',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                    },
                    '&:hover fieldset': {
                    },
                    '&.Mui-focused fieldset': {
                    },
                  },
                }}
              />
              <TextField id="Name" placeholder='Contact' variant="outlined"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value)
                }}
                style={{
                  backgroundColor: '#212121',
                  color: 'white',
                  borderRadius: '10px',
                }}
                sx={{
                  '& .MuiInputBase-root': {
                    height: '40px',
                    width: width < 600 ? '90vw' : '20vw',
                    color: 'white',
                  },
                  '& ::placeholder': {
                    color: 'white',
                    opacity: '0.9',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                    },
                    '&:hover fieldset': {
                    },
                    '&.Mui-focused fieldset': {
                    },
                  },
                }}
              />
            </div>
            <TextField id="Name" placeholder='Message' variant="outlined"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              multiline={true}
              style={{
                backgroundColor: '#212121',
                color: 'white',
                borderRadius: '10px',
              }}
              sx={{
                '& .MuiInputBase-root': {
                  height: '200px',

                  color: 'white',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  overflow: 'scroll',
                  // hide scrollbar
                  scrollbarWidth: 'none',
                  width: width < 600 ? '90vw' : '50vw',
                },
                '& ::placeholder': {
                  color: 'white',
                  opacity: '0.9',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  '&:hover fieldset': {
                  },
                  '&.Mui-focused fieldset': {
                  },
                },
              }}
            />
            <div className='submitButton' onClick={async () => {
              if (name === '' || contact === '' || message === '') {
                toast.error('Please fill all the fields')
                return
              }
              setLoading(true)
              await emailjs.send('service_blbfovl', 'template_91396fx', {
                from_name: name,
                contact: contact,
                message: message,
              }).then(
                (res) => {
                  console.log('Email res', res);
                  toast.success('Email sent successfully')
                  setName('')
                  setContact('')
                  setMessage('')
                },
                (error) => {
                  console.log(error);
                  toast.error('Email sending failed')
                }
              );
              setLoading(false)
            }}>
              Submit
            </div>
          </div>
        }

      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
