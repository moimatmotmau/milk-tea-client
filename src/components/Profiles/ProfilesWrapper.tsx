import ProfilesCategory from "./ProfilesCategory/ProfilesCategory";
import { Container, Row, Col } from "react-bootstrap";

import { Outlet } from "react-router-dom";

function ProfilesWrapper() {
  return (
    <>
      <div className={`mb-4`} style={{ height: "70px", backgroundColor: "#282828" }}></div>

      <Container className={``}>
        <Row>
          <Col lg={4} className={`d-sx-none`}>
            <ProfilesCategory />
          </Col>
          <Col lg={8} xs={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfilesWrapper;
