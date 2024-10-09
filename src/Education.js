
function Education({ education, updateEducation }) {
    // Toggle visibility for individual entries
    const toggleVisibility = (index) => {
        const updatedVisibility = [...education.isHidden];
        updatedVisibility[index] = !updatedVisibility[index];
        updateEducation("isHidden", updatedVisibility);
    };

    const handleChange = (field, e, index) => {
        const updatedValues = [...education[field]];
        updatedValues[index] = e.target.value;
        updateEducation(field, updatedValues);
    };

    const handleDelete = (index) => {
        const updatedSchools = [...education.school];
        const updatedDegrees = [...education.degree];
        const updatedStartDates = [...education.startDate];
        const updatedEndDates = [...education.endDate];
        const updatedGPAs = [...education.gpa];
        const updatedLocations = [...education.location];
        const updatedDescriptions = [...education.description];

        updatedSchools.splice(index, 1);
        updatedDegrees.splice(index, 1);
        updatedStartDates.splice(index, 1);
        updatedEndDates.splice(index, 1);
        updatedGPAs.splice(index, 1);
        updatedLocations.splice(index, 1);
        updatedDescriptions.splice(index, 1);

        updateEducation("school", updatedSchools);
        updateEducation("degree", updatedDegrees);
        updateEducation("startDate", updatedStartDates);
        updateEducation("endDate", updatedEndDates);
        updateEducation("gpa", updatedGPAs);
        updateEducation("location", updatedLocations);
        updateEducation("description", updatedDescriptions);
    };

    const renderEducationEntries = () => {
        return education.school.map((school, index) => (
            <div key={index}>
                <div>
                    {/* <label>School: </label> */}
                    <input
                        type="text"
                        placeholder="School"
                        value={school}
                        onChange={(e) => handleChange("school", e, index)}
                    />
                </div>
                <div id={index} style={{ display: education.isHidden[index] ? "none" : "block" }}>
                    <div>
                        {/* <label>Degree: </label> */}
                        <input
                            type="text"
                            placeholder="Degree"
                            value={education.degree[index]}
                            onChange={(e) => handleChange("degree", e, index)}
                        />
                    </div>
                    <div>
                        {/* <label>Start Date: </label> */}
                        <input
                            type="text"
                            placeholder="Start Date"
                            value={education.startDate[index]}
                            onChange={(e) => handleChange("startDate", e, index)}
                        />
                    </div>
                    <div>
                        {/* <label>End Date: </label> */}
                        <input
                            type="text"
                            placeholder="End Date"
                            value={education.endDate[index]}
                            onChange={(e) => handleChange("endDate", e, index)}
                        />
                    </div>
                    <div>
                        {/* <label>GPA: </label> */}
                        <input
                            type="text"
                            placeholder="GPA"
                            value={education.gpa[index]}
                            onChange={(e) => handleChange("gpa", e, index)}
                        />
                    </div>
                    <div>
                        {/* <label>Location: </label> */}
                        <input
                            type="text"
                            placeholder="Location"
                            value={education.location[index]}
                            onChange={(e) => handleChange("location", e, index)}
                        />
                    </div>
                    <div>
                        {/* <label>Description: </label> */}
                        <input
                            type="text"
                            placeholder="Description"
                            value={education.description[index]}
                            onChange={(e) => handleChange("description", e, index)}
                        />
                    </div>
                </div>
                <div>
                    <button onClick={() => toggleVisibility(index)}>
                        {education.isHidden[index] ? "Expand" : "Collapse"}
                    </button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            </div>
        ));
    };
    
    

    const addEducationEntry = () => {
        updateEducation("school", [...education.school, ""]);
        updateEducation("degree", [...education.degree, ""]);
        updateEducation("startDate", [...education.startDate, ""]);
        updateEducation("endDate", [...education.endDate, ""]);
        updateEducation("gpa", [...education.gpa, ""]);
        updateEducation("location", [...education.location, ""]);
        updateEducation("description", [...education.description, ""]);
        updateEducation("isHidden", [...education.isHidden, false]);
    };

    return (
        <div className="info-block">
            <h2>Education</h2>
            {renderEducationEntries()}
            <button onClick={addEducationEntry}>Add Entry</button>
        </div>
    );
}

export default Education;
