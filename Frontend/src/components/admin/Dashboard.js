import './dashboard.css'

let Dashboard = () => {
    return    <main id="main" className="main" style={{marginTop:"0px", background:"#fff0ce",height:"100vh"}}>
  
    <section className="section">
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body" style = {{background : "#fff7e4",width:"165vh"}}>
              <h5 className="card-title">This Week </h5>
              {/* Default List group */}
              <a href = '' style = {{background : "#fff7e4"}}>
              <ul className="list-group">
                <li className="list-group-item" style = {{background : "#fff7e4"}}><big>15</big> -  No event</li>
                <li className="list-group-item" style = {{background : "#fff7e4"}}><big>16</big> -  No event</li>
                <li className="list-group-item" style = {{background : "#fff7e4"}}><big>17</big> -  No event</li>
                <li className="list-group-item" style = {{background : "#fff7e4"}}><big>18</big> -  No event</li>
                <li className="list-group-item" style = {{background : "#fff7e4"}}><big>19</big> -  No event</li>
                <li className="list-group-item" style = {{background : "#fff7e4"}}><big>20</big> -  No event</li>
                <li className="list-group-item" style = {{background : "#fff7e4"}}><big>21</big> -  No event</li>
              </ul></a>{/* End Default List group */}
            </div>
          </div>
        </div></div></section></main>
}

export default Dashboard;