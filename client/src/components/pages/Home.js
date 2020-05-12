import React, { useEffect,useContext } from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'
import AuthContext from '../../context/auth/AuthContext'
import AuthState from '../../context/auth/AuthState'

const Home = () => {

    const authhContext = useContext(AuthContext);

    useEffect(() =>{
        authhContext.loadUser();
        //eslint-disable-next-line
    },[])


    return (
        <div className="grid-2">
            <div>
                <ContactForm/>
            </div>
            <div>
            <ContactFilter/>
                <Contacts/>
            </div>
        </div>
    )
}

export default Home
