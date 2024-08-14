import "./index.css";
const Header = () => {
  return (
    <nav className="navbar navbar-light my-bg-dark">
      <div className="w-100 px-2 row">
        <a className="navbar-brand fw-bold fs-3 col" href="#">
          <img
            src="./ReactIcon/ReactIcon.png"
            alt="React icon could be shown"
            width="65px"
            height="65px"
          />
          <span className="px-2 text-light">React Quiz App</span>
        </a>
        <div className="text-light col d-flex justify-content-center align-items-center fw-bold fs-3">
        Assay yourself right now !!
        </div>
        <div className="text-light col d-flex justify-content-end align-items-center fw-bold fs-4">
          Created by :&nbsp;<span className="text-danger">Sina Rahimi</span>
        </div>
      </div>
    </nav>
  );
};
export default Header;
