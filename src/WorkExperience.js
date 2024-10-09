import React from "react";

function WorkExperience({ workExperience, updateWorkExperience }) {
    // Toggle visibility for individual entries
    const toggleVisibility = (index) => {
        const updatedVisibility = [...workExperience.isHidden];
        updatedVisibility[index] = !updatedVisibility[index];
        updateWorkExperience("isHidden", updatedVisibility);
    };

    const handleChange = (field, e, index) => {
        const updatedValues = [...workExperience[field]];
        updatedValues[index] = e.target.value;
        updateWorkExperience(field, updatedValues);
    };

    const handleDelete = (index) => {
        const updatedCompanies = [...workExperience.company];
        const updatedPositions = [...workExperience.position];
        const updatedStartDates = [...workExperience.startDate];
        const updatedEndDates = [...workExperience.endDate];
        const updatedLocations = [...workExperience.location];
        const updatedDescriptions = [...workExperience.description];

        // Remove the entry at the specified index
        updatedCompanies.splice(index, 1);
        updatedPositions.splice(index, 1);
        updatedStartDates.splice(index, 1);
        updatedEndDates.splice(index, 1);
        updatedLocations.splice(index, 1);
        updatedDescriptions.splice(index, 1);

        // Update state with the modified arrays
        updateWorkExperience("company", updatedCompanies);
        updateWorkExperience("position", updatedPositions);
        updateWorkExperience("startDate", updatedStartDates);
        updateWorkExperience("endDate", updatedEndDates);
        updateWorkExperience("location", updatedLocations);
        updateWorkExperience("description", updatedDescriptions);
    };

    const renderWorkEntries = () => {
        return workExperience.company.map((company, index) => (
            <div key={index} className="work-entry">
                <div>
                    {/* <label>Company: </label> */}
                    <input
                        type="text"
                        placeholder="Company"
                        value={company}
                        onChange={(e) => handleChange("company", e, index)}
                    />
                </div>
                <div id={index} style={{ display: workExperience.isHidden[index] ? "none" : "block" }}>
                    <div>
                        {/* <label>Position: </label> */}
                        <input
                            type="text"
                            placeholder="Position"
                            value={workExperience.position[index]}
                            onChange={(e) => handleChange("position", e, index)}
                        />
                    </div>
                    <div>
                        {/* <label>Start Date: </label> */}
                        <input
                            type="text"
                            placeholder="Start Date"
                            value={workExperience.startDate[index]}
                            onChange={(e) => handleChange("startDate", e, index)}
                        />
                    </div>
                    <div>
                        {/* <label>End Date: </label> */}
                        <input
                            type="text"
                            placeholder="End Date"
                            value={workExperience.endDate[index]}
                            onChange={(e) => handleChange("endDate", e, index)}
                        />
                    </div>
                    <div>
                        {/* <label>Location: </label> */}
                        <input
                            type="text"
                            placeholder="Location"
                            value={workExperience.location[index]}
                            onChange={(e) => handleChange("location", e, index)}
                        />
                    </div>
                    <div>
                        {/* <label>Description: </label> */}
                        <input
                            type="text"
                            placeholder="Description"
                            value={workExperience.description[index]}
                            onChange={(e) => handleChange("description", e, index)}
                        />
                    </div>
                </div>
                <div>
                    <button onClick={() => toggleVisibility(index)}>
                        {workExperience.isHidden[index] ? "Expand" : "Collapse"}
                    </button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            </div>
        ));
    };

    const addWorkEntry = () => {
        updateWorkExperience("company", [...workExperience.company, ""]);
        updateWorkExperience("position", [...workExperience.position, ""]);
        updateWorkExperience("startDate", [...workExperience.startDate, ""]);
        updateWorkExperience("endDate", [...workExperience.endDate, ""]);
        updateWorkExperience("location", [...workExperience.location, ""]);
        updateWorkExperience("description", [...workExperience.description, ""]);
        updateWorkExperience("isHidden", [...workExperience.isHidden, false]);
    };

    return (
        <div className="info-block">
            <h2>Work Experience</h2>
            {renderWorkEntries()}
            <button onClick={addWorkEntry}>Add Entry</button>
        </div>
    );
}

export default WorkExperience;
