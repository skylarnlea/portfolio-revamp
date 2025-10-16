import MySpacePortfolio from '@/components/MySpacePortfolio'

export default function Home() {
  return (
    <MySpacePortfolio 
      profileData={{
        name: "Your Developer Name",
        age: 28,
        location: {
          city: "San Francisco",
          state: "CA", 
          country: "USA"
        }
      }}
      // Add your customizations here
      backgroundImage="/your-background.jpg"
      songUrl="/your-song.mp3"
      aboutMe="I'm a full-stack developer who loves building innovative web applications..."
    />
  )
}