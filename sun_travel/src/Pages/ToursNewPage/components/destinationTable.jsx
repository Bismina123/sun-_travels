import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import styled from "styled-components";

const columns = [
  {
    field: "destination",
    headerName: "",
    width: 200,
    renderCell: (params) => (
      <Box display="flex" alignItems="center">
        <Box mr={1}>
          <img
            src={params.row.imageUrl}
            alt={params.row.destination}
            style={{ width: 50, height: 50, borderRadius: "50%" }}
          />
        </Box>
        <p>{params.row.destination}</p>
      </Box>
    ),
  },
  {
    field: "price",
    headerName: "STARTS FROM",
    width: 200,
    renderCell: (params) => <p>₹ {params.row.price}/-</p>,
  },
];

export const DestinationTable = ({ className, data }) => {
  return (
    <StyledCard sx={{ height: 400, width: "100%" }} className={className}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </StyledCard>
  );
};
const StyledCard = styled(Card)`
  .MuiDataGrid-footerContainer {
    display: none;
  }
  .MuiDataGrid-cell--textLeft {
    min-width: unset !important;
    max-width: unset !important;
    p {
      margin-bottom: unset !important;
    }
    p:nth-child(1) {
      padding: 3px 6px;
      outline: 1px solid #ebebeb;
      border-radius: 15px;
    }
    p:nth-child(2) {
      font-weight: 600;
      font-size: 16px;
    }
    width: 50%;
    &[aria-colindex="2"] {
      justify-content: end !important;
    }
  }
  .MuiDataGrid-main {
    padding: 0 20px 20px;
  }
  .MuiDataGrid-virtualScrollerContent,
  .MuiDataGrid-virtualScrollerRenderZone {
    width: 100% !important;
    :focus-within {
      outline: unset !important;
    }
    .MuiDataGrid-row {
      width: 100%;
      min-height: unset !important;
      max-height: unset !important;
      .MuiDataGrid-withBorderColor:nth-child(3) {
        display: none;
      }
    }
  }
  .MuiDataGrid-columnHeaders,
  .MuiDataGrid-columnHeadersInner {
    width: 100% !important;
    [aria-rowindex="1"] {
      width: 100% !important;
      justify-content: end;
      padding-right: 20px;
    }
  }
  .MuiDataGrid-columnHeader {
    width: unset !important;
    min-width: unset !important;
    max-width: unset !important;
    .MuiIconButton-root {
      display: none;
    }
  }
`;
