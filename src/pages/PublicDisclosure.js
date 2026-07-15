import React from "react";
import "./PublicDisclosure.css";

const PublicDisclosure = () => {
  return (
    <div className="disclosure-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Mandatory Public Disclosure</h2>

        <ul>
          <li><a href="#general">General Information</a></li>
          <li><a href="#documents">Documents</a></li>
          <li><a href="#staff">Teaching Staff</a></li>
          <li><a href="#results">Board Results</a></li>
          <li><a href="#infrastructure">Infrastructure</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="content">

        <section id="general">
          <h2>A. General Information</h2>

          <table>
            <tbody>
              <tr>
                <td>Name of School</td>
                <td>Cambridge International School</td>
              </tr>

              <tr>
                <td>Affiliation No.</td>
                <td>1631134</td>
              </tr>

              <tr>
                <td>School Code</td>
                <td>21124</td>
              </tr>

              <tr>
                <td>Principal</td>
                <td>Mrs. Sandhya Deewan</td>
              </tr>

              <tr>
                <td>Email</td>
                <td>info@cambridgeschool.com</td>
              </tr>

              <tr>
                <td>Phone</td>
                <td>+91-9876543210</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="documents">
          <h2>B. Documents & Information</h2>

          <table>
            <thead>
              <tr>
                <th>Document</th>
                <th>Link</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Affiliation Letter</td>
                <td>
                  <a href="/documents/affiliation.pdf" target="_blank" rel="noreferrer">
                    View PDF
                  </a>
                </td>
              </tr>

              <tr>
                <td>Trust Certificate</td>
                <td>
                  <a href="/documents/trust.pdf" target="_blank" rel="noreferrer">
                    View PDF
                  </a>
                </td>
              </tr>

              <tr>
                <td>Recognition Certificate</td>
                <td>
                  <a href="/documents/recognition.pdf" target="_blank" rel="noreferrer">
                    View PDF
                  </a>
                </td>
              </tr>

              <tr>
                <td>Fee Structure</td>
                <td>
                  <a href="/documents/fee.pdf" target="_blank" rel="noreferrer">
                    View PDF
                  </a>
                </td>
              </tr>

              <tr>
                <td>Academic Calendar</td>
                <td>
                  <a href="/documents/calendar.pdf" target="_blank" rel="noreferrer">
                    View PDF
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="staff">
          <h2>C. Teaching Staff</h2>

          <table>
            <tbody>
              <tr>
                <td>Total Teachers</td>
                <td>55</td>
              </tr>

              <tr>
                <td>PGT</td>
                <td>13</td>
              </tr>

              <tr>
                <td>TGT</td>
                <td>18</td>
              </tr>

              <tr>
                <td>PRT</td>
                <td>24</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="results">
          <h2>D. Board Examination Results</h2>

          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Year</th>
                <th>Students</th>
                <th>Pass %</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>X</td>
                <td>2024</td>
                <td>82</td>
                <td>100%</td>
              </tr>

              <tr>
                <td>XII</td>
                <td>2024</td>
                <td>74</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="infrastructure">
          <h2>E. School Infrastructure</h2>

          <table>
            <tbody>
              <tr>
                <td>Campus Area</td>
                <td>8739 Sq. M.</td>
              </tr>

              <tr>
                <td>Number of Classrooms</td>
                <td>38</td>
              </tr>

              <tr>
                <td>Laboratories</td>
                <td>4</td>
              </tr>

              <tr>
                <td>Library</td>
                <td>Yes</td>
              </tr>

              <tr>
                <td>Internet Facility</td>
                <td>Available</td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  );
};

export default PublicDisclosure;