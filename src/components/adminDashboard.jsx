

import '../styles/adminDashboard.css';
const AdminDashbord = () => {
    return ( 
        <div className="admindashbord">
            <h1 id="wel">ADMIN DASHBORD</h1>
            <div className="admin1">
                    <h1 id='hh'>At the Library this January</h1>
                    <p>Greenwich Library has a full schedule of (free!) enrichment events 
                        throughout January. Speak with a librarian or check the online…2022 After 20 years of service, Greenwich Library Director
                  Barbara</p>
            </div>
            <div className="admin2">
                <h1 id='hh'>Friends Friday Films</h1>
                <p> Announces Its Winter Screenings By Erika Berlin on December 28, 2022
                  Greenwich Library’s longest-running program—the Friends Friday Films
                   series—is back with a full slate of movies, beginning on January 6. The…</p>
            </div>
            <div className="admin3">
                <h1 id='hh'>AuthorsLive: Barbara Gage</h1>
                <p> author of “G-Man: J. Edgar Hoover and the Making of the American Century”
                    By Erika Berlin on December 13, 2022 Greenwich Library is excited to welcome 
                    Yale professor and author Beverly Gage to its AuthorsLive series. Gage will discuss G-Man:…</p>
            </div>
            <div className="admin4">
            {/* <img id='img' width={750} src="/images/images.jpg" alt="" /> */}
            <h1 id='hh'>Barbara Ormerod-Glynn</h1>
            <p> to Retire as Director of Greenwich Library at the End of the Year; Joe Williams Named New Director By
                 Erika Berlin on December 1, 2022 After 20 years of service, Greenwich Library Director
                  Barbara Ormerod-Glynn announced she will retire at the end of 2022. The…</p>
            </div>
        </div>
     );
}
 
export default AdminDashbord;