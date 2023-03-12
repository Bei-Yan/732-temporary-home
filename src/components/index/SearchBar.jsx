import * as React from 'react';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBar() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={0.5}>
      <Input defaultValue="Enter your search here" />
      <Button variant="outlined" startIcon={<SearchIcon />}>
        Search
      </Button>
    </Stack>
  );
}

