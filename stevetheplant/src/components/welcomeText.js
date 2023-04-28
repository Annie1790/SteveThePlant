import "../Style/welcomeText.scss"

const WelcomeText = () => {
    return (
        <div id="header">
            <div id="headerText">
                <h1>Steve The Plant</h1>
            </div>
            <div id="headerSvg">
                <svg xmlns="http://www.w3.org/2000/svg" height="72" viewBox="0 96 960 960" width="72"><path d="M317 916h326l48-190H269l48 190Zm0 60q-20 0-36.286-12.541Q264.429 950.918 259 931l-52-205h546l-52 205q-5.429 19.918-21.714 32.459Q663 976 643 976H317ZM180 666h600V566H180v100Zm300-251q5-87 78-160.5T719 176q-3 81-67 150.5T510 411v95h330v160q0 24.75-17.625 42.375T780 726H180q-24.75 0-42.375-17.625T120 666V506h330v-95q-78-15-141.5-84.5T241 176q88 5 161.5 78T480 415Z" /></svg>
            </div>
        </div>
    )
};

export default WelcomeText;