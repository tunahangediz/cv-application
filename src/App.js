import { useState, useEffect, useRef, React } from "react";
import "./App.css";
import BulletList from "./Components/cvSection/BulletList";
import PersonelInfo from "./Components/cvSection/PersonelInfo";
import ProfileHeader from "./Components/cvSection/ProfileHeader";
import PersonalInformation from "./Components/PersonalInformation";

function App() {
    //useRef'i img'nin referansını tutması için kullandım
    const url = useRef();

    // Kişisel bilgiler
    const [info, setInfo] = useState({
        name: "Full",
        lastName: "Name",
        profession: "Profession",
    });

    const [adress, setAdress] = useState("472  Deercove Drive, Dallas/Texas");
    const [email, setEmail] = useState("tunahan111222333@gmail.com");
    const [description, setDescription] = useState(
        "I am 21 years old frontend developer",
    );
    const [photo, setPhoto] = useState(null);
    const [skillId, setSkillId] = useState([]);
    const [skill, setSkill] = useState([{ text: "Figma Design " }]);
    const [experience, setExperience] = useState([
        { company: "Google", start: "2001", end: "2007" },
    ]);

    useEffect(() => {
        console.log(url.current.src);
        photo && (url.current.src = URL.createObjectURL(photo[0]));
        return () => {
            console.log("clean up");
        };
    }, [photo]);

    const [education, setEducation] = useState([
        {
            institution: "Harvard",
            start: "2019",
            end: "2025",
        },
    ]);

    return (
        <div className="App pt-8">
            <div className="grid md:grid-cols-2 mx-4 ">
                <PersonalInformation
                    info={info}
                    setInfo={setInfo}
                    photo={photo}
                    setPhoto={setPhoto}
                    url={url}
                    setAdress={setAdress}
                    setEmail={setEmail}
                    setDescription={setDescription}
                    skillId={skillId}
                    setSkillId={setSkillId}
                    skill={skill}
                    setSkill={setSkill}
                    experience={experience}
                    setExperience={setExperience}
                    education={education}
                    setEducation={setEducation}
                ></PersonalInformation>
                <div className="border-white p-2 border-2 bg-white rounded-xl md:mt-0 mt-2 personal">
                    <ProfileHeader info={info} url={url}></ProfileHeader>
                    <div className="ml-7">
                        <div className="grid grid-cols-2 text-left">
                            <div className="col-span-1 mt-4">
                                <h1 className="text-2xl font-bold night-blue">
                                    {"Skills"}
                                </h1>
                                <BulletList
                                    name={"Skills"}
                                    skill={skill}
                                ></BulletList>

                                <h1 className="text-2xl font-bold night-blue">
                                    {"Work Experience"}
                                </h1>
                                {experience.map((exp) => (
                                    <BulletList
                                        key={Math.random() * 100}
                                        name={"Work Experiance"}
                                        company={exp.company}
                                        date={exp.start + "-" + exp.end}
                                    ></BulletList>
                                ))}
                                <h1 className="text-2xl font-bold night-blue">
                                    {"Education"}
                                </h1>
                                {education.map((element) => (
                                    <BulletList
                                        institution={element.institution}
                                        date={element.start + "-" + element.end}
                                    ></BulletList>
                                ))}
                            </div>
                            <PersonelInfo
                                adress={adress}
                                email={email}
                                description={description}
                            ></PersonelInfo>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
