import CertificationPreview from "./certification-preview";

const CertificationList = ({certifications}) => {
    return (
      <div className="certifications-list">
        {certifications.map((certification) => {
            return(<CertificationPreview certification={certification} key={certification.id} />);
          })}
      </div>
    );
  };
  
  export default CertificationList;