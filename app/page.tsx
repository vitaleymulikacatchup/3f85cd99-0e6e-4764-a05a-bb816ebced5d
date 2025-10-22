import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ContentSections from '@/components/ContentSections'
import AgeConfirmationModal from '@/components/AgeConfirmationModal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ContentSections />
      <Footer />
      <AgeConfirmationModal />
    </main>
  )
}