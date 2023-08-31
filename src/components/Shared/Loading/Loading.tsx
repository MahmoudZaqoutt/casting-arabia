import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import { IPropsbuttonContent } from "@/interfaces/props/IPropsbuttonContent";

export default function Loading(props: IPropsbuttonContent) {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton
        className=" h-7 !rounded-md !text-lg !text-white   capitalize  !duration-200"
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        {props.buttonContent}
      </LoadingButton>
    </Stack>
  );
}
