// import date from "date-fns";

function NewDate() {
  const date = new Date();
  return (
    <div className="newdate">
      <p>
        This is the current time:{date.toLocaleDateString()} -{""}
        {date.toLocaleTimeString()}
      </p>
    </div>
  );
}
export default NewDate;
