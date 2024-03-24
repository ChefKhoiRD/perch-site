import NavBar from "../../../components/common/navBar";

import "./styles/invest.css";

export default function Invest() {
  return (
    <div className="page-content">
      <NavBar active="invest" />

      <div className="invest-container">

        {/* Header */}
        <div className="invest-header">
          <h1 className="">Invest in Perch</h1>
        </div>

        {/* Subheader */}
        <div className="invest-subheader">
          <h2 className="">The future of restaurant management</h2>
        </div>

        {/* Description */}
        <div className="invest-description">
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eveniet quia molestiae, nisi doloremque veritatis aliquam perferendis mollitia cupiditate inventore architecto, animi amet, porro expedita odio ex minima tempore perspiciatis?
            </p>
        </div>

        {/* Invest button */}
        <div className="invest-button">
          <button className="">Invest in us</button>
        </div>
      </div>
    </div>
  );
}