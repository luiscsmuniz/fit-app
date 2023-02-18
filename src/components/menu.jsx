import { Button, Media, Navbar, NavItem, NavLink, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button
        className="btn-menu d-none d-sm-inline"
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <div
        className="nav-primary d-block d-sm-none"
      >
        <div className="nav-item-menu text-center">
          <FontAwesomeIcon className="mt-3" icon={faHome} size="2x" />
        </div>
        <div className="nav-item-menu text-center">
          <FontAwesomeIcon className="mt-3" icon={faInstagram} size="2x" />
        </div>
        <div className="nav-item-menu text-center">
          <FontAwesomeIcon className="mt-3" icon={faWhatsapp} size="2x" />
        </div>
        <div
          className="nav-item-menu text-center"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <FontAwesomeIcon className="mt-3" icon={faBars} size="2x" />
        </div>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

const Drawer = ({ setIsOpen, isOpen }) => (
  <Offcanvas
    direction="end"
    toggle={() => setIsOpen(prev => !prev)}
    isOpen={isOpen}
  >
    <OffcanvasHeader toggle={() => setIsOpen(prev => !prev)}>
      <Media
        src="https://mfitusersecure.s3.amazonaws.com/53794/pasta/7203464.jpeg"
        style={{
          width: '74px',
          height: '74px',
          borderRadius: '50%',
        }}
      /> Leticia de Souza Muniz
    </OffcanvasHeader>
    <OffcanvasBody>
      <strong />
    </OffcanvasBody>
  </Offcanvas>
)