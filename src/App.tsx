import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Testimonials } from '@/components/Testimonials'
import ContactPage from './pages/ContactPage'
import FeatureDetail from './pages/FeatureDetail'
import { Footer } from '@/components/Footer'
import { ScrollToHash } from '@/components/ScrollToHash'

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="relative">
        <Navbar />
        <main className="pt-14">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <HowItWorks />
                  <Testimonials />
                  <Footer />
                </>
              }
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/features" element={<FeatureDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
