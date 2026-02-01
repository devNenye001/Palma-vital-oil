import './404.css'
import Button from '../../components/button/button'
import Breadcrumb from '../../components/breadcrumbs/breadcrumb'
import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/footer'

const NotFound = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: '404' }
  ]

  return (
    <>
    <Nav />
    <Breadcrumb items={breadcrumbItems} />
     <div className='notfound'>
      <div className='notfound-content'>
        <img src="/logo1.svg" alt="Logo" />
        <h1>Page not found</h1>
        <p>This page doesnt exist or has been moved.</p>
        <Button label="Go to Home" />
      </div>
    </div>
    <Footer />
    </>
   
  )
}

export default NotFound