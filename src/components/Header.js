import toco from '../img/toco.png'

export default function Headers() {
    return (
        <>
            <header className="header fixed-top d-flex align-content-center flex-wrap">
                {/* Logo */}
                <div className="logo">
                    {/* <a href="#" className="default-logo"><img src={toco} alt="" /></a> */}
                    <a href="index.html" className="mobile-logo"><img src={toco} alt="" /></a>
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
        </>
    )
}