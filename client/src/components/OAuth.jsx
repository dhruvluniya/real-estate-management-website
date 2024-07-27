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
            console.log(result.user.photoURL);
            // const res = await fetch('/api/auth/google',{
            //   method: 'POST,
            //   headers:{
            //     'Content-Type': 'application/json'
            //   },
                
            // })
            // console.log(res);

            // const data = await res.json();
            // console.log(data);
            dispatch(signInSuccess(result.user));
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
