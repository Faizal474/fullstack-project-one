import * as React from "react";

const CertificationPreview: React.FC<{certification: object}> = ({certification}) => {
    return (
      <div className="certification-preview">
        <div className="category">
          {certification.categoryName}
        </div>
        <div className="certification">
          {certification.programmeName}
        </div>
      </div>
    );
};

export default CertificationPreview;