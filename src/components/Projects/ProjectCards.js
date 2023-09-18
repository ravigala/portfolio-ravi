import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

const ProjectCards = ({
  name,
  description,
  image,
  source_code_link,
  details_link,
}) => {
  return (
    <Card className='project-card-view'>
      {/* <div className="position-absolute top-0 end-0 m-3 card-img_hover">
        <div
          className="black-gradient w-10 h-10 rounded-circle d-flex justify-content-center align-items-center cursor-pointer"
        >
          <Button href={source_code_link} target='_blank'>
          <BsGithub />
        </Button>
        </div>
      </div> */}

      <Card.Img
        variant='top'
        src={image}
        alt='project_image'
        style={{ height: '250px'}}
      />
      
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>{description}</Card.Text>
        
       {details_link && <Button variant='primary' href={details_link} target='_blank' style={{ marginRight: '10px' }}>
          <CgWebsite /> &nbsp; Details
        </Button>} {' '}

        {source_code_link && <Button variant='primary' href={source_code_link} target='_blank'  >
          <BsGithub /> &nbsp; Code
        </Button>}{' '}

      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
