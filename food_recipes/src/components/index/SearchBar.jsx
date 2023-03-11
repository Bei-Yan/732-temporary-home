import * as React from 'react';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import SearchButton from './SearchButton';


export default function SearchBar() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={0.5}>
      <Input defaultValue="Enter your search here" />
      <SearchButton hiddenLabel/>
    </Stack>
  );
}

