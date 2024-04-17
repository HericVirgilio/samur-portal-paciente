import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
  name: string,
  data: string,
  titulo: string
) {
  return {
    name,
    data,
    titulo,
    history: [
      {
        status: 'Deferido',
        download: 'Exame de sangue',
      },
      {
        status: 'Deferido',
        download: 'Endoscopia',
      }
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.data}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                {row.titulo}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>Downlaod</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow,index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {historyRow.status}
                      </TableCell>
                      <TableCell style={{color: "blue", textDecoration: "underline", cursor: "pointer"}} >{historyRow.download}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Fernanda Lima', "10/01/25","Dr.House"),
  createData('Fernanda Lima', "10/12/23","Dr.Wilson"),
  createData('Fernanda Lima', "10/11/23","Dra.Cuddy"),
  createData('Fernanda Lima', "10/10/23","Dra.Chase"),
  createData('Fernanda Lima', "10/09/23","Dra.Cameron"),
];

export default function Mui3Colunas() {
  return (
    <TableContainer component={Paper} style={{width: "95vw", margin: "auto"}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Paciente</TableCell>
            <TableCell align="center">Data</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}