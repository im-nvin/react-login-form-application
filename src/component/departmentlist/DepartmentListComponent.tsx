import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './DepartmentListComponent.scss'; 

interface Department {
  department: string;
  sub_departments: string[];
}

interface Props {
  departments: Department[];
}

const DepartmentListComponent: React.FC<Props> = ({ departments }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleExpandToggle = (department: string) => {
    if (expanded === department) {
      setExpanded(null);
    } else {
      setExpanded(department);
    }
  };

  return (
    <div className="department-list">
      {departments.map((dept) => (
        <div key={dept.department} className="department">
          <div className="department-header" onClick={() => handleExpandToggle(dept.department)}>
            <div className="expand-icon">
              {expanded === dept.department ? <ExpandMoreIcon /> : <ChevronRightIcon />}
            </div>
            <div className="department-name">{dept.department}</div>
          </div>
          {expanded === dept.department && (

            <div className="sub-departments">

              {dept.sub_departments.map((subDept) => (

                <div key={subDept} className="sub-department">
                  {subDept}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentListComponent;
