import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {ListItem} from "./styles"
import {useParams} from "react-router-dom"
import {useSkill} from "../../hooks/useBio"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, )'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({strength, i, skills, click}) {
  const [expanded, setExpanded] = React.useState('');

//   skills.push({
//       id: data?.data.id,
//       recommendations: data?.data.stats.recommendations
//   })
//   console.log(skills)

  const handleChange = (panel, id) => async(event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    click(id)
  };

  return (
    <li>
      <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`, strength.id)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><ListItem key={strength.id} id={strength.id}>{strength.name}</ListItem></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Recomendations:    {skills.find(el => el.id === strength.id)?.recommendations}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </li>
  );
}
