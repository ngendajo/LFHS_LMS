
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { 
  FaChartLine, FaUsers, FaBook, FaChartBar, FaBullhorn, 
  FaCalendarAlt, FaBoxes, FaCog, FaQuestionCircle, FaBars, FaUserCircle, FaCaretDown,
  FaChalkboardTeacher, FaUserGraduate
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardOverview from './DashboardOverview';

const customStyles = `
  :root {
    --primary-snow: #F7FCFF;
    --primary-dark-gray: #252C37;
    --secondary-light-blue: #C4E9EC;
    --accent-light-orange: #F3D0B3;
    --highlight-dark-green: #273316;
    --navbar-height: 100px; /* Adjust this value based on your navbar's actual height */
  }

  body {
    background-color: var(--primary-snow);
    color: var(--primary-dark-gray);
  }

  .custom-navbar {
    background-color: var(--primary-dark-gray) !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: white !important;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;
    
  }

  .custom-sidebar {
    background-color: var(--secondary-light-blue) !important;
    color: var(--primary-dark-gray) !important;
    position: fixed;
    top: var(--navbar-height);
    left: 0;
    bottom: 0;
    z-index: 1020;
    overflow-y: auto;
  }

  .custom-sidebar .ps-menu-button:hover {
    background-color: var(--accent-light-orange) !important;
  }

  .custom-sidebar .ps-active {
    background-color: var(--highlight-dark-green) !important;
    color: var(--primary-snow) !important;
  }

  .main-content {
    background-color: var(--primary-snow);
    margin-left: 250px; /* Adjust this value based on your sidebar width */
    margin-top: var(--navbar-height);
    padding: 20px;
    transition: margin-left 0.3s;
  }

  .main-content.sidebar-collapsed {
    margin-left: 80px; /* Adjust this value based on your collapsed sidebar width */
  }

  /* ... (rest of your styles remain the same) ... */

  .school-name ,.user-name{
    color: white !important;
  }
    .school-logo,.user-avatar{
    background-color:white !important;
    width:40px;
    height:40px;
    border-radius:50%;
    margin-right:0.5rem;

    }
    .dropdo{
      color:white;
    }
    .user-profile{
      display:flex;
      justify-content:center;
      align-items:center;
    }
`;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('Dashboard Overview');

  const menuItems = [
    { name: 'Dashboard Overview', icon: <FaChartLine /> },
    { 
      name: 'User Management', 
      icon: <FaUsers />,
      subItems: [
        { name: 'Teachers', icon: <FaChalkboardTeacher /> },
        { name: 'Students', icon: <FaUserGraduate /> }
      ]
    },
    { name: 'Course Management', icon: <FaBook /> },
    { name: 'Reports and Analytics', icon: <FaChartBar /> },
    { name: 'Scheduling and Timetables', icon: <FaCalendarAlt /> },
    { name: 'Resource Management', icon: <FaBoxes /> },
    { name: 'Settings', icon: <FaCog /> },
    { name: 'Helpdesk', icon: <FaQuestionCircle /> },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuItemClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const renderComponent = () => {
    switch(selectedComponent) {
      case 'Dashboard Overview':
        return <DashboardOverview />;
      case 'Teachers':
        return <h2>Teachers Management</h2>;
      case 'Students':
        return <h2>Students Management</h2>;
      // ... other cases for different menu items
      default:
        return <h2>{selectedComponent}</h2>;
    }
  };

  return (
    <>
      <style>{customStyles}</style>
      <div className="d-flex flex-column vh-100">
      <Navbar expand="lg" className="text-white fixed custom-navbar px-3">
          <Navbar.Brand href="#home" className="d-flex align-items-center text-white">
            <svg className="school-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#C4E9EC" />
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#252C37" fontSize="40">SL</text>
            </svg>
            
            <span className="school-name">School Name</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <NavDropdown 
                title={
                  <div className="user-profile">
                    <FaUserCircle className="user-avatar" />
                    <span className="user-name">John Doe</span>
                    <FaCaretDown className='dropdo' />
                  </div>
                } 
                id="basic-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item href="#action/3.1" className="custom-dropdown-item">Update Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2" className="custom-dropdown-item">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="d-flex flex-grow-1">
          <Sidebar collapsed={collapsed} className="custom-sidebar">
            <Menu>
              <MenuItem
                icon={<FaBars />}
                onClick={toggleSidebar}
                className="border-bottom bg-success"
              >
                {collapsed ? '' : ''}
              </MenuItem>
              {menuItems.map((item) => (
                item.subItems ? (
                  <SubMenu key={item.name} icon={item.icon} label={item.name}>
                    {item.subItems.map((subItem) => (
                      <MenuItem
                        key={subItem.name}
                        icon={subItem.icon}
                        onClick={() => handleMenuItemClick(subItem.name)}
                        className={selectedComponent === subItem.name ? 'ps-active' : ''}
                      >
                        {subItem.name}
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem
                    key={item.name}
                    icon={item.icon}
                    onClick={() => handleMenuItemClick(item.name)}
                    className={selectedComponent === item.name ? 'ps-active' : ''}
                  >
                    {item.name}
                  </MenuItem>
                )
              ))}
            </Menu>
          </Sidebar>

          <main className={`flex-grow-1 main-content ${collapsed ? 'sidebar-collapsed' : ''}`}>
            {renderComponent()}
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;