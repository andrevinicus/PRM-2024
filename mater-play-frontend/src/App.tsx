import { useEffect, useState } from "react";
import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import HighlightSection from "./app/components/HighLighSection"
import Section from "./app/components/Section"
import { ICategory } from "./app/@libs/types";
import { CategoryService } from "./app/services/category-services copy";

function App() {

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    CategoryService.getAll()
      .then(result => {
        console.log('=>',result);
        setCategories(result.data);
    })
      .catch(error => {
        console.log(error);
    })
  }, []);
  
  return (
    <div className="wrapper">
      <Header/>
      <main
      style={{
        marginTop:'8rem'
        }}>
        
      </main>
      <HighlightSection />
      {
      
      categories.map(iten => (
        <Section key={iten.id} category={iten}/>
      ))
        
      }
      <Footer/>
    </div>
  )
}

export default App