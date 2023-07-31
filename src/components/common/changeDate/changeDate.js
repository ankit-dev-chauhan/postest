import moment from "moment";
import { useState } from "react";

export const ChangeDate=()=>{
   const [count, setCount] = useState(0);
   const GetD = (props) => {
      const tomorrow = moment().add(count, 'days');
      const d = moment(tomorrow?._d).format("YYYY-MMMM-DD")
      return d
   }

   return {
      count,
      setCount,
      GetD,
   };
}