import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const myTheme = createMuiTheme({
  overrides: {
    MuiPaper: {
      rounded: { borderRadius: "15px" }
    },
    MuiTableCell: {
      root: { fontFamily: "Lato" }
    },
    MuiTypography: {
      root: {
        fontFamily: "Lato!important"
      }
    }
  }
});

export default function RecordsList(props) {
  const { title, columns, data, options } = props;
  return (
    <MuiThemeProvider theme={myTheme}>
      <MUIDataTable
        title={title}
        columns={columns}
        data={data}
        options={options}
      />
    </MuiThemeProvider>
  );
}
