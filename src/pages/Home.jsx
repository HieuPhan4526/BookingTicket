import React from "react";
import ChairRow from "../components/ChairRow";
import InfoTicket from "../components/InfoTicket";

export default function Home() {
  return (
    <div className="bgMovie">
      <div className="container">
        <div>
          <h2 className="text-warning text-center mt-4">ĐẶT VÉ XEM PHIM</h2>
          <h4 className="text-light text-center mt-4">Màn Hình</h4>
          <div className="d-flex justify-content-center">
            <div className="screen"></div>
          </div>
          <ChairRow />
        </div>
        <div>
          <InfoTicket />
        </div>
      </div>
    </div>
  );
}
