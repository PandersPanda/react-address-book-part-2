import { useContext, useEffect, useState } from "react"
import { ContactContext } from "../App"
import { useParams } from "react-router-dom"


function PersonProfile(){
    const { contacts } = useContext(ContactContext)
    const [ contact, setContact ] = useState(null)
    const contactId = useParams()

    useEffect(() => {
        const contactProfile = contacts.find((c) => c.id.toString() === contactId.id)
        setContact(contactProfile)
    }, [contactId.id, contacts])

    if (!contact) return <p>Loading...</p>

    return(
        <article>
            <h3>{contact.firstName} {contact.lastName}</h3>
        </article>
    )
}

export default PersonProfile