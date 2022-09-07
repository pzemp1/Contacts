import logo from './logo.svg';
import './App.css';
import {useEffect, useState, useFetch} from 'react'
import ContactTemplate from './ContactTemplate'

function App() {

  const url = 'https://jsonplaceholder.typicode.com/users'
  const [FilterSearch, setFilterStatus] = useState()
  const [Contacts, setContacts] = useState()
  const [Data, setData] = useState()
  
  useEffect(() => {
    if (FilterSearch) {
      const querystr = FilterSearch.toLowerCase()
      const filteredContacts = Data?.filter(contact => {  
        return (contact.name.toLowerCase().includes(querystr) ||
            contact.address.city.toLowerCase().includes(querystr) ||
            contact.email.toLowerCase().includes(querystr) ||
            contact.phone.toLowerCase().includes(querystr))
      })
      setContacts(filteredContacts)
    } else {
      setContacts(Data)
    }
  }, [Data, FilterSearch])
  
  useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
          for (let i = 0; i < data.length; ++i) {
            if (i % 2 == 0) {
              data[i]['img_src'] = `https://randomuser.me/api/portraits/women/${i}.jpg`
            } else {
              data[i]['img_src'] = `https://randomuser.me/api/portraits/men/${i}.jpg`
            }
          }
          setData(data)
          setContacts(data)
        });
  }, []);

  return (
    <div>
      <div className = "flex justify-center text-gray-400	decoration-8 font-semibold text-2xl md:text-4xl hover:text-gray-600">
        Contact Application
      </div>
      <div className='flex justify-center'>
        <section> 
          <form>
            <input 
              type={"text"}
              placeholder={"Search Bar"}
              onChange={event => setFilterStatus(event.target.value)}
              className={"mt-4 md:mt-6 rounded-md p-1 md:p-2 border-solid border-2 border-gray-600 hover:border-dotted"}
            />
          </form>
        </section>
      </div>
      <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}>
          {Contacts?.length < 1 && (
              <h1>No data matches your search</h1>
          )}
          <ContactTemplate contactlist = {Contacts}/>
      </div>
    </div>      
  );
}
export default App;
