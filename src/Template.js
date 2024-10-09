function Template({ profile, education, workExperience }) {
    const renderEducationList = () => {
        return education.school.map((school, index) => (
            <div className="education-item" key={index}>
                {school && <div><strong>School:</strong> {school}</div>}
                {education.degree[index] && <div><strong>Degree:</strong> {education.degree[index]}</div>}
                {education.startDate[index] && education.endDate[index] ? (
                    <div>
                        <strong>Date:</strong> {education.startDate[index]} to {education.endDate[index]}
                    </div>
                ) : (
                    <>
                        {education.startDate[index] && (
                            <div>
                                <strong>Start Date:</strong> {education.startDate[index]}
                            </div>
                        )}
                        {education.endDate[index] && (
                            <div>
                                <strong>End Date:</strong> {education.endDate[index]}
                            </div>
                        )}
                    </>
                )}
                {education.gpa[index] && <div><strong>GPA:</strong> {education.gpa[index]}</div>}
                {education.location[index] && <div><strong>Location:</strong> {education.location[index]}</div>}
                {education.description[index] && <div><strong>Description:</strong> {education.description[index]}</div>}
            </div>
        ));
    };

    const renderWorkExperienceList = () => {
        return workExperience.company.map((company, index) => (
            <div className="work-experience-item" key={index}>
                {company && <div><strong>Company:</strong> {company}</div>}
                {workExperience.position[index] && <div><strong>Position:</strong> {workExperience.position[index]}</div>}
                {workExperience.startDate[index] && workExperience.endDate[index] ? (
                    <div>
                        <strong>Date:</strong> {workExperience.startDate[index]} to {workExperience.endDate[index]}
                    </div>
                ) : (
                    <>
                        {workExperience.startDate[index] && (
                            <div>
                                <strong>Start Date:</strong> {workExperience.startDate[index]}
                            </div>
                        )}
                        {workExperience.endDate[index] && (
                            <div>
                                <strong>End Date:</strong> {workExperience.endDate[index]}
                            </div>
                        )}
                    </>
                )}
                {workExperience.location[index] && <div><strong>Location:</strong> {workExperience.location[index]}</div>}
                {workExperience.description[index] && <div><strong>Description:</strong> {workExperience.description[index]}</div>}
            </div>
        ));
    };

    return (
        <div className="template-container">
            <div className="template-header">
                <h1 className="template-title">Curriculum Vitae</h1>
            </div>
            <div className="profile-section">
                <h2>Profile</h2>
                <div>
                    <div><strong>Name:</strong> {profile.name}</div>
                    <div><strong>Email:</strong> {profile.email}</div>
                    <div><strong>Phone:</strong> {profile.phone}</div>
                    <div><strong>Address:</strong> {profile.address}</div>
                </div>
            </div>
            {education.school.length > 0 && <h2>Education</h2>}
            {renderEducationList()}
            {workExperience.company.length > 0 && <h2>Work Experience</h2>}
            {renderWorkExperienceList()}
        </div>
    );
}

export default Template;
