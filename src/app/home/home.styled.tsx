import { styled } from '@mui/material/styles';

export const HomeStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
  }));
  