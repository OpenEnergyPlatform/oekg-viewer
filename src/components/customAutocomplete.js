import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { withStyles } from "@material-ui/core/styles";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CustomAutocomplete() {
  const [value, setValue] = React.useState([]);
  const onDelete = (title) => () => {
    setValue((value) => value.filter((v) => v.title !== title));
  };
  return (
    <Box sx={{ width: "%80" }}>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={params}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        )}
        style={{ width: '%80' }}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        renderTags={() => null}
        renderInput={(params) => (
          <TextField {...params} label="Select sectors" placeholder="Sectors" />
        )}
      />
      <Box
        mt={3}
        sx={{
          '& > :not(:last-child)': { marginRight: 1 },
          '& > *': { marginBottom: 1 },
        }}
      >
        {value.map((v) => (
          <Chip key={v.title} label={v.title} onDelete={onDelete(v.title)} color="primary" />
        ))}
      </Box>
    </Box>
  );
}

const params = [
  { title: 'Agriculture, forestry and land use sector', class: 123 },
  { title: 'Energy demand sector', class: 123 },
  { title: 'Energy transformation sector', class: 123 },
  { title: 'Industry sector', class: 123 },
  { title: 'Waste and wastewater sector', class: 123 },
];
