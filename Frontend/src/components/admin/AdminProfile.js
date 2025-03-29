import "./dashboard.css"

let Profile = () => {
    return   <main id="main" className="main" style = {{marginTop:"0px",background:"#fff0ce",height:"100vh"}}>
    <section className="section profile">
      <div className="row">
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center" style = {{background : "#fff7e4"}}>
              <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
              <h2>Test Name</h2>
              <h3>College Authority</h3>
              <div className="social-links mt-2">
                <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body pt-3" style = {{background : "#fff7e4"}}>
              {/* Bordered Tabs */}
              <ul className="nav nav-tabs nav-tabs-bordered">
                <li className="nav-item">
                  <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview" style = {{background : "#fff7e4"}}>Overview</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit" style = {{background : "#fff7e4"}}>Edit Profile</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings" style = {{background : "#fff7e4"}}>Settings</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password" style = {{background : "#fff7e4"}}>Change Password</button>
                </li>
              </ul>
              <div className="tab-content pt-2">
                <div className="tab-pane fade show active profile-overview" id="profile-overview">
                  <h5 className="card-title">About</h5>
                  <p className="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>
                  <h5 className="card-title">Profile Details</h5>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label ">Full Name</div>
                    <div className="col-lg-9 col-md-8">Test Name</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">College</div>
                    <div className="col-lg-9 col-md-8">Test college</div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Country</div>
                    <div className="col-lg-9 col-md-8">USA</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Address</div>
                    <div className="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Phone</div>
                    <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 label">Email</div>
                    <div className="col-lg-9 col-md-8">k.anderson@example.com</div>
                  </div>
                </div>
                <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                  {/* Profile Edit Form */}
                  <form>
                    <div className="row mb-3">
                      <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                      <div className="col-md-8 col-lg-9">
                        <img src="assets/img/profile-img.jpg" alt="Profile" />
                        <div className="pt-2">
                          <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload" /></a>
                          <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="fullName" type="text" className="form-control" id="fullName" defaultValue="Test name" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                      <div className="col-md-8 col-lg-9">
                        <textarea name="about" className="form-control" id="about" style={{height: '100px', background : "#fff7e4"}} defaultValue={"Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde."} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">College</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="company" type="text" className="form-control" id="company" defaultValue="Lueilwitz, Wisoky and Leuschke" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="country" type="text" className="form-control" id="Country" defaultValue="USA" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="address" type="text" className="form-control" id="Address" defaultValue="A108 Adam Street, New York, NY 535022" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="phone" type="text" className="form-control" id="Phone" defaultValue="(436) 486-3538 x29071" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="email" type="email" className="form-control" id="Email" defaultValue="k.anderson@example.com" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="Twitter" className="col-md-4 col-lg-3 col-form-label">Twitter Profile</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="twitter" type="text" className="form-control" id="Twitter" defaultValue="https://twitter.com/#" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="Facebook" className="col-md-4 col-lg-3 col-form-label">Facebook Profile</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="facebook" type="text" className="form-control" id="Facebook" defaultValue="https://facebook.com/#" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="Instagram" className="col-md-4 col-lg-3 col-form-label">Instagram Profile</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="instagram" type="text" className="form-control" id="Instagram" defaultValue="https://instagram.com/#" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="Linkedin" className="col-md-4 col-lg-3 col-form-label">Linkedin Profile</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="linkedin" type="text" className="form-control" id="Linkedin" defaultValue="https://linkedin.com/#" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary" style = {{background : "#ffc93d"}}>Save Changes</button>
                    </div>
                  </form>{/* End Profile Edit Form */}
                </div>
                <div className="tab-pane fade pt-3" id="profile-settings">
                  {/* Settings Form */}
                  <form>
                    <div className="row mb-3">
                      <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                      <div className="col-md-8 col-lg-9">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="changesMade" defaultChecked />
                          <label className="form-check-label" htmlFor="changesMade">
                            Changes made to your account
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="newProducts" defaultChecked />
                          <label className="form-check-label" htmlFor="newProducts">
                            Information on new products and services
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="proOffers" />
                          <label className="form-check-label" htmlFor="proOffers">
                            Marketing and promo offers
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="securityNotify" defaultChecked disabled />
                          <label className="form-check-label" htmlFor="securityNotify">
                            Security alerts
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary" style = {{background : "#ffc93d"}}>Save Changes</button>
                    </div>
                  </form>{/* End settings Form */}
                </div>
                <div className="tab-pane fade pt-3" id="profile-change-password">
                  {/* Change Password Form */}
                  <form>
                    <div className="row mb-3">
                      <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="password" type="password" className="form-control" id="currentPassword" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="newpassword" type="password" className="form-control" id="newPassword" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                      <div className="col-md-8 col-lg-9">
                        <input name="renewpassword" type="password" className="form-control" id="renewPassword" style = {{background : "#fff7e4"}}/>
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary" style = {{background : "#ffc93d"}}>Change Password</button>
                    </div>
                  </form>{/* End Change Password Form */}
                </div>
              </div>{/* End Bordered Tabs */}
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
}

export default Profile;