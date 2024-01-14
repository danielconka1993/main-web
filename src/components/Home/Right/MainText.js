import "./css/MainText.css";

const MainText = () => {
  return (
    <div className="mainText">
      <h1 className="mainTitle">Ahoj</h1>
      <h1 className="mainTitle">Jsem Daniel</h1>
      <h2 className="mainTitle">budoucí Full-stack developer.</h2>

      <p>
        Jmenuji se<span className="span-yellowText"> Daniel Čonka </span>& jsem{" "}
        <span className="span-yellowText">
          {" "}
          pracovně aktivní Full-stack developer
        </span>
        .
      </p>
      <p>
        Zaměřuji se na <span className="span-underLine">ReactJS</span> v
        kombinaci s <span className="span-underLine">Node.js - Express</span>.
      </p>
      <p>Aktivně se v programování rozvíjím.</p>
    </div>
  );
};

export default MainText;
