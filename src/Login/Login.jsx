import {useState} from 'react'
import { toast } from 'react-toastify'
import './Login.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate();
  const handleSignin = async (e) =>{
    setLoading(true); 
    e.preventDefault()
     const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    try {
     await signInWithEmailAndPassword(auth,email,password).then(()=>{
      navigate('/');
     })
    toast.success("successful")
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }finally {
      
      setLoading(false);
    }
  }
  return (
    <div className='login'>
      
      <form onSubmit={handleSignin}>
        <h2>Welcome Back,</h2>
        <input type="email" placeholder='Email' name="email" />
        <input type="password" placeholder='Password' name="password"/>
        <button disabled={loading}>{loading?"Loading" :"Sign In" }</button>
      </form>
    </div>
  )
}

export default Login
