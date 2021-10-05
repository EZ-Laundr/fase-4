export default function Sidebar() {
    return (
        <>
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
        </>
    )
}