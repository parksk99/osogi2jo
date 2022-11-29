import { useRef, useEffect } from "react";
import { Container } from "../styles/TocSoda/Layout";

export default function TocSoda() {
  const viewRef = useRef<any>(null);

  const buttonHandler = () => {
    if (viewRef) {
      getHtml(viewRef.current.getURL());
      //   viewRef.current.downloadURL(viewRef.current.getURL());
    }
  };

  const getHtml = async (url: string) => {
    if (url) {
      const response = await fetch(url);
      const template = await response.text();
      console.log(template);
    }
  };

  const webviewStyle: React.CSSProperties = {
    width: "100%",
    height: "480px",
  };

  return (
    <Container>
      <webview
        ng-style="style"
        id="content"
        src="https://www.tocsoda.co.kr/webnovelMainView"
        useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
        // autosize={true}
        ref={viewRef}
      ></webview>
    </Container>
  );
}
