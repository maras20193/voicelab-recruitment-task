import { useMemo } from "react";
import { useTable, Column } from "react-table";
import { aliveStatus, deadStatus, unknownStatus } from "../../../../assets";

type CharactersTableProps = {
  data: ICharacter[];
};

const getStatusIcon = (status: string) => {
  switch (status.toLowerCase()) {
    case "alive":
      return aliveStatus;
    case "dead":
      return deadStatus;
    case "unknown":
      return unknownStatus;
    default:
      return undefined;
  }
};

const columns: Column<ICharacter>[] = [
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ row }) => (
      <div>
        <p>{row.original.name}</p>
        <p>{row.original.species}</p>
      </div>
    ),
  },
  {
    Header: "Avatar",
    accessor: "image",
    Cell: ({ value }) => (
      <img style={{ width: "60px" }} src={value} alt="avatar" />
    ),
  },
  {
    Header: "Origin",
    accessor: (data) => data.origin.name,
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ row }) => (
      <div>
        <img src={getStatusIcon(row.original.status)} alt="" />
        <p>{row.original.status}</p>
      </div>
    ),
  },
];

export const Table = ({ data }: CharactersTableProps) => {
  const tableData = useMemo(() => data, []);
  const tableColumns = useMemo(() => columns, []);

  const tableInstance = useTable({ columns: tableColumns, data: tableData });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
