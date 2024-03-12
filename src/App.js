import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion  data = {faqs} />
    </div>
  );
}

function Accordion({data}) {
  const [curOpen , setCurOpen] = useState(null)

  return <div>

    {data.map((question,i)=>
    <AccordionItem curOpen = { curOpen} onOpen = { setCurOpen} number={i} title={question.title}>
    {question.text}</AccordionItem>)}
    
  </div>;
}


function AccordionItem({number,text,title,onOpen,curOpen, children}){
   
const show = number ===curOpen

   const HandleClick = () => {
     onOpen( show ? null : number)
   }

  return(
    <div>

     
      <div  onClick={HandleClick} className="item">
      <p  className="number">{number <9 ?  `0${number+1}` : number + 1 }</p>
      <p className="title">{title}</p>
    
      
    <p className="icon">{show ? '-' : '+'}</p>
    <div className="content-box">{show && children}</div>

 
    </div>
      
    </div>

  )
}