import style from "./home.module.css"
import {Link} from "react-router-dom"
import CreateUser from "./CreateUser"
import User from "./User"
const Homecrud=()=>
{
    return(
        <section id={style.nav}>
       <Link to="/create">CreateUser</Link>
       <Link to="/user">user</Link>


        </section>
    )
}
export default Homecrud