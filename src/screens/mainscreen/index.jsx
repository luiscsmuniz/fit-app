import { Container } from "reactstrap";
import { MenuButton } from "../../components/menu";
import { Avatar } from "./Avatar";

export const MainScreen = () => (
  <>
    <Container fluid className="primary-container" />
    <Avatar />
    <MenuButton />
  </>
)