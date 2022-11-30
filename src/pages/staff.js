import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DataTable from "../components/DataTable";
import { fetchServicesData } from "../store/service-actions";

function createData(id, title, firstName, lastName, phoneNumber, email) {
  return {
    id,
    otherColumns: [title, firstName, lastName, phoneNumber, email],
  };
}

const rows = [
  createData(1, "Title1", "Cupcake", "test", "647888989", "cupcake@gmail.com"),
  createData(2, "Title2", "Eclair", "test", "647888989", "cupcake@gmail.com"),
  createData(3, "Title3", "Frozen", "test", "647888989", "cupcake@gmail.com"),
];

const headCells = [
  {
    id: "title",
    disablePadding: true,
    label: "Title",
  },
  {
    id: "firstName",
    disablePadding: true,
    label: "First Name",
  },
  {
    id: "lastName",
    disablePadding: true,
    label: "Last Name",
  },
  {
    id: "phoneNumber",
    disablePadding: false,
    label: "Phone number",
  },
  {
    id: "email",
    disablePadding: true,
    label: "Email",
  },
];

const Staff = () => {
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
    navigate("/staff/create");
  };

  return (
    <DataTable
      rows={rows}
      headCells={headCells}
      selected={selected}
      setSelected={setSelected}
      deleteAlertHandler={{
        title: "Confirm Delete These Staffs?",
        description: "Confirm?",
        handleSubmit: deleteHandler,
        setOpen: setOpenDeleteAlert,
        open: openDeleteAlert,
      }}
      createHandler={createHandler}
      title="Staff"
    />
  );
};

export default Staff;
