import { Container } from "reactstrap";
import { MenuButton } from "../../components/menu";
import { Avatar } from "./avatar";
import { MenuItem } from "./menuItems";

export const MainScreen = () => (
  <>
    <Container fluid className="primary-container" />
    <Avatar />
    <MenuItem />
    <MenuButton />
  </>
)