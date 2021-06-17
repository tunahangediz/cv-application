function PersonalInformation({
    setInfo,
    info,
    setPhoto,
    setAdress,
    setEmail,
    setDescription,
    skill,
    setSkill,
    experience,
    setExperience,
    education,
    setEducation,
}) {
    const handleInput = (e, index) => {
        const newSkill = [...skill];
        newSkill[index].text = e.target.value;
        setSkill([...newSkill]);
    };

    const deleteSkill = (e, index) => {
        const newSkill = [...skill];
        newSkill.splice(index, 1);

        setSkill(newSkill);
    };

    const deleteExperience = (e, index) => {
        e.preventDefault();
        const newArr = [...experience];
        newArr.splice(index, 1);

        setExperience(newArr);
    };

    const deleteEducation = (e, index) => {
        e.preventDefault();
        const newArr = [...education];
        newArr.splice(index, 1);

        setEducation(newArr);
    };

    const handleCompany = (e, index) => {
        const newExp = [...experience];
        newExp[index].company = e.target.value;
        setExperience(newExp);
    };

    const handleDate = (e, index) => {
        const date = e.target.id;
        const newExp = [...experience];
        newExp[index][date] = e.target.value;
        setExperience(newExp);
    };

    const handleEducation = (e, index) => {
        const newExp = [...education];
        newExp[index].institution = e.target.value;
        setEducation(newExp);
    };
    const handleEducationDate = (e, index) => {
        const date = e.target.id;
        const newExp = [...education];
        newExp[index][date] = e.target.value;
        setEducation(newExp);
    };
    return (
        <div className="personal bg-blue-200 rounded-lg w-5/6">
            <div className="flex flex-col m-2 gap-2">
                <h1 className="text-left text-2xl">Personal Informations</h1>
                <input
                    onChange={(e) => {
                        setInfo({ ...info, name: e.target.value });
                    }}
                    className="input"
                    type="text"
                    placeholder="Name"
                />
                <input
                    onChange={(e) => {
                        setInfo({ ...info, lastName: e.target.value });
                    }}
                    className="input"
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    onChange={(e) =>
                        setInfo({ ...info, profession: e.target.value })
                    }
                    className="input"
                    type="text"
                    placeholder="Proffesion"
                />
                {/* url.current.src=e.target.files */}
                <input
                    onChange={(e) => {
                        const data = [];
                        data.push(e.target.files[0]);
                        setPhoto(data);
                    }}
                    className="input"
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    placeholder="Photo"
                />
                <input
                    onChange={(e) => setAdress(e.target.value)}
                    className="input"
                    type="text"
                    placeholder="Adress"
                />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    type="email"
                    placeholder="Email"
                />
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    className="input"
                    name="description"
                    id=""
                    cols="30"
                    rows="2"
                    placeholder="description"
                ></textarea>
            </div>
            <div className="personal flex flex-col m-2 gap-2">
                <h1 className="text-left text-2xl">Skills</h1>
                {skill.map((skl, index) => (
                    <div key={index} className={"flex w-full"}>
                        <input
                            onChange={(e) => {
                                handleInput(e, index);
                            }}
                            value={skl.text}
                            className="input w-full"
                            type="text"
                            placeholder="Skill"
                        />
                        <button
                            onClick={(e) => {
                                deleteSkill(e, index);
                            }}
                            className="bg-red-400 p-2"
                        >
                            Delete
                        </button>
                    </div>
                ))}

                <button
                    onClick={() => {
                        setSkill([...skill, { text: " " }]);
                    }}
                    className="bg-green-400"
                >
                    Add Skill
                </button>
            </div>
            <div className="personal flex flex-col m-2 gap-2">
                <h1 className="text-left text-2xl">Experience</h1>
                {experience.map((element, index) => (
                    <div key={index}>
                        <form className="flex flex-col gap-3 ">
                            <input
                                onChange={(e) => handleCompany(e, index)}
                                className="input"
                                type="text"
                                placeholder="Company or Work"
                            />
                            <div className="flex justify-between">
                                <div>
                                    <label htmlFor="start">Start Date</label>
                                    <input
                                        onChange={(e) => handleDate(e, index)}
                                        id="start"
                                        className="input"
                                        type="text"
                                        placeholder="YYYY"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="end">End Date</label>
                                    <input
                                        onChange={(e) => handleDate(e, index)}
                                        id="end"
                                        className="input"
                                        type="text"
                                        placeholder="YYYY or Present"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={(e) => deleteExperience(e, index)}
                                className="bg-red-500"
                            >
                                Delete Experience
                            </button>
                        </form>
                    </div>
                ))}
                <button
                    onClick={() =>
                        setExperience([
                            ...experience,
                            {
                                company: " ",
                                start: " ",
                                end: " ",
                            },
                        ])
                    }
                    className="bg-green-400"
                >
                    Add Experience
                </button>
            </div>
            <div className="personal flex flex-col m-2 gap-2">
                <h1 className="text-left text-2xl">Education</h1>
                {education.map((element, index) => (
                    <div key={index}>
                        <form className="flex flex-col gap-3 ">
                            <input
                                onChange={(e) => handleEducation(e, index)}
                                className="input"
                                type="text"
                                placeholder="Education"
                            />
                            <div className="flex justify-between">
                                <div>
                                    <label htmlFor="start">Start Date</label>
                                    <input
                                        onChange={(e) =>
                                            handleEducationDate(e, index)
                                        }
                                        id="start"
                                        className="input"
                                        type="text"
                                        placeholder="YYYY"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="end">End Date</label>
                                    <input
                                        onChange={(e) =>
                                            handleEducationDate(e, index)
                                        }
                                        id="end"
                                        className="input"
                                        type="text"
                                        placeholder="YYYY or Present"
                                    />
                                </div>
                            </div>
                            <button
                                onClick={(e) => deleteEducation(e, index)}
                                className="bg-red-500"
                            >
                                Delete Education
                            </button>
                        </form>
                    </div>
                ))}
                <button
                    onClick={() =>
                        setEducation([
                            ...education,
                            {
                                institution: " ",
                                start: " ",
                                end: " ",
                            },
                        ])
                    }
                    className="bg-green-400"
                >
                    Add Education
                </button>
            </div>
        </div>
    );
}

export default PersonalInformation;
