import { Button } from './components/button';
import { PlusIcon } from './components/plusIcon';

function App() {
  
  return (
    <div className="p-4">
<Button  
         size="lg"
         variant="primary"
         text="share" 
         startIcon={<PlusIcon size={"lg"}/>}
    />
    <br />
    <br />
    <Button  
         size="md"
         variant="primary"
         text="share" 
         startIcon={<PlusIcon size={"md"}/>}
    />
    </div>
  )
}

export default App
