import Link from 'next/link';
import style from '../styles/Nav.module.scss';
import { NavProps } from '../lib/types';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const Nav = (props: NavProps) => {
  const { active } = props;
  return (
    <div className={style.navbox}>
      <div className={style.nav}>
        <div className={style.navlogos}>
          <Link href="/">
            <img
              className={style.navlogolarge}
              src="./cyberceo_logo_light.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className={style.navlinks}>
          <ul>
            <li>
              <Link href="/"><b>Home</b></Link>
            </li>
            <li className={style.dropdownItem}>
              <Dropdown>
                <DropdownTrigger>
                  <Button disableRipple>
                    <b>Team</b>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu className={style.menu_item_team}>
                  <DropdownItem className={style.dropdownItemBlock}>
                    <Link href="/leadership"><b>Leadership</b></Link>
                  </DropdownItem>
                  <DropdownItem className={style.dropdownItemBlock}>
                    <Link href="/services"><b>Del Norte High School</b></Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Link href="/events"><b>Events</b></Link>
            </li>
            <li>
              <Link href="/webcasts"><b>Webcasts</b></Link>
            </li>
          </ul>
        </div>
        <div className={style.navbutton}>
          <a target="_blank" rel="noreferrer" href="">
            <button>Get Involved</button>
          </a>
        </div>
      </div>
      <div className={style.navMobile}>
        {/* Mobile navigation content goes here */}
      </div>
    </div>
  );
};

export default Nav;
