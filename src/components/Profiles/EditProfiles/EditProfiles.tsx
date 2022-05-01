import style from './EditProfiles.module.css'
import { Container } from "react-bootstrap";
import EditForm from "./EditForm";

const EditProfiles: React.FC = () => {
  return (
      <Container className={`shadow px-3 pt-3 m-auto bg-body rounded ${style.EditProfilesContainer}`}>
        <EditForm  />
      </Container>
  );
}

export default EditProfiles;
