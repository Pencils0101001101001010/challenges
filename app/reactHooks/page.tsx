import "../styles/reactHooks.css";
import Link from "next/link";

function page() {
  return (
    <div className="containerMain">
      <div className="itemsList">
        <Link href="/example-use-context">UseContext()</Link>

        <Link href="/example-use-ref">UseRef()</Link>
      </div>
    </div>
  );
}

export default page;
