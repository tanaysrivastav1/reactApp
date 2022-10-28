import {signInWithGoogle, signOut, useAuthState} from '../utilities/firebase';

const Banner = ({title}) => {
    return <>
    <h1>{title}</h1>
    <button className="ms-auto btn btn-success" onClick={signInWithGoogle}>Sign in</button>
    <button className="ms-auto btn btn-primary" onClick={signOut}>Sign out</button>
</>
}

export default Banner;