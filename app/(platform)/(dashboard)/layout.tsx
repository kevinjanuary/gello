import { Navbar } from "./_components/navbar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default DashboardLayout
