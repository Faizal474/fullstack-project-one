import CertificationPreview from "./certification-preview";

const CertificationList = ({initialData}) => {
    return (
        <div className="certifications-list">
            {
            initialData.certifications.map((certification) => {
                return (<CertificationPreview certification={certification} key={certification.id}/>);
            })}
        </div>
    )
};

export default CertificationList;