import Modules from "../modules/page";
import CourseStatus from "./status";
export default function Home() {
 return (
   <div id="wd-home">
     <table>
       <tbody>
         <tr>
           <td valign="top" width="90%"> <Modules /> </td>
           <td valign="top"> <CourseStatus /> </td>
         </tr>
       </tbody>
     </table>
   </div>
);}
