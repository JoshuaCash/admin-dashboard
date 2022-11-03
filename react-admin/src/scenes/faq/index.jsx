import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores mollitia repellat ex distinctio? Iste totam repudiandae ipsum, autem ea nulla.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores mollitia repellat ex distinctio? Iste totam repudiandae ipsum, autem ea nulla.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        And Another One
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores mollitia repellat ex distinctio? Iste totam repudiandae ipsum, autem ea nulla.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                     They Keep Coming
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores mollitia repellat ex distinctio? Iste totam repudiandae ipsum, autem ea nulla.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Wait For It
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores mollitia repellat ex distinctio? Iste totam repudiandae ipsum, autem ea nulla.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores mollitia repellat ex distinctio? Iste totam repudiandae ipsum, autem ea nulla.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What's The Meaning Of Life?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores mollitia repellat ex distinctio? Iste totam repudiandae ipsum, autem ea nulla.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default FAQ;
