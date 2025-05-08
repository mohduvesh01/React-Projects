let CurrentTime = () => {
  let time = new Date();

  return (
    <div className="time">
      <p class="font-monospace">
        The Current Time and Date : {time.toLocaleTimeString()} -{" "}
        {time.toLocaleDateString()}
      </p>
    </div>
  );
};
export default CurrentTime;
