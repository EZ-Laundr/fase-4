
export default function App() {
  return (
    <>
      {/* Offcanval Overlay */}
      <div className="offcanvas-overlay"></div>
      {/* Offcanval Overlay */}

      {/* Wrapper */}
      <div className="wrapper">

        {/* Header */}
        <header className="header fixed-top d-flex align-content-center flex-wrap">
          {/* Logo */}
          <div className="logo">
            <a href="index.html" className="default-logo"><img src="assets/img/logo.png" alt="" /></a>
            <a href="index.html" className="mobile-logo"><img src="assets/img/mobile-logo.png" alt="" /></a>
          </div>
          {/* End Logo */}

          {/* Main Header */}
          <div className="main-header">
            <div className="container-fluid">
              <div className="row justify-content-between">
                <div className="col-3 col-lg-1 col-xl-4">
                  {/* Header Left */}
                  <div className="main-header-left h-100 d-flex align-items-center">
                    {/* Main Header User */}
                    <div className="main-header-user">
                      <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                        <div className="menu-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <div className="user-profile d-xl-flex align-items-center d-none">
                          {/* User Avatar */}
                          <div className="user-avatar">
                            <img src="assets/img/avatar/user.png" alt="" />
                          </div>
                          {/* End User Avatar */}

                          {/* User Info */}
                          <div className="user-info">
                            <h4 className="user-name">Abrilay Khatun</h4>
                            <p className="user-email">abrilakh@gmail.com</p>
                          </div>
                          {/* End User Info */}
                        </div>
                      </a>
                      <div className="dropdown-menu">
                        <a href="#">My Profile</a>
                        <a href="#">task</a>
                        <a href="#">Settings</a>
                        <a href="#">Log Out</a>
                      </div>
                    </div>
                    {/* End Main Header User */}

                    {/* Main Header Menu */}
                    <div className="main-header-menu d-block d-lg-none">
                      <div className="header-toogle-menu">
                        {/* <i className="icofont-navigation-menu"></i> */}
                        <img src="assets/img/menu.png" alt="" />
                      </div>
                    </div>
                    {/* End Main Header Menu */}
                  </div>
                  {/* End Header Left */}
                </div>
                <div className="col-9 col-lg-11 col-xl-8">
                  {/* Header Right */}
                  <div className="main-header-right d-flex justify-content-end">
                    <ul className="nav">
                      <li className="ml-0">
                        {/* Main Header Language */}
                        <div className="main-header-language">
                          <a href="#" data-toggle="dropdown">
                            <img src="assets/img/svg/globe-icon.svg" alt="" />
                          </a>
                          <div className="dropdown-menu style--three">
                            <a href="#">
                              <span><img src="assets/img/usa.png" alt="" /></span>
                              USA
                            </a>
                            <a href="#">
                              <span><img src="assets/img/china.png" alt="" /></span>
                              China
                            </a>
                            <a href="#">
                              <span><img src="assets/img/russia.png" alt="" /></span>
                              Russia
                            </a>
                            <a href="#">
                              <span><img src="assets/img/spain.png" alt="" /></span>
                              Spain
                            </a>
                            <a href="#">
                              <span><img src="assets/img/brazil.png" alt="" /></span>
                              Brazil
                            </a>
                            <a href="#">
                              <span><img src="assets/img/france.png" alt="" /></span>
                              France
                            </a>
                            <a href="#">
                              <span><img src="assets/img/algeria.png" alt="" /></span>
                              Algeria
                            </a>
                          </div>
                        </div>
                        {/* End Main Header Language */}
                      </li>
                      <li className="ml-0 d-none d-lg-flex">
                        {/* Main Header Print */}
                        <div className="main-header-print">
                          <a href="#">
                            <img src="assets/img/svg/print-icon.svg" alt="" />
                          </a>
                        </div>
                        {/* End Main Header Print */}
                      </li>
                      <li className="d-none d-lg-flex">
                        {/* Main Header Time */}
                        <div className="main-header-date-time text-right">
                          <h3 className="time">
                            <span id="hours">21</span>
                            <span id="point">:</span>
                            <span id="min">06</span>
                          </h3>
                          <span className="date"><span id="date">Tue, 12 October 2019</span></span>
                        </div>
                        {/* End Main Header Time */}
                      </li>
                      <li className="d-none d-lg-flex">
                        {/* Main Header Button */}
                        <div className="main-header-btn ml-md-1">
                          <a href="#" className="btn">Pending Tasks</a>
                        </div>
                        {/* End Main Header Button */}
                      </li>
                      <li className="order-2 order-sm-0">
                        {/* Main Header Search */}
                        <div className="main-header-search">
                          <form action="#" className="search-form">
                            <div className="theme-input-group header-search">
                              <input type="text" className="theme-input-style" placeholder="Search Here" />

                              <button type="submit"><img src="assets/img/svg/search-icon.svg" alt="" className="svg" /></button>
                            </div>
                          </form>
                        </div>
                        {/* End Main Header Search */}
                      </li>
                      <li>
                        {/* Main Header Messages */}
                        <div className="main-header-message">
                          <a href="#" className="header-icon" data-toggle="dropdown">
                            <img src="assets/img/svg/message-icon.svg" alt="" className="svg" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            {/* Dropdown Header */}
                            <div className="dropdown-header d-flex align-items-center justify-content-between">
                              <h5>3 Unread messages</h5>
                              <a href="#" className="text-mute d-inline-block">Clear all</a>
                            </div>
                            {/* End Dropdown Header */}

                            {/* Dropdown Body */}
                            <div className="dropdown-body">
                              {/* Item Single */}
                              <a href="#" className="item-single d-flex media align-items-center">
                                <div className="figure">
                                  <img src="assets/img/avatar/m1.png" alt="" />
                                  <span className="avatar-status bg-teal"></span>
                                </div>
                                <div className="content media-body">
                                  <div className="d-flex align-items-center mb-2">
                                    <h6 className="name">Sender Name</h6>
                                    <p className="time">2 min ago</p>
                                  </div>
                                  <p className="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                                </div>
                              </a>
                              {/* End Item Single */}

                              {/* Item Single */}
                              <a href="#" className="item-single d-flex media align-items-center">
                                <div className="figure">
                                  <img src="assets/img/avatar/m2.png" alt="" />
                                  <span className="avatar-status bg-teal"></span>
                                </div>
                                <div className="content media-body">
                                  <div className="d-flex align-items-center mb-2">
                                    <h6 className="name">Tonya Lee</h6>
                                    <p className="time">2 min ago</p>
                                  </div>
                                  <p className="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                                </div>
                              </a>
                              {/* End Item Single */}

                              {/* Item Single */}
                              <a href="#" className="item-single d-flex media align-items-center">
                                <div className="figure">
                                  <img src="assets/img/avatar/m3.png" alt="" />
                                  <span className="avatar-status bg-teal"></span>
                                </div>
                                <div className="content media-body">
                                  <div className="d-flex align-items-center mb-2">
                                    <h6 className="name">Cathy Nichols</h6>
                                    <p className="time">2 min ago</p>
                                  </div>
                                  <p className="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                                </div>
                              </a>
                              {/* End Item Single */}

                              {/* Item Single */}
                              <a href="#" className="item-single d-flex media align-items-center">
                                <div className="figure">
                                  <img src="assets/img/avatar/m4.png" alt="" />
                                  <span className="avatar-status bg-teal"></span>
                                </div>
                                <div className="content media-body">
                                  <div className="d-flex align-items-center mb-2">
                                    <h6 className="name">Hubert Griffith</h6>
                                    <p className="time">2 min ago</p>
                                  </div>
                                  <p className="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                                </div>
                              </a>
                              {/* End Item Single */}
                            </div>
                            {/* End Dropdown Body */}
                          </div>
                        </div>
                        {/* End Main Header Messages */}
                      </li>
                      <li>
                        {/* Main Header Notification */}
                        <div className="main-header-notification">
                          <a href="#" className="header-icon notification-icon" data-toggle="dropdown">
                            <span className="count" data-bg-img="assets/img/count-bg.png">22</span>
                            <img src="assets/img/svg/notification-icon.svg" alt="" className="svg" />
                          </a>
                          <div className="dropdown-menu style--two dropdown-menu-right">
                            {/* Dropdown Header */}
                            <div className="dropdown-header d-flex align-items-center justify-content-between">
                              <h5>5 New notifications</h5>
                              <a href="#" className="text-mute d-inline-block">Clear all</a>
                            </div>
                            {/* End Dropdown Header */}

                            {/* Dropdown Body */}
                            <div className="dropdown-body">
                              {/* Item Single */}
                              <a href="#" className="item-single d-flex align-items-center">
                                <div className="content">
                                  <div className="mb-2">
                                    <p className="time">2 min ago</p>
                                  </div>
                                  <p className="main-text">Donec dapibus mauris id odio ornare tempus amet.</p>
                                </div>
                              </a>
                              {/* End Item Single */}

                              {/* Item Single */}
                              <a href="#" className="item-single d-flex align-items-center">
                                <div className="content">
                                  <div className="mb-2">
                                    <p className="time">2 min ago</p>
                                  </div>
                                  <p className="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                                </div>
                              </a>
                              {/* End Item Single */}

                              {/* Item Single */}
                              <a href="#" className="item-single d-flex align-items-center">
                                <div className="content">
                                  <div className="mb-2">
                                    <p className="time">2 min ago</p>
                                  </div>
                                  <p className="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                                </div>
                              </a>
                              {/* End Item Single */}

                              {/* Item Single */}
                              <a href="#" className="item-single d-flex align-items-center">
                                <div className="content">
                                  <div className="mb-2">
                                    <p className="time">2 min ago</p>
                                  </div>
                                  <p className="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                                </div>
                              </a>
                              {/* End Item Single */}
                            </div>
                            {/* End Dropdown Body */}
                          </div>
                        </div>
                        {/* End Main Header Notification */}
                      </li>
                    </ul>
                  </div>
                  {/* End Header Right */}
                </div>
              </div>
            </div>
          </div>
          {/* End Main Header */}
        </header>
        {/* End Header */}

        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Sidebar */}
          <nav className="sidebar" data-trigger="scrollbar">
            {/* Sidebar Header */}
            <div className="sidebar-header d-none d-lg-block">
              {/* Sidebar Toggle Pin Button */}
              <div className="sidebar-toogle-pin">
                <i className="icofont-tack-pin"></i>
              </div>
              {/* End Sidebar Toggle Pin Button */}
            </div>
            {/* End Sidebar Header */}

            {/* Sidebar Body */}
            <div className="sidebar-body">
              {/* Nav */}
              <ul className="nav">
                <li className="nav-category">Main</li>
                <li className="active">
                  <a href="index.html">
                    <i className="icofont-pie-chart"></i>
                    <span className="link-title">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-shopping-cart"></i>
                    <span className="link-title">Ecommerce</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/ecommerce/ecommerce.html">Dashboard 1</a></li>
                    <li><a href="pages/ecommerce/ecommerce2.html">dashboard 2</a></li>
                    <li><a href="pages/ecommerce/orders.html">orders</a></li>
                    <li><a href="pages/ecommerce/product-catelog.html">Products Catalog</a></li>
                    <li><a href="pages/ecommerce/product-details.html">Product Details</a></li>
                    <li><a href="pages/ecommerce/cartlist.html">cart list</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li>
                  <a href="pages/social-media.html">
                    <i className="icofont-chart-histogram"></i>
                    <span className="link-title">Social Media Analytics</span>
                  </a>
                </li>
                <li className="nav-category">apps</li>
                <li>
                  <a href="#">
                    <i className="icofont-mail-box"></i>
                    <span className="link-title">Email</span>
                  </a>
                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/apps/email/inbox.html">Inbox</a></li>
                    <li><a href="pages/apps/email/read.html">Read</a></li>
                    <li><a href="pages/apps/email/compose.html">Compose</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li>
                  <a href="pages/apps/chat.html">
                    <i className="icofont-wechat"></i>
                    <span className="link-title">Chat</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-listing-box"></i>
                    <span className="link-title">To Do List</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/apps/todolist/todolist.html">Tasks</a></li>
                    <li><a href="pages/apps/todolist/add-new.html">add new</a></li>
                    <li><a href="pages/apps/todolist/task-details.html">details</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li>
                  <a href="pages/apps/calendar.html">
                    <i className="icofont-calendar"></i>
                    <span className="link-title">Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-file-document"></i>
                    <span className="link-title">invoice</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/apps/invoice/invoice-list.html">Invoice List</a></li>
                    <li><a href="pages/apps/invoice/invoice-details.html">details</a></li>
                    <li><a href="pages/apps/invoice/invoice-add-new.html">add new</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-contact-add"></i>
                    <span className="link-title">contact</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/apps/contact/contact-list.html">list view</a></li>
                    <li><a href="pages/apps/contact/contact-grid.html">grid view</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-calendar"></i>
                    <span className="link-title">project manager</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/apps/project-manager/project.html">project status</a></li>
                    <li><a href="pages/apps/project-manager/task-list.html">task list</a></li>
                    <li><a href="pages/apps/project-manager/create-new.html">create new Board</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-files-stack"></i>
                    <span className="link-title">file manager</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/apps/file-manager/file-info.html">file info</a></li>
                    <li><a href="pages/apps/file-manager/share.html">share</a></li>
                    <li><a href="pages/apps/file-manager/upload.html">upload new file</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li className="nav-category">UI Elements</li>
                <li>
                  <a href="pages/ui-elements/widget.html">
                    <i className="icofont-magic-alt"></i>
                    <span className="link-title">widgets</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-brand-icofont"></i>
                    <span className="link-title">Icons (Aniloan)</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/ui-elements/icons/iconfont.html">ico font</a></li>
                    <li><a href="pages/ui-elements/icons/materializeicon.html">Materialize Icons</a></li>
                    <li><a href="pages/ui-elements/icons/et-lineicon.html">Et-Line Icons</a></li>
                    <li><a href="pages/ui-elements/icons/eleganticon.html">Elegant Icons</a></li>
                    <li><a href="pages/ui-elements/icons/pe-7strokeicon.html">Pe-7 Stroke Icons</a></li>
                    <li><a href="pages/ui-elements/icons/themifyicon.html">Themify Icons</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li>
                  <a href="pages/ui-elements/color.html">
                    <i className="icofont-eye-dropper"></i>
                    <span className="link-title">color</span>
                  </a>
                </li>
                <li>
                  <a href="pages/ui-elements/extra-component.html">
                    <i className="icofont-plus"></i>
                    <span className="link-title">extra Component</span>
                  </a>
                </li>
                <li className="nav-category">Form & Table</li>
                <li>
                  <a href="#">
                    <i className="icofont-table"></i>
                    <span className="link-title">Form Elements</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/form&table/form-elements/base-input.html">Base Input</a></li>
                    <li><a href="pages/form&table/form-elements/input-group.html">Input Groups</a></li>
                    <li><a href="pages/form&table/form-elements/checkbox.html">Checkbox</a></li>
                    <li><a href="pages/form&table/form-elements/radio.html">radio</a></li>
                    <li><a href="pages/form&table/form-elements/switch.html">Switch</a></li>
                    <li><a href="pages/form&table/form-elements/number-input.html">Number Input</a></li>
                    <li><a href="pages/form&table/form-elements/textarea.html">Text Area</a></li>
                    <li><a href="pages/form&table/form-elements/text-editor.html">Text Editor (Quill Editor)</a></li>
                    <li><a href="pages/form&table/form-elements/file-uploader.html">File Uploader</a></li>
                    <li><a href="pages/form&table/form-elements/datetime-picker.html">Date & Time Picker</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li>
                  <a href="pages/form&table/form-layout.html">
                    <i className="icofont-layout"></i>
                    <span className="link-title">Form Layout</span>
                  </a>
                </li>
                <li>
                  <a href="pages/form&table/form-wizard.html">
                    <i className="icofont-ui-file"></i>
                    <span className="link-title">Form Wizard</span>
                  </a>
                </li>
                <li>
                  <a href="pages/form&table/form-validation.html">
                    <i className="icofont-exclamation-circle"></i>
                    <span className="link-title">Form Validation</span>
                  </a>
                </li>
                <li>
                  <a href="pages/form&table/form-repeater.html">
                    <i className="icofont-meeting-add"></i>
                    <span className="link-title">Form Repeater</span>
                  </a>
                </li>
                <li>
                  <a href="pages/form&table/table.html">
                    <i className="icofont-table"></i>
                    <span className="link-title">Table</span>
                  </a>
                </li>
                <li>
                  <a href="pages/form&table/table-extended.html">
                    <i className="icofont-contact-add"></i>
                    <span className="link-title">Table Extended</span>
                  </a>
                </li>
                <li className="nav-category">pages</li>
                <li>
                  <a href="#">
                    <i className="icofont-ui-user"></i>
                    <span className="link-title">User Profile</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/pages/user-profile/news-feed.html">News Feed</a></li>
                    <li><a href="pages/pages/user-profile/about.html">about</a></li>
                    <li><a href="pages/pages/user-profile/gallery.html">gallery</a></li>
                    <li><a href="pages/pages/user-profile/connection.html">Connections</a></li>
                    <li><a href="pages/pages/user-profile/profile-chat.html">Chat</a></li>
                    <li><a href="pages/pages/user-profile/edit-profile.html">Edit Profile</a></li>
                    <li><a href="pages/pages/user-profile/user-dashboard.html">User Dashboard</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li>
                  <a href="pages/pages/faq.html">
                    <i className="icofont-support-faq"></i>
                    <span className="link-title">FAQ</span>
                  </a>
                </li>
                <li>
                  <a href="pages/pages/price.html">
                    <i className="icofont-price"></i>
                    <span className="link-title">Pricing</span>
                  </a>
                </li>
                <li>
                  <a href="pages/pages/timeline.html">
                    <i className="icofont-clock-time"></i>
                    <span className="link-title">Timeline</span>
                  </a>
                </li>
                <li>
                  <a href="pages/pages/account-setting.html">
                    <i className="icofont-settings-alt"></i>
                    <span className="link-title">Account Settings</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-check-circled"></i>
                    <span className="link-title">Authentication</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/pages/authentication/login.html">Log In</a></li>
                    <li><a href="pages/pages/authentication/register.html">Register</a></li>
                    <li><a href="pages/pages/authentication/forget-pass.html">Forget Password</a></li>
                    <li><a href="pages/pages/authentication/reset-pass.html">Reset Password</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-exclamation-tringle"></i>
                    <span className="link-title">Miscellaneous</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/pages/miscellaneous/comming-soon.html">Coming Soon</a></li>
                    <li><a href="pages/pages/miscellaneous/404.html">404 Error</a></li>
                    <li><a href="pages/pages/miscellaneous/500.html">500 Error</a></li>
                    <li><a href="pages/pages/miscellaneous/page-not-authorized.html">Not Authorized</a></li>
                    <li><a href="pages/pages/miscellaneous/maintenance.html">Maintenance</a></li>
                    <li><a href="pages/pages/miscellaneous/session-timeout.html">Session Timeout</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li className="nav-category">Chart & Maps</li>
                <li>
                  <a href="#">
                    <i className="icofont-chart-pie-alt"></i>
                    <span className="link-title">charts</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="pages/charts/apex.html">Apex</a></li>
                    <li><a href="pages/charts/chartjs.html">Chartjs</a></li>
                    <li><a href="pages/charts/morrischart.html">Morris Chart</a></li>
                    <li><a href="pages/charts/flotchart.html">Flot Chart</a></li>
                    <li><a href="pages/charts/chartist.html">Chartist Chart</a></li>
                    <li><a href="pages/charts/c3-chart.html">C3 Chart</a></li>
                  </ul>
                  {/* End Sub Menu */}
                </li>
                <li className="nav-category">Extensions</li>
                <li>
                  <a href="pages/extensions/sweet-alert.html">
                    <i className="icofont-notification"></i>
                    <span className="link-title">Sweet Alert</span>
                  </a>
                </li>
                <li>
                  <a href="pages/extensions/toastr.html">
                    <i className="icofont-dice"></i>
                    <span className="link-title">Toastr</span>
                  </a>
                </li>
                <li>
                  <a href="pages/extensions/noui-slider.html">
                    <i className="icofont-filter"></i>
                    <span className="link-title">NoUi Slider</span>
                  </a>
                </li>
                <li>
                  <a href="pages/extensions/dragdrop.html">
                    <i className="icofont-drag"></i>
                    <span className="link-title">Drag & Drop</span>
                  </a>
                </li>
                <li>
                  <a href="pages/extensions/tour.html">
                    <i className="icofont-education"></i>
                    <span className="link-title">Tour</span>
                  </a>
                </li>
                <li>
                  <a href="pages/extensions/swiper.html">
                    <i className="icofont-swoosh-right"></i>
                    <span className="link-title">Swiper</span>
                  </a>
                </li>
                <li>
                  <a href="pages/extensions/treeview.html">
                    <i className="icofont-tree-alt"></i>
                    <span className="link-title">Treeview</span>
                  </a>
                </li>
                <li>
                  <a href="pages/extensions/block-ui.html">
                    <i className="icofont-card"></i>
                    <span className="link-title">Block-UI</span>
                  </a>
                </li>
                <li>
                  <a href="pages/extensions/media-player.html">
                    <i className="icofont-multimedia"></i>
                    <span className="link-title">Media Player</span>
                  </a>
                </li>
                <li>
                  <a href="pages/extensions/i18n.html">
                    <i className="icofont-globe"></i>
                    <span className="link-title">i18n</span>
                  </a>
                </li>
                <li className="nav-category">others</li>
                <li>
                  <a href="#">
                    <i className="icofont-navigation-menu"></i>
                    <span className="link-title">Menu Levels</span>
                  </a>

                  {/* Sub Menu */}
                  <ul className="nav sub-menu">
                    <li><a href="#">Second Level 01</a>
                      {/* Sub Menu */}
                      <ul className="nav sub-menu">
                        <li><a href="#">Third Level 01</a></li>
                        <li><a href="#">Third Level 02</a></li>
                      </ul>
                      {/* End Sub Menu */}
                    </li>
                    <li><a href="#">Second Level 02</a>
                      {/* Sub Menu */}
                      <ul className="nav sub-menu">
                        <li><a href="#">Third Level 01</a></li>
                        <li><a href="#">Third Level 02</a></li>
                      </ul>
                      {/* End Sub Menu */}
                    </li>
                  </ul>
                  {/* End Sub Menu */}
                </li>

                <li>
                  <a href="#" className="disabled">
                    <i className="icofont-not-allowed"></i>
                    <span className="link-title">Disable Menu</span>
                  </a>
                </li>
                <li className="nav-category">Support</li>
              </ul>
              {/* End Nav */}
            </div>
            {/* End Sidebar Body */}
          </nav>
          {/* End Sidebar */}

          {/* Main Content */}
          <div className="main-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-4 col-md-8">
                  {/* Card */}
                  <div className="card mb-30">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="increase">
                          <div className="card-title d-flex align-items-end mb-2">
                            <h2>86<sup>%</sup></h2>
                            <p className="font-14">Increased</p>
                          </div>
                          <h3 className="card-subtitle mb-2">Congratulation!</h3>
                          <p className="font-16">You've finished all of your tasks for this week.</p>
                        </div>
                        <div className="congratulation-img">
                          <img src="assets/img/media/congratulation-img.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>

                <div className="col-xl-2 col-md-4 col-sm-6">
                  {/* Card */}
                  <div className="card area-chart-box mb-30">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <h4 className="mb-1">Income</h4>
                          <p className="font-14 c3">Increase in Average</p>
                        </div>
                        <div className="">
                          <h2>50<sup>%</sup></h2>
                        </div>
                      </div>
                    </div>
                    <div id="apex_area-chart" className="chart"></div>
                  </div>
                  {/* End Card */}
                </div>

                <div className="col-xl-2 col-md-4 col-sm-6">
                  {/* Card */}
                  <div className="card area-chart-box mb-30">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <h4 className="mb-1">Profit Report</h4>
                          <p className="font-14 soft-pink">Decrease in Average</p>
                        </div>
                        <div className="">
                          <h2>15<sup>%</sup></h2>
                        </div>
                      </div>
                    </div>
                    <div id="apex_area2-chart" className="chart"></div>
                  </div>
                  {/* End Card */}
                </div>

                <div className="col-xl-2 col-md-4 col-sm-6">
                  {/* Card */}
                  <div className="card area-chart-box mb-30">
                    <div className="card-body">
                      <div className="">
                        <h4 className="mb-1">Impression</h4>
                        <p className="font-14 text_color">Hover to see detail</p>
                      </div>
                    </div>
                    <div id="apex_area3-chart" className="chart"></div>
                  </div>
                  {/* End Card */}
                </div>

                <div className="col-xl-2 col-md-4 col-sm-6">
                  {/* Card */}
                  <div className="card area-chart-box mb-30">
                    <div className="card-body">
                      <div className="">
                        <h4 className="mb-1">Activity</h4>
                        <p className="font-14 text_color">Hover to see detail</p>
                      </div>
                    </div>
                    <div id="apex_area4-chart" className="chart"></div>
                  </div>
                  {/* End Card */}
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 col-lg-12">
                  <div className="row">
                    <div className="col-12">
                      {/* Card */}
                      <div className="card mb-30">
                        <div className="card-body d-flex justify-content-between mb-n72">
                          <div className="position-relative index-9">
                            <h4 className="mb-1">Website Analytics</h4>
                            <p className="font-14">Check out each column for more details</p>
                          </div>

                          {/* Dropdown Button */}
                          <div className="dropdown-button">
                            <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                              <div className="menu-icon style--two mr-0">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#">Daily</a>
                              <a href="#">Sort By</a>
                              <a href="#">Monthly</a>
                            </div>
                          </div>
                          {/* End Dropdown Button */}

                        </div>
                        <div id="apex_column-chart" className="chart"></div>
                      </div>
                      {/* End Card */}
                    </div>
                    <div className="col-md-4 col-sm-6">
                      {/* Card */}
                      <div className="card mb-30 progress_1">
                        <div className="card-body">
                          <h4 className="progress-title">Registrations</h4>

                          <div className="ProgressBar-wrap position-relative mb-4">
                            <div className="ProgressBar ProgressBar_1" data-progress="75">
                              <svg className="ProgressBar-contentCircle" viewBox="0 0 200 200">
                                {/* on défini le l'angle et le centre de rotation du cercle */}
                                <circle transform="rotate(135, 100, 100)" className="ProgressBar-background" cx="100" cy="100" r="8" />
                                <circle transform="rotate(135, 100, 100)" className="ProgressBar-circle" cx="100" cy="100" r="85" />
                              </svg>
                              <span className="ProgressBar-percentage--text">
                                Increase
                              </span>
                              <span className="ProgressBar-percentage ProgressBar-percentage--count"></span>
                            </div>
                          </div>

                          <div className="d-flex flex-wrap mb-2 progress-info">
                            <div>Users</div>
                            <div><img src="assets/img/svg/caret-up.svg" alt="" className="svg" /> 2.6k</div>
                            <div><img src="assets/img/svg/caret-down.svg" alt="" className="svg" />568</div>
                          </div>


                          <div className="d-flex flex-wrap progress-info">
                            <div>Disabled</div>
                            <div><img src="assets/img/svg/caret-up.svg" alt="" className="svg" />1.26k</div>
                            <div><img src="assets/img/svg/caret-down.svg" alt="" className="svg" />25</div>
                          </div>
                        </div>
                      </div>
                      {/* End Card */}
                    </div>

                    <div className="col-md-4 col-sm-6">
                      {/* Card */}
                      <div className="card mb-30 progress_2">
                        <div className="card-body">
                          <h4 className="progress-title">Sales</h4>

                          <div className="ProgressBar-wrap position-relative mb-4">
                            <div className="ProgressBar ProgressBar_2" data-progress="35">
                              <svg className="ProgressBar-contentCircle" viewBox="0 0 200 200">
                                {/* on défini le l'angle et le centre de rotation du cercle */}
                                <circle transform="rotate(135, 100, 100)" className="ProgressBar-background" cx="100" cy="100" r="85" />
                                <circle transform="rotate(135, 100, 100)" className="ProgressBar-circle" cx="100" cy="100" r="85" />
                              </svg>
                              <span className="ProgressBar-percentage--text">Increase</span>
                              <span className="ProgressBar-percentage ProgressBar-percentage--count"></span>
                            </div>
                          </div>

                          <div className="d-flex flex-wrap mb-2 progress-info">
                            <div>Net Profit</div>
                            <div><img src="assets/img/svg/caret-up.svg" alt="" className="svg" /> 268k</div>
                            <div><img src="assets/img/svg/caret-down.svg" alt="" className="svg" />89k</div>
                          </div>


                          <div className="d-flex flex-wrap progress-info">
                            <div>Expenses</div>
                            <div><img src="assets/img/svg/caret-up.svg" alt="" className="svg" />1.26k</div>
                            <div><img src="assets/img/svg/caret-down.svg" alt="" className="svg" />1.5k</div>
                          </div>
                        </div>
                      </div>
                      {/* End Card */}
                    </div>

                    <div className="col-md-4 col-sm-6">
                      {/* Card */}
                      <div className="card mb-30 progress_3 mr-0">
                        <div className="card-body">
                          <h4 className="progress-title">Company Growth</h4>

                          <div className="ProgressBar-wrap position-relative mb-4">
                            <div className="ProgressBar ProgressBar_3" data-progress="70">
                              <svg className="ProgressBar-contentCircle" viewBox="0 0 200 200">
                                {/* on défini le l'angle et le centre de rotation du cercle */}
                                <circle transform="rotate(135, 100, 100)" className="ProgressBar-background" cx="100" cy="100" r="85" stroke-width="20" />
                                <circle transform="rotate(135, 100, 100)" className="ProgressBar-circle" cx="100" cy="100" r="85" stroke-width="20" />
                              </svg>
                              <span className="ProgressBar-percentage--text"> Increase </span>
                              <span className="ProgressBar-percentage ProgressBar-percentage--count"></span>
                            </div>
                          </div>

                          <div className="d-flex flex-wrap mb-2 progress-info">
                            <div>Employee</div>
                            <div><img src="assets/img/svg/caret-up.svg" alt="" className="svg" />15</div>
                            <div><img src="assets/img/svg/caret-down.svg" alt="" className="svg" />3</div>
                          </div>


                          <div className="d-flex flex-wrap progress-info">
                            <div>Production</div>
                            <div><img src="assets/img/svg/caret-up.svg" alt="" className="svg" />1.26k</div>
                            <div><img src="assets/img/svg/caret-down.svg" alt="" className="svg" />1.2k</div>
                          </div>
                        </div>
                      </div>
                      {/* End Card */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12">
                  <div className="row">
                    <div className="col-sm-6">
                      {/* Card */}
                      <div className="card mb-30">
                        <div className="card-body">
                          <div id="apex_line-chart" className="chart"></div>

                          <div className="d-flex align-items-end justify-content-between mt-4">
                            <div className="">
                              <h4 className="mb-1">Website Analytics</h4>
                              <p className="font-14">Check out each column for more details</p>
                            </div>

                            <div className="dropdown-button">
                              <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                <div className="menu-icon justify-content-end pb-1 style--two mr-0">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#">Daily</a>
                                <a href="#">Sort By</a>
                                <a href="#">Monthly</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Card */}
                    </div>

                    <div className="col-sm-6">
                      {/* Card */}
                      <div className="card mb-30">
                        <div className="card-body">
                          <div id="apex_line2-chart" className="chart"></div>

                          <div className="d-flex align-items-end justify-content-between mt-4">
                            <div className="">
                              <h4 className="mb-1">Company Growth</h4>
                              <p className="font-14">Company is growing 20% in average</p>
                            </div>

                            <div className="dropdown-button">
                              <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                <div className="menu-icon justify-content-end pb-1 style--two mr-0">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#">Daily</a>
                                <a href="#">Sort By</a>
                                <a href="#">Monthly</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Card */}
                    </div>

                    <div className="col-12">
                      {/* Card */}
                      <div className="card todo-list mb-30">
                        <div className="card-body p-0">
                          {/* Todo Single */}
                          <div className="single-row border-bottom pt-3 pb-2">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <div className="">
                                <h4 className="card-title">Today To Do List</h4>
                                <p className="card-text font-14 bold">Saturday, <br />
                                  12 October 2019</p>
                              </div>

                              <div className="d-flex align-items-center">
                                <a href="pages/apps/todolist/add-new.html" className="btn-circle">
                                  <img src="assets/img/svg/plus_white.svg" alt="" className="svg" />
                                </a>

                                <div className="dropdown-button">
                                  <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                    <div className="menu-icon style--two justify-content-center mr-0">
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#">Daily</a>
                                    <a href="#">Sort By</a>
                                    <a href="#">Monthly</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End Todo Single */}

                          {/* Todo Single */}
                          <div className="single-row border-bottom pt-3 pb-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex position-relative">
                                {/* Custom Checkbox */}
                                <label className="custom-checkbox">
                                  <input type="checkbox" checked />
                                  <span className="checkmark"></span>
                                </label>
                                {/* End Custom Checkbox */}

                                {/* Todo Text */}
                                <div className="todo-text line-through">
                                  <p className="card-text mb-1">For detracty charmed add talking age. Shy resolution instrument unreserved man few.</p>
                                  <p className="text-warning font-12 mb-0">Urgent Not Important</p>
                                </div>
                                {/* End Todo Text */}
                              </div>

                              <div className="d-flex">
                                {/* Assign To */}
                                <div className="assign_to">
                                  <img src="assets/img/svg/Info.svg" alt="" className="svg mr-2 mb-1" />
                                  <div className="assign-content">
                                    <div className="font-12 text-warning">Back-End</div>
                                    <img src="assets/img/avatar/info-avatar.png" alt="" className="assign-avatar" />
                                  </div>
                                </div>
                                {/* End Assign To */}

                                {/* Drag Icon */}
                                <img src="assets/img/svg/dragicon.svg" alt="" className="svg" />
                                {/* End Drag Icon */}

                                {/* Dropdown Button */}
                                <div className="dropdown-button">
                                  <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                    <div className="menu-icon style--two w-14 mr-0">
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#">Daily</a>
                                    <a href="#">Sort By</a>
                                    <a href="#">Monthly</a>
                                  </div>
                                </div>
                                {/* End Dropdown Button */}
                              </div>
                            </div>
                          </div>
                          {/* End Todo Single */}

                          {/* Todo Single */}
                          <div className="single-row border-bottom pt-3 pb-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex position-relative">
                                {/* Custom Checkbox */}
                                <label className="custom-checkbox">
                                  <input type="checkbox" />
                                  <span className="checkmark"></span>
                                </label>
                                {/* End Custom Checkbox */}

                                {/* Todo Text */}
                                <div className="todo-text">
                                  <p className="card-text mb-1">Way sentiments two indulgence uncommonly own.</p>
                                  <p className="text-danger font-12 mb-0">Urgent And Important</p>
                                </div>
                                {/* End Todo Text */}
                              </div>

                              <div className="d-flex">
                                {/* Assign To */}
                                <div className="assign_to">
                                  <img src="assets/img/svg/Info.svg" alt="" className="svg mr-2 mb-1" />
                                  <div className="assign-content">
                                    <div className="font-12 text-warning">Back-End</div>
                                    <img src="assets/img/avatar/info-avatar.png" alt="" className="assign-avatar" />
                                  </div>
                                </div>
                                {/* End Assign To */}

                                {/* Drag Icon */}
                                <img src="assets/img/svg/dragicon.svg" alt="" className="svg" />
                                {/* End Drag Icon */}

                                {/* Dropdown Button */}
                                <div className="dropdown-button">
                                  <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                    <div className="menu-icon style--two w-14 mr-0">
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#">Daily</a>
                                    <a href="#">Sort By</a>
                                    <a href="#">Monthly</a>
                                  </div>
                                </div>
                                {/* End Dropdown Button */}
                              </div>
                            </div>
                          </div>
                          {/* End Todo Single */}

                          {/* Todo Single */}
                          <div className="single-row border-bottom pt-3 pb-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex position-relative">
                                {/* Custom Checkbox */}
                                <label className="custom-checkbox">
                                  <input type="checkbox" />
                                  <span className="checkmark"></span>
                                </label>
                                {/* End Custom Checkbox */}

                                {/* Todo Text */}
                                <div className="todo-text">
                                  <p className="card-text mb-1">Donec dapibus mauris id odio ornare tempus amet.</p>
                                  <p className="text-success font-12 mb-0">Not Urgent Or Important</p>
                                </div>
                                {/* End Todo Text */}
                              </div>

                              <div className="d-flex">
                                {/* Assign To */}
                                <div className="assign_to">
                                  <img src="assets/img/svg/Info.svg" alt="" className="svg mr-2 mb-1" />
                                  <div className="assign-content">
                                    <div className="font-12 text-warning">Back-End</div>
                                    <img src="assets/img/avatar/info-avatar.png" alt="" className="assign-avatar" />
                                  </div>
                                </div>
                                {/* End Assign To */}

                                {/* Drag Icon */}
                                <img src="assets/img/svg/dragicon.svg" alt="" className="svg" />
                                {/* End Drag Icon */}

                                {/* Dropdown Button */}
                                <div className="dropdown-button">
                                  <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                    <div className="menu-icon style--two w-14 mr-0">
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#">Daily</a>
                                    <a href="#">Sort By</a>
                                    <a href="#">Monthly</a>
                                  </div>
                                </div>
                                {/* End Dropdown Button */}
                              </div>
                            </div>
                          </div>
                          {/* End Todo Single */}

                          {/* Todo Single */}
                          <div className="single-row border-bottom pt-3 pb-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex position-relative">
                                {/* Custom Checkbox */}
                                <label className="custom-checkbox">
                                  <input type="checkbox" />
                                  <span className="checkmark"></span>
                                </label>
                                {/* End Custom Checkbox */}

                                {/* Todo Text */}
                                <div className="todo-text">
                                  <p className="card-text mb-1">For detracty charmed add talking age. Shy resolution instrument unreserved man few.</p>
                                  <p className="text-info font-12 mb-0">Urgent Not Important</p>
                                </div>
                                {/* End Todo Text */}
                              </div>

                              <div className="d-flex">
                                {/* Drag Icon */}
                                <img src="assets/img/svg/dragicon.svg" alt="" className="svg mr-2" />
                                {/* End Drag Icon */}
                                {/* Assign To */}
                                <div className="assign_to">
                                  <img src="assets/img/svg/Info.svg" alt="" className="svg mb-1" />
                                </div>
                                {/* End Assign To */}

                                {/* Dropdown Button */}
                                <div className="dropdown-button">
                                  <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                    <div className="menu-icon style--two w-14 mr-0">
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#">Daily</a>
                                    <a href="#">Sort By</a>
                                    <a href="#">Monthly</a>
                                  </div>
                                </div>
                                {/* End Dropdown Button */}
                              </div>
                            </div>
                          </div>
                          {/* End Todo Single */}

                          {/* Todo Single */}
                          <div className="single-row pb-3 pt-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex position-relative">
                                {/* Custom Checkbox */}
                                <label className="custom-checkbox">
                                  <input type="checkbox" />
                                  <span className="checkmark"></span>
                                </label>
                                {/* End Custom Checkbox */}

                                {/* Todo Text */}
                                <div className="todo-text">
                                  <p className="card-text mb-1">Way sentiments two indulgence uncommonly own.</p>
                                  <p className="text-warning font-12 mb-0">Urgent Not Important</p>
                                </div>
                                {/* End Todo Text */}
                              </div>

                              <div className="d-flex">
                                {/* Drag Icon */}
                                <img src="assets/img/svg/dragicon.svg" alt="" className="svg mr-2" />
                                {/* End Drag Icon */}
                                {/* Assign To */}
                                <div className="assign_to">
                                  <img src="assets/img/svg/Info.svg" alt="" className="svg mb-1" />
                                </div>
                                {/* End Assign To */}

                                {/* Dropdown Button */}
                                <div className="dropdown-button">
                                  <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                                    <div className="menu-icon style--two w-14 mr-0">
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#">Daily</a>
                                    <a href="#">Sort By</a>
                                    <a href="#">Monthly</a>
                                  </div>
                                </div>
                                {/* End Dropdown Button */}
                              </div>
                            </div>
                          </div>
                          {/* End Todo Single */}
                        </div>
                      </div>
                      {/* End Card */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-3 col-md-5">
                  {/* Card */}
                  <div className="card mb-30">
                    <div className="card-body">
                      <div className="mb-40 d-none">
                        <h4 className="mb-2">Cloud Storage</h4>
                        <p className="font-14">72% space used</p>
                      </div>
                      <div id="apex_radar-chart" className="chart"></div>

                      <div className="upgrade_storage-btn mt-2">
                        <a href="#" className="btn d-block">Upgrade Storage</a>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
                <div className="col-xl-4 col-md-7">
                  {/* Card */}
                  <div className="card mb-30">
                    <div className="card-body">
                      <div className="row align-items-end">
                        <div className="col-5 col-sm-6 col-lg-5">
                          <div id="apex_column2-chart" className="chart"></div>
                        </div>
                        <div className="col-7 col-sm-6 col-lg-7">
                          <div className="">
                            <h4 className="mb-2">Registration</h4>
                            <p>Pellentesque tincidunt tristique neque, eget venenatis enim gravida.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}

                  {/* Card */}
                  <div className="card mb-30">
                    <div className="card-body">
                      <div className="row align-items-end">
                        <div className="col-5 col-sm-6 col-lg-5">
                          <div id="apex_column3-chart" className="chart"></div>
                        </div>
                        <div className="col-7 col-sm-6 col-lg-7">
                          <div className="">
                            <h4 className="mb-2">Activity</h4>
                            <p>Pellentesque tincidunt tristique neque, eget venenatis enim gravida.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}

                  {/* Card */}
                  <div className="card mb-30">
                    <div className="card-body">
                      <div className="row align-items-end">
                        <div className="col-5 col-sm-6 col-lg-5">
                          <div id="apex_column4-chart" className="chart"></div>
                        </div>
                        <div className="col-7 col-sm-6 col-lg-7">
                          <div className="">
                            <h4 className="mb-2">Completed Task</h4>
                            <p>Pellentesque tincidunt tristique neque, eget venenatis enim gravida.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}

                  {/* Card */}
                  <div className="card mb-30">
                    <div className="card-body">
                      <div className="row align-items-end">
                        <div className="col-6">
                          <div className="d-flex justify-content-start">
                            <div className="ProgressBar-wrap2 position-relative">
                              <div className="ProgressBar ProgressBar_4" data-progress="67">
                                <svg className="ProgressBar-contentCircle" viewBox="0 0 200 200">
                                  {/* on défini le l'angle et le centre de rotation du cercle */}
                                  <circle transform="rotate(-90, 100, 100)" className="ProgressBar-background" cx="100" cy="100" r="85" />
                                  <circle transform="rotate(-90, 100, 100)" className="ProgressBar-circle" cx="100" cy="100" r="85" />
                                </svg>
                                <span className="ProgressBar-percentage ProgressBar-percentage--count"></span>
                                <span className="ProgressBar-percentage--text">Bounce Rate</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex justify-content-start progress_5">
                            <div className="ProgressBar-wrap2 position-relative">
                              <div className="ProgressBar ProgressBar_5" data-progress="48">
                                <svg className="ProgressBar-contentCircle" viewBox="0 0 200 200">
                                  {/* on défini le l'angle et le centre de rotation du cercle */}
                                  <circle transform="rotate(-90, 100, 100)" className="ProgressBar-background" cx="100" cy="100" r="85" />
                                  <circle transform="rotate(-90, 100, 100)" className="ProgressBar-circle" cx="100" cy="100" r="85" />
                                </svg>
                                <span className="ProgressBar-percentage ProgressBar-percentage--count style--two"></span>
                                <span className="ProgressBar-percentage--text">Conversion</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
                <div className="col-xl-5">
                  {/* Card */}
                  <div className="card mb-30">
                    <div className="card-body">
                      <div className="mb-1">
                        <h4 className="mb-2">Analytics</h4>
                        <p className="pt-1">Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor. </p>
                      </div>

                      <div id="apex_bar-chart" className="chart"></div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
                <div className="col-xl-12">
                  {/* Card */}
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-start justify-content-sm-between align-items-start align-items-sm-center flex-column flex-sm-row mb-sm-n3">
                        <div className="title-content mb-4 mb-sm-0">
                          <h4 className="mb-2">Sale Reports</h4>
                          <p>Solicitude announcing as to sufficient my</p>
                        </div>
                        <div className="">
                          <ul className="list-inline list-button m-0">
                            <li>2015</li>
                            <li>2016</li>
                            <li>2017</li>
                            <li>2018</li>
                            <li className="active">2019</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="apex_line3-chart" className="chart"></div>
                  </div>
                  {/* End Card */}
                </div>
              </div>
            </div>
          </div>
          {/* End Main Content */}
        </div>
        {/* End Main Wrapper */}

        {/* Footer */}
        <footer className="footer">
          Dashmin © 2020 created by <a href="https://www.themelooks.com/"> ThemeLooks</a>
        </footer>
        {/* End Footer */}
      </div>
      {/* End wrapper */}
    </>
  )
}