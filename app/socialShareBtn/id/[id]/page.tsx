import "../../../styles/socialSharebtn.css";

export default async function page({
  params,
}: {
  params: Promise<{ id: string; title: string }>;
}) {
  const { id, title } = await params;

  console.log("ID:_____________", id);
  return (
    <div className="body-container">
      <h1>{title}</h1>
      <p>{id}</p>
    </div>
  );
}
