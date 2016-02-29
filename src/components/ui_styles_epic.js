var UiStyle = {
  styles:{
    "stage":{
      padding:'10px'
    },
    "navContainer":{
      display: "flex",
      flexDirection: "row",
      margin: "0 -5px 10px",
      paddingLeft: "0px"
    },
    "navItem":{
      flex: 1,
      backgroundColor: "#ccc9c6",
      padding: "8px 4px 7px",
      textAlign: "center",
      margin: "0 5px",
      borderBottom: "2px solid transparent",
      ':hover':{
        backgroundColor:"#00b3e6",
        color: "#fff"
      }
    },
    "isValid":{
      borderBottomColor:"#00b3e6"
    },
    "isInvalid":{
      borderBottomColor: "#f00"
    },
    "grid":{
      margin: "0 -5px"
    },
    "gridRow":{
      display: "flex",
      flex: 1,
      flexDirection: "row",
      position: "relative"
    },
    "gridBox":{
      display: "flex",
      flex: 1,
      flexDirection: "column",
      position: "relative"
    },
    "gridBoxHeader":{
      margin: "0 5px 6px",
      backgroundColor: "#959596",
      padding: "4px",
      color: "#fff"
    },
    "gridBoxHeaderH1":{
      display: "inline",
      paddingRight: "8px",
      fontSize: "107.1428%"
    },
    'gridBoxBody':{
      display: "flex",
      flex: 1,
      margin: "0 5px 8px"
    },
    "gridBoxContent":{
      flex: 1,
      border: "1px solid #aaa",
      padding: "4px"
    },
    "gridBoxContentTable":{
      backgroundColor:"#FFF"
    },
    "gridBoxFooter": {
      margin: "-2px 5px 8px",
      border: "1px solid #aaa",
      backgroundColor: "#ddd",
      padding: "4px",
      color: "#222"
    },
    "iconStrip":{
      flexBasis: "28px"
    }
  }
};

var StyleTags = [
  {
    scopeSelector:null,
    rules:{
      body:{
        margin:"0px",
        fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'
      },
      "*, *:before, *:after":{
        boxSizing: "inherit"
      }
    }
  },
  {
    scopeSelector:null,
    rules:{
      ul:{
        listStyle:"none"
      }
    }
  },
  {
    scopeSelector:'.table',
    rules:{
      th:{
        border: "1px solid #acacac",
        borderWidth: "0 1px 1px 0",
        padding: "6px 7px 5px",
        textAlign: "left",
        fontSize: "85.7143%",
        fontWeight: "bold",
        color: "#7f7f7f"
      },
      td:{
          backgroundColor: "#fff",
          borderWidth: "1px 0",
          borderStyle: "solid",
          borderColor: "transparent transparent #d4d4d4",
          padding: "5px 7px",
          fontSize: "92.8571%",
          verticalAlign: "middle"
      }
    }
  },
  {
    scopeSelector:null,
    rules:{
      table:{
        width: "100%",
        cursor: "default",
        backgroundColor: "#fff"
      }
    }
  },
  {
    scopeSelector:null,
    rules:{
      'input[type="text"], textarea':{
        td:{
              backgroundColor: "#fff",
              borderWidth: "1px 0",
              borderStyle: "solid",
              borderColor: "transparent transparent #d4d4d4",
              padding: "5px 7px",
              fontSize: "92.8571%",
              verticalAlign: "middle"
          }
      }
    }
  },
  {
    scopeSelector:null,
    rules:{
      "input, select, textarea":{
        fontFamily: '"Segoe UI", "Proxima Nova", sans-serif',
        fontSize: "100%",
        color: "#262626"
      }
    }
  }
];
export {UiStyle,StyleTags};
