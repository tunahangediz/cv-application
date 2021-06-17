import img from "./Avatar.png";
function ProfileHeader({ info, url }) {
    return (
        <div className="profile-section h-32">
            <div className="titles">
                <h1 className="text-4xl ">{info.name + " " + info.lastName}</h1>

                <h4 className="text-xl mt-2">
                    {info.profession &&
                        info.profession[0].toUpperCase() +
                            info.profession.slice(1)}
                </h4>
            </div>
            <div className="profile overflow-hidden flex justify-center pt-2">
                <img className="object-fit" ref={url} src={img} alt="" />
            </div>
            <div className={"background-div "}></div>
        </div>
    );
}

export default ProfileHeader;
