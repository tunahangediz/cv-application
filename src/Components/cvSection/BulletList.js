function BulletList({ name, company, date, skill, institution }) {
    return (
        <div className="text-left mt-8 break-words p">
            {name !== "Skills" ? (
                <div className="text-lg my-2  font-medium primary-blue">
                    <h1 className="company">
                        {company || institution} | {date}
                    </h1>
                </div>
            ) : (
                ""
            )}
            {}
            <ul className="list-disc list-inside text-left primary-blue">
                {name === "Skills"
                    ? skill.map((skl, index) => <li key={index}>{skl.text}</li>)
                    : ""}
            </ul>
        </div>
    );
}

export default BulletList;
