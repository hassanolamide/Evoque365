import {useState}from 'react'
import './Signup.css'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore";
import { auth,db } from '../lib/firebase';
import upload from '../upload/Upload';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
    const [avatar,setAvatar] = useState({
        File:null,
        url:""
    })

    const [loading,setLoading]=useState(false)
    const handleAvatar= e=>{
        if(e.target.files[0]){
            setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
        }
    };
    
    const handleSignup = async (e) => {
      e.preventDefault();
      setLoading(true); // Start loading indicator
  
      const formData = new FormData(e.target);
      const { username, email, password } = Object.fromEntries(formData);
  
      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User created with UID:", user.uid);
  
        let imgURL = null;
        // Check if avatar file is selected and upload it
        if (avatar.file) {
          imgURL = await upload(avatar.file);
          console.log("Image uploaded, URL:", imgURL);
        }
  
        // Save user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
          username,
          email,
          avatar: imgURL,
          id: user.uid,
        });
  
        console.log("User data written to Firestore");
        toast.success("Account created!");
  
        // Redirect to login page
        navigate('/login');
  
      } catch (err) {
        // Handle errors and display appropriate message
        console.error("Error code:", err.code);
        console.error("Error message:", err.message);
        toast.error("Failed to create account: " + err.message);
  
      } finally {
        // Ensure loading state is reset
        setLoading(false);
      }
    };
  return (
    <div className='signup'>
      
      <form onSubmit={handleSignup} >
        <h2>Create an account</h2>
        <label htmlFor="file">
            <img src={avatar.url || "./avatar-removebg-preview.png"} alt="" />
            Upload an image</label>
        <input type="file" name="" id="file" style={{display:"none"}} onChange={handleAvatar}/>
        <input type="text" placeholder="Username" name="username" />
        <input type="email" placeholder='Email' name="email" />
        <input type="password" placeholder='Password' name="password"/>
        <button disabled={loading}>{loading?"Loading" :"Sign Up" }</button>
      </form>
    </div>
  )
}

export default Signup
