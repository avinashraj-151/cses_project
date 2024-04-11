import { useState } from "react";
import { Dialog, Box, DialogTitle, Divider } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CloseIcon from "@mui/icons-material/Close";
import { formats, modules } from "../../Data/Data.js";
function Texteditor({ openDialog, closeDialog }) {
  const [editorHtml, setEditorHtml] = useState("");
  const handelSave = () => {
    console.log(editorHtml);
    closeDialog();
  };
  const handleChange = (html) => {
    setEditorHtml(html);
  };
  return (
    <Dialog
      open={openDialog}
      fullWidth={true}
      aria-labelledby="customized-dialog-title"
      maxWidth={"md"}
    >
      <Box className="flex flex-row justify-between bg-[#111111]">
        <DialogTitle className="text-white text-2xl font-medium">
          Take Note
        </DialogTitle>
        <button className="p-4">
          <CloseIcon
            fontSize="large"
            className="text-white"
            onClick={closeDialog}
          />
        </button>
      </Box>
      {/* <Divider></Divider> */}
      <Box className="overflow-y-clip scrollbar-thin p-2">
        <ReactQuill
          theme="snow"
          modules={modules}
          value={editorHtml}
          placeholder="write your content ...."
          onChange={handleChange}
          className="h-80"
          formats={formats}
        />
      </Box>
      <Box className=" flex justify-end items-center p-5">
        <button className="bg-[#111111] justify-items-end text-white p-2 rounded-lg">
          <h4 className="text-white text-pretty" onClick={handelSave}>
            Save
          </h4>
        </button>
      </Box>
    </Dialog>
  );
}

export default Texteditor;
