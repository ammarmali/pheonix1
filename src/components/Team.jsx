/* eslint-disable no-unused-vars */
import React from "react";
import "./Team.css";
import icon1 from "../assets/icon1.png"
import adaku from "../assets/adaku.png";
import meera from "../assets/meera.png";
import olwen from "../assets/olwen.png";
import useWindowSize from "../hooks/useWindowSize";

const Team = () => {
  const { width } = useWindowSize();

  // Define layout based on screen size
  const layoutClass = width < 768 ? "mobile" : width < 1024 ? "tablet" : "desktop";

 
  return (
    <>
      <section className="team-container">
        <h2 className="team-title">Our Mission & Vision</h2>
        <div className={`team-cards-wrapper ${layoutClass}`}>
          <article className="team-card">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/137f56e210d939504dd84e6256b125918221f8e582c3c2f6086ae531442d8413?placeholderIfAbsent=true&apiKey=a2acdceba9474ffebdaf77e02b0399d6"
              alt="Mission Icon"
              className="team-card-icon"
            />
            <h3 className="team-card-title">Mission</h3>
            <p className="team-card-description">
              To help companies and organizations create and sustain inclusive workplaces and turn diversity into a strategic business asset.
            </p>
          </article>
          <article className="team-card">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ccf4acc1a04b1f0308b254ed7cb818b7080745a85de6765ee9adb91fcd56f2f?placeholderIfAbsent=true&apiKey=a2acdceba9474ffebdaf77e02b0399d6"
              alt="Vision Icon"
              className="team-card-icon"
            />
            <h3 className="team-card-title">Vision</h3>
            <p className="team-card-description">
              To help companies and organizations create and sustain inclusive workplaces and turn diversity into a strategic business asset.
            </p>
          </article>
        </div>
      </section>

      <div className="team-values-container">
        {/* Our Team Section */}
        <section className="team-section">
          <h2 className="section-title">Our Team</h2>
          <div className="team-members">
            {/* Team Member 1 */}
            <div className="team-member">
              <img
                loading="lazy"
                src={adaku}
                alt="Adaku Oliver-Nnona"
                className="member-image"
              />
              <div className="member-info">
                <h3 className="member-name"> Adaku Oliver-Nnona</h3>
                <h4 className="member-role">Founder & Principal DEI Consultant</h4>
                <p className="member-description">
                At Phoenixrize, we go beyond surface-level diversity initiatives. We partner with organizations to create meaningful, long-lasting change by integrating inclusivity into the very fabric of their operations. Our expert consultants develop tailored strategies that meet the unique needs of each business, ensuring that equity and inclusion are central to their success. <br />  <br />
By working closely with our clients, we provide actionable solutions that not only enhance company culture but also drive business growth and social impact. Let Phoenixrize help your organization thrive by fostering an environment where everyone has the opportunity to succeed. <br />  <br />
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="team-member">
              <img
                loading="lazy"
                src={meera}
                alt="Meera Somji"
                className="member-image"
              />
              <div className="member-info">
                <h3 className="member-name">Meera Somji</h3>
                <h4 className="member-role">DEI Data & Strategy Partner</h4>
                <p className="member-description">
                Meera Somji brings a unique blend of data analytics and DEI strategy to PhoenixRize. With a Master’s degree in Gender Studies from the London School of Economics, Meera has worked across London and New York as a strategy consultant. <br />  <br />

leading data-driven projects that impact real change. As the DEI Data & Strategy Partner at PhoenixRize, Meera ensures that our services are grounded in actionable insights, helping organisations track progress and drive transformation through informed decision-making.
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="team-member">
              <img
                loading="lazy"
                src={olwen}
                alt="Olwen Dawe"
                className="member-image"
              />
              <div className="member-info">
                <h3 className="member-name">Olwen Dawe</h3>
                <h4 className="member-role">DEI Policy & Strategy Partner</h4>
                <p className="member-description">
                Olwen Dawe is a highly experienced policy analyst and DEI consultant, with a proven track record in developing and implementing equality, diversity, and inclusion policies. Notably, she has led projects for the Arts Council and the National Library of Ireland, shaping their DEI strategies. Olwen holds a Master’s degree in Public Policy Analysis and guest lectures on the Professional Diploma in Human Rights and Equality at the Institute of Public Administration. At PhoenixRize, Olwen serves as our DEI Policy & Strategy Partner, leveraging her expertise to help organisations create equity-focused policies that deliver long-term impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="values-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-cards">
            {/* First row with 3 cards */}
            <div className="values-row">
              <div className="value-card">
                <img src={icon1} alt="Respect and Dignity" className="value-icon" />
                <div className="value-content">
                  <h3 className="value-title">Respect and Dignity</h3>
                  <p className="value-description">
                    We value and respect every person regardless of their background, culture, or perspective.
                  </p>
                </div>
              </div>

              <div className="value-card">
                <img src={icon1} alt="Integrity" className="value-icon" />
                <div className="value-content">
                  <h3 className="value-title">Integrity</h3>
                  <p className="value-description">
                    We are dedicated to delivering on our promises and honouring our word.
                  </p>
                </div>
              </div>

              <div className="value-card">
                <img src={icon1} alt="Excellence" className="value-icon" />
                <div className="value-content">
                  <h3 className="value-title">Excellence</h3>
                  <p className="value-description">
                    We are committed to delivering excellence in all that we do.
                  </p>
                </div>
              </div>
            </div>

            {/* Second row with 2 centered cards */}
            <div className="values-row centered-row">
              <div className="value-card">
                <img src={icon1} alt="Equity and Diversity Inclusion" className="value-icon" />
                <div className="value-content">
                  <h3 className="value-title">Equity and Diversity <br /> Inclusion</h3>
                  <p className="value-description">
                    We value and respect every person <br /> regardless of their background,<br /> culture, or perspective.
                  </p>
                </div>
              </div>

              <div className="value-card">
                <img src={icon1} alt="Collaboration" className="value-icon" />
                <div className="value-content">
                  <h3 className="value-title">Collaboration</h3>
                  <p className="value-description">
                    We collaborate with companies and organisations whose values align with ours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
