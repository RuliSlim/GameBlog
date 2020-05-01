import React, { MouseEvent, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../../theme/styles';
import lightTheme from '../../theme/theme';

export default function SearchAppBar () {
  const [ style, setStyle ] = useState(useStyles());
  const classes = style;
  const clickEvent = (event : MouseEvent) => {
    console.log(lightTheme.palette.type, 'ini theme');
    lightTheme.palette.type === 'light' ? lightTheme.palette.type = 'dark' : lightTheme.palette.type = 'light';
    console.log(lightTheme.palette.type, 'ini theme');
    console.log(lightTheme, 'ini theme');
    console.log(style);
  };
  
  return (
    <React.Fragment>
      <AppBar position="static" className={classes.bgcLight}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={clickEvent}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
