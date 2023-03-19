export default function Root(props: any) {
  return (
    <div>
      <div className="flex items-center justify-center lg:block h-screen lg:p-28 bg-gray-700">
        <div className="flex justify-center lg:static top-64">
          {props.children}
          </div>
      </div>
    </div>
  );
}
