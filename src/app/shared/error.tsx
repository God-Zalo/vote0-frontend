export default function ErrorPage( props: any ) {
    console.log(props.errorText)
  return (
    <div className="flex flex-col items-center justify-center text-center bg-yellow-100 rounded-xl ">
      <h1 className="text-4xl font-bold text-yellow-800 mb-4 px-4 py-4">{props.errorText}</h1>
    </div>
  );
}