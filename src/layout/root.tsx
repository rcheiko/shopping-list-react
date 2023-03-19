export default function Root(props: any) {
  return (
    <div>
      <div className="p-28 bg-gray-700 h-screen">{props.children}</div>
    </div>
  );
}
