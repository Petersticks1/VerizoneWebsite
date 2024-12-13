import "./Explore.css";

function Explore() {
    return (
      <div className="explore container-margin">
        <div className="explore-container">
          <h1>Explore Our Jurisdictions</h1>
          <p>
            Join us in ensuring secure and transparent property transactions
            across the nation.
          </p>

          <div className="explore-states">
            <div className="logo">
              <div className="logos">
                <img src="./Ogun.png" alt="" />
                <h3>Ogun State</h3>
              </div>

              <div className="locals">
                <ul>
                  <li>Abeokuta North</li>
                  <li>Abokuta South</li>
                  <li>Odeda</li>
                  <li>Ijebu Ode</li>
                  <li>Sagamu</li>
                  <li>Sango</li>
                  <li>Ota</li>
                  <li>Ewekoro</li>
                </ul>

                <ul>
                  <li>Ijebu Igbo</li>
                  <li>Water Side</li>
                  <li>Odogbolu</li>
                  <li>Mowe</li>
                  <li>Ofada</li>
                  <li>Papalanto</li>
                  <li>Ago Iwoye</li>
                  <li>Remo</li>
                </ul>
              </div>
            </div>

            <div className="logo">
              <div className="logos">
                <img src="./Lagos.png" alt="" />
                <h3>Lagos State</h3>
              </div>

              <div className="locals">
                <ul>
                  <li>Ikeja</li>
                  <li>Eti Osa</li>
                  <li>Shomolu</li>
                  <li>Badagry</li>
                  <li>Ojuelegba</li>
                  <li>Mushin</li>
                  <li>Oshodi</li>
                  <li>Ipaja</li>
                </ul>

                <ul>
                  <li>Lekki</li>
                  <li>Epe</li>
                  <li>Ajah</li>
                  <li>Banana Island</li>
                  <li>Victoria Island</li>
                  <li>Ikoyi</li>
                  <li>Surulere</li>
                  <li>Maryland</li>
                </ul>
              </div>
            </div>

            <div className="logo">
              <div className="logos">
                <img src="./Abuja.png" alt="" />
                <h3>Abuja</h3>
              </div>

              <div className="locals">
                <ul>
                  <li>Maraba</li>
                  <li>Wuse I</li>
                  <li>Wuse II</li>
                  <li>Gagwalada</li>
                  <li>Abuja Centra</li>
                  <li>Gwarinpa</li>
                  <li>Asokoro</li>
                  <li>Lokogoma</li>
                </ul>

                <ul>
                  <li>Jabi</li>
                  <li>Garki</li>
                  <li>Maitama</li>
                  <li>Jahi</li>
                  <li>Apo</li>
                  <li>Nyanya</li>
                  <li>Guzape</li>
                  <li>Lugbe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Explore;
