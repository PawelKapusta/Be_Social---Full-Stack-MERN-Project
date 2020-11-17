import {makeStyles} from "@material-ui/core/styles";
import React from "react";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '2% 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '2%',
        maxHeight: '12rem',
        maxWidth: '12rem'
    },
    [theme.breakpoints.down('sm')]:{
        mainSite: {
            flexDirection: 'column-reverse'
        }
    }

}));
