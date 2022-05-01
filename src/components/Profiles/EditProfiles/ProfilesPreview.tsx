import React from 'react'
import { Container } from 'react-bootstrap'
import style from './ProfilesPreview.module.css'
import EditProfiles from './EditProfiles'



 const ProfilesPreview: React.FC = () => {
  return (
    <Container className= {`shadow bg-body rounded `}>
        <div className={`${style.Preview}`}>
        </div>
        <EditProfiles/>
    </Container>
  )
}

export default ProfilesPreview