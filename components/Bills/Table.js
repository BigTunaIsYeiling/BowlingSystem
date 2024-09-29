import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
function LayoutWithTable({ data, total, turnover }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflow: "auto",
          // Scrollbar Styling
          "&::-webkit-scrollbar": {
            width: "8px", // Set the scrollbar width
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent", // Make scrollbar track background transparent
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "WhiteSmoke", // Set the scrollbar thumb color to WhiteSmoke
            borderRadius: "10px", // Rounded scrollbar thumb
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#d3d3d3", // Slightly darker shade of WhiteSmoke on hover
          },
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            padding: "10px",
            backgroundColor: "#2E4056",
          }}
        >
          <Table
            sx={{
              borderCollapse: "separate",
              borderSpacing: "0 10px", // Add space between rows
            }}
          >
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#213140",
                  "& th:first-of-type": {
                    borderTopLeftRadius: "10px", // Rounded top-left corner of the header,
                    borderBottomLeftRadius: "10px",
                  },
                  "& th:last-of-type": {
                    borderTopRightRadius: "10px", // Rounded top-right corner of the header
                    borderBottomRightRadius: "10px",
                  },
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color: "#E8F5A7",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color: "#E8F5A7",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color: "#E8F5A7",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Lane
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color: "#E8F5A7",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Consumption Mode
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color: "#E8F5A7",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Game Mode
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color: "#E8F5A7",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Sum
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color: "#E8F5A7",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Discount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                Array.isArray(data) &&
                data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      backgroundColor: "#213140",
                      borderRadius: "10px", // Set border radius
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                      // Ensuring corners are visible
                      "& td:first-of-type": {
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                      },
                      "& td:last-of-type": {
                        borderTopRightRadius: "10px",
                        borderBottomRightRadius: "10px",
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        padding: "8px",
                        color: "white",
                      }}
                      align="center"
                    >
                      {row.ID}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        padding: "8px",
                        color: "white",
                      }}
                      align="center"
                    >
                      {row.Date}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        padding: "8px",
                        color: "white",
                      }}
                      align="center"
                    >
                      {row.lane}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        padding: "8px",
                        color: "white",
                      }}
                      align="center"
                    >
                      {row.paymode}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        padding: "8px",
                        color: "white",
                      }}
                      align="center"
                    >
                      {row.GameMode}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        padding: "8px",
                        color: "white",
                      }}
                      align="center"
                    >
                      {row.sum}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "none",
                        padding: "8px",
                        color: "white",
                      }}
                      align="center"
                    >
                      {row.Discount}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* Footer */}
      <Stack
        sx={{
          paddingY: "16px",
          backgroundColor: "#213140",
          color: "#fff",
          borderRadius: 2,
        }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingX={30}
      >
        <Typography variant="body1" color="#E8F5A7">
          Total: {total}
        </Typography>
        <Typography variant="body1" color="#E8F5A7">
          Turnover: {turnover} RMB
        </Typography>
      </Stack>
    </Box>
  );
}
export default LayoutWithTable;
