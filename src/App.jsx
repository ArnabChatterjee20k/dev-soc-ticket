import UserTicket from "./Pages/UserTicket/UserTicket"
import "./style/Avatar.css"
import {BrowserRouter , Routes , Route,useParams} from "react-router-dom"
export default function App() {
  const data = useParams()
  console.log(data);
  return (
    <BrowserRouter>
      <Routes>
          <Route path="avatar" element={<h1>safdsaf</h1>}/>
          <Route path="/ticket/:id" element={<UserTicket/>}/>
      </Routes>
    </BrowserRouter>
  )
}