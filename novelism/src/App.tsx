import React from "react";
import IndexPage from "./pages/IndexPage";

function App() {
  // const viewRef = useRef<any>(null);

  // const buttonHandler = () => {
  //   if (viewRef) {
  //     getHtml(viewRef.current.getURL());
  //     // viewRef.current.downloadURL(viewRef.current.getURL());
  //   }
  // };

  // const getHtml = async (url: string) => {
  //   if (url) {
  //     const response = await fetch(url);
  //     const template = await response.text();
  //     console.log(template);
  //   }
  // };

  return (
    <div className="App">
      {/* <webview
        ng-style="style"
        id="content"
        src="https://novel.naver.com/webnovel/weekday"
        useragent="Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
        ref={viewRef}
      ></webview>
      <button onClick={() => buttonHandler()}>클릭</button> */}
      <IndexPage />
    </div>
  );
}

export default App;
