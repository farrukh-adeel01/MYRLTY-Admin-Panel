// in src/comments.js
import * as React from "react";
import { Box, Card, CardHeader, CardContent, Typography } from "@mui/material";
import {
  DateField,
  EditButton,
  NumberField,
  TextField,
  BooleanField,
  useTranslate,
  useListContext,
  RaRecord,
  
  RecordContextProvider,
  DeleteButton,
  useNotify,
  ReferenceField,
  useRedirect,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { fontWeight } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  descriptionText: {
    overflowWrap: "anywhere",
  },
}));

const SettingMobileGrid = (props) => {
  const classes = useStyles();
  const redirect = useRedirect();

  const { data } = props;

  return (
    <Box margin="0.5em">
      {Object.keys(data)
        .sort((a, b) => data[b].id - data[a].id)
        .map(function (record, index) {
          return (
            <RecordContextProvider key={data[record].id} value={data[record]}>
              <Card sx={{ margin: "0.5rem 0" }}>
                <CardHeader
                  title={
                    <>
                      Settings:
                      <TextField
                        source="id"
                        variant="h6"
                        style={{ fontWeight: 800 }}
                      />
                    </>
                  }
                  titleTypographyProps={{ variant: "h6", fontWeight: 800 }}
                  action={
                    <EditButton
                      onClick={() =>
                        redirect("edit", "setting", data[record].id)
                      }
                    />
                  }
                />
                <CardContent sx={{ pt: 0 }}>
                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> Terms and Condition:&nbsp;</span>
                      <TextField source="term_and_condition" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> Privacy Policy:&nbsp;</span>
                    <TextField source="privacy_policy" />
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> About Us:&nbsp;</span>
                    <TextField source="about_us" />
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    <span style={{ fontWeight: 800 }}> Published Date:&nbsp;</span>
                    <DateField source="created_at" />
                  </Typography>

                </CardContent>
              </Card>
            </RecordContextProvider>
          );
        })}
    </Box>
  );
};

SettingMobileGrid.defaultProps = {
  data: {},
  ids: [],
};

export default SettingMobileGrid;
