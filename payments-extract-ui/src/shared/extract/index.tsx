import { Extract } from '@model/Extract'
import { useExtract } from '@core/hooks/extract'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow
} from '@mui/material'
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import { ISODate } from '@core/utils/date';
import { Currency } from '@core/utils/currency';

export function ExtractList() {
    const { extract, pagination, fetchExtract } = useExtract();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChangePage = (_: any, newPage: number) => {
        fetchExtract(newPage);
    };

    return <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Channel</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Card Brand</TableCell>
                    <TableCell align="right">Last four card numbers</TableCell>
                    <TableCell align="right">Gross amount (R$)</TableCell>
                    <TableCell align="right">Fee Amount (R$)</TableCell>
                    <TableCell align="right">Tax Amount (R$)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {extract.map((e: Extract, index: number) => (
                    <TableRow key={index}>
                        <TableCell>{e.channel}</TableCell>
                        <TableCell>{e.status}</TableCell>
                        <TableCell>{new ISODate(e.date).toDateString()}</TableCell>
                        <TableCell>{e.cardBrand}</TableCell>
                        <TableCell align="right">{e.truncatedCardNumber}</TableCell>
                        <TableCell align="right">{new Currency(e.grossAmount).getBRLWithoutSymbol()}</TableCell>
                        <TableCell align="right">{new Currency(e.mdrFeeAmount).getBRLWithoutSymbol()}</TableCell>
                        <TableCell align="right">{new Currency(e.mdrTaxAmount).getBRLWithoutSymbol()}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination colSpan={8}
                        count={pagination?.totalElements ?? 0}
                        rowsPerPage={pagination?.pageSize ?? 0}
                        page={pagination?.pageNumber ?? 0}
                        SelectProps={{native: true}}
                        onPageChange={handleChangePage}
                        ActionsComponent={TablePaginationActions}
                    />
                </TableRow>
            </TableFooter>
        </Table>
    </TableContainer>
}