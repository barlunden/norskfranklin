import { Navbar, Nav } from "rsuite";

export default function Navigation() {
  return (
    <Navbar appearance="subtle" className=" text-xl font-stretch-120%">
      <Nav>
        <Nav.Item href="/">Hjem</Nav.Item>
        <Nav.Item href="/history">Historikk</Nav.Item>
        <Nav.Item href="/franklininnorway">Biler i Norge</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item href="#">For medlemmer</Nav.Item>
      </Nav>
    </Navbar>
  );
}
