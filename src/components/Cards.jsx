import Card3 from "./cards/Card3"
import Card2 from "./cards/Card2"
export default function Cards(){
  return  (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-0">
  <div className="w-full flex justify-center"><Card3 /></div>
  <div className="w-full flex justify-center"><Card2 /></div>
</div>
    
  
  )
}