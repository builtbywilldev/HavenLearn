import React from 'react'
import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Top Companions</h1>
       <section className="home-section">
        <CompanionCard 
          id="123"
          name="Violet the Logic Hacker"
          topic='Intro to offline Ai'
          subject='Artificial Intelligence'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard 
          id="456"
          name="Harry the Number Wizard"
          topic='Linear Algebra'
          subject='Mathematics'
          duration={30}
          color='#e5d0ff'
        />
        <CompanionCard 
          id="789"
          name="Victoria, the vocab builder"
          topic='Language'
          subject='English Literature'
          duration={25}
          color='#BDE7FF'
        />
       </section>

        <section className="home-section">
          <CompanionsList 
            title='Recently Completed Sessions'
            companions={recentSessions}
            classNames="w-2/3 max-lg:w:full"
          />
          <CTA />
        </section>

    </main>
  )
}

export default Page