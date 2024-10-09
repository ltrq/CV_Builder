function GeneralInfo({ profile, updateProfile }) {
    return (
        <div className="info-block">
            <h2>General Info</h2>
            <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={profile.name}
                        onChange={(e) => updateProfile('name', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={profile.email}
                        onChange={(e) => updateProfile('email', e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Phone"
                        value={profile.phone}
                        onChange={(e) => updateProfile('phone', e.target.value)}
                    />
                

                    <input
                        type="text"
                        placeholder="Address"
                        value={profile.address}
                        onChange={(e) => updateProfile('address', e.target.value)}
                    />
            </div>
        </div>
    );
}

export default GeneralInfo;
