import React, { useState, useEffect } from 'react';
import { getAllFaqs } from '../api/faq';
import Faq from '../components/faq/faq';

// Styling
import { ScreenContainer, FaqsContainer } from '../styles/screens/HelpCenter.styles';

const HelpCenter = ({ user }) => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const getFaqs = async () => {
      const res = await getAllFaqs();
      console.log(res)
      setFaqs(res.data.faqs)
    }

    getFaqs()
  }, [])

  return (
    <ScreenContainer>
      <h1>Frequently Asked Questions</h1>
      {user?.isAdmin === true ? 
        <div>
          <form>
            <input placeholder='question' required/>
            <input placeholder='answer' required/>
            <button>submit</button>
          </form>
        </div> : 
        '' }
      <FaqsContainer>
        {faqs.map((item) => (
          <Faq key={item._id} data={item} user={user}/>
        ))}
      </FaqsContainer>
    </ScreenContainer>
  )
}

export default HelpCenter