import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import LanguageToggle from "./LanguageToggle";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";
import { useTranslation } from 'react-i18next';

export default function Navbar({darkMode, handleClick}) {
    const location = useLocation();
    const { t } = useTranslation();
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    const links = [
        {
            name: t('nav.home'),
            translationKey: 'home',
            to: '/',
            active: 'home'
        },
        {
            name: t('nav.about'),
            translationKey: 'about',
            to: '/about',
            active: 'about'
        },
        {
            name: info.initials,
            type: 'initials',
            to: '/',
            active: 'home'
        },
        {
            name: t('nav.portfolio'),
            translationKey: 'portfolio',
            to: '/portfolio',
            active: 'portfolio'
        },
        {
            name: t('nav.resume'),
            translationKey: 'resume',
            to: '/resume',
            active: 'resume'
        }
    ];

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '1.5rem', md: '6rem'}}
                 textTransform={'lowercase'} fontSize={'1rem'}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)}>
                            {!link.type && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <LanguageToggle />
                </li>
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
            </Box>
        </Box>
    )
}