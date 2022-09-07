const ContactTemplate = ( { contactlist } ) => {

    return (
        <>
            {
                contactlist?.map((contact, index) => (
                    <div className="py-2 px-2">
                    <figure className="bg-white text-white h-80 rounded-lg shadow-md border-double border-4 border-gray-600" key={index}>
                        <img alt="user" className="w-32 h-32 mx-auto rounded-lg mt-7" src={contact.img_src} />
                        <figcaption className="text-center mt-5">
                        <p className="text-gray-700 font-semibold text-xl mb-2">
                            {contact.name}
                        </p>
                        <p className="text-gray-500">
                            <span className="font-medium">email: </span>{contact.email}
                        </p>
                        <p className="text-gray-500">
                            <span className="font-medium">phone: </span>{contact.phone}
                        </p>
                        <p className="text-gray-500">
                            <span className="font-medium">city: </span>{contact.address.city}
                        </p>
                        </figcaption>
                  </figure> 
                  </div>

                ))
                
            }  
        </>
    )
}

export default ContactTemplate