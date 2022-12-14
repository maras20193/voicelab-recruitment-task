import { useMemo } from "react";
import { useTable, Column } from "react-table";
import {
  aliveStatus,
  deadStatus,
  unknownStatus,
} from "../../../../../../assets";
import * as S from "./Table.styled";

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
      <S.NameWrapper title={row.original.name}>
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
    accessor: "origin",
    Cell: ({ row }) => (
      <S.OriginWrapper>
        <p title={row.original.origin.name}>{row.original.origin.name}</p>
      </S.OriginWrapper>
    ),
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

const tableHooks = (hooks: any) => {
  hooks.visibleColumns.push((columnsH: any) => [
    {
      Header: () => <S.Input type="checkbox" />,
      Cell: () => <S.Input type="checkbox" />,
    },
    ...columnsH,
  ]);
};

export const Table = ({ data }: CharactersTableProps) => {
  const tableData = useMemo(() => data, [data]);
  const tableColumns = useMemo(() => columns, [columns]);

  const tableInstance = useTable(
    {
      columns: tableColumns,
      data: tableData,
    },
    tableHooks
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
