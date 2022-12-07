import { useMemo } from "react";
import { useTable, usePagination, Column } from "react-table";
import {
  aliveStatus,
  deadStatus,
  unknownStatus,
} from "../../../../../../assets";
import * as S from "./Table.styled";

type CharactersTableProps = {
  data: ICharacter[];
  currentPage: number;
  pages: number;
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
      <S.NameWrapper>
        <p>{row.original.name}</p>
        <p>{row.original.species}</p>
      </S.NameWrapper>
    ),
  },
  {
    Header: "Avatar",
    accessor: "image",
    Cell: ({ value }) => <S.ImageWrapper imgUrl={value} />,
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
      <S.StatusWrapper isStatusUnknown={row.original.status === "unknown"}>
        <img src={getStatusIcon(row.original.status)} alt="" />
        <p>{row.original.status}</p>
      </S.StatusWrapper>
    ),
  },
];

export const Table = ({ data, currentPage, pages }: CharactersTableProps) => {
  const tableData = useMemo(() => data, [data]);
  const tableColumns = useMemo(() => columns, [columns]);

  const tableInstance = useTable(
    {
      columns: tableColumns,
      data: tableData,
    },
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <S.Table {...getTableProps()}>
      <S.THead>
        {headerGroups.map((headerGroup) => (
          <S.THeadRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <S.THeader {...column.getHeaderProps()}>
                {column.render("Header")}
              </S.THeader>
            ))}
          </S.THeadRow>
        ))}
      </S.THead>
      <S.TBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <S.TRow
              isStatusUnknown={row.original.status === "unknown"}
              {...row.getRowProps()}
            >
              {row.cells.map((cell) => (
                <S.TCell
                  isCellUnknown={cell.value === "unknown"}
                  isStatusUnknown={row.original.status === "unknown"}
                  {...cell.getCellProps()}
                >
                  {cell.render("Cell")}
                </S.TCell>
              ))}
            </S.TRow>
          );
        })}
      </S.TBody>
    </S.Table>
  );
};
