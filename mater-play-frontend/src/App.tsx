import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import HighLightSection from "./app/components/HighLightSection"
import Section from "./app/components/Section"

function App() {

  return (
    <div className="wrapper">
      <Header/>
      <main
      style={{
        marginTop:'8rem'
        }}>
        
      </main>
      <HighLightSection></HighLightSection>
      <Section title='Recomendados para você'/>
      <Section title='Séries do momento'/>
      <Section title='Assistir com a família'/>
      <Footer/>
    </div>
  )
}

export default App