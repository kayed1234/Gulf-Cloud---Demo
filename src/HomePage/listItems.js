import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import Lock from "@material-ui/icons/Lock";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Lock />
      </ListItemIcon>
      <Link to='/Signin'>
        <ListItemText primary='الدخول' />
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemText primary='' />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to='/'>
        <ListItemText primary='التحكم' />
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link to='/Families'>
        <ListItemText primary='الاسر المنتجه' />
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link to='/Associations'>
        <ListItemText primary=' ادخال البيانات ' />
      </Link>
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link to='/Users'>
        <ListItemText primary='المستعملين المسجلين' />
      </Link>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemText primary='' />
    </ListItem>
    <ListItem button>
      <ListItemText primary='' />
    </ListItem>
    <ListItem button>
      <ListItemText primary='' />
    </ListItem>

    <ListItem button>
      <ListItemText primary='' />
    </ListItem>

    <ListSubheader inset>الاعدادات</ListSubheader>

    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to='/Cities'>
        <ListItemText primary='المدن' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to='/Regions'>
        <ListItemText primary='المناطق' />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to='/Specialities'>
        <ListItemText primary='التخصصات' />
      </Link>
    </ListItem>
  </div>
);

// <ListItem button>
//       <ListItemIcon>
//         <SwapVertIcon />
//       </ListItemIcon>
//       <Link to='/ForApproval'>
//         <ListItemText primary='للموافقه' />
//       </Link>
//     </ListItem>
