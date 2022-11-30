import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormBox from "../components/FormBox";
import { createService } from "../store/service-actions";

function ServiceCreate() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const submitHandler = () => {
    dispatch(
      createService({
        name,
        category,
        price,
      })
    );

    navigate('/service')
  };
  return (
    <FormBox onSubmit={submitHandler}>
      <Typography variant="h2" padding={3} textAlign="center">
        Create Service
      </Typography>
      <TextField
        margin="normal"
        type="text"
        variant="outlined"
        label="Name"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required={true}
        fullWidth
      />
      <TextField
        margin="normal"
        type="text"
        variant="outlined"
        label="Category"
        name="category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        required={true}
        fullWidth
      />
      <TextField
        margin="normal"
        type="number"
        variant="outlined"
        name="password"
        value={price}
        onChange={(e) => {
          setPrice(parseFloat(e.target.value));
        }}
        label="Prices"
        fullWidth
        InputProps={{ inputProps: { min: 0 } }}
        required={true}
      />
      <Button
        sx={{ marginTop: 3, borderRadius: 3, marginBottom: 5 }}
        variant="contained"
        color="warning"
        type="submit"
      >
        Create Service
      </Button>
    </FormBox>
  );
}
export default ServiceCreate;
