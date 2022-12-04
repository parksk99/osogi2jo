import { useState, useEffect } from "react";

export default function RegisterNovel() {
  const [txtContent, setTxtContent] = useState("");
  const [txtPath, setTxtPath] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log(event);
      const file: any = event.target.files[0];
      if (file) {
        setTxtPath(file.path);
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setTxtContent(`${event.target.result}`);
        }
      };
      reader.readAsText(file);
    }
  };
  return <>{/* <input type="file" onChange={(e) => onChange(e)}></input> */}</>;
}
