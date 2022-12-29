import Link from "next/link";
import handbook from '../public/document.pdf'

function Handbook() {
  return (
    <div>
      <a href={"/document.pdf"}>点击下载手册</a>
    </div>
    );
}

export default Handbook;