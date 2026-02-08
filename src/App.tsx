import Button from "./Button";
import Footer from "./Footer";
import { useState } from 'react';
import './App.css'

function App() {
  const [students] = useState([
    {id: "20213494", name: "Melanie", age: 22, course: "Computer Science" },
    {id: "20213495", name: "Chanel", age: 21, course: "Psychology" },
    {id: "20213496", name: "Donna", age: 23, course: "Information Technology" },
    {id: "20213497", name: "Johnny", age: 20, course: "Computer Science" },
    {id: "20213498", name: "Michael", age: 19, course: "Computer Science" },
    {id: "20213499", name: "Megumi", age: 19, course: "Multimedia Arts" },
    {id: "20213500", name: "Santiago", age: 20, course: "Information Technology" },
    {id: "20213501", name: "Chika", age: 23, course: "Psychology" }
  ]);   

 let courses:string="Math";
 let courses2:string="English";
 let courses3:string="History";
 let courses4:string="Biology";
 let courses5:string="Chemistry";
 let courses6:string="Physics";
 let courses7:string="Literature";
 let courses8:string="Philosophy";
 let courses9:string="Art";
 let courses10:string="Music";



const handleSave = () => alert("Saved!");
const handleCancel = () => alert("Cancelled!");

  return (
    <>
    <h1 style={{borderBottom: "2px solid white"}}>--- VOLANTE UNIVERSITY ---</h1>
    <h2>Welcome! Student to the family of university,</h2>
    <h3>Here are the list of students, their ages and courses they are enrolled in:</h3>
    <h2>Total Students: {students.length}</h2>
    <table >
      <tr>
    
        <td><p>1. {students[0].id} | {students[0].name} | Age: {students[0].age} | Course: {students[0].course}</p></td>
      </tr>
      <tr>
    
        <td><p>2. {students[1].id} | {students[1].name} | Age: {students[1].age} | Course: {students[1].course}</p></td>
      </tr>
      <tr>
        
        <td><p>3. {students[2].id} | {students[2].name} | Age: {students[2].age} | Course: {students[2].course}</p></td>
      </tr>
        <tr>
        
        <td><p>4. {students[3].id} |   {students[3].name} | Age: {students[3].age} | Course: {students[3].course}</p></td>
        </tr>
        <tr>
    
        <td><p>5. {students[4].id} | {students[4].name} | Age: {students[4].age} | Course: {students[4].course}</p></td>
        </tr>
        <tr>
      
        <td><p>6. {students[5].id} | {students[5].name} | Age: {students[5].age} | Course: {students[5].course}</p></td>  
        </tr>
        <tr>
        
        <td><p>7. {students[6].id} | {students[6].name} | Age: {students[6].age} | Course: {students[6].course}</p></td>
        </tr>
        <tr>
        
        <td><p>8. {students[7].id} |   {students[7].name} | Age: {students[7].age} | Course: {students[7].course}</p></td>
        </tr>
        <tr>
            <td>
        <h4>This is the list of the courses below:</h4>
        <p>1. {courses}</p>
        <p>2. {courses2}</p>
        <p>3. {courses3}</p>
        <p>4. {courses4}</p>
        <p>5. {courses5}</p>
        <p>6. {courses6}</p>
        <p>7. {courses7}</p>
        <p>8. {courses8}</p>
        <p>9. {courses9}</p>
        <p>10. {courses10}</p>
      </td>
      </tr> 
      </table>


      <Button label="Save" onClick={handleSave} />
      <Button label="Cancel" onClick={handleCancel} />
      <Footer/>
    </>
  )
}

export default App
