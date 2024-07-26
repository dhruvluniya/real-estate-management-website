import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { signInSuccess } from '../redux/user/userSlice.js';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';

export default function OAuth() {
  const dispatch= useDispatch();
  const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            

            const result = await signInWithPopup(auth,provider);

            const res = await fetch('/api/auth/google',{
              method: 'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: result.user.name, 
                email: result.user.email, 
                photo: result.user.photoURL
              })


            })

            const data = await res.json();
            dispatch(signInSuccess(data.message));
            navigate('/');
        } catch (error) {
            console.log('could not sign in with google',error);
        }
    }
  return (
    <button type="button" onClick={handleGoogleClick} className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
      Continue with Google
    </button>
  )
}
