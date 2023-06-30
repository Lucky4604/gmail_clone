import React from 'react'
import {AppBar,Box,InputBase,Toolbar,styled} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { gmailLogo } from '../assests/Assest';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const StyleAppBar=styled(AppBar)({
    background:"#f5f5f5",
    boxShadow:"none"

})
const SearchWrapper = styled(Box)`
    background: #EAF1FB;
    margin-left: 80px;
    border-radius: 18px;
    min-width: 600px;
    max-width: 720px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
        width: 100%
    }
`
const OptionsWrapper = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`


const Header = ({toggleDrawer}) => {
  return (
    <StyleAppBar position="static">
        <Toolbar>
        <MenuIcon color="action" onClick={toggleDrawer}/>
        <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }}/>
        <SearchWrapper>
            <SearchIcon color="action"/>
                 <InputBase />
            <TuneIcon color="action"/>
        </SearchWrapper>
        <OptionsWrapper>
                    <HelpOutlineIcon color="action" />
                    <SettingsIcon  color="action" />
                    <AppsIcon color="action"/>
                    <AccountCircleIcon color="action"/>

                    
               </OptionsWrapper>

        </Toolbar>
    </StyleAppBar>
  )
}

export default Header