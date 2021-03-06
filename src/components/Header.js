import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={Link} to="/">suttirach</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to='/about'>เกี่ยวกับเรา</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/contact'>ติดต่อเรา</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/profile'> ข้อมูลส่วนตัว</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to='/signin'>เข้าสู่ระบบ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/signup'>สมัครสมาชิก</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Header;