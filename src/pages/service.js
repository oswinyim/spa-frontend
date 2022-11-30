import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DataTable from "../components/DataTable";
import { fetchServicesData } from "../store/service-actions";

function createData(id, name, category, prices) {
  return {
    id,
    otherColumns: [name, category, prices],
  };
}

const rows = [
  createData(1, "Cupcake", 305, 3.7, 67),
  createData(2, "Eclair", 262, 16.0, 24),
  createData(3, "Frozen yoghurt", 159, 6.0, 24),
  createData(4, "Gingerbread", 356, 16.0, 49),
  createData(5, "Honeycomb", 408, 3.2, 87),
  createData(6, "Ice cream sandwich", 237, 9.0, 37),
  createData(7, "Jelly Bean", 375, 0.0, 94),
  createData(8, "KitKat", 518, 26.0, 65),
  createData(9, "Lollipop", 392, 0.2, 98),
  createData(10, "Marshmallow", 318, 0, 81),
  createData(11, "Nougat", 360, 19.0, 9),
  createData(12, "Oreo", 437, 18.0, 63),
  createData(13, "Donut", 452, 25.0, 51),
];

const headCells = [
  {
    id: "name",
    disablePadding: true,
    label: "Name",
  },
  {
    id: "category",
    disablePadding: true,
    label: "Category",
  },
  {
    id: "prices",
    disablePadding: false,
    label: "Prices(CAD)",
  },
];

const Service = () => {
  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServicesData());
  }, [dispatch]);

  const deleteHandler = () => {
    console.log(selected);
  };

  const createHandler = () => {
    navigate("/service/create");
  };

  return (
    <DataTable
      rows={rows}
      headCells={headCells}
      selected={selected}
      setSelected={setSelected}
      deleteAlertHandler={{
        title: "Confirm Delete These Guest?",
        description: "Confirm?",
        handleSubmit: deleteHandler,
        setOpen: setOpenDeleteAlert,
        open: openDeleteAlert,
      }}
      createHandler={createHandler}
      title="Service"
    />
  );
};

export default Service;
