'use client'
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const pages = [['Badeklubben', '..'], ['Stian', 'stian'], ['Lars', 'lars'], ['Arne', 'arne'], ['Gard', 'gard'], ['Oskar', 'oskar'], ['Osten', 'osten']]

function DefaultDrawer() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {pages.map((page) => (
                    <ListItem key={page[1]} disablePadding>
                        <ListItemButton onClick={(e) => {
                            window.location.href = `/member/${page[1]}`
                        }}>
                            <ListItemText primary={page[0]}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
        </Box>
    );

    return (
        <div>
            <Button variant={"contained"} onClick={toggleDrawer(true)}>Åpne meny</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>

    );
}
export default DefaultDrawer;