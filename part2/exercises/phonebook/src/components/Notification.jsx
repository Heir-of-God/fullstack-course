function Notification({ message }) {
  if (!message.text) {
    return null;
  }

  return (
    <div
      className={
        message.type === "warn" ? "notification-warn" : "notification-info"
      }
    >
      <p
        style={{
          fontSize: 25,
          margin: 0,
          marginBottom: -15,
        }}
      >
        {message.type === "warn" ? "System Warning:" : "System Info:"}
      </p>
      <br />
      {message.text}
    </div>
  );
}

export default Notification;
