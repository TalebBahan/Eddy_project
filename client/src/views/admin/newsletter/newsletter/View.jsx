
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import HandlebarsTemplate from "components/HandlebarsTemplate";
export default function View({open,handleOpen,newsletter}) {
   
  console.log('====================================');
  console.log(newsletter);
  console.log('====================================');
    return (
      <Dialog open={open} onClose={handleOpen} size="xxl">
        <DialogHeader>
          The NewsLetter Preview
        </DialogHeader>
          <DialogBody>
            <HandlebarsTemplate newsletter={newsletter} />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>CLose</span>
            </Button>
          </DialogFooter>
      </Dialog>
    );
  }
