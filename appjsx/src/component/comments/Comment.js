import React from 'react'
const feeddback = [
    {
    id: Math.random (),
    name: "Emna" ,
    Comment: "i get carried",
    },
    {
        id: Math.random (),
        name: "Jason" ,
        Comment: "ggwp",
        },
     {
        id: Math.random (),
         name: "jennyfer" ,
         Comment: "thanx ",
          },
     {
        id: Math.random (),
         name: "rita" ,
        Comment: "that's amazing", 
      },
]
const Comment = () => {
  return (
    <div>
        <div>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gDJ-am07ma1TXfL8wOuUFwe8BnGGofQlVVyQaqWzKg&s" alt="whateva" width="50" height="60"></img>
 
            <textarea id="w3review" name="w3review" rows="3" cols="14">
            </textarea>
        </div>
    </div>
  )
}

export default Comment