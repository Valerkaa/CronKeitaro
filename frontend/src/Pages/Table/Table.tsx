import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    id:number,
    name: string,
    password:string,
    ip:string,
    isActive:boolean,
) {
    return { id, name, password, ip, isActive };
}

const rows = [
    createData(1, "9 Keitaro", "228VrotProsim", "192.168.0.145", true),
    createData(2, "159 Keitaro", "qweqweasdad", "192.323.4.145", true),
];

export default function () {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Password</TableCell>
                        <TableCell align="right">Ip</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.id}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.password}</TableCell>
                            <TableCell align="right">{row.ip}</TableCell>
                            <TableCell align="right">{row.isActive}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}