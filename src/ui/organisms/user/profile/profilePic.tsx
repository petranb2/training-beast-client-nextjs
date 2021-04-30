import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { useSnackbar } from "notistack";
import { FileRejection } from "react-dropzone";
import { AuthContext } from "../../../templates/user/context/authContext";
import { LayoutContext } from "../../../templates/layout/context/layoutContext";
import URL from "../../../utils/consts/urls";
import UploadButton from "../../upload/uploadButton";
import { uploadProfileImageCase } from "../../../../core/user/case";


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  profileGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
function ProfilePic() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const authContext = useContext(AuthContext);
  const layoutContext = useContext(LayoutContext);

  const uploadPic = async (acceptedFiles: Blob[], rejectedFiles: FileRejection[]) => {
    if (rejectedFiles.length > 0) {
      enqueueSnackbar('Something went wrong', { variant: 'warning' });
    }
    if (acceptedFiles.length === 0) {
      return;
    }

    // Do something with the files
    layoutContext.setLinearProgress(true);

    let file = acceptedFiles[0];

    const formData = new FormData();
    formData.append("profilePic", file);

    const headers = {
      "content-type": "multipart/form-data",
    };

    try {
      let profileUrl = await uploadProfileImageCase.execute(formData, headers);
      authContext.updateState({
        ...authContext,
        profilePic: profileUrl.profileImage,
      });
      enqueueSnackbar('Profile image updated');
    } catch (error) {
      enqueueSnackbar('Something went wrong', { variant: 'warning' });
    } finally {
      layoutContext.setLinearProgress(false);
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.profileGrid}>
        {" "}
        <Avatar
          alt={authContext?.displayName || ''}
          src={`${URL.BUCKET}/${authContext.profilePic}`}
          className={classes.large}
        />
        <UploadButton uploadCallback={uploadPic} maxFiles={1} maxSize={2 * 1000 * 1000} title={'upload'} acceptTypes={'image/jpeg, image/png'} />
      </Grid>
    </Grid >
  );
}
export default ProfilePic;
